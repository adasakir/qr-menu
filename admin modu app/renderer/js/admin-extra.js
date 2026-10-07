// ===== Admin bölümleri (hamburger menü) =====
// İçerikler daha sonra doldurulacak — iskelet hazır.

window.__adminSection = window.__adminSection || 'menu';

const ADMIN_SECTIONS = [
  { id: 'home', icon: '🏠', tr: 'Ana Menü', en: 'Home' },
  { id: 'stats', icon: '📊', tr: 'İstatistikler', en: 'Statistics' },
  { id: 'costing', icon: '🧮', tr: 'Maliyet Hesaplama', en: 'Cost Calculator' },
  { id: 'product', icon: '➕', tr: 'Ürün Ekleme', en: 'Add Product' },
  { id: 'oldreceipts', icon: '🧾', tr: 'Eski Fişler', en: 'Old Receipts' },
  { id: 'reports', icon: '📥', tr: 'Raporlar', en: 'Reports' },
  { id: 'expenses', icon: '💸', tr: 'Giderler', en: 'Expenses' },
  { id: 'stock', icon: '📦', tr: 'Stok', en: 'Stock' },
  { id: 'filters', icon: '🏷️', tr: 'Filtreler', en: 'Filters' },
  { id: 'qr', icon: '🔳', tr: 'Masa QR', en: 'Table QR' },
  { id: 'help', icon: '\u2753', tr: 'Kullan\u0131m K\u0131lavuzu', en: 'User Guide' },
];

function adminSectionLang() {
  try {
    if (typeof state !== 'undefined' && state.lang === 'en') return 'en';
  } catch (e) {}
  return 'tr';
}

// Giriş yapılmadan bölümler açılmasın
function adminAuthed() {
  try {
    return !!(typeof state !== 'undefined' && state.user && state.user.role === 'admin');
  } catch (e) { return false; }
}

// Çıkışta müşteri ekranına düşme, kilit ekranına dön
function lockAdminApp() {
  try {
    if (typeof switchMode === 'function') switchMode('admin');
    if (typeof requestAuth === 'function') requestAuth('admin');
  } catch (e) {}
}

function ensureAdminNav() {
  const list = document.querySelector('.nav-list');
  if (!list) return;
  // İşe yaramayan orijinal Admin Modu butonunu gizle (Ana Menü var)
  document.querySelectorAll('[data-mode-target="admin"]').forEach(el => {
    const li = el.closest('li');
    if (li) li.style.display = 'none';
    else el.style.display = 'none';
  });
  if (list.dataset.adminNavDone === '1') return;
  ADMIN_SECTIONS.forEach(s => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'nav-item';
    btn.dataset.adminSection = s.id;
    const label = document.createElement('span');
    label.textContent = adminSectionLang() === 'en' ? s.en : s.tr;
    const ico = document.createElement('span');
    ico.textContent = s.icon;
    btn.appendChild(ico);
    btn.appendChild(document.createTextNode(' '));
    btn.appendChild(label);
    btn.addEventListener('click', () => adminShowSection(s.id));
    li.appendChild(btn);
    list.appendChild(li);
  });
  const sep = document.createElement('li');
  sep.innerHTML = '<hr style="border:0;border-top:1px solid var(--border);margin:8px 0">';
  list.appendChild(sep);
  const wli = document.createElement('li');
  const wbtn = document.createElement('button');
  wbtn.className = 'nav-item';
  wbtn.dataset.adminSection = 'wipe';
  wbtn.style.color = 'var(--danger)';
  const wlabel = document.createElement('span');
  const wico = document.createElement('span');
  wico.textContent = '\u{1F9F9}';
  wbtn.appendChild(wico);
  wbtn.appendChild(document.createTextNode(' '));
  wbtn.appendChild(wlabel);
  wbtn.addEventListener('click', () => adminShowSection('wipe'));
  wli.appendChild(wbtn);
  list.appendChild(wli);
  list.dataset.adminNavDone = '1';
  refreshWipeLabel();
}

function refreshWipeLabel() {
  document.querySelectorAll('.nav-item[data-admin-section="wipe"]').forEach(btn => {
    if (btn.lastElementChild) {
      btn.lastElementChild.textContent = adminSectionLang() === 'en' ? 'Wipe All Data' : 'Tüm Verileri Temizle';
    }
  });
}

function refreshAdminNavLabels() {
  try { refreshWipeLabel(); } catch (e) {}
  document.querySelectorAll('.nav-item[data-admin-section]').forEach(btn => {
    const s = ADMIN_SECTIONS.find(x => x.id === btn.dataset.adminSection);
    if (s && btn.lastElementChild) {
      btn.lastElementChild.textContent = adminSectionLang() === 'en' ? s.en : s.tr;
    }
  });
}

function adminShowSection(name) {
  if (!adminAuthed()) {
    try { if (typeof requestAuth === 'function') requestAuth('admin'); } catch (e) {}
    return;
  }
  window.__adminSection = name;
  document.querySelectorAll('.nav-item[data-admin-section]').forEach(b =>
    b.classList.toggle('active', b.dataset.adminSection === name));
  document.querySelectorAll('.nav-item[data-mode-target]').forEach(b =>
    b.classList.toggle('active', (name === 'menu' || name === 'home') && b.dataset.modeTarget === 'admin'));
  try { if (typeof closeNav === 'function') closeNav(); } catch (e) {}
  if (name === 'menu' || name === 'home') {
    renderAdminHome();
    return;
  }
  if (name === 'product') {
    // Ürün/istasyon/kategori yönetiminin tamamı burada
    if (window._origRenderAdmin) window._origRenderAdmin();
    else if (typeof renderAdmin === 'function') renderAdmin();
    return;
  }
  if (name === 'oldreceipts') {
    renderOldReceipts();
    return;
  }
  if (name === 'reports') {
    renderReports();
    return;
  }
  if (name === 'expenses') {
    renderExpenses();
    return;
  }
  if (name === 'stock') {
    renderStock();
    return;
  }
  if (name === 'filters') {
    renderFiltersAdmin();
    return;
  }
  if (name === 'qr') {
    renderQR();
    return;
  }
  if (name === 'wipe') {
    renderWipe();
    return;
  }
  if (name === 'help') {
    if (typeof openHelp === 'function' && typeof HELP_ADMIN !== 'undefined') openHelp(HELP_ADMIN, 'Admin Kullan\u0131m K\u0131lavuzu');
    return;
  }
  const el = document.getElementById('view-admin');
  if (!el) return;
  if (name === 'stats') {
    renderStats();
  } else if (name === 'costing') {
    renderCosting();
  }
}

// Admin ana ekranı: sade karşılama + bölüm kısayolları (yönetim içeriği Ürün Ekleme'de)
function renderAdminHome() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">⚙️ ${en ? 'Admin Panel' : 'Admin Paneli'}</h1>
      <p class="page-sub">${en ? 'Choose a section from the menu.' : 'Menüden bir bölüm seç.'}</p>
      <div class="grid-2col">
        <div class="card">
          <h3>📊 ${en ? 'Statistics' : 'İstatistikler'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('stats')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>🧮 ${en ? 'Cost Calculator' : 'Maliyet Hesaplama'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('costing')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>➕ ${en ? 'Add Product' : 'Ürün Ekleme'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('product')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>🧾 ${en ? 'Old Receipts' : 'Eski Fişler'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('oldreceipts')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>📥 ${en ? 'Reports' : 'Raporlar'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('reports')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>💸 ${en ? 'Expenses & Profit' : 'Giderler ve Net Kâr'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('expenses')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>📦 ${en ? 'Stock' : 'Stok'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('stock')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>🏷️ ${en ? 'Filters' : 'Filtreler'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('filters')">${en ? 'Open' : 'Aç'} →</button>
        </div>
        <div class="card">
          <h3>🔳 ${en ? 'Table QR' : 'Masa QR'}</h3>
          <button class="btn btn-secondary btn-block" onclick="adminShowSection('qr')">${en ? 'Open' : 'Aç'} →</button>
        </div>
      </div>
    </div>`;
}

// ===== İstatistikler =====
function statsDayKey(iso) {
  try {
    if (!iso) return '?';
    return new Date(iso).toLocaleDateString('en-CA', { timeZone: 'Europe/Istanbul' });
  } catch (e) { return String(iso).slice(0, 10); }
}
function statsDayLabel(key) {
  try {
    return new Date(key + 'T12:00:00').toLocaleDateString(
      adminSectionLang() === 'en' ? 'en-US' : 'tr-TR',
      { day: 'numeric', month: 'long', weekday: 'short' });
  } catch (e) { return key; }
}
function statsHour(iso) {
  try {
    return Number(new Date(iso).toLocaleString('en-US', { timeZone: 'Europe/Istanbul', hour: 'numeric', hour12: false }));
  } catch (e) { return -1; }
}
function statBar(pct) {
  return '';
}
function statCard(title, value, sub, onclick) {
  return `<div class="card" style="margin:0${onclick ? ';cursor:pointer' : ''}"${onclick ? ` onclick="${onclick}" title="Detay"` : ''}><div style="font-size:12px;opacity:.75">${title}</div><div style="font-size:24px;font-weight:800;margin:4px 0">${value}</div>${sub ? `<div style="font-size:12px;opacity:.75">${sub}</div>` : ''}</div>`;
}
function statsModel() { return window._statsModel || null; }
// Sekme butonlarının vurgusunu tazele (hangisi aktifse boyalı görünsün)
function paintTabs(sel, active) {
  try {
    document.querySelectorAll(sel).forEach(b => {
      const on = b.getAttribute('data-tabval') === active;
      b.classList.toggle('btn-primary', on);
      b.classList.toggle('btn-secondary', !on);
    });
  } catch (e) {}
}
function showStatsDetail(title, bodyHtml) {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  try { window.scrollTo(0, 0); } catch (e) {}
  el.innerHTML = `<div class="dashboard">
    <div class="toolbar"><button class="btn btn-secondary" onclick="renderStats()">← ${en ? 'Back' : 'Geri'}</button></div>
    <h1 class="page-title">${title}</h1>
    ${bodyHtml}
  </div>`;
}

function renderStats() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">📊 ${en ? 'Statistics' : 'İstatistikler'}</h1>
      <p class="page-sub">${en ? 'Paid receipts analysis.' : 'Ödenmiş fişlerin analizi.'}</p>
      <div class="toolbar"><button class="btn btn-secondary" onclick="renderStats()">↻ ${en ? 'Refresh' : 'Yenile'}</button></div>
      <div id="statsContent"><div class="empty-state">${en ? 'Loading...' : 'Yükleniyor...'}</div></div>
    </div>`;
  try {
    if (typeof fetchOrders === 'function') fetchOrders(() => fetchSalesHistory(() => renderStatsFromArchive()));
    else renderStatsFromArchive();
  } catch (e) { renderStatsFromArchive(); }
}

// Özet: arşivdeki günlerin fiş detayları + bugünün canlı fişleri birleştirilir
function renderStatsFromArchive() {
  const days = window._salesHistory || [];
  const keys = days.map(d => d.date).sort().reverse().slice(0, 30);
  if (keys.length === 0) { renderStatsBody(); return; }
  Promise.all(keys.map(k =>
    fetch('/api/day/' + encodeURIComponent(k)).then(r => r.json())
      .then(j => (j && j.success && Array.isArray(j.receipts)) ? j.receipts : [])
      .catch(() => [])
  )).then(arr => {
    const seen = {};
    const merged = [];
    arr.forEach(list => list.forEach(r => {
      const key = r.id + ':' + (r.paidAt || '');
      if (!seen[key]) { seen[key] = true; merged.push(r); }
    }));
    try {
      ((typeof state !== 'undefined' && state.receipts) || []).forEach(r => {
        const key = r.id + ':' + (r.paidAt || '');
        if (!seen[key]) { seen[key] = true; merged.push(r); }
      });
    } catch (e) {}
    renderStatsBody(merged);
  }).catch(() => renderStatsBody());
}

function renderStatsBody(passedRecs) {
  const box = document.getElementById('statsContent');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const live = (typeof state !== 'undefined' && state.receipts) || [];
  const recs = ((passedRecs !== undefined ? passedRecs : live) || []).filter(r => r && Array.isArray(r.items) && r.items.length > 0);
  if (recs.length === 0) {
    box.innerHTML = `<div class="empty-state">${T('Henüz ödenmiş fiş yok', 'No paid receipts yet')}</div>`;
    return;
  }

  // --- Genel toplamlar ---
  const revenue = recs.reduce((s, r) => s + (Number(r.total) || 0), 0);
  const itemsSold = recs.reduce((s, r) => s + r.items.reduce((a, i) => a + (Number(i.qty) || 1), 0), 0);
  const cashRecs = recs.filter(r => r.method !== 'card');
  const cardRecs = recs.filter(r => r.method === 'card');
  const cashTotal = cashRecs.reduce((s, r) => s + (Number(r.total) || 0), 0);
  const cardTotal = cardRecs.reduce((s, r) => s + (Number(r.total) || 0), 0);
  const avgTicket = revenue / recs.length;

  // --- Günlük ---
  const days = {};
  recs.forEach(r => {
    const k = statsDayKey(r.paidAt);
    if (!days[k]) days[k] = { n: 0, total: 0 };
    days[k].n++;
    days[k].total += Number(r.total) || 0;
  });
  const dayKeys = Object.keys(days).sort().reverse();
  const maxDay = Math.max(...dayKeys.map(k => days[k].total), 1);

  // --- Ürünler ---
  const prods = {};
  recs.forEach(r => r.items.forEach(i => {
    const key = (i.productId != null ? 'id:' + i.productId : 'nm:' + i.name);
    if (!prods[key]) prods[key] = { key, name: i.name, cat: i.cat, qty: 0, revenue: 0 };
    prods[key].qty += Number(i.qty) || 1;
    prods[key].revenue += (Number(i.price) || 0) * (Number(i.qty) || 1);
  }));
  const prodList = Object.values(prods).sort((a, b) => b.qty - a.qty);
  const topProd = prodList[0];
  const maxQty = Math.max(...prodList.map(p => p.qty), 1);

  // --- Kategori bazında ---
  const catName = (cid) => {
    try {
      if (typeof getCategory === 'function') {
        const c = getCategory(cid);
        if (c && c.name) return c.name[((typeof state !== 'undefined' && state.lang) || 'tr')] || c.name.tr;
      }
    } catch (e) {}
    return cid || '?';
  };
  const byCat = {};
  prodList.forEach(p => {
    const c = p.cat || 'other';
    (byCat[c] = byCat[c] || []).push(p);
  });

  // --- Saatler ---
  const hours = {};
  recs.forEach(r => {
    const h = statsHour(r.paidAt);
    if (h < 0) return;
    if (!hours[h]) hours[h] = { n: 0, total: 0 };
    hours[h].n++;
    hours[h].total += Number(r.total) || 0;
  });
  const hourKeys = Object.keys(hours).map(Number).sort((a, b) => a - b);
  const maxHour = Math.max(...hourKeys.map(h => hours[h].total), 1);

  // --- Masalar ---
  const tables = {};
  recs.forEach(r => {
    const tb = String(r.table || '?');
    if (!tables[tb]) tables[tb] = { n: 0, total: 0 };
    tables[tb].n++;
    tables[tb].total += Number(r.total) || 0;
  });
  const tableKeys = Object.keys(tables).sort((a, b) => tables[b].total - tables[a].total);

  // --- Bekleyen (ödenmemiş) ---
  const activeOrders = ((typeof state !== 'undefined' && state.orders) || []).filter(o => !o.paid && o.status !== 'paid');
  const pendingTotal = activeOrders.reduce((s, o) => s + (o.items || []).reduce((a, i) => a + (Number(i.price) || 0) * (Number(i.qty) || 1), 0), 0);

  window._statsModel = { recs, revenue, itemsSold, cashRecs, cardRecs, cashTotal, cardTotal, avgTicket, days, dayKeys, maxDay, prodList, topProd, maxQty, byCat, hours, hourKeys, maxHour, tables, tableKeys, activeOrders, pendingTotal };

  let html = `<div class="grid-2col" style="margin-bottom:20px">
    ${statCard('💰 ' + T('Toplam Ciro', 'Total Revenue'), fmtPrice(revenue), recs.length + ' ' + T('fiş', 'receipts'), "renderSalesDetail('day')")}
    ${statCard('🧾 ' + T('Ortalama Fiş', 'Avg Receipt'), fmtPrice(Math.round(avgTicket)), itemsSold + ' ' + T('ürün satıldı', 'items sold'), "renderAvgDetail('day')")}
    ${statCard('💵 ' + T('Nakit', 'Cash'), fmtPrice(cashTotal), cashRecs.length + ' ' + T('fiş', 'receipts'))}
    ${statCard('💳 ' + T('Kart', 'Card'), fmtPrice(cardTotal), cardRecs.length + ' ' + T('fiş', 'receipts'))}
    ${statCard('⏳ ' + T('Bekleyen Hesap', 'Pending'), fmtPrice(pendingTotal), activeOrders.length + ' ' + T('aktif sipariş', 'active orders'))}
    ${statCard('🏆 ' + T('En Çok Satan', 'Best Seller'), escapeHtml(topProd.name), topProd.qty + '× • ' + fmtPrice(topProd.revenue))}
  </div>`;

  // Satılan ürünler: sıralanabilir tam liste
  html += `<div class="card" style="margin-bottom:20px;cursor:pointer" onclick="renderAllProductsDetail()" title="Detay"><h3>🧾 ${T('Satılan Ürünler', 'Sold Products')} <span style="font-size:12px;opacity:.6">→</span></h3><div style="font-size:12px;opacity:.7">${T('Adet, brüt, kâr oranına göre sıralanabilen tam liste', 'Full list sortable by qty, gross, margin')}</div></div>`;

  // En çok satanlar top 10
  html += `<div class="card" style="margin-bottom:20px;cursor:pointer" onclick="renderProductStatsDetail('best','day')" title="Detay"><h3>🏆 ${T('En Çok Satan Ürünler', 'Best Selling Products')} <span style="font-size:12px;opacity:.6">→</span></h3>`;
  html += productTable(prodList.slice(0, 10), T);
  html += `</div>`;

  // En az satanlar bottom 10
  html += `<div class="card" style="margin-bottom:20px;cursor:pointer" onclick="renderProductStatsDetail('least','day')" title="Detay"><h3>📉 ${T('En Az Satan Ürünler', 'Least Selling Products')} <span style="font-size:12px;opacity:.6">→</span></h3>`;
  html += productTable(prodList.slice(-10).reverse(), T);
  html += `</div>`;

  // Günlük satışlar
  html += `<div class="card" style="margin-bottom:20px;cursor:pointer" onclick="renderSalesDetail('day')" title="Detay"><h3>📅 ${T('Günlük Satışlar', 'Daily Sales')} <span style="font-size:12px;opacity:.6">→</span></h3><ul class="order-rows">`;
  dayKeys.forEach(k => {
    html += `<li style="display:block"><div style="display:flex;justify-content:space-between"><span>${escapeHtml(statsDayLabel(k))} <span class="q">${days[k].n} ${T('fiş', 'rcpts')}</span></span><span>${fmtPrice(days[k].total)}</span></div>${statBar(days[k].total / maxDay * 100)}</li>`;
  });
  html += `</ul></div>`;

  // Kategori şampiyonları
  html += `<div class="card" style="margin-bottom:20px;cursor:pointer" onclick="renderCategoriesDetail()" title="Detay"><h3>🗂️ ${T('Kategorilerin En Çok Satanları', 'Top per Category')} <span style="font-size:12px;opacity:.6">→</span></h3><div class="grid-2col">`;
  Object.keys(byCat).sort().forEach(c => {
    html += `<div class="order-card"><div class="order-head"><span class="order-table">${escapeHtml(catName(c))}</span></div><ul class="order-rows">`;
    byCat[c].slice(0, 3).forEach((p, idx) => {
      const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉';
      html += `<li><span>${medal} ${escapeHtml(p.name)} <span class="q">${p.qty}×</span></span><span>${fmtPrice(p.revenue)}</span></li>`;
    });
    const shownNames = new Set(byCat[c].slice(0, 3).map(p => p.name));
    const catLeast = byCat[c].slice().reverse().filter(p => !shownNames.has(p.name)).slice(0, 2);
    if (catLeast.length > 0) {
      html += `<li><span style="opacity:.7">📉 ${T('En az satan', 'Least sold')}</span><span></span></li>`;
      catLeast.forEach(p => {
        html += `<li><span>📉 ${escapeHtml(p.name)} <span class="q">${p.qty}×</span></span><span>${fmtPrice(p.revenue)}</span></li>`;
      });
    }
    html += `</ul></div>`;
  });
  html += `</div></div>`;

  // Ödeme + saat + masa
  const payMax = Math.max(cashTotal, cardTotal, 1);
  html += `<div class="grid-2col">`;
  html += `<div class="card" style="cursor:pointer" onclick="renderPaymentsDetail()" title="Detay"><h3>💳 ${T('Ödeme Dağılımı', 'Payments')} <span style="font-size:12px;opacity:.6">→</span></h3><ul class="order-rows">
    <li style="display:block"><div style="display:flex;justify-content:space-between"><span>💵 ${T('Nakit', 'Cash')} (${cashRecs.length})</span><span>${fmtPrice(cashTotal)}</span></div>${statBar(cashTotal / payMax * 100)}</li>
    <li style="display:block"><div style="display:flex;justify-content:space-between"><span>💳 ${T('Kart', 'Card')} (${cardRecs.length})</span><span>${fmtPrice(cardTotal)}</span></div>${statBar(cardTotal / payMax * 100)}</li>
  </ul></div>`;
  html += `<div class="card" style="cursor:pointer" onclick="renderTablesDetail()" title="Detay"><h3>🪑 ${T('Masa Bazında Ciro', 'Revenue by Table')} <span style="font-size:12px;opacity:.6">→</span></h3><ul class="order-rows">`;
  tableKeys.slice(0, 12).forEach(tb => {
    html += `<li><span>${T('Masa', 'Table')} ${escapeHtml(tb)} <span class="q">${tables[tb].n} ${T('fiş', 'rcpts')}</span></span><span>${fmtPrice(tables[tb].total)}</span></li>`;
  });
  html += `</ul></div></div>`;

  if (hourKeys.length > 0) {
    html += `<div class="card" style="margin-top:20px;cursor:pointer" onclick="renderHoursDetail()" title="Detay"><h3>🕐 ${T('Saat Yoğunluğu', 'Hourly Traffic')} <span style="font-size:12px;opacity:.6">→</span></h3><ul class="order-rows">`;
    hourKeys.forEach(h => {
      html += `<li style="display:block"><div style="display:flex;justify-content:space-between"><span>${String(h).padStart(2, '0')}:00 <span class="q">${hours[h].n} ${T('fiş', 'rcpts')}</span></span><span>${fmtPrice(hours[h].total)}</span></div>${statBar(hours[h].total / maxHour * 100)}</li>`;
    });
    html += `</ul></div>`;
  }

  // Tüm fişler
  html += `<div class="card" style="margin-top:20px;cursor:pointer" onclick="renderReceiptsDetail()" title="Detay"><h3>🧾 ${T('Tüm Ödenmiş Fişler', 'All Paid Receipts')} (${recs.length}) <span style="font-size:12px;opacity:.6">→</span></h3><div class="grid-2col">`;
  recs.slice(0, 60).forEach(r => {
    const when = r.paidAt ? new Date(r.paidAt).toLocaleString(adminSectionLang() === 'en' ? 'en-US' : 'tr-TR') : '';
    html += `<div class="order-card"><div class="order-head"><span class="order-table">${T('Masa', 'Table')} ${escapeHtml(String(r.table || '?'))} • #${r.orderId} • 👤 ${escapeHtml(r.person || '?')}</span></div><div class="order-time">🕐 ${escapeHtml(when)} • ${r.method === 'card' ? '💳' : '💵'}</div><div class="order-total">${T('Toplam', 'Total')}: ${fmtPrice(r.total)}</div></div>`;
  });
  html += `</div>${recs.length > 60 ? `<div class="orders-empty">… +${recs.length - 60} ${T('fiş daha', 'more')}</div>` : ''}</div>`;

  box.innerHTML = html;
}

// Ürün tablosu: Adet | Birim | Brüt | Maliyet | Kâr (yan yana)
function fmt2(n) {
  return fmtPrice(Math.round(Number(n) * 100) / 100);
}
function productCostMap() {
  const map = {};
  try {
    ((typeof menu !== 'undefined' && menu.products) || []).forEach(p => {
      const c = (p.cost != null && p.cost !== '' && !isNaN(Number(p.cost))) ? Number(p.cost) : null;
      map['id:' + p.id] = c;
      if (p.name) {
        if (p.name.tr) map['nm:' + p.name.tr] = c;
        if (p.name.en) map['nm:' + p.name.en] = c;
      }
    });
  } catch (e) {}
  return map;
}
function productTable(list, T) {
  const costs = productCostMap();
  let html = `<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px;white-space:nowrap">
    <thead><tr style="text-align:right;opacity:.65">
      <th style="text-align:left;padding:6px 8px 6px 0"># ${T('Ürün', 'Product')}</th>
      <th style="padding:6px 8px">${T('Adet', 'Qty')}</th>
      <th style="padding:6px 8px">${T('Birim', 'Unit')}</th>
      <th style="padding:6px 8px">${T('Brüt', 'Gross')}</th>
      <th style="padding:6px 8px">${T('Maliyet', 'Cost')}</th>
      <th style="padding:6px 8px">${T('Kâr', 'Profit')}</th>
      <th style="padding:6px 0 6px 8px">${T('Kâr Oranı', 'Margin')}</th>
    </tr></thead><tbody>`;
  list.forEach((p, idx) => {
    const unit = p.qty > 0 ? p.revenue / p.qty : 0;
    const unitCost = p.key && costs[p.key] != null ? costs[p.key] : null;
    const profit = unitCost != null ? (unit - unitCost) * p.qty : null;
    const margin = profit != null && p.revenue > 0 ? (profit / p.revenue * 100) : null;
    html += `<tr style="border-top:1px solid rgba(128,128,128,.2);text-align:right">
      <td style="text-align:left;padding:7px 8px 7px 0">${idx + 1}. ${escapeHtml(p.name)}</td>
      <td style="padding:7px 8px">${p.qty}×</td>
      <td style="padding:7px 8px">${fmt2(unit)}</td>
      <td style="padding:7px 8px;font-weight:700">${fmtPrice(p.revenue)}</td>
      <td style="padding:7px 8px">${unitCost != null ? fmtPrice(unitCost) : '—'}</td>
      <td style="padding:7px 8px;font-weight:700">${profit != null ? fmt2(profit) : '—'}</td>
      <td style="padding:7px 0 7px 8px">${margin != null ? '%' + Math.round(margin) : '—'}</td>
    </tr>`;
  });
  return html + `</tbody></table></div>`;
}

// ===== İstatistik detay sayfaları =====
function statsCatName(cid) {
  try {
    if (typeof getCategory === 'function') {
      const c = getCategory(cid);
      if (c && c.name) return c.name[((typeof state !== 'undefined' && state.lang) || 'tr')] || c.name.tr;
    }
  } catch (e) {}
  return cid || '?';
}
function statsMonthLabel(ym) {
  try {
    const parts = String(ym).split('-');
    return new Date(Number(parts[0]), Number(parts[1]) - 1, 1).toLocaleDateString(
      adminSectionLang() === 'en' ? 'en-US' : 'tr-TR', { month: 'long', year: 'numeric' });
  } catch (e) { return ym; }
}
function fetchSalesHistory(cb) {
  fetch('/api/sales-history').then(r => r.json()).then(res => {
    const days = (res && res.success && Array.isArray(res.days)) ? res.days : [];
    window._salesHistory = days;
    if (cb) cb(days);
  }).catch(() => { if (cb) cb(window._salesHistory || []); });
}

// --- Satış detayı: Günlük / Aylık / Yıllık / Tarih aralığı ---
function renderSalesDetail(tab, start, end) {
  window._salesTab = tab || window._salesTab || 'day';
  if (start !== undefined) window._salesStart = start;
  if (end !== undefined) window._salesEnd = end;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const tabs = [
    ['day', '📅 ' + T('Günlük', 'Daily')],
    ['month', '🗓️ ' + T('Aylık', 'Monthly')],
    ['year', '📆 ' + T('Yıllık', 'Yearly')],
    ['range', '🔎 ' + T('Tarih Aralığı', 'Date Range')]
  ];
  showStatsDetail('📅 ' + T('Satışlar', 'Sales'),
    `<div class="toolbar">${tabs.map(([id, label]) =>
      `<button class="btn ${window._salesTab === id ? 'btn-primary' : 'btn-secondary'}" data-tabval="${id}" onclick="renderSalesDetail('${id}')">${label}</button>`
    ).join('')}</div><div id="salesDetailBody"><div class="empty-state">${T('Yükleniyor...', 'Loading...')}</div></div>`);
  paintTabs('[data-tabval]', window._salesTab);
  fetchSalesHistory(days => renderSalesDetailBody(days || []));
}

function renderSalesDetailBody(days) {
  const box = document.getElementById('salesDetailBody');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const tab = window._salesTab || 'day';
  const sorted = (days || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  if (sorted.length === 0) {
    box.innerHTML = `<div class="empty-state">${T('Kayıtlı satış yok', 'No sales recorded')}</div>`;
    return;
  }

  if (tab === 'range') {
    const min = sorted[0].date, max = sorted[sorted.length - 1].date;
    if (!window._salesStart) window._salesStart = min;
    if (!window._salesEnd) window._salesEnd = max;
    const s = window._salesStart, e = window._salesEnd;
    const inRange = sorted.filter(d => d.date >= s && d.date <= e);
    const tot = inRange.reduce((a, d) => a + (Number(d.revenue) || 0), 0);
    const cnt = inRange.reduce((a, d) => a + (Number(d.count) || 0), 0);
    let html = `<div class="card" style="margin-bottom:16px"><div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <input type="date" id="rngStart" value="${s}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <span>—</span>
      <input type="date" id="rngEnd" value="${e}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <button class="btn btn-primary" onclick="renderSalesDetail('range', document.getElementById('rngStart').value, document.getElementById('rngEnd').value)">🔎 ${T('Listele', 'Show')}</button>
    </div></div>`;
    html += `<div class="card"><h3>${escapeHtml(s)} → ${escapeHtml(e)} • ${cnt} ${T('fiş', 'receipts')} • ${fmtPrice(tot)}</h3><ul class="order-rows">`;
    inRange.slice().reverse().forEach(d => {
      html += `<li><span>${escapeHtml(statsDayLabel(d.date))} <span class="q">${d.count} ${T('fiş', 'rcpts')} • ${d.items} ${T('ürün', 'items')}</span></span><span>${fmtPrice(d.revenue)}</span></li>`;
    });
    html += `</ul></div>`;
    box.innerHTML = html;
    return;
  }

  const groups = {};
  sorted.forEach(d => {
    const key = tab === 'month' ? String(d.date).slice(0, 7) : tab === 'year' ? String(d.date).slice(0, 4) : d.date;
    if (!groups[key]) groups[key] = { revenue: 0, count: 0, items: 0, cash: 0, card: 0, days: 0 };
    groups[key].revenue += Number(d.revenue) || 0;
    groups[key].count += Number(d.count) || 0;
    groups[key].items += Number(d.items) || 0;
    groups[key].cash += Number(d.cash) || 0;
    groups[key].card += Number(d.card) || 0;
    groups[key].days++;
  });
  const keys = Object.keys(groups).sort().reverse();
  const maxRev = Math.max(...keys.map(k => groups[k].revenue), 1);
  const labelOf = (k) => tab === 'month' ? statsMonthLabel(k) : tab === 'year' ? k : statsDayLabel(k);
  let html = `<div class="card"><ul class="order-rows">`;
  keys.forEach(k => {
    const g = groups[k];
    const extra = tab === 'day'
      ? `${g.count} ${T('fiş', 'rcpts')} • ${g.items} ${T('ürün', 'items')}`
      : `${g.days} ${T('gün', 'days')} • ${g.count} ${T('fiş', 'rcpts')}`;
    html += `<li style="display:block"><div style="display:flex;justify-content:space-between"><span>${escapeHtml(labelOf(k))} <span class="q">${extra}</span></span><span>${fmtPrice(g.revenue)}</span></div>${statBar(g.revenue / maxRev * 100)}<div style="font-size:12px;opacity:.7;margin-top:2px">💵 ${fmtPrice(g.cash)} • 💳 ${fmtPrice(g.card)}</div></li>`;
  });
  html += `</ul></div>`;
  box.innerHTML = html;
}

// --- Ürün satış detayı: En çok / En az + Günlük / Aylık / Yıllık / Tarih aralığı ---
function mergeDayProducts(dayList) {
  const map = {};
  (dayList || []).forEach(d => Object.entries(d.products || {}).forEach(([key, p]) => {
    if (!map[key]) map[key] = { key, name: p.name, cat: p.cat, qty: 0, revenue: 0 };
    map[key].qty += Number(p.qty) || 0;
    map[key].revenue += Number(p.revenue) || 0;
  }));
  return Object.values(map);
}

function renderProductStatsDetail(dir, tab) {
  if (dir) window._prodDir = dir;
  if (!window._prodDir) window._prodDir = 'best';
  if (tab && tab !== window._prodTab) window._prodSel = null;
  window._prodTab = tab || window._prodTab || 'day';
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const best = window._prodDir === 'best';
  const tabs = [
    ['day', '📅 ' + T('Günlük', 'Daily')],
    ['month', '🗓️ ' + T('Aylık', 'Monthly')],
    ['year', '📆 ' + T('Yıllık', 'Yearly')],
    ['range', '🔎 ' + T('Tarih Aralığı', 'Date Range')]
  ];
  showStatsDetail((best ? '🏆 ' : '📉 ') + T('Ürün Satışları', 'Product Sales'),
    `<div class="toolbar">
      <button class="btn ${best ? 'btn-primary' : 'btn-secondary'}" onclick="renderProductStatsDetail('best')">🏆 ${T('En çok', 'Best')}</button>
      <button class="btn ${!best ? 'btn-primary' : 'btn-secondary'}" onclick="renderProductStatsDetail('least')">📉 ${T('En az', 'Least')}</button>
    </div>
    <div class="toolbar">${tabs.map(([id, label]) =>
      `<button class="btn ${window._prodTab === id ? 'btn-primary' : 'btn-secondary'}" data-tabval="${id}" onclick="renderProductStatsDetail(window._prodDir,'${id}')">${label}</button>`
    ).join('')}</div><div id="prodDetailBody"><div class="empty-state">${T('Yükleniyor...', 'Loading...')}</div></div>`);
  paintTabs('[data-tabval]', window._prodTab);
  fetchSalesHistory(days => renderProductStatsBody(days || []));
}

function renderProductStatsBody(days) {
  const box = document.getElementById('prodDetailBody');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const best = (window._prodDir || 'best') === 'best';
  const tab = window._prodTab || 'day';
  const sorted = (days || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  if (sorted.length === 0) {
    box.innerHTML = `<div class="empty-state">${T('Kayıtlı satış yok', 'No sales recorded')}</div>`;
    return;
  }
  const sortList = (list) => list.sort((a, b) => best ? b.qty - a.qty : a.qty - b.qty);

  if (tab === 'range') {
    const min = sorted[0].date, max = sorted[sorted.length - 1].date;
    if (!window._prodStart) window._prodStart = min;
    if (!window._prodEnd) window._prodEnd = max;
    const s = window._prodStart, e = window._prodEnd;
    const list = sortList(mergeDayProducts(sorted.filter(d => d.date >= s && d.date <= e)));
    const totQty = list.reduce((a, p) => a + p.qty, 0);
    const totRev = list.reduce((a, p) => a + p.revenue, 0);
    box.innerHTML = `<div class="card" style="margin-bottom:16px"><div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <input type="date" id="prodStart" value="${s}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <span>—</span>
      <input type="date" id="prodEnd" value="${e}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <button class="btn btn-primary" onclick="window._prodStart=document.getElementById('prodStart').value;window._prodEnd=document.getElementById('prodEnd').value;renderProductStatsBody(window._salesHistory||[])">🔎 ${T('Listele', 'Show')}</button>
    </div></div>
    <div class="card"><h3>${escapeHtml(s)} → ${escapeHtml(e)} • ${totQty} ${T('adet', 'pcs')} • ${fmtPrice(totRev)}</h3>${productTable(list, T)}</div>`;
    return;
  }

  const periods = {};
  sorted.forEach(d => {
    const key = tab === 'month' ? String(d.date).slice(0, 7) : tab === 'year' ? String(d.date).slice(0, 4) : d.date;
    (periods[key] = periods[key] || []).push(d);
  });
  const keys = Object.keys(periods).sort().reverse();
  if (!window._prodSel || !periods[window._prodSel]) window._prodSel = keys[0];
  const sel = window._prodSel;
  const labelOf = (k) => tab === 'month' ? statsMonthLabel(k) : tab === 'year' ? k : statsDayLabel(k);
  const list = sortList(mergeDayProducts(periods[sel]));
  const totQty = list.reduce((a, p) => a + p.qty, 0);
  const totRev = list.reduce((a, p) => a + p.revenue, 0);
  box.innerHTML = `<div class="card" style="margin-bottom:16px"><div class="toolbar">
    <select id="prodSel" onchange="window._prodSel=this.value;renderProductStatsBody(window._salesHistory||[])" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);width:100%">
      ${keys.map(k => `<option value="${k}"${k === sel ? ' selected' : ''}>${escapeHtml(labelOf(k))}</option>`).join('')}
    </select>
  </div></div>
  <div class="card"><h3>${escapeHtml(labelOf(sel))} • ${totQty} ${T('adet', 'pcs')} • ${fmtPrice(totRev)}</h3>${productTable(list, T)}</div>`;
}

function renderCategoriesDetail() {
  const M = statsModel();
  if (!M) { renderStats(); return; }
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  let html = `<div class="grid-2col">`;
  Object.keys(M.byCat).sort().forEach(c => {
    html += `<div class="order-card"><div class="order-head"><span class="order-table">${escapeHtml(statsCatName(c))}</span></div><ul class="order-rows">`;
    M.byCat[c].forEach((p, idx) => {
      html += `<li><span>${idx + 1}. ${escapeHtml(p.name)} <span class="q">${p.qty}×</span></span><span>${fmtPrice(p.revenue)}</span></li>`;
    });
    html += `</ul></div>`;
  });
  html += `</div>`;
  showStatsDetail('🗂️ ' + T('Kategori Detayı', 'Categories'), html);
}

function renderPaymentsDetail() {
  const M = statsModel();
  if (!M) { renderStats(); return; }
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const payMax = Math.max(M.cashTotal, M.cardTotal, 1);
  let html = `<div class="card" style="margin-bottom:20px"><h3>💳 ${T('Toplam', 'Totals')}</h3><ul class="order-rows">
    <li style="display:block"><div style="display:flex;justify-content:space-between"><span>💵 ${T('Nakit', 'Cash')} (${M.cashRecs.length})</span><span>${fmtPrice(M.cashTotal)}</span></div>${statBar(M.cashTotal / payMax * 100)}</li>
    <li style="display:block"><div style="display:flex;justify-content:space-between"><span>💳 ${T('Kart', 'Card')} (${M.cardRecs.length})</span><span>${fmtPrice(M.cardTotal)}</span></div>${statBar(M.cardTotal / payMax * 100)}</li>
  </ul></div>`;
  html += `<div class="card"><h3>📅 ${T('Günlük Nakit / Kart', 'Daily Cash / Card')}</h3><ul class="order-rows">`;
  M.dayKeys.slice().reverse().forEach(k => {
    const dayRecs = M.recs.filter(r => {
      try { return new Date(r.paidAt).toLocaleDateString('en-CA', { timeZone: 'Europe/Istanbul' }) === k; }
      catch (e) { return false; }
    });
    const cash = dayRecs.filter(r => r.method !== 'card').reduce((s, r) => s + (Number(r.total) || 0), 0);
    const card = dayRecs.filter(r => r.method === 'card').reduce((s, r) => s + (Number(r.total) || 0), 0);
    html += `<li><span>${escapeHtml(statsDayLabel(k))}</span><span>💵 ${fmtPrice(cash)} • 💳 ${fmtPrice(card)}</span></li>`;
  });
  html += `</ul></div>`;
  showStatsDetail('💳 ' + T('Ödeme Detayı', 'Payments'), html);
}

function renderHoursDetail() {
  const M = statsModel();
  if (!M) { renderStats(); return; }
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  let html = `<div class="card"><ul class="order-rows">`;
  M.hourKeys.forEach(h => {
    html += `<li style="display:block"><div style="display:flex;justify-content:space-between"><span>${String(h).padStart(2, '0')}:00 <span class="q">${M.hours[h].n} ${T('fiş', 'rcpts')}</span></span><span>${fmtPrice(M.hours[h].total)}</span></div>${statBar(M.hours[h].total / M.maxHour * 100)}</li>`;
  });
  html += `</ul></div>`;
  showStatsDetail('🕐 ' + T('Saat Detayı', 'Hours'), html);
}

function renderTablesDetail() {
  const M = statsModel();
  if (!M) { renderStats(); return; }
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  let html = `<div class="card"><ul class="order-rows">`;
  M.tableKeys.forEach(tb => {
    const avg = M.tables[tb].total / Math.max(1, M.tables[tb].n);
    html += `<li><span>${T('Masa', 'Table')} ${escapeHtml(tb)} <span class="q">${M.tables[tb].n} ${T('fiş', 'rcpts')} • ${T('ort', 'avg')} ${fmtPrice(Math.round(avg))}</span></span><span>${fmtPrice(M.tables[tb].total)}</span></li>`;
  });
  html += `</ul></div>`;
  showStatsDetail('🪑 ' + T('Masa Detayı', 'Tables'), html);
}

function renderReceiptsDetail() {
  const M = statsModel();
  if (!M) { renderStats(); return; }
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  let html = `<div class="card"><h3>🧾 ${M.recs.length} ${T('fiş', 'receipts')}</h3><div class="grid-2col">`;
  M.recs.slice(0, 200).forEach(r => {
    const when = r.paidAt ? new Date(r.paidAt).toLocaleString(en ? 'en-US' : 'tr-TR') : '';
    const items = (r.items || []).map(i => `${i.qty}× ${escapeHtml(i.name)}`).join(', ');
    html += `<div class="order-card"><div class="order-head"><span class="order-table">${T('Masa', 'Table')} ${escapeHtml(String(r.table || '?'))} • #${r.orderId} • 👤 ${escapeHtml(r.person || '?')}</span></div><div class="order-time">🕐 ${escapeHtml(when)} • ${r.method === 'card' ? '💳' : '💵'}</div><div style="font-size:12px;opacity:.8;margin:6px 0">${items}</div><div class="order-total">${T('Toplam', 'Total')}: ${fmtPrice(r.total)}</div></div>`;
  });
  html += `</div>${M.recs.length > 200 ? `<div class="orders-empty">… +${M.recs.length - 200}</div>` : ''}</div>`;
  showStatsDetail('🧾 ' + T('Fiş Detayı', 'Receipts'), html);
}

// --- Ortalama fiş detayı: Günlük / Aylık / Yıllık / Tarih aralığı ---
function renderAvgDetail(tab, start, end) {
  window._avgTab = tab || window._avgTab || 'day';
  if (start !== undefined) window._avgStart = start;
  if (end !== undefined) window._avgEnd = end;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const tabs = [
    ['day', '📅 ' + T('Günlük', 'Daily')],
    ['month', '🗓️ ' + T('Aylık', 'Monthly')],
    ['year', '📆 ' + T('Yıllık', 'Yearly')],
    ['range', '🔎 ' + T('Tarih Aralığı', 'Date Range')]
  ];
  showStatsDetail('🧾 ' + T('Ortalama Fiş', 'Average Receipt'),
    `<div class="toolbar">${tabs.map(([id, label]) =>
      `<button class="btn ${window._avgTab === id ? 'btn-primary' : 'btn-secondary'}" data-tabval="${id}" onclick="renderAvgDetail('${id}')">${label}</button>`
    ).join('')}</div><div id="avgDetailBody"><div class="empty-state">${T('Yükleniyor...', 'Loading...')}</div></div>`);
  paintTabs('[data-tabval]', window._avgTab);
  fetchSalesHistory(days => renderAvgDetailBody(days || []));
}

function renderAvgDetailBody(days) {
  const box = document.getElementById('avgDetailBody');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const tab = window._avgTab || 'day';
  const sorted = (days || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  if (sorted.length === 0) {
    box.innerHTML = `<div class="empty-state">${T('Kayıtlı satış yok', 'No sales recorded')}</div>`;
    return;
  }
  const avgOf = (list) => {
    const rev = list.reduce((a, d) => a + (Number(d.revenue) || 0), 0);
    const cnt = list.reduce((a, d) => a + (Number(d.count) || 0), 0);
    return cnt > 0 ? rev / cnt : 0;
  };

  if (tab === 'range') {
    const min = sorted[0].date, max = sorted[sorted.length - 1].date;
    if (!window._avgStart) window._avgStart = min;
    if (!window._avgEnd) window._avgEnd = max;
    const s = window._avgStart, e = window._avgEnd;
    const inRange = sorted.filter(d => d.date >= s && d.date <= e);
    const totAvg = avgOf(inRange);
    let html = `<div class="card" style="margin-bottom:16px"><div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <input type="date" id="avgStart" value="${s}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <span>—</span>
      <input type="date" id="avgEnd" value="${e}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <button class="btn btn-primary" onclick="renderAvgDetail('range', document.getElementById('avgStart').value, document.getElementById('avgEnd').value)">🔎 ${T('Listele', 'Show')}</button>
    </div></div>`;
    html += `<div class="card"><h3>${escapeHtml(s)} → ${escapeHtml(e)} • ${T('Ortalama', 'Average')}: ${fmtPrice(Math.round(totAvg))}</h3><ul class="order-rows">`;
    inRange.slice().reverse().forEach(d => {
      html += `<li><span>${escapeHtml(statsDayLabel(d.date))} <span class="q">${d.count} ${T('fiş', 'rcpts')}</span></span><span>${fmtPrice(Math.round(avgOf([d])))}</span></li>`;
    });
    html += `</ul></div>`;
    box.innerHTML = html;
    return;
  }

  const groups = {};
  sorted.forEach(d => {
    const key = tab === 'month' ? String(d.date).slice(0, 7) : tab === 'year' ? String(d.date).slice(0, 4) : d.date;
    if (!groups[key]) groups[key] = { list: [] };
    groups[key].list.push(d);
  });
  const keys = Object.keys(groups).sort().reverse();
  const labelOf = (k) => tab === 'month' ? statsMonthLabel(k) : tab === 'year' ? k : statsDayLabel(k);
  let html = `<div class="card"><ul class="order-rows">`;
  keys.forEach(k => {
    const g = groups[k].list;
    const cnt = g.reduce((a, d) => a + (Number(d.count) || 0), 0);
    html += `<li><span>${escapeHtml(labelOf(k))} <span class="q">${cnt} ${T('fiş', 'rcpts')}</span></span><span>${fmtPrice(Math.round(avgOf(g)))}</span></li>`;
  });
  html += `</ul></div>`;
  box.innerHTML = html;
}

// --- Satılan ürünler: başlığa tıklayınca sıralanan tam liste ---
function allProductsSortState() {
  if (!window._allSort) window._allSort = { key: 'qty', dir: -1 };
  return window._allSort;
}
function allProdVal(p, key, costs) {
  const unit = p.qty > 0 ? p.revenue / p.qty : 0;
  const cost = p.key && costs[p.key] != null ? costs[p.key] : null;
  const profit = cost != null ? (unit - cost) * p.qty : null;
  const margin = profit != null && p.revenue > 0 ? profit / p.revenue * 100 : null;
  if (key === 'name') return p.name;
  if (key === 'qty') return p.qty;
  if (key === 'unit') return unit;
  if (key === 'revenue') return p.revenue;
  if (key === 'cost') return cost;
  if (key === 'profit') return profit;
  if (key === 'margin') return margin;
  return null;
}
function allProductsSort(key) {
  const s = allProductsSortState();
  if (s.key === key) s.dir = -s.dir;
  else { s.key = key; s.dir = (key === 'name' ? 1 : -1); }
  renderAllProductsBody(window._salesHistory || []);
}
function renderAllProductsDetail() {
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  showStatsDetail('🧾 ' + T('Satılan Ürünler', 'Sold Products'),
    `<div class="toolbar"><button class="btn btn-secondary" onclick="renderAllProductsDetail()">↻ ${T('Yenile', 'Refresh')}</button></div><div id="allProdBody"><div class="empty-state">${T('Yükleniyor...', 'Loading...')}</div></div>`);
  fetchSalesHistory(days => renderAllProductsBody(days || []));
}
function renderAllProductsBody(days) {
  const box = document.getElementById('allProdBody');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const s = allProductsSortState();
  const costs = productCostMap();
  const list = mergeDayProducts((days || []).slice());
  const val = (p) => allProdVal(p, s.key, costs);
  list.sort((a, b) => {
    const va = val(a), vb = val(b);
    if (va == null && vb == null) return 0;
    if (va == null) return 1;
    if (vb == null) return -1;
    if (typeof va === 'string') return s.dir * String(va).localeCompare(String(vb), en ? 'en' : 'tr');
    return s.dir * (va - vb);
  });
  const arrow = (k) => s.key === k ? (s.dir === 1 ? ' ▲' : ' ▼') : '';
  const th = (k, label) => `<th style="padding:6px 8px;cursor:pointer;white-space:nowrap" onclick="allProductsSort('${k}')" title="${T('Sırala', 'Sort')}">${label}${arrow(k)}</th>`;
  let html = `<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px;white-space:nowrap">
    <thead><tr style="text-align:right;opacity:.85">
      <th style="text-align:left;padding:6px 8px 6px 0;cursor:pointer" onclick="allProductsSort('name')" title="${T('Sırala', 'Sort')}"># ${T('Ürün', 'Product')}${arrow('name')}</th>
      ${th('qty', T('Adet', 'Qty'))}${th('unit', T('Birim', 'Unit'))}${th('revenue', T('Brüt', 'Gross'))}${th('cost', T('Maliyet', 'Cost'))}${th('profit', T('Kâr', 'Profit'))}${th('margin', T('Kâr Oranı', 'Margin'))}
    </tr></thead><tbody>`;
  list.forEach((p) => {
    const unit = p.qty > 0 ? p.revenue / p.qty : 0;
    const cost = p.key && costs[p.key] != null ? costs[p.key] : null;
    const profit = cost != null ? (unit - cost) * p.qty : null;
    const margin = profit != null && p.revenue > 0 ? profit / p.revenue * 100 : null;
    html += `<tr style="border-top:1px solid rgba(128,128,128,.2);text-align:right">
      <td style="text-align:left;padding:7px 8px 7px 0">${escapeHtml(p.name)}</td>
      <td style="padding:7px 8px">${p.qty}×</td>
      <td style="padding:7px 8px">${fmtPrice(Math.round(unit))}</td>
      <td style="padding:7px 8px;font-weight:700">${fmtPrice(p.revenue)}</td>
      <td style="padding:7px 8px">${cost != null ? fmtPrice(cost) : '—'}</td>
      <td style="padding:7px 8px;font-weight:700">${profit != null ? fmtPrice(Math.round(profit)) : '—'}</td>
      <td style="padding:7px 0 7px 8px">${margin != null ? '%' + Math.round(margin) : '—'}</td>
    </tr>`;
  });
  html += `</tbody></table></div>`;
  if (list.length === 0) html = `<div class="empty-state">${T('Kayıtlı satış yok', 'No sales recorded')}</div>`;
  box.innerHTML = html;
}

// ===== Maliyet hesaplama =====
function costToBase(amount, unit) {
  const a = Number(amount) || 0;
  if (unit === 'kg' || unit === 'lt') return { w: a * 1000 };
  if (unit === 'gr' || unit === 'ml') return { w: a };
  if (unit === 'adet') return { pcs: a };
  return { w: 0 };
}
function collectMenuIngredients() {
  const list = [];
  const seen = {};
  const hidden = {};
  try { (window._hiddenIngs || []).forEach(n => { hidden[n] = true; }); } catch (e) {}
  const push = (nm) => { if (nm && !seen[nm] && !hidden[nm]) { seen[nm] = true; list.push(nm); } };
  try {
    ((typeof menu !== 'undefined' && menu.products) || []).forEach(p => {
      (p.ingredients || []).forEach(x => { if (x && x.name) push(x.name); });
    });
  } catch (e) {}
  try {
    Object.keys(window._purchase || {}).forEach(push);
    (window._customIngs || []).forEach(push);
  } catch (e) {}
  return list;
}
function removeCostRow(btn) {
  const name = btn ? btn.dataset.ing : '';
  if (!name) return;
  const custom = (window._customIngs || []).filter(x => x !== name);
  window._customIngs = custom;
  const inRecipes = (() => {
    try {
      return ((typeof menu !== 'undefined' && menu.products) || []).some(p => (p.ingredients || []).some(x => x && x.name === name));
    } catch (e) { return false; }
  })();
  if (inRecipes) {
    const hidden = window._hiddenIngs || [];
    if (hidden.indexOf(name) === -1) window._hiddenIngs = hidden.concat([name]);
  }
  const purchase = { ...(window._purchase || {}) };
  delete purchase[name];
  window._purchase = purchase;
  persistCosts(purchase, () => renderCostingBody());
}
function restoreHiddenIng(name) {
  window._hiddenIngs = (window._hiddenIngs || []).filter(x => x !== name);
  persistCosts(null, () => renderCostingBody());
}
function addCustomIngredient() {
  const en = adminSectionLang() === 'en';
  const input = document.getElementById('newIngName');
  const name = input ? input.value.trim() : '';
  if (!name) return;
  if (collectMenuIngredients().some(x => x.toLowerCase() === name.toLowerCase())) {
    toast(en ? 'Already in list' : 'Zaten listede', 'error');
    return;
  }
  window._customIngs = (window._customIngs || []).concat([name]);
  persistCosts(null, () => renderCostingBody());
}
function persistCosts(purchase, cb) {
  const en = adminSectionLang() === 'en';
  fetch('/api/costs', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ purchase: purchase || window._purchase || {}, custom: window._customIngs || [], hidden: window._hiddenIngs || [] })
  }).then(r => r.json()).then(res => {
    if (res && res.success) {
      if (purchase) window._purchase = purchase;
      toast(en ? 'Saved ✓' : 'Kaydedildi ✓', 'success');
      if (cb) cb();
    } else {
      toast(en ? 'Save failed' : 'Kaydedilemedi', 'error');
    }
  }).catch(() => toast(en ? 'Save failed' : 'Kaydedilemedi', 'error'));
}
function computeProductCost(p, purchase) {
  let total = 0;
  const missing = [];
  const hiddenSet = {};
  try { (window._hiddenIngs || []).forEach(n => { hiddenSet[n] = true; }); } catch (e) {}
  (p.ingredients || []).forEach(x => {
    if (hiddenSet[x.name]) return;
    const e = purchase ? purchase[x.name] : null;
    if (!e || e.price == null || isNaN(Number(e.price))) { missing.push(x.name); return; }
    const b = costToBase(x.amount, x.unit);
    if (e.unit === 'kg') {
      if (b.w != null) total += b.w / 1000 * Number(e.price);
      else missing.push(x.name + ' (birim uyuşmazlığı)');
    } else {
      if (b.pcs != null) total += b.pcs * Number(e.price);
      else missing.push(x.name + ' (birim uyuşmazlığı)');
    }
  });
  return { total: Math.round(total * 100) / 100, missing };
}
function fetchCosts(cb) {
  fetch('/api/costs').then(r => r.json()).then(res => {
    const purchase = (res && res.success && res.purchase) ? res.purchase : {};
    window._purchase = purchase;
    window._customIngs = (res && res.success && Array.isArray(res.custom)) ? res.custom.filter(x => typeof x === 'string') : (window._customIngs || []);
    window._hiddenIngs = (res && res.success && Array.isArray(res.hidden)) ? res.hidden.filter(x => typeof x === 'string') : (window._hiddenIngs || []);
    if (cb) cb(purchase);
  }).catch(() => { if (cb) cb(window._purchase || {}); });
}
function renderCosting() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">🧮 ${en ? 'Cost Calculator' : 'Maliyet Hesaplama'}</h1>
      <p class="page-sub">${en ? 'Enter purchase prices, product costs update automatically.' : 'Alış fiyatlarını gir, ürün maliyetleri otomatik hesaplansın.'}</p>
      <div class="toolbar"><button class="btn btn-secondary" onclick="renderCosting()">↻ ${en ? 'Refresh' : 'Yenile'}</button></div>
      <div id="costingContent"><div class="empty-state">${en ? 'Loading...' : 'Yükleniyor...'}</div></div>
    </div>`;
  fetchCosts(() => renderCostingBody());
}
function renderCostingBody() {
  const box = document.getElementById('costingContent');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const purchase = window._purchase || {};
  const ings = collectMenuIngredients();
  const products = ((typeof menu !== 'undefined' && menu.products) || []);

  let html = `<div class="card" style="margin-bottom:20px"><h3>🧂 ${T('Malzeme Alış Fiyatları (geliş fiyatı)', 'Ingredient Purchase Prices')}</h3>
    <div style="font-size:12px;opacity:.75;margin-bottom:10px">${T('kg fiyatı gr/ml/lt tariflerine uygulanır (1 lt ≈ 1 kg). Adet fiyatı adet tariflerine uygulanır. Boş bırakılan malzeme hesaba katılmaz.', 'kg price applies to gr/ml/lt recipes (1 lt ≈ 1 kg). Piece price applies to piece recipes. Empty rows are ignored.')}</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px">
    <div class="toolbar" style="display:flex;gap:8px;margin-bottom:10px">
      <input id="newIngName" placeholder="${T('Yeni malzeme adı...', 'New ingredient name...')}" maxlength="60" style="flex:1;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" onkeydown="if(event.key==='Enter')addCustomIngredient()" />
      <button class="btn btn-secondary" onclick="addCustomIngredient()">+ ${T('Yeni Malzeme', 'New Ingredient')}</button>
    </div>
    <thead><tr style="text-align:left;opacity:.65"><th style="padding:6px 8px 6px 0">${T('Malzeme', 'Ingredient')}</th><th style="padding:6px 8px">${T('Geliş Fiyatı (₺)', 'Price (₺)')}</th><th style="padding:6px 8px">${T('Birim', 'Per')}</th><th></th></tr></thead>
    <tbody id="costTableBody">`;
  ings.forEach(nm => {
    const e = purchase[nm] || {};
    html += `<tr data-ing="${escapeHtml(nm).replace(/"/g, '&quot;')}" style="border-top:1px solid rgba(128,128,128,.2)">
      <td style="padding:6px 8px 6px 0">${escapeHtml(nm)}</td>
      <td style="padding:6px 8px"><input class="cost-price" type="number" min="0" step="any" placeholder="—" value="${e.price != null ? e.price : ''}" style="width:110px;padding:7px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /></td>
      <td style="padding:6px 0 6px 8px"><select class="cost-unit" style="padding:7px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)">
        <option value="kg"${e.unit !== 'adet' ? ' selected' : ''}>kg ${T('(≈ litre)', '(≈ litre)')}</option>
        <option value="adet"${e.unit === 'adet' ? ' selected' : ''}>${T('adet', 'piece')}</option>
      </select></td>
      <td style="padding:6px 0 6px 4px"><button class="mini-btn danger" data-ing="${escapeHtml(nm).replace(/"/g, '&quot;')}" onclick="removeCostRow(this)" title="${T('Sil', 'Delete')}">✕</button></td>
    </tr>`;
  });
  html += `</tbody></table></div>
    <div class="toolbar" style="margin-top:10px"><button class="btn btn-primary" onclick="saveCostsFromUI()">💾 ${T('Fiyatları Kaydet', 'Save Prices')}</button></div>`;
  const hiddenList = window._hiddenIngs || [];
  if (hiddenList.length > 0) {
    html += `<div style="font-size:12px;opacity:.8;margin-top:10px">${T('Gizli malzemeler (maliyete katılmaz):', 'Hidden (excluded from costs):')} ${hiddenList.map(n => `<span class="station-badge">${escapeHtml(n)} <button onclick="restoreHiddenIng('${escapeHtml(n).replace(/'/g, "\\'")}')" title="${T('Geri al', 'Restore')}">↩</button></span>`).join(' ')}</div>`;
  }
  html += `</div>`;

  html += `<div class="card"><h3>🍽️ ${T('Ürün Maliyetleri (hesaplanan)', 'Product Costs (calculated)')}</h3>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px;white-space:nowrap">
    <thead><tr style="text-align:right;opacity:.65"><th style="text-align:left;padding:6px 8px 6px 0">${T('Ürün', 'Product')}</th><th style="padding:6px 8px">${T('Hesaplanan', 'Calculated')}</th><th style="padding:6px 8px">${T('Menüdeki', 'In Menu')}</th><th style="padding:6px 0 6px 8px">${T('Durum', 'Status')}</th></tr></thead><tbody>`;
  products.forEach(p => {
    const c = computeProductCost(p, purchase);
    const ok = c.missing.length === 0;
    const nm = (p.name && (p.name[((typeof state !== 'undefined' && state.lang) || 'tr')] || p.name.tr)) || '?';
    html += `<tr style="border-top:1px solid rgba(128,128,128,.2);text-align:right">
      <td style="text-align:left;padding:7px 8px 7px 0">${escapeHtml(nm)}</td>
      <td style="padding:7px 8px;font-weight:700">${fmtPrice(c.total)}</td>
      <td style="padding:7px 8px">${p.cost != null ? fmtPrice(p.cost) : '—'}</td>
      <td style="padding:7px 0 7px 8px">${ok ? '✅' : `⚠️ <span style="font-size:11px;opacity:.75">${escapeHtml(c.missing.slice(0, 2).join(', '))}${c.missing.length > 2 ? '…' : ''}</span>`}</td>
    </tr>`;
  });
  html += `</tbody></table></div>
    <div class="toolbar" style="margin-top:10px"><button class="btn btn-success" onclick="applyCostsToMenu()">⬇ ${T('Maliyetleri Menüye İşle', 'Apply Costs to Menu')}</button></div>
    <div style="font-size:12px;opacity:.75">${T('Eksiksiz hesaplanan ürünlerin maliyeti menüye yazılır, istatistiklerde kâr görünür.', 'Fully calculated costs are written to the menu and appear in statistics.')}</div></div>`;

  box.innerHTML = html;
}
function saveCostsFromUI() {
  const en = adminSectionLang() === 'en';
  const purchase = {};
  document.querySelectorAll('#costTableBody tr').forEach(tr => {
    const name = tr.dataset.ing;
    if (!name) return;
    const priceEl = tr.querySelector('.cost-price');
    const unitEl = tr.querySelector('.cost-unit');
    const raw = priceEl ? String(priceEl.value || '').trim().replace(',', '.') : '';
    if (raw !== '' && !isNaN(Number(raw)) && Number(raw) >= 0) {
      purchase[name] = { price: Number(raw), unit: unitEl && unitEl.value === 'adet' ? 'adet' : 'kg' };
    }
  });
  fetch('/api/costs', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ purchase, custom: window._customIngs || [], hidden: window._hiddenIngs || [] })
  }).then(r => r.json()).then(res => {
    if (res && res.success) {
      window._purchase = purchase;
      toast(en ? 'Prices saved ✓' : 'Fiyatlar kaydedildi ✓', 'success');
      renderCostingBody();
    } else {
      toast(en ? 'Save failed' : 'Kaydedilemedi', 'error');
    }
  }).catch(() => toast(en ? 'Save failed' : 'Kaydedilemedi', 'error'));
}
function applyCostsToMenu() {
  const en = adminSectionLang() === 'en';
  const purchase = window._purchase || {};
  let applied = 0;
  const skipped = [];
  try {
    (menu.products || []).forEach(p => {
      const c = computeProductCost(p, purchase);
      if (c.missing.length === 0) { p.cost = c.total; applied++; }
      else {
        const nm = (p.name && (p.name[((typeof state !== 'undefined' && state.lang) || 'tr')] || p.name.tr)) || '?';
        skipped.push(nm);
      }
    });
    if (typeof saveMenuProducts === 'function') saveMenuProducts();
  } catch (e) {}
  toast((en ? 'Applied: ' : 'İşlendi: ') + applied + (skipped.length ? ' • ' + (en ? 'Skipped: ' : 'Atlanan: ') + skipped.slice(0, 3).join(', ') + (skipped.length > 3 ? '…' : '') : ''), applied > 0 ? 'success' : 'error');
  renderCostingBody();
}

// ===== Eski fişler (gün gün arşiv; kasiyerde silinse de burada durur) =====
function renderOldReceipts() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">🧾 ${en ? 'Old Receipts' : 'Eski Fişler'}</h1>
      <p class="page-sub">${en ? 'Pick a day to list its receipts.' : 'Fişlerini görmek için gün seç.'}</p>
      <div id="oldDays"><div class="empty-state">${en ? 'Loading...' : 'Yükleniyor...'}</div></div>
    </div>`;
  fetchSalesHistory(days => {
    const box = document.getElementById('oldDays');
    if (!box) return;
    const en2 = adminSectionLang() === 'en';
    const T = (tr, eng) => en2 ? eng : tr;
    const sorted = (days || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
    if (sorted.length === 0) {
      box.innerHTML = `<div class="empty-state">${T('Kayıtlı satış yok', 'No sales recorded')}</div>`;
      return;
    }
    let html = `<div class="card"><ul class="order-rows">`;
    sorted.forEach(d => {
      html += `<li style="cursor:pointer" onclick="renderOldDay('${d.date}')" title="${T('Fişleri göster', 'Show receipts')}"><span>${escapeHtml(statsDayLabel(d.date))} <span class="q">${d.count} ${T('fiş', 'rcpts')}</span></span><span>${fmtPrice(d.revenue)} →</span></li>`;
    });
    box.innerHTML = html + `</ul></div>`;
  });
}

function renderOldDay(date) {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  el.innerHTML = `
    <div class="dashboard">
      <div class="toolbar"><button class="btn btn-secondary" onclick="renderOldReceipts()">← ${en ? 'Back' : 'Geri'}</button></div>
      <h1 class="page-title">🧾 ${escapeHtml(statsDayLabel(date))}</h1>
      <div id="oldDayBody"><div class="empty-state">${T('Yükleniyor...', 'Loading...')}</div></div>
    </div>`;
  fetch('/api/day/' + encodeURIComponent(date)).then(r => r.json()).then(res => {
    const box = document.getElementById('oldDayBody');
    if (!box) return;
    const recs = (res && res.success && Array.isArray(res.receipts)) ? res.receipts : [];
    if (recs.length === 0) {
      box.innerHTML = `<div class="empty-state">${T('Bu günün fiş detayı yok', 'No receipt details for this day')}</div>`;
      return;
    }
    const tot = recs.reduce((s, r) => s + (Number(r.total) || 0), 0);
    let html = `<div class="card"><h3>${recs.length} ${T('fiş', 'receipts')} • ${fmtPrice(tot)}</h3><div class="grid-2col">`;
    recs.forEach(r => {
      const when = r.paidAt ? new Date(r.paidAt).toLocaleString(en ? 'en-US' : 'tr-TR') : '';
      const items = (r.items || []).map(i => `${i.qty}× ${escapeHtml(i.name)}`).join(', ');
      html += `<div class="order-card"><div class="order-head"><span class="order-table">${T('Masa', 'Table')} ${escapeHtml(String(r.table || '?'))} • #${r.orderId} • 👤 ${escapeHtml(r.person || '?')}</span></div><div class="order-time">🕐 ${escapeHtml(when)} • ${r.method === 'card' ? '💳' : '💵'}</div><div style="font-size:12px;opacity:.8;margin:6px 0">${items}</div><div class="order-total">${T('Toplam', 'Total')}: ${fmtPrice(r.total)}</div></div>`;
    });
    box.innerHTML = html + `</div></div>`;
  }).catch(() => {
    const box = document.getElementById('oldDayBody');
    if (box) box.innerHTML = `<div class="empty-state">${T('Yüklenemedi', 'Failed to load')}</div>`;
  });
}

// ===== Masa QR kodları =====
function qrBaseURL() { try { const b = String((typeof window !== 'undefined' && window.API_BASE) || '').trim().replace(/\/$/, ''); if (b && /^https?:\/\/.+/.test(b)) return b; } catch (e) {} return 'https://kahvebahane-eight.vercel.app'; }
function qrURL(table) { return qrBaseURL() + '/?table=' + encodeURIComponent(table); }
function qrDataURL(table) {
  const qr = qrcode(0, 'M');
  qr.addData(qrURL(table));
  qr.make();
  return qr.createDataURL(6, 4);
}
function renderQR() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  const start = window._qrStart || 1;
  const count = window._qrCount || 20;
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">🔳 ${en ? 'Table QR Codes' : 'Masa QR Kodları'}</h1>
      <p class="page-sub">${en ? 'Print and place on tables. Scanning opens the menu with the table set.' : 'Yazdırıp masalara koy. Okutunca menü o masayla açılır.'}</p>
      <div class="card" style="margin-bottom:20px"><div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:0">
        <label style="font-size:12px;opacity:.75">${en ? 'From table' : 'Başlangıç'}<br /><input id="qrStart" type="number" min="1" max="999" value="${start}" style="width:90px;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /></label>
        <label style="font-size:12px;opacity:.75">${en ? 'Count' : 'Adet'}<br /><input id="qrCount" type="number" min="1" max="100" value="${count}" style="width:90px;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /></label>
        <button class="btn btn-primary" style="margin:0" onclick="buildQRGrid()">🔳 ${en ? 'Generate' : 'Oluştur'}</button>
        <button class="btn btn-secondary" style="margin:0" onclick="printQR(null)">🖨️ ${en ? 'Print All' : 'Tümünü Yazdır'}</button>
      </div></div>
      <div id="qrGrid"></div>
    </div>`;
  buildQRGrid();
}
function qrCurrentTables() {
  const sEl = document.getElementById('qrStart');
  const cEl = document.getElementById('qrCount');
  let start = sEl ? parseInt(sEl.value, 10) : 1;
  let count = cEl ? parseInt(cEl.value, 10) : 20;
  if (!(start >= 1)) start = 1;
  if (!(count >= 1)) count = 1;
  if (count > 100) count = 100;
  window._qrStart = start;
  window._qrCount = count;
  const out = [];
  for (let i = 0; i < count; i++) out.push(String(start + i));
  return out;
}
function buildQRGrid() {
  const box = document.getElementById('qrGrid');
  if (!box || typeof qrcode === 'undefined') {
    if (box) box.innerHTML = `<div class="empty-state">QR lib yok</div>`;
    return;
  }
  const en = adminSectionLang() === 'en';
  const tables = qrCurrentTables();
  let html = `<div class="grid-2col">`;
  tables.forEach(tb => {
    html += `<div class="order-card" style="text-align:center">
      <div class="table-big-title">${en ? 'Table' : 'Masa'} <span>${escapeHtml(tb)}</span></div>
      <img src="${qrDataURL(tb)}" alt="QR ${escapeHtml(tb)}" style="width:200px;height:200px;margin:12px auto;display:block;background:#fff;border-radius:12px" />
      <div style="font-size:11px;opacity:.7;word-break:break-all;margin-bottom:10px">${escapeHtml(qrURL(tb))}</div>
      <div class="order-actions" style="justify-content:center">
        <button class="btn btn-secondary" onclick="downloadQR('${escapeHtml(tb).replace(/'/g, "\\'")}')">⬇ QR</button>
        <button class="btn btn-secondary" onclick="printQR(['${escapeHtml(tb).replace(/'/g, "\\'")}'])">🖨️ ${en ? 'Print' : 'Yazdır'}</button>
      </div>
    </div>`;
  });
  box.innerHTML = html + `</div>`;
}
function downloadQR(table) {
  const a = document.createElement('a');
  a.href = qrDataURL(table);
  a.download = 'masa-' + table + '-qr.gif';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function printQR(tables) {
  const list = tables || qrCurrentTables();
  if (list.length === 0) return;
  const en = adminSectionLang() === 'en';
  let cells = '';
  list.forEach(tb => {
    cells += `<div class="cell"><div class="t">${en ? 'Table' : 'Masa'} ${escapeHtml(tb)}</div><img src="${qrDataURL(tb)}" /><div class="u">Kahvebahane</div></div>`;
  });
  const w = window.open('', '_blank', 'width=900,height=700');
  if (!w) { toast('⛔', 'error'); return; }
  w.document.write('<html><head><title>Masa QR</title><style>'
    + 'body{margin:0;font-family:sans-serif;background:#fff;color:#000;}'
    + '.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:24px;}'
    + '.cell{border:2px dashed #333;border-radius:14px;text-align:center;padding:18px;page-break-inside:avoid;}'
    + '.t{font-size:34px;font-weight:800;margin-bottom:10px;}'
    + '.cell img{width:220px;height:220px;}'
    + '.u{font-size:13px;color:#555;margin-top:8px;}'
    + '@media print{.grid{padding:0;}}'
    + '</style></head><body><div class="grid">' + cells + '</div><script>window.onload=function(){setTimeout(function(){window.print();},300);};</scr' + 'ipt></body></html>');
  w.document.close();
}

// ===== Filtre yönetimi =====
function filterProductCount(fid) {
  try {
    return (menu.products || []).filter(p => {
      if (p.tags && p.tags.indexOf(fid) !== -1) return true;
      if (typeof productHasTag === 'function') return productHasTag(p, fid);
      return false;
    }).length;
  } catch (e) { return 0; }
}
function renderFiltersAdmin() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const filters = (typeof menuFilters === 'function' ? menuFilters() : []);
  const editing = window._filterEditing ? filters.find(f => f.id === window._filterEditing) : null;
  if (!window._filterAssign || !filters.some(f => f.id === window._filterAssign)) {
    window._filterAssign = filters.length ? filters[0].id : null;
  }
  const assignId = window._filterAssign;

  let html = `
    <div class="dashboard">
      <h1 class="page-title">🏷️ ${T('Filtreler', 'Filters')}</h1>
      <p class="page-sub">${T('Müşteri menüsündeki filtre çipleri buradan yönetilir.', 'Manage customer menu filter chips here.')}</p>
      <div class="grid-2col">
      <div class="card"><h3>${T('Mevcut Filtreler', 'Current Filters')}</h3>`;
  if (filters.length === 0) html += `<div class="empty-state">-</div>`;
  filters.forEach(f => {
    html += `<div class="menu-manage-item">
      <div class="mm-info">
        <div class="mm-name">${escapeHtml(f.icon || '🏷️')} ${escapeHtml(f.name.tr)} <span style="color:var(--text-muted)">/ ${escapeHtml(f.name.en)}</span></div>
        <div class="mm-meta">${filterProductCount(f.id)} ${T('ürün', 'products')}</div>
      </div>
      <div class="mm-actions">
        <button class="mini-btn" onclick="editFilter('${escapeHtml(f.id).replace(/'/g, "\\'")}')">✏️ ${T('Düzenle', 'Edit')}</button>
        <button class="mini-btn danger" onclick="deleteFilter('${escapeHtml(f.id).replace(/'/g, "\\'")}')">🗑 ${T('Sil', 'Delete')}</button>
      </div>
    </div>`;
  });
  html += `</div>
      <div class="card"><h3>${editing ? '✏️ ' + T('Filtreyi Düzenle', 'Edit Filter') : '+ ' + T('Yeni Filtre', 'New Filter')}</h3>
        <div class="cat-add-grid">
          <input id="newFilterIcon" placeholder="🏷️ ${T('İkon', 'Icon')}" maxlength="4" value="${editing ? escapeHtml(editing.icon || '') : ''}" />
          <input id="newFilterName" placeholder="${T('Ad (TR)', 'Name (TR)')}" maxlength="30" value="${editing ? escapeHtml(editing.name.tr) : ''}" />
          <input id="newFilterNameEn" placeholder="${T('Ad (EN)', 'Name (EN)')}" maxlength="30" value="${editing ? escapeHtml(editing.name.en) : ''}" />
        </div>
        <div class="toolbar" style="margin-top:10px;margin-bottom:0">
          <button class="btn btn-primary" style="margin:0" onclick="saveFilterForm()">${editing ? T('Kaydet', 'Save') : '+ ' + T('Ekle', 'Add')}</button>
          ${editing ? `<button class="btn btn-secondary" style="margin:0" onclick="cancelFilterEdit()">${T('Vazgeç', 'Cancel')}</button>` : ''}
        </div>
      </div>
      </div>`;

  html += `<div class="card" style="margin-top:20px"><h3>✅ ${T('Filtreye Ürün Ata', 'Assign Products')}</h3>
    <div class="toolbar"><select id="filterAssignSel" onchange="window._filterAssign=this.value;renderFiltersAdmin()" style="width:100%">
      ${filters.map(f => `<option value="${escapeHtml(f.id)}"${f.id === assignId ? ' selected' : ''}>${escapeHtml(f.icon || '')} ${escapeHtml(f.name.tr)}</option>`).join('')}
    </select></div>`;
  if (assignId) {
    const prods = (menu.products || []);
    html += `<div style="display:flex;flex-direction:column;gap:6px;max-height:420px;overflow-y:auto">`;
    const cats = (menu.categories || []);
    cats.forEach(c => {
      const inCat = prods.filter(p => p.cat === c.id);
      if (!inCat.length) return;
      html += `<div style="font-weight:800;margin-top:6px">${c.icon} ${escapeHtml(c.name.tr)}</div>`;
      inCat.forEach(p => {
        const checked = (p.tags && p.tags.indexOf(assignId) !== -1) ||
          (!p.tags && typeof productHasTag === 'function' && productHasTag(p, assignId));
        html += `<label style="display:flex;align-items:center;gap:8px;font-size:.9rem"><input type="checkbox" class="fAssign" value="${p.id}"${checked ? ' checked' : ''} /> ${escapeHtml(p.name.tr)}</label>`;
      });
    });
    html += `</div><div class="toolbar" style="margin-top:12px;margin-bottom:0"><button class="btn btn-success" style="margin:0" onclick="saveFilterAssign()">✅ ${T('Atamayı Kaydet', 'Save Assignment')}</button></div>`;
  }
  html += `</div></div>`;
  el.innerHTML = html;
}
function saveFilterForm() {
  const en = adminSectionLang() === 'en';
  const iconEl = document.getElementById('newFilterIcon');
  const nameEl = document.getElementById('newFilterName');
  const nameEnEl = document.getElementById('newFilterNameEn');
  const icon = ((iconEl && iconEl.value) || '').trim() || '🏷️';
  const name = ((nameEl && nameEl.value) || '').trim();
  const nameEn = ((nameEnEl && nameEnEl.value) || '').trim() || name;
  if (!name) { toast(en ? 'Name required' : 'Ad gerekli', 'error'); return; }
  if (!Array.isArray(menu.filters)) menu.filters = [];
  if (window._filterEditing) {
    const f = menu.filters.find(x => x.id === window._filterEditing);
    if (f) { f.icon = icon; f.name = { tr: name, en: nameEn }; }
    window._filterEditing = null;
    toast(en ? 'Filter updated ✓' : 'Filtre güncellendi ✓', 'success');
  } else {
    menu.filters.push({ id: 'f' + Date.now(), icon, name: { tr: name, en: nameEn } });
    toast(en ? 'Filter added ✓' : 'Filtre eklendi ✓', 'success');
  }
  if (typeof saveMenuProducts === 'function') saveMenuProducts();
  renderFiltersAdmin();
}
function cancelFilterEdit() {
  window._filterEditing = null;
  renderFiltersAdmin();
}
function editFilter(id) {
  window._filterEditing = id;
  renderFiltersAdmin();
}
function deleteFilter(id) {
  const en = adminSectionLang() === 'en';
  if (!window.confirm(en ? 'Delete this filter?' : 'Bu filtre silinsin mi?')) return;
  menu.filters = (menu.filters || []).filter(f => f.id !== id);
  (menu.products || []).forEach(p => {
    if (p.tags) {
      p.tags = p.tags.filter(t => t !== id);
      if (p.tags.length === 0) delete p.tags;
    }
  });
  if (window._filterAssign === id) window._filterAssign = null;
  if (window._filterEditing === id) window._filterEditing = null;
  if (typeof saveMenuProducts === 'function') saveMenuProducts();
  toast(en ? 'Filter deleted ✓' : 'Filtre silindi ✓', 'success');
  renderFiltersAdmin();
}
function saveFilterAssign() {
  const en = adminSectionLang() === 'en';
  const fid = window._filterAssign;
  if (!fid) return;
  const checked = Array.from(document.querySelectorAll('.fAssign:checked')).map(x => Number(x.value));
  // Önce varsayılan eşleşmeleri açık etikete çevir ki kaldırma işlemi tutsun
  (menu.products || []).forEach(p => {
    if (!Array.isArray(p.tags) && typeof productHasTag === 'function' && typeof menuFilters === 'function') {
      const eff = menuFilters().map(f => f.id).filter(fid => productHasTag(p, fid));
      if (eff.length > 0) p.tags = eff;
    }
  });
  (menu.products || []).forEach(p => {
    const has = checked.indexOf(p.id) !== -1;
    let tags = Array.isArray(p.tags) ? p.tags.slice() : [];
    if (has && tags.indexOf(fid) === -1) tags.push(fid);
    if (!has) tags = tags.filter(t => t !== fid);
    if (tags.length > 0) p.tags = tags;
    else delete p.tags;
  });
  if (typeof saveMenuProducts === 'function') saveMenuProducts();
  toast(en ? 'Assignment saved ✓' : 'Atama kaydedildi ✓', 'success');
  renderFiltersAdmin();
}

// ===== Stok takibi =====
function ingStockKind(name) {
  let w = false, pcs = false;
  try {
    ((typeof menu !== 'undefined' && menu.products) || []).forEach(p => {
      (p.ingredients || []).forEach(x => {
        if (x && x.name === name) {
          if (x.unit === 'adet') pcs = true;
          else w = true;
        }
      });
    });
  } catch (e) {}
  if (w && pcs) return 'both';
  if (pcs) return 'pcs';
  return 'w';
}
function fmtStockW(gr) {
  const g = Number(gr) || 0;
  if (g >= 1000) return (Math.round(g / 10) / 100).toLocaleString('tr-TR') + ' kg';
  return (Math.round(g * 100) / 100).toLocaleString('tr-TR') + ' gr';
}
function fetchStocks(cb) {
  fetch('/api/stocks').then(r => r.json()).then(res => {
    window._stockLevels = (res && res.success && res.levels) ? res.levels : {};
    window._stockThresholds = (res && res.success && res.thresholds) ? res.thresholds : {};
    if (cb) cb();
  }).catch(() => { if (cb) cb(); });
}
function stockStatus(name, kind) {
  const lv = (window._stockLevels || {})[name] || { w: 0, pcs: 0 };
  const th = (window._stockThresholds || {})[name] || { w: 0, pcs: 0 };
  const check = (qty, lim) => {
    if (qty <= 0) return 'out';
    if (lim > 0 && qty <= lim) return 'low';
    return 'ok';
  };
  const parts = [];
  if (kind === 'w' || kind === 'both') parts.push(check(Number(lv.w) || 0, Number(th.w) || 0));
  if (kind === 'pcs' || kind === 'both') parts.push(check(Number(lv.pcs) || 0, Number(th.pcs) || 0));
  if (parts.includes('out')) return 'out';
  if (parts.includes('low')) return 'low';
  return 'ok';
}
function renderStock() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">📦 ${en ? 'Stock' : 'Stok Takibi'}</h1>
      <p class="page-sub">${en ? 'Paid orders deduct automatically.' : 'Ödenen siparişler stoğu otomatik düşer.'}</p>
      <div class="toolbar"><button class="btn btn-secondary" onclick="renderStock()">↻ ${en ? 'Refresh' : 'Yenile'}</button></div>
      <div id="stockBody"><div class="empty-state">${en ? 'Loading...' : 'Yükleniyor...'}</div></div>
    </div>`;
  fetchStocks(() => renderStockBody());
}
function renderStockBody() {
  const box = document.getElementById('stockBody');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const ings = collectMenuIngredients();
  const levels = window._stockLevels || {};
  const thresholds = window._stockThresholds || {};
  const stBadge = (st) => st === 'out'
    ? `<span class="pill" style="background:rgba(239,68,68,.2);color:var(--danger)">⛔ ${T('Bitti', 'Out')}</span>`
    : st === 'low'
      ? `<span class="pill" style="background:rgba(245,158,11,.2);color:var(--primary)">⚠️ ${T('Kritik', 'Low')}</span>`
      : `<span class="pill paid">✅ ${T('OK', 'OK')}</span>`;
  const lowCount = ings.filter(nm => stockStatus(nm, ingStockKind(nm)) !== 'ok').length;

  let html = '';
  if (lowCount > 0) {
    html += `<div class="card" style="margin-bottom:20px;border-color:var(--danger)"><h3>⚠️ ${lowCount} ${T('malzemede stok uyarısı', 'items need attention')}</h3></div>`;
  }
  html += `<div class="card"><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px">
    <thead><tr style="text-align:left;opacity:.65">
      <th style="padding:6px 8px 6px 0">${T('Malzeme', 'Ingredient')}</th>
      <th style="padding:6px 8px">${T('Stok', 'Stock')}</th>
      <th style="padding:6px 8px">${T('Kritik Eşik', 'Low Limit')}</th>
      <th style="padding:6px 8px">${T('Durum', 'Status')}</th>
      <th style="padding:6px 0 6px 8px">${T('Stok Ekle', 'Add')}</th>
    </tr></thead><tbody id="stockTableBody">`;
  ings.forEach(nm => {
    const kind = ingStockKind(nm);
    const lv = levels[nm] || { w: 0, pcs: 0 };
    const th = thresholds[nm] || { w: 0, pcs: 0 };
    const esc = escapeHtml(nm).replace(/"/g, '&quot;');
    let stockCell = '', thrCell = '', addCell = '';
    if (kind === 'w' || kind === 'both') {
      stockCell += `<div>${fmtStockW(lv.w)}</div>`;
      thrCell += `<div style="display:flex;align-items:center;gap:4px"><input class="thr-w" data-ing="${esc}" type="number" min="0" step="any" placeholder="kg" value="${th.w ? Math.round(Number(th.w) / 10) / 100 : ''}" style="width:80px;padding:7px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /><span style="font-size:11px;opacity:.7">kg</span></div>`;
      addCell += `<div style="display:flex;gap:4px"><input class="add-w" data-ing="${esc}" type="number" min="0" step="any" placeholder="+kg" style="width:80px;padding:7px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /></div>`;
    }
    if (kind === 'pcs' || kind === 'both') {
      stockCell += `<div>${Number(lv.pcs) || 0} ${T('adet', 'pcs')}</div>`;
      thrCell += `<div style="display:flex;align-items:center;gap:4px;margin-top:4px"><input class="thr-pcs" data-ing="${esc}" type="number" min="0" step="1" placeholder="adet" value="${th.pcs || ''}" style="width:80px;padding:7px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /><span style="font-size:11px;opacity:.7">${T('adet', 'pcs')}</span></div>`;
      addCell += `<div style="display:flex;gap:4px;margin-top:4px"><input class="add-pcs" data-ing="${esc}" type="number" min="0" step="1" placeholder="+adet" style="width:80px;padding:7px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /></div>`;
    }
    addCell += `<button class="mini-btn" style="margin-top:6px" onclick="stockAdd(this)" data-ing="${esc}">+ ${T('Ekle', 'Add')}</button>`;
    html += `<tr data-ing="${esc}" style="border-top:1px solid rgba(128,128,128,.2)">
      <td style="padding:7px 8px 7px 0;font-weight:700">${escapeHtml(nm)}</td>
      <td style="padding:7px 8px">${stockCell}</td>
      <td style="padding:7px 8px">${thrCell}</td>
      <td style="padding:7px 8px">${stBadge(stockStatus(nm, kind))}</td>
      <td style="padding:7px 0 7px 8px">${addCell}</td>
    </tr>`;
  });
  html += `</tbody></table></div>
    <div class="toolbar" style="margin-top:12px;margin-bottom:0"><button class="btn btn-primary" style="margin:0" onclick="saveThresholds()">💾 ${T('Eşikleri Kaydet', 'Save Limits')}</button></div></div>`;
  box.innerHTML = html;
}
function stockAdd(btn) {
  const en = adminSectionLang() === 'en';
  const row = btn ? btn.closest('tr') : null;
  if (!row) return;
  const name = btn.dataset.ing;
  const wEl = row.querySelector('.add-w');
  const pcsEl = row.querySelector('.add-pcs');
  const wKg = wEl ? Number(String(wEl.value || '').replace(',', '.')) || 0 : 0;
  const pcs = pcsEl ? Math.floor(Number(pcsEl.value || '') || 0) : 0;
  if (wKg <= 0 && pcs <= 0) return;
  fetch('/api/stocks/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, w: Math.round(wKg * 1000 * 100) / 100, pcs })
  }).then(r => r.json()).then(res => {
    if (res && res.success) {
      window._stockLevels = window._stockLevels || {};
      window._stockLevels[name] = res.level;
      holdThresholdInputs();
      renderStockBody();
      toast(en ? 'Stock added ✓' : 'Stok eklendi ✓', 'success');
    } else {
      toast(en ? 'Failed' : 'Olmadı', 'error');
    }
  }).catch(() => toast(en ? 'Failed' : 'Olmadı', 'error'));
}
function holdThresholdInputs() {
  try {
    window._stockThresholds = window._stockThresholds || {};
    document.querySelectorAll('.thr-w').forEach(el => {
      const nm = el.dataset.ing;
      const v = Number(String(el.value || '').replace(',', '.')) || 0;
      if (!window._stockThresholds[nm]) window._stockThresholds[nm] = { w: 0, pcs: 0 };
      window._stockThresholds[nm].w = Math.round(v * 1000 * 100) / 100;
    });
    document.querySelectorAll('.thr-pcs').forEach(el => {
      const nm = el.dataset.ing;
      const v = Math.floor(Number(el.value || '') || 0);
      if (!window._stockThresholds[nm]) window._stockThresholds[nm] = { w: 0, pcs: 0 };
      window._stockThresholds[nm].pcs = v;
    });
  } catch (e) {}
}
function saveThresholds() {
  const en = adminSectionLang() === 'en';
  holdThresholdInputs();
  fetch('/api/stocks', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ thresholds: window._stockThresholds || {} })
  }).then(r => r.json()).then(res => {
    if (res && res.success) {
      toast(en ? 'Limits saved ✓' : 'Eşikler kaydedildi ✓', 'success');
      renderStockBody();
    } else {
      toast(en ? 'Failed' : 'Olmadı', 'error');
    }
  }).catch(() => toast(en ? 'Failed' : 'Olmadı', 'error'));
}

// ===== Giderler + Net kâr =====
function fetchExpenses(cb) {
  fetch('/api/expenses').then(r => r.json()).then(res => {
    window._expenses = (res && res.success && Array.isArray(res.items)) ? res.items : [];
    if (cb) cb();
  }).catch(() => { if (cb) cb(); });
}
function renderExpenses() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">💸 ${en ? 'Expenses & Net Profit' : 'Giderler ve Net Kâr'}</h1>
      <p class="page-sub">${en ? 'Fixed and one-time costs, profit by period.' : 'Sabit ve tek seferlik giderler, dönemlik net kâr.'}</p>
      <div class="toolbar"><button class="btn btn-secondary" onclick="renderExpenses()">↻ ${en ? 'Refresh' : 'Yenile'}</button></div>
      <div id="expBody"><div class="empty-state">${en ? 'Loading...' : 'Yükleniyor...'}</div></div>
    </div>`;
  fetchExpenses(() => fetchSalesHistory(days => renderExpensesBody(days || [])));
}
function renderExpensesBody(days) {
  const box = document.getElementById('expBody');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const items = window._expenses || [];
  const monthly = items.filter(e => e.kind === 'monthly');
  const once = items.filter(e => e.kind !== 'monthly');
  if (!window._profitTab) window._profitTab = 'day';

  let html = `<div class="grid-2col" style="margin-bottom:20px">
    <div class="card"><h3>📌 ${T('Aylık Sabitler', 'Monthly Fixed')}</h3><ul class="order-rows" id="expMonthly">`;
  if (monthly.length === 0) html += `<div class="orders-empty">-</div>`;
  monthly.forEach(e => {
    html += `<li><span>${escapeHtml(e.name)}</span><span>${fmtPrice(e.amount)} <button class="mini-btn danger" onclick="deleteExpense(${e.id})">✕</button></span></li>`;
  });
  html += `</ul></div>
    <div class="card"><h3>🧾 ${T('Tek Seferlik', 'One-time')}</h3><ul class="order-rows">`;
  if (once.length === 0) html += `<div class="orders-empty">-</div>`;
  once.slice(0, 30).forEach(e => {
    html += `<li><span>${escapeHtml(e.name)} <span class="q">${escapeHtml(e.date || '')}</span></span><span>${fmtPrice(e.amount)} <button class="mini-btn danger" onclick="deleteExpense(${e.id})">✕</button></span></li>`;
  });
  html += `</ul></div></div>`;

  html += `<div class="card" style="margin-bottom:20px"><h3>+ ${T('Gider Ekle', 'Add Expense')}</h3>
    <div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap;margin:0">
      <input id="expName" placeholder="${T('Ad (kira, maaş...)', 'Name (rent, salary...)')}" maxlength="60" style="flex:2;min-width:140px;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <input id="expAmount" type="number" min="0" step="any" placeholder="₺" style="flex:1;min-width:100px;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <select id="expKind" style="padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg);color:var(--text)">
        <option value="monthly">${T('Aylık sabit', 'Monthly')}</option>
        <option value="once">${T('Tek seferlik', 'One-time')}</option>
      </select>
      <input id="expDate" type="date" style="padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <button class="btn btn-primary" style="margin:0" onclick="addExpense()">+ ${T('Ekle', 'Add')}</button>
    </div></div>`;

  html += `<div class="card"><h3>📈 ${T('Net Kâr Raporu', 'Net Profit Report')}</h3>
    <div class="toolbar">${[['day', '📅 ' + T('Günlük', 'Daily')], ['month', '🗓️ ' + T('Aylık', 'Monthly')], ['year', '📆 ' + T('Yıllık', 'Yearly')], ['range', '🔎 ' + T('Aralık', 'Range')]].map(([id, label]) =>
      `<button class="btn ${window._profitTab === id ? 'btn-primary' : 'btn-secondary'}" onclick="renderProfitTab('${id}')">${label}</button>`).join('')}</div>
    <div id="profitBody"></div></div>`;

  box.innerHTML = html;
  const today = (days || []).map(d => d.date).sort().reverse()[0] || new Date().toISOString().slice(0, 10);
  try {
    const dEl = document.getElementById('expDate');
    if (dEl && !dEl.value) dEl.value = today;
  } catch (e) {}
  renderProfitBody(days || []);
}
function renderProfitTab(tab) {
  if (tab && tab !== window._profitTab) { window._profitTab = tab; window._profitSel = null; }
  if (!window._profitTab) window._profitTab = 'day';
  fetchSalesHistory(days => {
    if (document.getElementById('profitBody')) renderProfitBody(days || []);
    else if (document.getElementById('expBody')) renderExpensesBody(days || []);
  });
}
function profitForDays(dayList) {
  const costs = (typeof productCostMap === 'function') ? productCostMap() : {};
  let revenue = 0, cogs = 0, unknownQty = 0;
  const perProd = {};
  (dayList || []).forEach(d => {
    revenue += Number(d.revenue) || 0;
    Object.entries(d.products || {}).forEach(([key, p]) => {
      const qty = Number(p.qty) || 0;
      const c = costs[key];
      if (c != null) {
        cogs += qty * c;
        if (!perProd[key]) perProd[key] = { name: p.name, qty: 0, cogs: 0 };
        perProd[key].qty += qty;
        perProd[key].cogs += qty * c;
      } else {
        unknownQty += qty;
      }
    });
  });
  const months = [...new Set((dayList || []).map(d => String(d.date).slice(0, 7)))];
  const exp = window._expenses || [];
  const monthlyItems = exp.filter(e => e.kind === 'monthly');
  const monthlyFull = monthlyItems.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const monthlyShare = Math.round(monthlyFull * dayList.length / 30 * 100) / 100;
  const onceItems = exp.filter(e => e.kind !== 'monthly' && dayList.some(d => d.date === e.date));
  const onceTotal = onceItems.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  return { revenue, cogs: Math.round(cogs * 100) / 100, unknownQty, perProd, onceItems, onceTotal, monthlyItems, monthlyFull, monthlyShare, months };
}
function renderProfitBody(days) {
  const box = document.getElementById('profitBody');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const tab = window._profitTab || 'day';
  const sorted = (days || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  if (sorted.length === 0) {
    box.innerHTML = `<div class="empty-state">${T('Kayıtlı satış yok', 'No sales recorded')}</div>`;
    return;
  }
  const periodLabel = (k) => tab === 'month' ? statsMonthLabel(k) : tab === 'year' ? k : statsDayLabel(k);

  const showReport = (dayList, title) => {
    const P = profitForDays(dayList);
    const expTotal = Math.round((P.onceTotal + P.monthlyShare) * 100) / 100;
    const net = Math.round((P.revenue - P.cogs - expTotal) * 100) / 100;
    const margin = P.revenue > 0 ? Math.round(net / P.revenue * 100) : 0;
    const top = Object.values(P.perProd).sort((a, b) => b.cogs - a.cogs).slice(0, 8);
    let html = `<h3 style="margin-bottom:12px">${escapeHtml(title)}</h3>
      <div class="grid-2col" style="margin-bottom:16px">
        ${statCard('💰 ' + T('Ciro', 'Revenue'), fmtPrice(P.revenue), '')}
        ${statCard('🧂 ' + T('Malzeme Maliyeti', 'COGS'), fmtPrice(P.cogs), P.unknownQty > 0 ? P.unknownQty + T(' adet maliyetsiz', ' items w/o cost') : '')}
        ${statCard('💸 ' + T('Giderler', 'Expenses'), fmtPrice(expTotal), T('sabit', 'fixed') + ' ' + fmtPrice(P.monthlyShare) + ' + ' + T('tek seferlik', 'one-time') + ' ' + fmtPrice(P.onceTotal))}
        ${statCard((net >= 0 ? '✅ ' : '🔻 ') + T('Net Kâr', 'Net Profit'), fmtPrice(net), '%' + margin)}
      </div>`;
    if (top.length > 0) {
      html += `<h3 style="margin-bottom:8px">${T('En yüksek maliyetli ürünler', 'Top cost products')}</h3><ul class="order-rows" style="margin-bottom:16px">`;
      top.forEach(p => { html += `<li><span>${escapeHtml(p.name)} <span class="q">${p.qty}×</span></span><span>${fmtPrice(Math.round(p.cogs))}</span></li>`; });
      html += `</ul>`;
    }
    if (P.onceItems.length > 0 || P.monthlyItems.length > 0) {
      html += `<h3 style="margin-bottom:8px">${T('Dönem giderleri', 'Period expenses')}</h3><ul class="order-rows">`;
      P.monthlyItems.forEach(e => { html += `<li><span>📌 ${escapeHtml(e.name)} <span class="q">${T('aylık pay', 'monthly share')}</span></span><span>${fmtPrice(Math.round(P.monthlyFull * dayList.length / 30))}</span></li>`; });
      P.onceItems.forEach(e => { html += `<li><span>🧾 ${escapeHtml(e.name)} <span class="q">${escapeHtml(e.date || '')}</span></span><span>${fmtPrice(e.amount)}</span></li>`; });
      html += `</ul>`;
    }
    return html;
  };

  if (tab === 'range') {
    const min = sorted[0].date, max = sorted[sorted.length - 1].date;
    if (!window._profitStart) window._profitStart = min;
    if (!window._profitEnd) window._profitEnd = max;
    const s = window._profitStart, e = window._profitEnd;
    box.innerHTML = `<div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap">
      <input type="date" id="profitStart" value="${s}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <span>—</span>
      <input type="date" id="profitEnd" value="${e}" min="${min}" max="${max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
      <button class="btn btn-primary" style="margin:0" onclick="window._profitStart=document.getElementById('profitStart').value;window._profitEnd=document.getElementById('profitEnd').value;renderProfitBody(window._salesHistory||[])">🔎 ${T('Listele', 'Show')}</button>
    </div><div id="profitRangeOut"></div>`;
    const inner = document.getElementById('profitRangeOut');
    if (inner) {
      const tmp = document.createElement('div');
      tmp.innerHTML = showReport(sorted.filter(d => d.date >= s && d.date <= e), s + ' → ' + e);
      inner.innerHTML = tmp.innerHTML;
    }
    return;
  }

  const groups = {};
  sorted.forEach(d => {
    const key = tab === 'month' ? String(d.date).slice(0, 7) : tab === 'year' ? String(d.date).slice(0, 4) : d.date;
    (groups[key] = groups[key] || []).push(d);
  });
  const keys = Object.keys(groups).sort().reverse();
  if (!window._profitSel || !groups[window._profitSel]) window._profitSel = keys[0];
  const sel = window._profitSel;
  box.innerHTML = `<div class="toolbar"><select id="profitSel" onchange="window._profitSel=this.value;renderProfitBody(window._salesHistory||[])" style="width:100%;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)">
    ${keys.map(k => `<option value="${k}"${k === sel ? ' selected' : ''}>${escapeHtml(periodLabel(k))}</option>`).join('')}
  </select></div>` + showReport(groups[sel], periodLabel(sel));
}
function addExpense() {
  const en = adminSectionLang() === 'en';
  const nameEl = document.getElementById('expName');
  const amtEl = document.getElementById('expAmount');
  const kindEl = document.getElementById('expKind');
  const dateEl = document.getElementById('expDate');
  const name = nameEl ? nameEl.value.trim() : '';
  const amount = amtEl ? Number(String(amtEl.value || '').replace(',', '.')) : 0;
  if (!name || !(amount > 0)) { toast(en ? 'Name and amount required' : 'Ad ve tutar gerekli', 'error'); return; }
  fetch('/api/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, amount, kind: kindEl ? kindEl.value : 'once', date: dateEl ? dateEl.value : undefined })
  }).then(r => r.json()).then(res => {
    if (res && res.success) {
      window._expenses = window._expenses || [];
      window._expenses.unshift(res.item);
      toast(en ? 'Expense added ✓' : 'Gider eklendi ✓', 'success');
      renderExpensesBody(window._salesHistory || []);
    } else {
      toast((res && res.message) || (en ? 'Failed' : 'Olmadı'), 'error');
    }
  }).catch(() => toast(en ? 'Failed' : 'Olmadı', 'error'));
}
function deleteExpense(id) {
  const en = adminSectionLang() === 'en';
  if (!window.confirm(en ? 'Delete this expense?' : 'Bu gider silinsin mi?')) return;
  fetch('/api/expenses/' + id, { method: 'DELETE' }).then(r => r.json()).then(() => {
    window._expenses = (window._expenses || []).filter(e => e.id !== id);
    toast(en ? 'Deleted ✓' : 'Silindi ✓', 'success');
    renderExpensesBody(window._salesHistory || []);
  }).catch(() => toast(en ? 'Failed' : 'Olmadı', 'error'));
}

// ===== Raporlar (Excel indir / PDF yazdır) =====
function renderReports() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  if (!window._repType) window._repType = 'summary';
  if (!window._repTab) window._repTab = 'day';
  const T = (tr, eng) => en ? eng : tr;
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">📥 ${T('Raporlar', 'Reports')}</h1>
      <p class="page-sub">${T('Excel indir ya da yazdırıp PDF kaydet.', 'Download Excel or print to PDF.')}</p>
      <div class="card" style="margin-bottom:20px">
        <div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
          <select id="repType" onchange="window._repType=this.value;renderReportPreview(window._salesHistory||[])" style="padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg);color:var(--text)">
            <option value="summary"${window._repType === 'summary' ? ' selected' : ''}>📅 ${T('Satış Özeti', 'Sales Summary')}</option>
            <option value="products"${window._repType === 'products' ? ' selected' : ''}>🏆 ${T('Ürün Satışları', 'Product Sales')}</option>
            <option value="receipts"${window._repType === 'receipts' ? ' selected' : ''}>🧾 ${T('Fiş Listesi', 'Receipts')}</option>
            <option value="eod"${window._repType === 'eod' ? ' selected' : ''}>🌙 ${T('Gün Sonu', 'End of Day')}</option>
          </select>
          ${[['day', '📅 ' + T('Günlük', 'Daily')], ['month', '🗓️ ' + T('Aylık', 'Monthly')], ['year', '📆 ' + T('Yıllık', 'Yearly')], ['range', '🔎 ' + T('Aralık', 'Range')]].map(([id, label]) =>
            `<button class="btn ${window._repTab === id ? 'btn-primary' : 'btn-secondary'}" style="margin:0" data-tabval="${id}" onclick="window._repTab='${id}';window._repSel=null;paintTabs('[data-tabval]',window._repTab);renderReportPreview(window._salesHistory||[])">${label}</button>`).join('')}
        </div>
        <div id="repPeriod"></div>
        <div class="toolbar" style="margin-top:12px;margin-bottom:0">
          <button class="btn btn-success" style="margin:0" onclick="downloadExcel()">📊 Excel</button>
          <button class="btn btn-secondary" style="margin:0" onclick="printReport()">🖨️ PDF</button>
        </div>
      </div>
      <div class="card"><div id="repPreview"><div class="empty-state">${T('Yükleniyor...', 'Loading...')}</div></div></div>
    </div>`;
  fetchSalesHistory(days => renderReportPreview(days || []));
}

function reportPeriodDays(allDays) {
  const tab = window._repTab || 'day';
  const sorted = (allDays || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  if (sorted.length === 0) return { label: '', days: [] };
  const labelOf = (k) => tab === 'month' ? statsMonthLabel(k) : tab === 'year' ? k : statsDayLabel(k);
  if (tab === 'range') {
    const min = sorted[0].date, max = sorted[sorted.length - 1].date;
    if (!window._repStart) window._repStart = min;
    if (!window._repEnd) window._repEnd = max;
    const s = window._repStart, e = window._repEnd;
    return {
      label: s + ' → ' + e, range: true, min, max, s, e,
      days: sorted.filter(d => d.date >= s && d.date <= e)
    };
  }
  const groups = {};
  sorted.forEach(d => {
    const key = tab === 'month' ? String(d.date).slice(0, 7) : tab === 'year' ? String(d.date).slice(0, 4) : d.date;
    (groups[key] = groups[key] || []).push(d);
  });
  const keys = Object.keys(groups).sort().reverse();
  if (!window._repSel || !groups[window._repSel]) window._repSel = keys[0];
  return { label: labelOf(window._repSel), keys, sel: window._repSel, labelOf, days: groups[window._repSel] };
}

function fetchPeriodReceipts(dayList, cb) {
  const keys = (dayList || []).map(d => d.date);
  if (keys.length === 0) { cb([]); return; }
  Promise.all(keys.map(k =>
    fetch('/api/day/' + encodeURIComponent(k)).then(r => r.json())
      .then(j => (j && j.success && Array.isArray(j.receipts)) ? j.receipts : [])
      .catch(() => [])
  )).then(arr => {
    const seen = {};
    const out = [];
    arr.flat().forEach(r => {
      const key = r.id + ':' + (r.paidAt || '');
      if (!seen[key]) { seen[key] = true; out.push(r); }
    });
    cb(out);
  }).catch(() => cb([]));
}

function renderReportPreview(allDays) {
  const per = reportPeriodDays(allDays || []);
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const perBox = document.getElementById('repPeriod');
  if (perBox) {
    if (per.range) {
      perBox.innerHTML = `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <input type="date" id="repStart" value="${per.s}" min="${per.min}" max="${per.max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
        <span>—</span>
        <input type="date" id="repEnd" value="${per.e}" min="${per.min}" max="${per.max}" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" />
        <button class="btn btn-primary" style="margin:0" onclick="window._repStart=document.getElementById('repStart').value;window._repEnd=document.getElementById('repEnd').value;renderReportPreview(window._salesHistory||[])">🔎 ${T('Listele', 'Show')}</button>
      </div>`;
    } else if (per.keys) {
      perBox.innerHTML = `<select id="repSel" onchange="window._repSel=this.value;renderReportPreview(window._salesHistory||[])" style="width:100%;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)">
        ${per.keys.map(k => `<option value="${k}"${k === per.sel ? ' selected' : ''}>${escapeHtml(per.labelOf(k))}</option>`).join('')}
      </select>`;
    } else {
      perBox.innerHTML = '';
    }
  }
  const type = window._repType || 'summary';
  if (type === 'eod') {
    const days = (allDays || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
    if (days.length === 0) {
      if (perBox) perBox.innerHTML = '';
      showEODData([], '');
      return;
    }
    if (!window._eodDate || !days.some(d => d.date === window._eodDate)) window._eodDate = days[days.length - 1].date;
    if (perBox) {
      perBox.innerHTML = `<select id="eodSel" onchange="window._eodDate=this.value;renderReportPreview(window._salesHistory||[])" style="width:100%;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)">
        ${days.slice().reverse().map(d => `<option value="${d.date}"${d.date === window._eodDate ? ' selected' : ''}>${escapeHtml(statsDayLabel(d.date))} • ${fmtPrice(d.revenue)}</option>`).join('')}
      </select>`;
    }
    buildEOD(window._eodDate);
    return;
  }
  if (type === 'receipts') {
    fetchPeriodReceipts(per.days, recs => showReportData(buildReceiptRows(recs), per.label, type));
  } else if (type === 'products') {
    showReportData(buildProductRows(per.days), per.label, type);
  } else {
    showReportData(buildSummaryRows(per.days), per.label, type);
  }
}

function buildSummaryRows(dayList) {
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const headers = [T('Tarih', 'Date'), T('Fiş', 'Receipts'), T('Ürün', 'Items'), T('Ciro', 'Revenue'), T('Nakit', 'Cash'), T('Kart', 'Card')];
  const rows = (dayList || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1)).map(d => [
    d.date, d.count, d.items, d.revenue, d.cash, d.card
  ]);
  const tot = (i) => rows.reduce((s, r) => s + (Number(r[i]) || 0), 0);
  if (rows.length > 0) rows.push([T('TOPLAM', 'TOTAL'), tot(1), tot(2), tot(3), tot(4), tot(5)]);
  return { headers, rows };
}

function buildProductRows(dayList) {
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const costs = (typeof productCostMap === 'function') ? productCostMap() : {};
  const map = {};
  (dayList || []).forEach(d => Object.entries(d.products || {}).forEach(([key, p]) => {
    if (!map[key]) map[key] = { name: p.name, qty: 0, revenue: 0 };
    map[key].qty += Number(p.qty) || 0;
    map[key].revenue += Number(p.revenue) || 0;
  }));
  const list = Object.entries(map).map(([key, p]) => ({ key, ...p })).sort((a, b) => b.qty - a.qty);
  const hasCost = list.some(p => costs[p.key] != null);
  const headers = hasCost
    ? [T('Ürün', 'Product'), T('Adet', 'Qty'), T('Ciro', 'Revenue'), T('Maliyet', 'Cost'), T('Kâr', 'Profit')]
    : [T('Ürün', 'Product'), T('Adet', 'Qty'), T('Ciro', 'Revenue')];
  const rows = list.map(p => {
    const base = [p.name, p.qty, p.revenue];
    if (hasCost) {
      const c = costs[p.key];
      base.push(c != null ? Math.round(p.qty * c * 100) / 100 : '-', c != null ? Math.round((p.revenue - p.qty * c) * 100) / 100 : '-');
    }
    return base;
  });
  return { headers, rows };
}

function buildReceiptRows(recs) {
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  const headers = [T('Tarih/Saat', 'Date/Time'), T('Masa', 'Table'), T('Kişi', 'Person'), T('Ürünler', 'Items'), T('Ödeme', 'Pay'), T('İndirim', 'Discount'), T('Toplam', 'Total')];
  const rows = (recs || []).map(r => [
    r.paidAt ? new Date(r.paidAt).toLocaleString(en ? 'en-US' : 'tr-TR') : '',
    r.table || '',
    r.person || '',
    (r.items || []).map(i => `${i.qty}x ${i.name}`).join(', '),
    r.method === 'card' ? T('Kart', 'Card') : T('Nakit', 'Cash'),
    Number(r.discount) || 0,
    r.total
  ]);
  if (rows.length > 0) {
    rows.push([T('TOPLAM', 'TOTAL'), '', '', '', '', rows.reduce((s, r) => s + (Number(r[5]) || 0), 0), rows.reduce((s, r) => s + (Number(r[6]) || 0), 0)]);
  }
  return { headers, rows };
}

function showReportData(data, label, type) {
  const box = document.getElementById('repPreview');
  if (!box) return;
  window._repData = {
    title: 'Kahvebahane - ' + label,
    file: 'kahvebahane-rapor-' + type + '-' + label.replace(/[^0-9a-zA-ZçğıöşüÇĞİÖŞÜ-]+/g, '_'),
    headers: data.headers,
    rows: data.rows
  };
  if (data.rows.length === 0) {
    const en = adminSectionLang() === 'en';
    box.innerHTML = `<div class="empty-state">${en ? 'No data' : 'Veri yok'}</div>`;
    return;
  }
  let html = `<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px">
    <thead><tr style="text-align:left;opacity:.7">${data.headers.map(h => `<th style="padding:7px 8px;border-bottom:2px solid var(--border)">${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>`;
  data.rows.forEach((r, idx) => {
    const total = idx === data.rows.length - 1 && data.rows.length > 1;
    html += `<tr${total ? ' style="font-weight:800;border-top:2px solid var(--border)"' : ''}>${r.map((c, i) => `<td style="padding:7px 8px;border-top:1px solid rgba(128,128,128,.15);${i === 0 ? '' : 'text-align:right'}">${escapeHtml(String(c))}</td>`).join('')}</tr>`;
  });
  box.innerHTML = html + `</tbody></table></div>`;
}

function downloadExcel() {
  const R = window._repData;
  if (!R) return;
  const tables = repTables(R);
  if (!tables.length) return;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const AMBER = '#F59E0B', DARK = '#292524', ZEBRA = '#FEF3C7', TOTBG = '#E5E7EB', LINE = '#9CA3AF';
  let html = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="UTF-8"></head><body>';
  html += '<div style="font-size:16pt;font-weight:bold;">' + esc(R.title) + '</div><br/>';
  tables.forEach(sec => {
    html += '<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;">';
    if (sec.title) html += '<tr><td colspan="' + sec.headers.length + '" style="background:' + DARK + ';color:#FFFFFF;font-size:12pt;font-weight:bold;">' + esc(sec.title) + '</td></tr>';
    html += '<tr>' + sec.headers.map(h => '<td style="background:' + AMBER + ';color:#000000;font-weight:bold;border:1px solid ' + LINE + ';">' + esc(h) + '</td>').join('') + '</tr>';
    sec.rows.forEach((r, idx) => {
      const total = idx === sec.rows.length - 1 && sec.rows.length > 1 && !R.sections;
      html += '<tr>' + r.map((c, i) => {
        const num = typeof c === 'number';
        let st = 'border:1px solid ' + LINE + ';' + (num ? 'text-align:right;' : '');
        if (total) st += 'font-weight:bold;background:' + TOTBG + ';';
        else if (idx % 2 === 1) st += 'background:' + ZEBRA + ';';
        return '<td style="' + st + '">' + esc(String(c)) + '</td>';
      }).join('') + '</tr>';
    });
    html += '</table><br/>';
  });
  html += '</body></html>';
  const blob = new Blob(['\ufeff' + html], { type: 'application/vnd.ms-excel' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = R.file + '.xls';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { try { URL.revokeObjectURL(a.href); } catch (e) {} a.remove(); }, 1000);
}

function printReport() {
  const R = window._repData;
  if (!R) return;
  const tables = repTables(R);
  if (!tables.length) return;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  let bodyHtml = '';
  tables.forEach(sec => {
    let rowsHtml = '';
    sec.rows.forEach((r, idx) => {
      const total = idx === sec.rows.length - 1 && sec.rows.length > 1 && !R.sections;
      rowsHtml += '<tr' + (total ? ' class="tot"' : '') + '>' + r.map((c, i) => '<td' + (i === 0 ? '' : ' class="r"') + '>' + esc(String(c)) + '</td>').join('') + '</tr>';
    });
    bodyHtml += (sec.title ? '<h2>' + esc(sec.title) + '</h2>' : '')
      + '<table><thead><tr>' + sec.headers.map(h => '<th>' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' + rowsHtml + '</tbody></table>';
  });
  const w = window.open('', '_blank', 'width=900,height=700');
  if (!w) { toast('⛔', 'error'); return; }
  w.document.write('<html><head><title>' + esc(R.title) + '</title><style>'
    + 'body{margin:0;font-family:sans-serif;background:#fff;color:#000;padding:24px;}'
    + 'h1{font-size:18px;margin:0 0 4px;}h2{font-size:14px;margin:18px 0 6px;}p{font-size:12px;color:#555;}'
    + 'table{width:100%;border-collapse:collapse;font-size:12px;margin-top:6px;}'
    + 'th,td{border:1px solid #999;padding:6px 8px;text-align:left;}'
    + 'td.r{text-align:right;}tr.tot{font-weight:bold;background:#f0f0f0;}'
    + '</style></head><body><h1>' + esc(R.title) + '</h1><p>Kahvebahane</p>'
    + bodyHtml
    + '<script>window.onload=function(){setTimeout(function(){window.print();},300);};</scr' + 'ipt></body></html>');
  w.document.close();
}

// ===== Gün sonu raporu (tüm istatistikler, Excel/PDF) =====
function mergeReceiptItems(recs) {
  const map = {};
  (recs || []).forEach(r => (r.items || []).forEach(i => {
    const key = (i.productId != null ? 'id:' + i.productId : 'nm:' + i.name);
    if (!map[key]) map[key] = { name: i.name, cat: i.cat || null, qty: 0, revenue: 0 };
    map[key].qty += Number(i.qty) || 0;
    map[key].revenue += (Number(i.price) || 0) * (Number(i.qty) || 0);
  }));
  return map;
}

function buildEOD(date) {
  const en = adminSectionLang() === 'en';
  const T = (tr, eng) => en ? eng : tr;
  fetchExpenses(() => {
    const days = window._salesHistory || [];
    const rec = days.find(d => d.date === date);
    fetchPeriodReceipts(rec ? [rec] : [], recs => {
      if (!rec && recs.length === 0) { showEODData([], date); return; }
      const costs = (typeof productCostMap === 'function') ? productCostMap() : {};
      const revenue = recs.reduce((s, r) => s + (Number(r.total) || 0), 0);
      const items = recs.reduce((s, r) => s + (r.items || []).reduce((a, i) => a + (Number(i.qty) || 1), 0), 0);
      const cash = recs.filter(r => r.method !== 'card').reduce((s, r) => s + (Number(r.total) || 0), 0);
      const card = recs.filter(r => r.method === 'card').reduce((s, r) => s + (Number(r.total) || 0), 0);
      const disc = recs.reduce((s, r) => s + (Number(r.discount) || 0), 0);
      const avg = recs.length ? Math.round(revenue / recs.length) : 0;

      const merged = mergeReceiptItems(recs);
      const plist = Object.entries(merged).map(([key, p]) => ({ key, ...p })).sort((a, b) => b.qty - a.qty);
      const top10 = plist.slice(0, 10);
      const least10 = plist.slice().reverse().slice(0, 10);
      let cogs = 0;
      plist.forEach(p => { const c = costs[p.key]; if (c != null) cogs += p.qty * c; });
      cogs = Math.round(cogs * 100) / 100;

      const byCat = {};
      plist.forEach(p => {
        const c = p.cat || 'other';
        if (!byCat[c]) byCat[c] = { qty: 0, revenue: 0 };
        byCat[c].qty += p.qty;
        byCat[c].revenue += p.revenue;
      });

      const hours = {};
      recs.forEach(r => {
        const h = (typeof statsHour === 'function') ? statsHour(r.paidAt) : -1;
        if (h < 0) return;
        if (!hours[h]) hours[h] = { n: 0, total: 0 };
        hours[h].n++;
        hours[h].total += Number(r.total) || 0;
      });

      const tables = {};
      recs.forEach(r => {
        const tb = String(r.table || '?');
        if (!tables[tb]) tables[tb] = { n: 0, total: 0 };
        tables[tb].n++;
        tables[tb].total += Number(r.total) || 0;
      });

      const exp = window._expenses || [];
      const monthlyItems = exp.filter(e => e.kind === 'monthly');
      const monthlyFull = monthlyItems.reduce((s, e) => s + (Number(e.amount) || 0), 0);
      const monthlyShare = Math.round(monthlyFull / 30 * 100) / 100;
      const onceItems = exp.filter(e => e.kind !== 'monthly' && e.date === date);
      const onceTotal = onceItems.reduce((s, e) => s + (Number(e.amount) || 0), 0);
      const expTotal = Math.round((onceTotal + monthlyShare) * 100) / 100;
      const net = Math.round((revenue - cogs - expTotal) * 100) / 100;

      const sections = [
        {
          title: '📊 ' + T('Özet', 'Summary'),
          headers: ['', ''],
          rows: [
            [T('Ciro', 'Revenue'), revenue], [T('Fiş', 'Receipts'), recs.length],
            [T('Ürün adedi', 'Items'), items], [T('Ortalama fiş', 'Avg receipt'), avg],
            [T('Nakit', 'Cash'), cash], [T('Kart', 'Card'), card],
            [T('İndirimler', 'Discounts'), disc], [T('Malzeme maliyeti', 'COGS'), cogs],
            [T('Giderler', 'Expenses'), expTotal], [T('Net kâr', 'Net profit'), net]
          ]
        },
        {
          title: '🏆 ' + T('Ürünler', 'Products'),
          headers: [T('Ürün', 'Product'), T('Adet', 'Qty'), T('Birim', 'Unit'), T('Ciro', 'Revenue'), T('Maliyet', 'Cost'), T('Kâr', 'Profit')],
          rows: plist.map(p => {
            const unit = p.qty ? Math.round(p.revenue / p.qty) : 0;
            const c = costs[p.key];
            return [p.name, p.qty, unit, p.revenue, c != null ? Math.round(p.qty * c * 100) / 100 : '-', c != null ? Math.round((p.revenue - p.qty * c) * 100) / 100 : '-'];
          })
        },
        {
          title: '🏆 ' + T('En Çok Satanlar (ilk 10)', 'Best Sellers (top 10)'),
          headers: [T('Ürün', 'Product'), T('Adet', 'Qty'), T('Ciro', 'Revenue')],
          rows: top10.map(p => [p.name, p.qty, p.revenue])
        },
        {
          title: '📉 ' + T('En Az Satanlar (son 10)', 'Least Sellers (bottom 10)'),
          headers: [T('Ürün', 'Product'), T('Adet', 'Qty'), T('Ciro', 'Revenue')],
          rows: least10.map(p => [p.name, p.qty, p.revenue])
        },
        {
          title: '🗂️ ' + T('Kategoriler', 'Categories'),
          headers: [T('Kategori', 'Category'), T('Adet', 'Qty'), T('Ciro', 'Revenue')],
          rows: Object.keys(byCat).sort().map(c => [(typeof statsCatName === 'function' ? statsCatName(c) : c), byCat[c].qty, byCat[c].revenue])
        },
        {
          title: '💳 ' + T('Ödeme Dağılımı', 'Payments'),
          headers: [T('Yöntem', 'Method'), T('Fiş', 'Receipts'), T('Tutar', 'Amount')],
          rows: [
            [T('Nakit', 'Cash'), recs.filter(r => r.method !== 'card').length, cash],
            [T('Kart', 'Card'), recs.filter(r => r.method === 'card').length, card]
          ]
        },
        {
          title: '🕐 ' + T('Saatler', 'Hours'),
          headers: [T('Saat', 'Hour'), T('Fiş', 'Receipts'), T('Ciro', 'Revenue')],
          rows: Object.keys(hours).map(Number).sort((a, b) => a - b).map(h => [String(h).padStart(2, '0') + ':00', hours[h].n, hours[h].total])
        },
        {
          title: '🪑 ' + T('Masalar', 'Tables'),
          headers: [T('Masa', 'Table'), T('Fiş', 'Receipts'), T('Ciro', 'Revenue')],
          rows: Object.keys(tables).sort().map(tb => [tb, tables[tb].n, tables[tb].total])
        },
        {
          title: '💸 ' + T('Giderler', 'Expenses'),
          headers: [T('Gider', 'Expense'), T('Tutar', 'Amount')],
          rows: monthlyItems.map(e => [e.name + ' (' + T('aylık pay', 'monthly share') + ')', Math.round(e.amount / 30 * 100) / 100])
            .concat(onceItems.map(e => [e.name, e.amount]))
        },
        {
          title: '🧾 ' + T('Fişler', 'Receipts'),
          headers: [T('Saat', 'Time'), T('Masa', 'Table'), T('Kişi', 'Person'), T('Ürünler', 'Items'), T('Ödeme', 'Pay'), T('Toplam', 'Total')],
          rows: recs.map(r => [
            r.paidAt ? new Date(r.paidAt).toLocaleTimeString(en ? 'en-US' : 'tr-TR', { hour: '2-digit', minute: '2-digit' }) : '',
            r.table || '', r.person || '',
            (r.items || []).map(i => `${i.qty}x ${i.name}`).join(', '),
            r.method === 'card' ? T('Kart', 'Card') : T('Nakit', 'Cash'), r.total
          ])
        }
      ];
      showEODData(sections, T('Gün Sonu', 'End of Day') + ' ' + statsDayLabel(date));
    });
  });
}

function showEODData(sections, label) {
  const box = document.getElementById('repPreview');
  if (!box) return;
  const en = adminSectionLang() === 'en';
  window._repData = {
    title: 'Kahvebahane - ' + label,
    file: 'kahvebahane-gunsonu-' + label.replace(/[^0-9a-zA-ZçğıöşüÇĞİÖŞÜ-]+/g, '_'),
    sections: sections || []
  };
  if (!sections || sections.length === 0 || sections.every(s => s.rows.length === 0)) {
    box.innerHTML = `<div class="empty-state">${en ? 'No data' : 'Veri yok'}</div>`;
    return;
  }
  let html = '';
  sections.forEach(sec => {
    if (!sec.rows.length) return;
    html += `<h3 style="margin:18px 0 8px">${escapeHtml(sec.title)}</h3><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead><tr style="text-align:left;opacity:.7">${sec.headers.map(h => `<th style="padding:7px 8px;border-bottom:2px solid var(--border)">${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>`;
    sec.rows.forEach(r => {
      html += `<tr>${r.map((c, i) => `<td style="padding:7px 8px;border-top:1px solid rgba(128,128,128,.15);${i === 0 ? '' : 'text-align:right'}">${escapeHtml(String(c))}</td>`).join('')}</tr>`;
    });
    html += `</tbody></table></div>`;
  });
  box.innerHTML = html;
}

function repTables(R) {
  if (R.sections) return R.sections.filter(s => s.rows.length > 0);
  return [{ title: null, headers: R.headers, rows: R.rows }];
}

// Şifre penceresi: giriş yapmadan kapatılamasın (X + dışarı tıklama engelli)
function lockAuthModal() {
  try {
    const m = document.getElementById('authModal');
    if (!m) return;
    const x = m.querySelector('.modal-header .icon-btn');
    if (x) x.style.display = 'none';
    if (!m.dataset.lockHook) {
      m.dataset.lockHook = '1';
      m.addEventListener('click', (e) => {
        if (adminAuthed()) return;
        const t = e.target;
        if ((t && t.id === 'authModal') || (t && t.closest && t.closest('.icon-btn'))) {
          e.stopPropagation();
          e.preventDefault();
        }
      }, true);
    }
  } catch (e) {}
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    try {
      ensureAdminNav();
      refreshAdminNavLabels();
      // Ürün malzeme listesini maliyet bölümündeki özel malzemelerle genişlet
      if (!window._allIngWrapped && typeof allIngNames === 'function') {
        window._allIngWrapped = true;
        const origAllIngNames = allIngNames;
        window.allIngNames = function () {
          const base = origAllIngNames();
          try {
            const extra = [...(window._customIngs || []), ...Object.keys(window._purchase || {})];
            extra.forEach(n => { if (n && base.indexOf(n) === -1) base.push(n); });
          } catch (e) {}
          try { return base.sort((a, b) => String(a).localeCompare(String(b), 'tr')); } catch (e) { return base; }
        };
        try { allIngNames = window.allIngNames; } catch (e) {}
      }
      if (typeof fetchCosts === 'function') fetchCosts();
      // renderAdmin çağrıları aktif bölümü ezmesin (örn. dil değişiminde)
      if (!window._adminRenderWrapped && typeof renderAdmin === 'function') {
        window._adminRenderWrapped = true;
        const origRenderAdmin = renderAdmin;
        window._origRenderAdmin = origRenderAdmin;
        window.renderAdmin = function () {
          if (window.__adminSection === 'product') {
            return origRenderAdmin.apply(this, arguments);
          }
          if (window.__adminSection && window.__adminSection !== 'menu') {
            adminShowSection(window.__adminSection);
            return;
          }
          renderAdminHome();
        };
        try { renderAdmin = window.renderAdmin; } catch (e) {}
      }
      // Açılışta yönetim içeriği değil, sade ana ekran göster
      if ((window.__adminSection || 'menu') === 'menu') renderAdminHome();
      // Dil değişiminde etiketleri tazele
      const langBtn = document.getElementById('langToggle');
      if (langBtn && !langBtn.dataset.adminHook) {
        langBtn.dataset.adminHook = '1';
        langBtn.addEventListener('click', () => setTimeout(refreshAdminNavLabels, 50));
      }
      // Çıkışı kilit ekranına bağla
      if (!window._confirmLogoutWrapped && typeof confirmLogout === 'function') {
        window._confirmLogoutWrapped = true;
        const origConfirmLogout = confirmLogout;
        window.confirmLogout = function () {
          origConfirmLogout.apply(this, arguments);
          setTimeout(lockAdminApp, 60);
        };
        try { confirmLogout = window.confirmLogout; } catch (e) {}
      }
      // Şifre penceresini kilitle: X ve dışarı tıklama ile kapatılamasın
      lockAuthModal();
    } catch (e) {}
  }, 600);
});

// ===== Tüm Verileri Temizle (tehlikeli bolge) =====
function renderWipe() {
  const el = document.getElementById('view-admin');
  if (!el) return;
  const en = adminSectionLang() === 'en';
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">\u{1F9F9} ${en ? 'Wipe All Data' : 'Tüm Verileri Temizle'}</h1>
      <p class="page-sub" style="color:var(--danger)">${en ? 'This deletes ALL orders, receipts, sales history, expenses and stocks. The menu stays. This cannot be undone.' : 'Tüm siparişler, fişler, satış geçmişi, giderler ve stoklar silinir. Menü kalır. Geri dönüşü YOKTUR.'}</p>
      <div class="card" style="border-color:var(--danger);max-width:480px">
        <h3>${en ? 'Step 1: Confirm admin password' : 'Adım 1: Admin şifreni doğrula'}</h3>
        <label class="field"><span>${en ? 'Username' : 'Kullanıcı Adı'}</span><input type="text" id="wipeUser" value="admin" /></label>
        <label class="field"><span>${en ? 'Password' : 'Şifre'}</span><input type="password" id="wipePass" /></label>
        <button class="btn btn-danger btn-block" id="wipeGoBtn" onclick="wipeVerify()">${en ? 'Verify and Continue' : 'Doğrula ve Devam Et'}</button>
        <div id="wipeMsg" style="margin-top:10px"></div>
      </div>
    </div>`;
}

function wipeVerify() {
  const en = adminSectionLang() === 'en';
  const u = (document.getElementById('wipeUser').value || '').trim();
  const pw = document.getElementById('wipePass').value || '';
  const msg = document.getElementById('wipeMsg');
  const btn = document.getElementById('wipeGoBtn');
  if (btn) btn.disabled = true;
  apiFetch('/api/login', { method: 'POST', body: JSON.stringify({ username: u, password: pw }) })
    .then(r => r.json()).then(res => {
      if (!res.success || !res.user || res.user.role !== 'admin') {
        if (msg) msg.innerHTML = '<span style="color:var(--danger)">' + (en ? 'Wrong admin password.' : 'Admin şifresi yanlış.') + '</span>';
        if (btn) btn.disabled = false;
        return;
      }
      if (res.token) {
        try { if (typeof state !== 'undefined') state.token = res.token; localStorage.setItem('kahvebahane_token', res.token); } catch (e) {}
      }
      wipeAsk(0);
    }).catch(() => {
      if (msg) msg.innerHTML = '<span style="color:var(--danger)">' + (en ? 'Server unreachable.' : 'Sunucuya ulaşılamıyor.') + '</span>';
      if (btn) btn.disabled = false;
    });
}

function wipeAsk(step) {
  const en = adminSectionLang() === 'en';
  const qs = en ? [
    'WARNING 1/3: ALL sales history and receipts will be deleted. Continue?',
    'WARNING 2/3: Statistics will show ZERO until new orders arrive. Continue?',
    'WARNING 3/3: LAST CHANCE. Everything (except menu) goes. Really continue?'
  ] : [
    'UYARI 1/3: TÜM satış geçmişi ve fişler silinecek. Devam edilsin mi?',
    'UYARI 2/3: Yeni sipariş gelene kadar istatistikler SIFIR görünecek. Devam edilsin mi?',
    'UYARI 3/3: SON ŞANS. Menü hariç HER ŞEY gider. Gerçekten devam mı?'
  ];
  if (step < qs.length) {
    if (confirm(qs[step])) wipeAsk(step + 1);
    else wipeCancelled();
    return;
  }
  wipeFinal();
}

function wipeCancelled() {
  const en = adminSectionLang() === 'en';
  const msg = document.getElementById('wipeMsg');
  if (msg) msg.innerHTML = '<span>' + (en ? 'Cancelled. Nothing was deleted.' : 'Vazgeçildi. Hiçbir şey silinmedi.') + '</span>';
  const btn = document.getElementById('wipeGoBtn');
  if (btn) btn.disabled = false;
}

function wipeFinal() {
  const en = adminSectionLang() === 'en';
  const el = document.getElementById('view-admin');
  el.innerHTML = `
    <div class="dashboard">
      <h1 class="page-title">\u{1F9F9} ${en ? 'Final confirmation' : 'Son onay'}</h1>
      <p class="page-sub" style="color:var(--danger)">${en ? 'Type SİL below and press the button. This is irreversible.' : 'Aşağıya SİL yaz ve düğmeye bas. Bu işlem geri alınamaz.'}</p>
      <div class="card" style="border-color:var(--danger);max-width:480px">
        <label class="field"><span>SİL</span><input type="text" id="wipeType" placeholder="SİL" /></label>
        <button class="btn btn-danger btn-block" onclick="wipeExecute()">${en ? 'DELETE EVERYTHING' : 'HER ŞEYİ SİL'}</button>
        <div id="wipeMsg2" style="margin-top:10px"></div>
      </div>
    </div>`;
}

function wipeExecute() {
  const en = adminSectionLang() === 'en';
  const v = ((document.getElementById('wipeType').value || '').trim().toLocaleUpperCase('tr-TR'));
  const msg = document.getElementById('wipeMsg2');
  if (v !== 'SİL' && v !== 'SIL') {
    if (msg) msg.innerHTML = '<span style="color:var(--danger)">' + (en ? 'Type SİL to confirm.' : 'Onay için SİL yaz.') + '</span>';
    return;
  }
  if (msg) msg.innerHTML = '<span>' + (en ? 'Deleting...' : 'Siliniyor...') + '</span>';
  apiFetch('/api/factory-reset', { method: 'POST', body: '{}' })
    .then(r => r.json()).then(res => {
      const el = document.getElementById('view-admin');
      if (res.success) {
        el.innerHTML = `
          <div class="dashboard">
            <h1 class="page-title">✅ ${en ? 'Site is now zero' : 'Site sıfırlandı'}</h1>
            <p class="page-sub">${en ? 'All history deleted. Statistics stay at zero until new orders arrive.' : 'Tüm geçmiş silindi. Yeni sipariş gelene kadar istatistikler sıfır durur.'}</p>
            <div class="card" style="max-width:480px"><button class="btn btn-secondary btn-block" onclick="adminShowSection('home')">${en ? 'Back to Home' : 'Ana Menüye Dön'} →</button></div>
          </div>`;
      } else {
        if (msg) msg.innerHTML = '<span style="color:var(--danger)">' + (en ? 'Failed.' : 'Silinemedi.') + '</span>';
      }
    }).catch(() => {
      if (msg) msg.innerHTML = '<span style="color:var(--danger)">' + (en ? 'Server unreachable.' : 'Sunucuya ulaşılamıyor.') + '</span>';
    });
}
