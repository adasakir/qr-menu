// ===== Kasiyer Desktop Config =====
// API adresi artik ayarlanabilir:
// 1) URL ?api=http://192.168.1.50:3000
// 2) localStorage kahvebahane_api_base
// 3) kahvebahane-server.json (preload uzerinden)
// 4) varsayilan Vercel prod

(function () {
  const DEFAULT_API = 'https://kahvebahane-eight.vercel.app';

  function resolveApiBase() {
    try {
      const qs = new URLSearchParams(window.location.search || '');
      const q = (qs.get('api') || '').trim().replace(/\/$/, '');
      if (q && /^https?:\/\/.+/.test(q)) {
        try { localStorage.setItem('kahvebahane_api_base', q); } catch (e) {}
        return q;
      }
    } catch (e) {}
    try {
      const ls = (localStorage.getItem('kahvebahane_api_base') || '').trim().replace(/\/$/, '');
      if (ls && /^https?:\/\/.+/.test(ls)) return ls;
    } catch (e) {}
    try {
      if (window.electronAPI && typeof window.electronAPI.getApiBase === 'function') {
        const f = (window.electronAPI.getApiBase() || '').trim().replace(/\/$/, '');
        if (f && /^https?:\/\/.+/.test(f)) return f;
      }
    } catch (e) {}
    return DEFAULT_API;
  }

  window.API_BASE = resolveApiBase();

  window.getApiBase = () => window.API_BASE;
  window.setApiBase = (url) => {
    const clean = String(url || '').trim().replace(/\/$/, '');
    if (!/^https?:\/\/.+/.test(clean)) throw new Error('Geçersiz adres');
    window.API_BASE = clean;
    try { localStorage.setItem('kahvebahane_api_base', clean); } catch (e) {}
    try { if (window.electronAPI && window.electronAPI.setApiBase) window.electronAPI.setApiBase(clean); } catch (e) {}
    return clean;
  };
  // Kasiyer ekrandan sunucu degistirme: konsola KahvebahaneServerAyarla('http://192.168.1.50:3000') yazman yeterli
  window.KahvebahaneServerAyarla = (url) => {
    if (!url) return window.API_BASE + ' (kullanmak icin: KahvebahaneServerAyarla("http://..."))';
    const c = window.setApiBase(url);
    window.location.reload();
    return c;
  };

  // /api/... isteklerini secili API'ye yonlendir (file:// altinda sart)
  // string + Request + URL hepsini kapsar
  function currentToken() {
    try {
      if (typeof state !== 'undefined' && state.token) return state.token;
      return localStorage.getItem('kahvebahane_token') || null;
    } catch (e) { return null; }
  }
  function withAuthHeaders(url, init) {
    // Giris haric tum /api cagrilarina jetonu ekle (istatistik/rapor/stok ekranlari dahil)
    try {
      if (typeof url === 'string' && url.includes('/api/') && !url.includes('/api/login')) {
        const tok = currentToken();
        if (tok) {
          init = init || {};
          const h = init.headers;
          if (h instanceof Headers) {
            if (!h.has('Authorization')) h.set('Authorization', 'Bearer ' + tok);
          } else if (Array.isArray(h)) {
            if (!h.some(p => String(p[0]).toLowerCase() === 'authorization')) h.push(['Authorization', 'Bearer ' + tok]);
          } else {
            init.headers = Object.assign({}, h || {});
            if (!init.headers.Authorization && !init.headers.authorization) init.headers.Authorization = 'Bearer ' + tok;
          }
        }
      }
    } catch (e) {}
    return init;
  }

  const origFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    try {
      const base = (window.API_BASE || DEFAULT_API).replace(/\/$/, '');
      if (typeof input === 'string' && input.startsWith('/api/')) {
        return origFetch(base + input, withAuthHeaders(base + input, init));
      }
      if (input instanceof Request) {
        const u = input.url || '';
        if (u.startsWith('/api/') || (u.startsWith('file://') && u.includes('/api/'))) {
          const path = u.substring(u.indexOf('/api/'));
          return origFetch(new Request(base + path, input), withAuthHeaders(base + path, init));
        }
      }
    } catch (e) {}
    return origFetch(input, init);
  };

  console.log('[Kahvebahane Kasiyer] API_BASE =', window.API_BASE);

  // Acilista baglanti kontrolu: sunucuya ulasilamazsa net hata goster
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      origFetch(window.API_BASE + '/api/health').then(r => r.json()).then(h => {
        console.log('[Kahvebahane] sunucu saglik:', h);
      }).catch(() => {
        try {
          if (typeof toast === 'function') toast('Sunucuya ulasilamiyor: ' + window.API_BASE + ' - kahvebahane-server.json adresini kontrol et', 'error');
        } catch (e) {}
      });
    }, 800);
  });
})();

// Açılışta kasiyer moduna kilitle: müşteri/admin butonlarını gizle
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    try {
      document.querySelectorAll('[data-mode-target="customer"], [data-mode-target="admin"]')
        .forEach(el => {
          const li = el.closest('li');
          if (li) li.style.display = 'none';
          else el.style.display = 'none';
        });

      // Zaten giriş varsa direkt kasiyer, yoksa kasiyer girişini aç
      if (typeof state !== 'undefined' && state.user && state.user.role !== 'admin') {
        if (typeof switchMode === 'function') switchMode('cashier');
      } else if (typeof state !== 'undefined' && !state.user) {
        if (typeof requestAuth === 'function') requestAuth('cashier');
        if (typeof switchMode === 'function') switchMode('cashier');
      }

      // Çıkışta müşteri ekranına düşme, kilit ekranına dön
      if (!window._confirmLogoutWrapped && typeof confirmLogout === 'function') {
        window._confirmLogoutWrapped = true;
        const origConfirmLogout = confirmLogout;
        window.confirmLogout = function () {
          origConfirmLogout.apply(this, arguments);
          setTimeout(() => {
            try {
              if (typeof switchMode === 'function') switchMode('cashier');
              if (typeof requestAuth === 'function') requestAuth('cashier');
            } catch (e) {}
          }, 60);
        };
        try { confirmLogout = window.confirmLogout; } catch (e) {}
      }

      // Şifre penceresi: giriş yapmadan kapatılamasın (X + dışarı tıklama engelli)
      try {
        const m = document.getElementById('authModal');
        if (m) {
          const x = m.querySelector('.modal-header .icon-btn');
          if (x) x.style.display = 'none';
          if (!m.dataset.lockHook) {
            m.dataset.lockHook = '1';
            m.addEventListener('click', (e) => {
              let authed = false;
              try { authed = !!(typeof state !== 'undefined' && state.user && state.user.role !== 'admin'); } catch (err) {}
              if (authed) return;
              const t = e.target;
              if ((t && t.id === 'authModal') || (t && t.closest && t.closest('.icon-btn'))) {
                e.stopPropagation();
                e.preventDefault();
              }
            }, true);
          }
        }
      } catch (e) {}
    } catch (e) {}
  }, 400);
});

// Kullanim kilavuzu dugmesi (kilitli modda da gorunur)
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    try {
      const list = document.querySelector('.nav-list');
      if (!list || list.dataset.helpDone === '1') return;
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'nav-item';
      btn.innerHTML = '<span>\u{2753}</span> <span>Kullanım Kılavuzu</span>';
      btn.addEventListener('click', () => {
        try { if (typeof closeNav === 'function') closeNav(); } catch (e) {}
        if (typeof openHelp === 'function' && typeof HELP_CASHIER !== 'undefined') openHelp(HELP_CASHIER, 'Kasiyer Kullanım Kılavuzu');
      });
      li.appendChild(btn);
      list.appendChild(li);
      list.dataset.helpDone = '1';
    } catch (e) {}
  }, 600);
});
