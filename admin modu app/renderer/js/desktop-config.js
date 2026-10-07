// ===== Admin Desktop Config =====
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
  window.KahvebahaneServerAyarla = (url) => {
    if (!url) return window.API_BASE + ' (kullanmak icin: KahvebahaneServerAyarla("http://..."))';
    const c = window.setApiBase(url);
    window.location.reload();
    return c;
  };

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

  console.log('[Kahvebahane Admin] API_BASE =', window.API_BASE);

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

// Açılışta admin moduna kilitle: müşteri/kasiyer butonlarını gizle
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    try {
      document.querySelectorAll('[data-mode-target="customer"], [data-mode-target="cashier"]')
        .forEach(el => {
          const li = el.closest('li');
          if (li) li.style.display = 'none';
          else el.style.display = 'none';
        });

      if (typeof state !== 'undefined' && state.user && state.user.role === 'admin') {
        if (typeof switchMode === 'function') switchMode('admin');
      } else if (typeof state !== 'undefined' && !state.user) {
        if (typeof requestAuth === 'function') requestAuth('admin');
        if (typeof switchMode === 'function') switchMode('admin');
      }
    } catch (e) {}
  }, 400);
});
