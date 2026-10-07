// ===== İ18n =====
const I18N = {
  tr: {
    'nav.menu': 'Menü', 'nav.customer': 'Müşteri Modu', 'nav.cashier': 'Kasiyer Modu', 'nav.admin': 'Admin Modu',
    'customer.welcome': 'Kahvebahane\'ye Hoş Geldiniz', 'customer.subtitle': 'QR kodunuzu tarayarak menüden sipariş verebilirsiniz.',
    'customer.table': 'Masa:', 'customer.tableInput': 'Masa numaranızı girin:',
    'cart.title': 'Sepetim', 'cart.clear': 'Temizle', 'cart.subtotal': 'Ara Toplam', 'cart.total': 'Toplam',
    'cart.createOrder': 'Sipariş Oluştur', 'cart.empty': 'Sepetiniz boş', 'cart.note': 'Sipariş notunuz...',
    'people.title': 'Masadaki İsimler', 'people.hint': 'Ürünleri sürükleyip kişinin altına bırakın',
    'people.unassigned': 'Atanmamış', 'people.addPlaceholder': '+ İsim Ekle...',
    'people.yours': 'Sizin sepetiniz', 'people.back': 'Atanmamışa al',
    'orders.title': 'Masa Siparişleri', 'orders.noOrders': 'Henüz sipariş verilmedi',
    'orders.unnamed': 'İsimsiz', 'orders.refresh': 'Yenile', 'orders.paid': 'Ödenen', 'orders.nameLabel': 'Adınız...',
    'auth.title': 'Giriş Yap', 'auth.username': 'Kullanıcı Adı', 'auth.password': 'Şifre', 'auth.login': 'Giriş Yap',
    'auth.selectMode': 'Giriş Yapın', 'auth.error': 'Geçersiz kullanıcı adı veya şifre',
    'toast.tableReq': 'Lütfen masa numarası girin', 'toast.cartReq': 'Sepetiniz boş',
    'toast.orderOk': 'Siparişiniz oluşturuldu!', 'toast.orderFail': 'Sipariş oluşturulamadı',
    'toast.loginOk': 'Giriş başarılı', 'toast.logout': 'Çıkış yapıldı',
    'nav.logout': 'Çıkış Yap', 'nav.logoutTitle': 'Çıkış Yap',
    'nav.logoutCashierMsg': 'Kasiyer modundan çıkış yapıyorsunuz. Emin misiniz?',
    'nav.logoutAdminMsg': 'Admin modundan çıkış yapıyorsunuz. Emin misiniz?',
    'nav.logoutConfirm': 'Çıkış Yap',
    'toast.added': 'sepete eklendi', 'toast.removed': 'sepetten çıkarıldı',
    'common.add': 'Sepete Ekle', 'common.price': '₺',
    'cashier.title': 'Kasiyer Paneli', 'cashier.sub': 'Siparişler istasyon ve masaya göre gruplanır',
    'cashier.kitchen': 'Mutfak İstasyonu', 'cashier.bar': 'Bar İstasyonu',
    'cashier.tables': 'Masa Görünümü', 'cashier.status.new': 'Yeni', 'cashier.status.ready': 'Hazır',
    'cashier.status.served': 'Servis Edildi', 'cashier.bill': 'Hesap', 'cashier.pay': 'Ödemeyi Tamamla',
    'cashier.paid': 'Ödendi', 'cashier.noOrders': 'Görüntülenecek sipariş yok',
    'cashier.payOk': 'Ödeme tamamlandı', 'cashier.ready': 'Hazır işaretle', 'cashier.served': 'Servis edildi',
    'cashier.allTables': 'Tüm Masalar', 'cashier.viewStation': 'İstasyon', 'cashier.viewTable': 'Masa',
    'cashier.all': 'Tümü', 'cashier.total': 'Genel Toplam:',
    'cashier.paidReceipts': 'Ödenmiş Fişler', 'cashier.noPaid': 'Ödenmiş fiş yok',
    'cashier.receiptCount': 'fiş', 'cashier.paidAt': 'Ödeme zamanı', 'cashier.print': 'Yazdır',
    'cashier.payPerson': 'kişinin hesabını öde', 'cashier.payPersonOk': 'hesabı ödendi',
    'cashier.payBulk': 'Toplu Ödeme', 'cashier.paySeparate': 'Ayrı Ödeme',
    'cashier.payBulkDesc': 'Masanın tüm hesabını tek seferde öde',
    'cashier.paySeparateDesc': 'Kişilere göre ayrı ayrı ödeme yap',
    'cashier.payAsk': 'Ödemeyi tamamlamak istiyor musunuz?',
    'cashier.personBills': 'Kişi Bazlı Hesaplar',
    'pay.cash': 'Nakit', 'pay.card': 'Kart', 'pay.confirm': 'Ödemeyi Tamamla',
    'pay.title': 'Ödeme', 'pay.infoBulk': 'Masa ödemesi', 'pay.infoPerson': 'kişinin ödemesi',
    'pay.print': 'Yazdır', 'pay.close': 'Kapat', 'pay.thanks': 'Teşekkürler!',
    'pay.receipt': 'Fiş', 'pay.bulkReceipt': 'Toplu Fiş', 'pay.personReceipt': 'Fişi',
    'admin.title': 'Admin Paneli', 'admin.sub': 'Menü ve istasyon yönetimi',
    'admin.menuManage': 'Menü Yönetimi', 'admin.addProduct': 'Yeni Ürün Ekle',
    'admin.productName': 'Ürün Adı', 'admin.productNameEn': 'İngilizce Ad', 'admin.price': 'Fiyat (₺)', 'admin.cost': 'Maliyet (₺)', 'admin.discount': 'İndirim (%)',
    'admin.desc': 'Açıklama (TR)', 'admin.descEn': 'Açıklama (EN)', 'admin.category': 'Kategori',
    'admin.station': 'İstasyon', 'admin.edit': 'Düzenle', 'admin.delete': 'Sil', 'admin.save': 'Kaydet',
    'admin.cancel': 'İptal', 'admin.stations': 'İstasyonlar', 'admin.addStation': 'İstasyon Ekle',
    'admin.stationName': 'İstasyon adı', 'admin.manageCategories': 'Kategoriler',
    'admin.stationForCat': 'Kategori istasyonu', 'admin.productUpdated': 'Ürün güncellendi',
    'admin.productAdded': 'Ürün eklendi', 'admin.productDeleted': 'Ürün silindi',
    'admin.stationAdded': 'İstasyon eklendi', 'admin.selectCat': 'Kategori seçin',
    'admin.categoryName': 'Kategori Adı (TR)', 'admin.categoryNameEn': 'Kategori Adı (EN)',
    'admin.categoryIcon': 'İkon', 'admin.addCategory': 'Kategori Ekle',
    'admin.categoryAdded': 'Kategori eklendi', 'admin.categoryDeleted': 'Kategori silindi',
    'admin.categoryHasProducts': 'Bu kategoride ürünler var, önce ürünleri taşıyın ya da silin',
    'admin.deleteConfirmCat': 'kategorisini silmek istiyor musunuz? (ürün içermemeli)',
    'admin.categoryNameReq': 'Kategori adı gerekli',
    'customer.noTable': 'Masa bağlanamadı. Lütfen QR kodu ile erişin.',
    'customer.menu': 'Menü',
    'waiter.call': 'Garson Çağır',
    'waiter.called': 'Garson çağrıldı, geliyor!',
    'crop.title': 'Fotoğrafı Düzenle',
    'crop.hint': 'Sürükleyerek taşı, oku büyüt/küçült',
    'crop.preview': 'Menüde böyle görünecek:',
    'crop.apply': 'Kırp ve Onayla',
    'crop.edit': 'Düzenle',
    'crop.editCurrent': 'Mevcut görseli düzenle'
  },
  en: {
    'nav.menu': 'Menu', 'nav.customer': 'Customer Mode', 'nav.cashier': 'Cashier Mode', 'nav.admin': 'Admin Mode',
    'customer.welcome': 'Welcome to Kahvebahane', 'customer.subtitle': 'Scan your QR code to order from the menu.',
    'customer.table': 'Table:', 'customer.tableInput': 'Enter your table number:',
    'cart.title': 'My Cart', 'cart.clear': 'Clear', 'cart.subtotal': 'Subtotal', 'cart.total': 'Total',
    'cart.createOrder': 'Create Order', 'cart.empty': 'Your cart is empty', 'cart.note': 'Order note...',
    'people.title': 'People at Table', 'people.hint': 'Drag items and drop under a person',
    'people.unassigned': 'Unassigned', 'people.addPlaceholder': '+ Add Name...',
    'people.yours': 'Your cart', 'people.back': 'Back to unassigned',
    'orders.title': 'Table Orders', 'orders.noOrders': 'No orders yet',
    'orders.unnamed': 'Unnamed', 'orders.refresh': 'Refresh', 'orders.paid': 'Paid', 'orders.nameLabel': 'Your name...',
    'auth.title': 'Sign In', 'auth.username': 'Username', 'auth.password': 'Password', 'auth.login': 'Sign In',
    'auth.selectMode': 'Sign In', 'auth.error': 'Invalid username or password',
    'toast.tableReq': 'Please enter a table number', 'toast.cartReq': 'Your cart is empty',
    'toast.orderOk': 'Order created!', 'toast.orderFail': 'Failed to create order',
    'toast.loginOk': 'Signed in', 'toast.logout': 'Signed out',
    'nav.logout': 'Sign Out', 'nav.logoutTitle': 'Sign Out',
    'nav.logoutCashierMsg': 'You are signing out of Cashier mode. Are you sure?',
    'nav.logoutAdminMsg': 'You are signing out of Admin mode. Are you sure?',
    'nav.logoutConfirm': 'Sign Out',
    'toast.added': 'added to cart', 'toast.removed': 'removed from cart',
    'common.add': 'Add to Cart', 'common.price': '₺',
    'cashier.title': 'Cashier Panel', 'cashier.sub': 'Orders grouped by station and table',
    'cashier.kitchen': 'Kitchen Station', 'cashier.bar': 'Bar Station',
    'cashier.tables': 'Table View', 'cashier.status.new': 'New', 'cashier.status.ready': 'Ready',
    'cashier.status.served': 'Served', 'cashier.bill': 'Bill', 'cashier.pay': 'Complete Payment',
    'cashier.paid': 'Paid', 'cashier.noOrders': 'No orders to display',
    'cashier.payOk': 'Payment completed', 'cashier.ready': 'Mark ready', 'cashier.served': 'Mark served',
    'cashier.allTables': 'All Tables', 'cashier.viewStation': 'Station', 'cashier.viewTable': 'Table',
    'cashier.all': 'All', 'cashier.total': 'Grand Total:',
    'cashier.paidReceipts': 'Paid Receipts', 'cashier.noPaid': 'No paid receipts',
    'cashier.receiptCount': 'receipts', 'cashier.paidAt': 'Payment time', 'cashier.print': 'Print',
    'cashier.payPerson': "person's bill", 'cashier.payPersonOk': 'bill paid',
    'cashier.payBulk': 'Bulk Payment', 'cashier.paySeparate': 'Separate Payment',
    'cashier.payBulkDesc': 'Pay the whole table bill at once',
    'cashier.paySeparateDesc': 'Pay per person separately',
    'cashier.payAsk': 'Do you want to complete the payment?',
    'cashier.personBills': 'Bills by Person',
    'pay.cash': 'Cash', 'pay.card': 'Card', 'pay.confirm': 'Complete Payment',
    'pay.title': 'Payment', 'pay.infoBulk': 'Table payment', 'pay.infoPerson': "'s payment",
    'pay.print': 'Print', 'pay.close': 'Close', 'pay.thanks': 'Thank you!',
    'pay.receipt': 'Receipt', 'pay.bulkReceipt': 'Combined Receipt', 'pay.personReceipt': 'Receipt',
    'admin.title': 'Admin Panel', 'admin.sub': 'Menu and station management',
    'admin.menuManage': 'Menu Management', 'admin.addProduct': 'Add New Product',
    'admin.productName': 'Product Name', 'admin.productNameEn': 'English Name', 'admin.price': 'Price (₺)', 'admin.cost': 'Cost (₺)', 'admin.discount': 'Discount (%)',
    'admin.desc': 'Description (TR)', 'admin.descEn': 'Description (EN)', 'admin.category': 'Category',
    'admin.station': 'Station', 'admin.edit': 'Edit', 'admin.delete': 'Delete', 'admin.save': 'Save',
    'admin.cancel': 'Cancel', 'admin.stations': 'Stations', 'admin.addStation': 'Add Station',
    'admin.stationName': 'Station name', 'admin.manageCategories': 'Categories',
    'admin.stationForCat': 'Category station', 'admin.productUpdated': 'Product updated',
    'admin.productAdded': 'Product added', 'admin.productDeleted': 'Product deleted',
    'admin.stationAdded': 'Station added', 'admin.selectCat': 'Select category',
    'admin.categoryName': 'Category Name (TR)', 'admin.categoryNameEn': 'Category Name (EN)',
    'admin.categoryIcon': 'Icon', 'admin.addCategory': 'Add Category',
    'admin.categoryAdded': 'Category added', 'admin.categoryDeleted': 'Category deleted',
    'admin.categoryHasProducts': 'This category has products, move or delete them first',
    'admin.deleteConfirmCat': 'Delete this category? (must be empty)',
    'admin.categoryNameReq': 'Category name is required',
    'customer.noTable': 'No table connected. Please access via QR code.',
    'customer.menu': 'Menu',
    'waiter.call': 'Call Waiter',
    'waiter.called': 'Waiter called, coming!',
    'crop.title': 'Edit Photo',
    'crop.hint': 'Drag to move, slider to zoom',
    'crop.preview': 'Preview in menu:',
    'crop.apply': 'Crop & Approve',
    'crop.edit': 'Edit',
    'crop.editCurrent': 'Edit current image'
  }
};

const translations = I18N;

// ===== Devlet (State) =====
const state = {
  lang: 'tr',
  mode: 'customer',
  user: null,
  orderRole: null,
  theme: 'dark',
  people: [],
  unassigned: {},
  assigned: {},
  table: null,
  currentCategory: 'hot',
  orders: [],
  receipts: [],
  cashierView: 'station',
  adminEditing: null,
  adminProductCat: 'all',
  calls: [],
  stations: ['kitchen', 'bar'],
  crop: null,
  search: '',
  filter: 'all'
};

// Giris jetonu: login sonrasi dagitilir, korumali isteklere otomatik eklenir
function authToken() {
  try {
    if (typeof state !== 'undefined' && state.token) return state.token;
    return localStorage.getItem('kahvebahane_token') || null;
  } catch (e) { return (typeof state !== 'undefined' && state.token) || null; }
}
function apiFetch(url, opts) {
  opts = opts || {};
  const isLogin = typeof url === 'string' && url.includes('/api/login');
  const headers = Object.assign({}, opts.headers || {});
  if (!isLogin) {
    const tok = authToken();
    if (tok && !headers.Authorization) headers.Authorization = 'Bearer ' + tok;
  }
  if (opts.body && !headers['Content-Type']) headers['Content-Type'] = 'application/json';
  const f = window.fetch.bind(window);
  return f(url, Object.assign({}, opts, { headers })).then(res => {
    if (res && res.status === 401 && !isLogin) {
      try {
        if (typeof state !== 'undefined') state.token = null;
        localStorage.removeItem('kahvebahane_token');
        localStorage.removeItem('kahvebahane_auth');
        if (typeof requestAuth === 'function') {
          const role = (typeof state !== 'undefined' && state.mode === 'cashier') ? 'cashier' : 'admin';
          requestAuth(role);
        }
      } catch (e) {}
    }
    return res;
  });
}


// Sabit diyet bayrakları (ürüne özel bayrak eklenirse o geçerli olur)
const VEG_IDS = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20, 21, 22, 23, 24, 25, 26]);
const SPICY_IDS = new Set([18, 24]);
function isVeg(p) { return p.veg != null ? !!p.veg : VEG_IDS.has(p.id); }
function isSpicy(p) { return p.spicy != null ? !!p.spicy : SPICY_IDS.has(p.id); }
function effPrice(p) {
  const d = Number(p.deal) || 0;
  if (d > 0 && d < 100) return Math.round(p.price * (1 - d / 100));
  return p.price;
}

// ===== İ18n yardımcıları =====
function t(key) {
  const table = translations[state.lang] || translations.tr;
  return table[key] || key;
}

// MENU_DATA işlemleri (admin tarafından değiştirilebilir - bellekte tutulur)
let menu = {
  categories: MENU_DATA.categories.map(c => ({ ...c })),
  products: MENU_DATA.products.map(p => ({ ...p, name: { ...p.name }, desc: { ...p.desc } }))
};

function getCategory(catId) {
  return menu.categories.find(c => c.id === catId) || menu.categories[0];
}

// ===== DOM Yardımcıları =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function fmtPrice(n) {
  return n.toLocaleString(state.lang === 'tr' ? 'tr-TR' : 'en-US') + '₺';
}

function toast(msg, type = '') {
  const el = $('#toast');
  el.textContent = msg;
  el.className = 'toast ' + type;
  el.classList.remove('hidden');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.add('hidden'), 2500);
}

// ===== Tema =====
function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  $('#moonIcon').style.display = theme === 'dark' ? '' : 'none';
  $('#sunIcon').style.display = theme === 'dark' ? 'none' : '';
  localStorage.setItem('theme', theme);
}

// ===== Dil =====
function setLang(lang) {
  state.lang = lang;
  $('#langToggle').textContent = lang === 'tr' ? 'EN' : 'TR';
  localStorage.setItem('lang', lang);
  applyI18n();
  updateNavUser();
  if (state.mode === 'customer') renderCustomer();
  else if (state.mode === 'cashier') renderCashier();
  else if (state.mode === 'admin') renderAdmin();
}

function applyI18n() {
  $$('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  const si = $('#searchInput');
  if (si) si.placeholder = state.lang === 'tr' ? '🔍 Ürün ara...' : '🔍 Search products...';
  renderFilters();
}

// ===== Mod yönetimi =====
function switchMode(mode) {
  state.mode = mode;
  try { localStorage.setItem('kahvebahane_mode', mode); } catch (e) {}
  if (mode !== 'customer') {
    try { window.history.replaceState({}, '', location.pathname); } catch (e) {}
  }
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#view-customer').classList.toggle('active', mode === 'customer');
  $('#view-cashier').classList.toggle('active', mode === 'cashier');
  $('#view-admin').classList.toggle('active', mode === 'admin');
  $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.modeTarget === mode));
  closeNav();
  if (mode === 'cashier') {
    prevMaxOrderId = 0;
    prevMaxCallId = 0;
    fetchOrders();
    fetchCalls();
    startCashierPolling();
    try {
      if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission();
    } catch (e) {}
  } else {
    stopCashierPolling();
  }
  if (mode === 'admin') { renderAdmin(); }
}

let prevMaxOrderId = 0;
let prevMaxCallId = 0;
let pollTimer = null;
function startCashierPolling() {
  stopCashierPolling();
  pollTimer = setInterval(() => {
    if (state.mode === 'cashier' && state.user) { fetchOrders(); fetchCalls(); }
  }, 5000);
}
function stopCashierPolling() {
  if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
}
function detectNewOrders() {
  if (state.mode !== 'cashier') return;
  let curMax = 0;
  state.orders.forEach(o => { if (o.id > curMax) curMax = o.id; });
  if (prevMaxOrderId > 0 && curMax > prevMaxOrderId) {
    const fresh = state.orders.filter(o => o.id > prevMaxOrderId);
    notifyNewOrder(fresh.length);
    fresh.forEach(o => pushNotif('order',
      (state.lang === 'tr' ? '🛎️ Yeni sipariş #' : '🛎️ New order #') + o.id,
      (state.lang === 'tr' ? 'Masa ' : 'Table ') + o.table + ' • ' + (o.items || []).reduce((s, i) => s + (Number(i.qty) || 1), 0) + (state.lang === 'tr' ? ' ürün' : ' items')));
  }
  prevMaxOrderId = Math.max(prevMaxOrderId, curMax);
}
function notifyNewOrder(count) {
  playDing();
  const msg = state.lang === 'tr'
    ? ('🛎️ ' + (count === 1 ? 'Yeni sipariş geldi!' : count + ' yeni sipariş geldi!'))
    : ('🛎️ ' + (count === 1 ? 'New order arrived!' : count + ' new orders arrived!'));
  toast(msg, 'success');
  try {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Kahvebahane', { body: msg, icon: '/img/logo.png' });
    }
  } catch (e) {}
}
function playDing() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume();
    const beep = (freq, start, vol) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(freq, ctx.currentTime + start);
      g.gain.setValueAtTime(0.0001, ctx.currentTime + start);
      g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + 0.55);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(ctx.currentTime + start);
      o.stop(ctx.currentTime + start + 0.6);
    };
    beep(880, 0, 0.3);
    beep(1318, 0.28, 0.25);
  } catch (e) {}
}

// ===== Bildirim merkezi (kasiyer) =====
let notifications = [];
function loadNotifs() {
  try {
    const s = localStorage.getItem('kahvebahane_notifs');
    if (s) {
      const arr = JSON.parse(s);
      if (Array.isArray(arr)) return arr.filter(n => n && n.title).slice(0, 50);
    }
  } catch (e) {}
  return [];
}
function saveNotifs() {
  try { localStorage.setItem('kahvebahane_notifs', JSON.stringify(notifications.slice(0, 50))); } catch (e) {}
}
function pushNotif(type, title, sub) {
  if (!Array.isArray(notifications) || notifications.length === 0) notifications = loadNotifs();
  notifications.unshift({ id: Date.now() + '' + Math.floor(Math.random() * 1000), type, title, sub: sub || '', time: new Date().toISOString(), read: false });
  notifications = notifications.slice(0, 50);
  saveNotifs();
  updateNotifBadge();
  const nm = $('#notifModal');
  if (state.mode === 'cashier' && nm && !nm.classList.contains('hidden')) renderNotifList();
}
function unreadNotifCount() {
  return notifications.filter(n => !n.read).length;
}
function updateNotifBadge() {
  const badge = $('#notifBadge');
  if (!badge) return;
  const n = unreadNotifCount();
  badge.textContent = n > 99 ? '99+' : String(n);
  badge.classList.toggle('hidden', n === 0);
}
function notifTime(iso) {
  try { return new Date(iso).toLocaleString(state.lang === 'tr' ? 'tr-TR' : 'en-US'); }
  catch (e) { return ''; }
}
function renderNotifList() {
  const el = $('#notifList');
  if (!el) return;
  if (notifications.length === 0) {
    el.innerHTML = `<div class="empty-state">${state.lang === 'tr' ? 'Bildirim yok' : 'No notifications'}</div>`;
    return;
  }
  el.innerHTML = notifications.map(n => `
    <div class="notif-item${n.read ? '' : ' unread'}">
      <div class="notif-title">${escapeHtml(n.title)}</div>
      ${n.sub ? `<div class="notif-sub">${escapeHtml(n.sub)}</div>` : ''}
      <div class="notif-time">${escapeHtml(notifTime(n.time))}</div>
    </div>`).join('');
}
function openNotifs() {
  const m = $('#notifModal');
  if (!m) return;
  renderNotifList();
  m.classList.remove('hidden');
  notifications.forEach(n => { n.read = true; });
  saveNotifs();
  updateNotifBadge();
  renderNotifList();
}
function closeNotifs() {
  const m = $('#notifModal');
  if (m) m.classList.add('hidden');
}
function clearNotifs() {
  notifications = [];
  saveNotifs();
  updateNotifBadge();
  renderNotifList();
}

// Auth
function requestAuth(role) {
  state.orderRole = role;
  const modal = $('#authModal');
  const alreadyOpen = modal && !modal.classList.contains('hidden');
  $('#authTitle').textContent = t('auth.selectMode') + ' (' + (role === 'admin' ? 'Admin' : 'Cashier') + ')';
  $('#authError').classList.add('hidden');
  if (alreadyOpen) return;
  $('#authUsername').value = '';
  $('#authPassword').value = '';
  modal.classList.remove('hidden');
  $('#authUsername').focus();
}
function closeAuth() {
  $('#authModal').classList.add('hidden');
  state.orderRole = null;
}
function submitAuth() {
  const username = $('#authUsername').value.trim();
  const password = $('#authPassword').value;
  apiFetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }).then(r => r.json()).then(res => {
    if (res.success) {
      state.user = res.user;
      state.orderRole = null;
      if (res.token) {
        state.token = res.token;
        try { localStorage.setItem('kahvebahane_token', res.token); } catch (e) {}
      }
      closeAuth();
      try { localStorage.setItem('kahvebahane_auth', JSON.stringify(res.user)); } catch (e) {}
      toast(t('toast.loginOk'), 'success');
      updateNavUser();
      switchMode(res.user.role);
    } else {
      $('#authError').textContent = t('auth.error');
      $('#authError').classList.remove('hidden');
    }
  }).catch(() => toast(t('toast.orderFail'), 'error'));
}

// ===== Side Nav =====
function openNav() { $('#sideNav').classList.add('open'); }
function closeNav() { $('#sideNav').classList.remove('open'); }

// ===== Siparişler =====
function fetchOrders(cb) {
  apiFetch('/api/orders').then(r => r.json()).then(data => {
    state.orders = data;
    detectNewOrders();
    apiFetch('/api/receipts').then(rec => rec.json()).then(recs => {
      state.receipts = recs;
      if (cb) cb();
      if (state.mode === 'cashier') renderCashier();
    }).catch(() => { if (cb) cb(); if (state.mode === 'cashier') renderCashier(); });
  }).catch(() => {});
}

function fetchReceipts(cb) {
  apiFetch('/api/receipts').then(r => r.json()).then(data => {
    state.receipts = data;
    if (cb) cb();
    if (state.mode === 'cashier') renderCashier();
  }).catch(() => {});
}

// ===== Garson çağrıları =====
function fetchCalls() {
  apiFetch('/api/calls').then(r => r.json()).then(data => {
    state.calls = Array.isArray(data) ? data : [];
    detectNewCalls();
    if (state.mode === 'cashier') renderCashier();
  }).catch(() => {});
}
function detectNewCalls() {
  if (state.mode !== 'cashier' || !state.user) return;
  let curMax = 0;
  (state.calls || []).forEach(c => { if (c.id > curMax) curMax = c.id; });
  if (prevMaxCallId > 0 && curMax > prevMaxCallId) {
    playDing();
    toast(state.lang === 'tr' ? '🔔 Garson çağrısı var!' : '🔔 Waiter called!', 'success');
    (state.calls || []).filter(c => c.id > prevMaxCallId).forEach(c => pushNotif('call',
      state.lang === 'tr' ? '🔔 Garson çağrısı' : '🔔 Waiter call',
      (state.lang === 'tr' ? 'Masa ' : 'Table ') + c.table));
  }
  prevMaxCallId = Math.max(prevMaxCallId, curMax);
}
function resolveCall(id) {
  apiFetch('/api/calls/' + id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'done' })
  }).then(r => r.json()).then(() => fetchCalls()).catch(() => {});
}
function renderWaiterCalls() {
  const active = (state.calls || []).filter(c => c && c.status === 'new');
  if (active.length === 0) return '';
  let html = `<div class="card" style="margin-bottom:20px;border-color:var(--primary)"><h3>🔔 ${state.lang === 'tr' ? 'Garson Çağrıları' : 'Waiter Calls'} (${active.length})</h3><div class="grid-2col">`;
  active.forEach(c => {
    const when = c.createdAt ? new Date(c.createdAt).toLocaleTimeString(state.lang === 'tr' ? 'tr-TR' : 'en-US') : '';
    html += `<div class="order-card" style="border-color:var(--primary)">
      <div class="order-head"><span class="order-table">🔔 ${state.lang === 'tr' ? 'Masa' : 'Table'} ${escapeHtml(String(c.table))}</span><span class="order-time">🕐 ${escapeHtml(when)}</span></div>
      <div class="order-actions"><button class="btn btn-success btn-block" onclick="resolveCall(${c.id})">✓ ${state.lang === 'tr' ? 'Tamam' : 'Done'}</button></div>
    </div>`;
  });
  return html + `</div></div>`;
}

function submitOrder() {
  if (!state.table) {
    toast(t('toast.tableReq'), 'error');
    return;
  }
  const items = toOrderItems();
  if (items.length === 0) {
    toast(t('toast.cartReq'), 'error');
    return;
  }
  const note = $('#orderNote').value.trim();
  apiFetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ table: state.table, items, note })
  }).then(r => r.json()).then(res => {
    if (res.success) {
      state.unassigned = {};
      state.assigned = {};
      saveCart();
      renderCart();
      renderProducts();
      $('#orderNote').value = '';
      refreshCustomerOrders();
      toast(t('toast.orderOk'), 'success');
    } else {
      toast(res.message || t('toast.orderFail'), 'error');
    }
  }).catch(() => toast(t('toast.orderFail'), 'error'));
}

function toOrderItems() {
  const items = [];
  // Unassigned'dan
  for (const id in state.unassigned) {
    const qty = state.unassigned[id];
    if (qty > 0) {
      const p = menu.products.find(x => x.id === Number(id));
      if (p) {
        items.push({ productId: p.id, name: p.name[state.lang], price: effPrice(p), qty, cat: p.cat, station: getCategory(p.cat).station, person: null });
      }
    }
  }
  // Kişilere atanmışlardan
  Object.keys(state.assigned).forEach(person => {
    const map = state.assigned[person];
    Object.keys(map).forEach(id => {
      const qty = map[id];
      if (qty > 0) {
        const p = menu.products.find(x => x.id === Number(id));
        if (p) {
          items.push({ productId: p.id, name: p.name[state.lang], price: effPrice(p), qty, cat: p.cat, station: getCategory(p.cat).station, person });
        }
      }
    });
  });
  return items;
}

// ===== Sepet =====
function saveCart() {
  try {
    localStorage.setItem('kahvebahane_cart', JSON.stringify({
      people: state.people,
      unassigned: state.unassigned,
      assigned: state.assigned
    }));
  } catch (e) {}
}
function loadCart() {
  try {
    const saved = localStorage.getItem('kahvebahane_cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        state.people = Array.isArray(parsed.people) ? parsed.people : [];
        state.unassigned = parsed.unassigned && typeof parsed.unassigned === 'object' ? parsed.unassigned : {};
        state.assigned = parsed.assigned && typeof parsed.assigned === 'object' ? parsed.assigned : {};
        return true;
      }
    }
  } catch (e) {}
  return false;
}
function addToCart(id) {
  state.unassigned[id] = (state.unassigned[id] || 0) + 1;
  saveCart();
  renderCart();
  renderProducts();
  const p = menu.products.find(x => x.id === id);
  toast(p.name[state.lang] + ' ' + t('toast.added'), 'success');
}
function getZoneQty(zone, id) {
  if (zone === 'unassigned') return state.unassigned[id] || 0;
  return (state.assigned[zone] || {})[id] || 0;
}
function setZoneQty(zone, id, qty) {
  if (zone === 'unassigned') {
    if (qty <= 0) delete state.unassigned[id];
    else state.unassigned[id] = qty;
    return;
  }
  if (!state.assigned[zone]) state.assigned[zone] = {};
  if (qty <= 0) delete state.assigned[zone][id];
  else state.assigned[zone][id] = qty;
  if (Object.keys(state.assigned[zone]).length === 0) delete state.assigned[zone];
}
function changeQty(id, delta, zone) {
  const z = zone || 'unassigned';
  setZoneQty(z, id, getZoneQty(z, id) + delta);
  saveCart();
  renderCart();
  renderProducts();
}
function moveItem(id, fromZone, toZone) {
  const qty = getZoneQty(fromZone, id);
  if (qty <= 0) return;
  setZoneQty(fromZone, id, qty - 1);
  setZoneQty(toZone, id, getZoneQty(toZone, id) + 1);
  saveCart();
  renderCart();
  renderProducts();
}
function clearCart(forceToast) {
  const count = cartCount();
  if (count === 0) return;
  state.people = [];
  state.unassigned = {};
  state.assigned = {};
  saveCart();
  renderCart();
  renderProducts();
  if (forceToast !== false) {
    toast(t('cart.clear') + ' ✓', '');
  }
}
function cartCount() {
  let total = 0;
  for (const id in state.unassigned) total += state.unassigned[id];
  Object.keys(state.assigned).forEach(p => {
    Object.keys(state.assigned[p]).forEach(id => total += state.assigned[p][id]);
  });
  return total;
}
function cartSubtotal() {
  let total = 0;
  for (const id in state.unassigned) {
    const p = menu.products.find(x => x.id === Number(id));
    if (p) total += effPrice(p) * state.unassigned[id];
  }
  Object.keys(state.assigned).forEach(p => {
    Object.keys(state.assigned[p]).forEach(id => {
      const prod = menu.products.find(x => x.id === Number(id));
      if (prod) total += effPrice(prod) * state.assigned[p][id];
    });
  });
  return total;
}

// ===== Kişi yönetimi =====
function addPerson() {
  const input = $('#personInput');
  const name = (input.value || '').trim();
  if (!name) return;
  if (state.people.includes(name)) { toast('⛔ ' + name, 'error'); return; }
  state.people.push(name);
  input.value = '';
  saveCart();
  renderPeopleChips();
  renderCart();
  toast('👤 ' + name + ' ✓', 'success');
}
function removePerson(name) {
  // Kişinin ürünlerini atanmamışa geri ver
  const map = state.assigned[name] || {};
  Object.keys(map).forEach(id => {
    state.unassigned[id] = (state.unassigned[id] || 0) + map[id];
  });
  delete state.assigned[name];
  state.people = state.people.filter(p => p !== name);
  saveCart();
  renderPeopleChips();
  renderCart();
}
function renderPeopleChips() {
  const el = $('#peopleChips');
  if (!el) return;
  if (state.people.length === 0) {
    el.innerHTML = `<div class="people-empty">+ ${t('people.addPlaceholder')}</div>`;
    return;
  }
  el.innerHTML = state.people.map(p =>
    `<span class="person-chip"><span class="pc-name">👤 ${escapeHtml(p)}</span><button class="pc-x" onclick="removePerson('${escapeHtml(p).replace(/'/g, "\\'")}')">✕</button></span>`
  ).join('');
}

// ===== Sepet render =====
function zoneItems(zone) {
  const map = zone === 'unassigned' ? state.unassigned : (state.assigned[zone] || {});
  return Object.keys(map).filter(id => map[id] > 0).map(id => {
    const product = menu.products.find(x => x.id === Number(id));
    return product ? { id: Number(id), qty: map[id], product } : null;
  }).filter(Boolean);
}
function zoneTotal(zone) {
  return zoneItems(zone).reduce((s, it) => s + effPrice(it.product) * it.qty, 0);
}
function assignOptions(from, id) {
  const opts = [`<option value="unassigned">📦 ${t('people.unassigned')}</option>`];
  state.people.forEach(p => {
    opts.push(`<option value="${escapeHtml(p).replace(/"/g, '&quot;')}">👤 ${escapeHtml(p)}</option>`);
  });
  return `<select class="assign-select" onchange="assignFrom('${from.replace(/'/g, "\\'")}',${id},this.value)">
    <option value="" disabled selected>⇢ ${t('people.yours')}</option>${opts.join('')}
  </select>`;
}
function cartItemHtml(zone, id, qty, p) {
  const lineTotal = effPrice(p) * qty;
  const zesc = String(zone).replace(/'/g, "\\'").replace(/"/g, '&quot;');
  return `<div class="cart-item drag" draggable="true" ondragstart="dragStart(event,${id},'${zesc}')">
    <button class="move-handle" title="sürükle">☰</button>
    <div class="cart-item-info">
      <div class="cart-item-title">${escapeHtml(p.name[state.lang])}</div>
      <div class="cart-item-price">${fmtPrice(effPrice(p))}</div>
      ${assignOptions(zone, id)}
    </div>
    <div class="qty-control">
      <button class="qty-btn" onclick="changeQty(${p.id},-1,'${zesc}')">−</button>
      <span class="qty-val">${qty}</span>
      <button class="qty-btn" onclick="changeQty(${p.id},1,'${zesc}')">+</button>
    </div>
    <div class="cart-item-total">${fmtPrice(lineTotal)}</div>
  </div>`;
}
function renderZone(zone) {
  const items = zoneItems(zone);
  let html = `<div class="assign-zone" data-zone="${String(zone).replace(/"/g, '&quot;')}" ondragover="dragOver(event)" ondragleave="dragLeave(event)" ondrop="dropItem(event,'${String(zone).replace(/'/g, "\\'")}')">
    <div class="zone-header"><span class="zone-title">${zone === 'unassigned' ? '📦' : '👤'} ${zone === 'unassigned' ? t('people.unassigned') : escapeHtml(zone)}</span><span class="zone-total">${fmtPrice(zoneTotal(zone))}</span></div>`;
  if (items.length === 0) {
    html += `<div class="zone-empty">${zone === 'unassigned' ? t('cart.empty') : '🖐 ' + t('people.hint')}</div>`;
  } else {
    html += items.map(it => cartItemHtml(zone, it.id, it.qty, it.product)).join('');
  }
  return html + `</div>`;
}
function renderCart() {
  const el = $('#cartAssign');
  if (!el) return;
  const count = cartCount();
  if (count === 0) {
    el.innerHTML = `<div class="cart-empty">${t('cart.empty')}</div>`;
    renderPeopleChips();
  } else {
    let html = renderZone('unassigned');
    state.people.forEach(p => { html += renderZone(p); });
    el.innerHTML = html;
  }
  renderTotals();
}
function renderTotals() {
  const subtotal = cartSubtotal();
  $('#subtotal').textContent = fmtPrice(subtotal);
  $('#total').textContent = fmtPrice(subtotal);
  const fb = $('.cart-total-floating');
  if (fb) {
    const count = cartCount();
    fb.querySelector('.fb-count').textContent = String(count);
    fb.querySelector('.fb-total').textContent = fmtPrice(subtotal);
    fb.style.display = count > 0 ? 'flex' : 'none';
  }
}
function assignFrom(from, id, target) {
  if (!target || target === from) return;
  moveItem(id, from, target);
}
function dragStart(e, id, from) {
  e.dataTransfer.setData('text/plain', JSON.stringify({ id, from }));
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.classList.add('dragging');
}
function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  e.currentTarget.classList.add('drag-over');
}
function dragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}
function dropItem(e, zone) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  try {
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (data.from !== zone && getZoneQty(data.from, data.id) > 0) {
      moveItem(Number(data.id), data.from, zone);
      toast('⇢ ' + (zone === 'unassigned' ? t('people.unassigned') : '👤 ' + zone), 'success');
    }
  } catch (err) {}
}

// ===== Müşteri görünümü =====
function renderCustomer() {
  renderCategories();
  renderProducts();
  renderPeopleChips();
  renderCart();
  renderTableBadge();
  refreshCustomerOrders();
}

function renderTableBadge() {
  const badge = $('#tableBadge');
  const inputArea = $('#tableInputArea');
  if (state.table) {
    badge.textContent = t('customer.table') + ' ' + state.table;
    badge.classList.remove('hidden');
    inputArea.innerHTML = `<button class="btn btn-secondary" id="waiterBtn" onclick="callWaiter()">🔔 ${escapeHtml(t('waiter.call'))}</button>`;
  } else {
    badge.classList.add('hidden');
    inputArea.innerHTML = `
      <div class="table-input-wrapper">
        <span class="table-input-label" data-i18n="customer.tableInput">Masa numaranızı girin:</span>
        <div class="table-input-row">
          <input type="number" id="tableInput" class="table-input" min="1" max="999" placeholder="${state.lang === 'tr' ? 'Masa No' : 'Table No'}" onkeydown="if(event.key==='Enter') submitTableNumber()" />
          <button class="btn btn-primary" onclick="submitTableNumber()">✓</button>
        </div>
      </div>`;
  }
}

function callWaiter() {
  if (!state.table) {
    toast(t('toast.tableReq'), 'error');
    return;
  }
  const btn = $('#waiterBtn');
  if (btn) btn.disabled = true;
  apiFetch('/api/calls', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ table: state.table })
  }).then(r => r.json().then(j => ({ status: r.status, body: j }))).then(({ body }) => {
    if (body && body.success) toast(t('waiter.called'), 'success');
    else toast((body && body.message) || t('toast.orderFail'), 'error');
  }).catch(() => toast(t('toast.orderFail'), 'error'))
    .finally(() => { setTimeout(() => { const b = $('#waiterBtn'); if (b) b.disabled = false; }, 5000); });
}

function submitTableNumber() {
  const input = $('#tableInput');
  const val = input ? input.value.trim() : '';
  if (!val || Number(val) < 1) {
    toast(t('toast.tableReq'), 'error');
    return;
  }
  state.table = val;
  const url = new URL(location);
  url.searchParams.set('table', val);
  history.replaceState(null, '', url);
  renderTableBadge();
  refreshCustomerOrders();
  toast(t('customer.table') + ' ' + val + ' ✓', 'success');
}

function refreshCustomerOrders() {
  const panel = $('#customerOrdersPanel');
  if (!panel) return;
  if (!state.table) { panel.classList.add('hidden'); return; }
  apiFetch('/api/orders/table/' + encodeURIComponent(state.table))
    .then(r => r.json())
    .then(orders => {
      panel.classList.remove('hidden');
      renderCustomerOrders(panel, orders);
    })
    .catch(() => {});
}

function orderStatusMeta(status) {
  const en = state.lang === 'en';
  if (status === 'ready') return { label: en ? 'Ready' : 'Hazır', cls: 'ready', icon: '✅' };
  if (status === 'served') return { label: en ? 'Served' : 'Servis Edildi', cls: 'served', icon: '🍽️' };
  return { label: en ? 'Preparing' : 'Hazırlanıyor', cls: 'new', icon: '👨‍🍳' };
}

function customerOrderCard(o) {
  const m = orderStatusMeta(o.status);
  let when = '';
  try { when = new Date(o.createdAt).toLocaleTimeString(state.lang === 'tr' ? 'tr-TR' : 'en-US', { hour: '2-digit', minute: '2-digit' }); } catch (e) {}
  const groups = groupOrdersByPerson([o]);
  const total = (o.items || []).reduce((s, i) => s + i.price * i.qty, 0);
  let html = `<div class="order-card">
    <div class="order-head"><span class="order-table">#${o.id} • ${escapeHtml(when)}</span><span class="pill ${m.cls}">${m.icon} ${escapeHtml(m.label)}</span></div>`;
  Object.keys(groups).forEach(name => { html += nameGroup(name, groups[name], false); });
  if (o.note) html += `<div style="font-size:.82rem;opacity:.75;margin:6px 0">📝 ${escapeHtml(o.note)}</div>`;
  html += `<div class="order-total">${t('cart.total')}: ${fmtPrice(total)}</div></div>`;
  return html;
}

function renderCustomerOrders(panel, orders) {
  let html = `<div class="orders-panel-header">
    <h3>🧾 ${t('orders.title')} — ${t('customer.table')} ${escapeHtml(state.table)}</h3>
    <button class="orders-refresh-btn" onclick="refreshCustomerOrders()">↻ ${t('orders.refresh')}</button>
  </div>`;
  const active = orders.filter(o => !o.paid && o.status !== 'paid').sort((a, b) => b.id - a.id);
  const paid = orders.filter(o => o.paid || o.status === 'paid');
  if (active.length === 0 && paid.length === 0) {
    html += `<div class="orders-empty">${t('orders.noOrders')}</div>`;
  } else {
    html += `<div class="orders-empty" style="font-weight:800">🛒 ${t('cart.title')} — ${fmtPrice(cartSubtotal())}</div>`;
    active.forEach(o => { html += customerOrderCard(o); });
    if (paid.length > 0) {
      const paidTotal = paid.reduce((s, o) => s + (o.items || []).reduce((a, i) => a + i.price * i.qty, 0), 0);
      html += `<div class="orders-empty">✔ ${t('orders.paid')}: ${paid.length} • ${fmtPrice(paidTotal)}</div>`;
    }
  }
  panel.innerHTML = html;
}

function groupOrdersByPerson(orders) {
  const groups = {};
  orders.forEach(o => {
    o.items.forEach(i => {
      const n = (i.person || '').trim() || t('orders.unnamed');
      (groups[n] = groups[n] || []).push(i);
    });
  });
  return groups;
}

function nameGroup(name, items, isPaid) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  let html = `<div class="orders-name-group" ${isPaid ? 'style="opacity:0.75"' : ''}>`;
  html += `<div class="orders-name"><span>👤 ${escapeHtml(name)}</span><span>${isPaid ? '✅' : '⏳'}</span></div>`;
  html += `<ul class="order-rows">`;
  items.forEach(i => {
    html += `<li><span><span class="q">${i.qty}×</span> ${escapeHtml(i.name)}</span><span>${fmtPrice(i.price * i.qty)}</span></li>`;
  });
  html += `</ul>`;
  html += `<div class="orders-name-total"><span>${t('cart.total')}</span><span>${fmtPrice(total)}</span></div>`;
  html += `</div>`;
  return html;
}

function renderCategories() {
  const el = $('#categoryTabs');
  let html = '';
  menu.categories.forEach(cat => {
    html += `<button class="category-tab ${cat.id === state.currentCategory ? 'active' : ''}" onclick="selectCategory('${cat.id}')">${cat.icon} ${escapeHtml(cat.name[state.lang])}</button>`;
  });
  el.innerHTML = html;
}

function selectCategory(id) {
  state.currentCategory = id;
  renderCategories();
  renderProducts();
}

function productQtyInCart(id) {
  let qty = state.unassigned[id] || 0;
  Object.keys(state.assigned).forEach(p => {
    qty += (state.assigned[p][id] || 0);
  });
  return qty;
}
function menuFilters() {
  if (Array.isArray(menu.filters) && menu.filters.length > 0) return menu.filters;
  return [
    { id: 'veg', icon: '🥬', name: { tr: 'Vejetaryen', en: 'Vegetarian' } },
    { id: 'spicy', icon: '🌶️', name: { tr: 'Acılı', en: 'Spicy' } }
  ];
}
function productHasTag(p, fid) {
  if (p.tags && p.tags.indexOf(fid) !== -1) return true;
  if (fid === 'veg') return isVeg(p);
  if (fid === 'spicy') return isSpicy(p);
  return false;
}
function filteredProducts() {
  const catId = state.currentCategory;
  const q = (state.search || '').trim().toLocaleLowerCase('tr');
  let list = q
    ? menu.products.filter(p => ((p.name.tr || '') + ' ' + (p.name.en || '')).toLocaleLowerCase('tr').includes(q))
    : menu.products.filter(p => p.cat === catId);
  if (state.filter && state.filter !== 'all') {
    const fid = state.filter;
    list = list.filter(p => productHasTag(p, fid));
  }
  return { list, searching: !!q };
}
function renderFilters() {
  const el = $('#filterChips');
  if (!el) return;
  const filters = menuFilters();
  if (state.filter !== 'all' && filters.map(f => f.id).indexOf(state.filter) === -1) state.filter = 'all';
  const allLabel = state.lang === 'tr' ? 'Tümü' : 'All';
  const opts = [['all', allLabel]].concat(filters.map(f => [f.id, (f.icon ? f.icon + ' ' : '') + (f.name[state.lang] || f.name.tr)]));
  el.innerHTML = opts.map(([v, label]) =>
    `<button class="filter-chip${state.filter === v ? ' active' : ''}" onclick="setFilter('${String(v).replace(/'/g, "\\'")}')">${escapeHtml(label)}</button>`
  ).join('');
}
function setFilter(f) {
  state.filter = f;
  renderFilters();
  renderProducts();
}
function setSearch(v) {
  state.search = v || '';
  renderProducts();
}
function renderProducts() {
  const el = $('#productGrid');
  if (!el) return;
  const { list: products, searching } = filteredProducts();
  if (products.length === 0) {
    el.innerHTML = `<div class="empty-state">${t('cart.empty')}</div>`;
    return;
  }
  let html = '';
  products.forEach(p => {
    const inCartQty = productQtyInCart(p.id);
    const isInCart = inCartQty > 0;
    const deal = Number(p.deal) || 0;
    const cat = getCategory(p.cat);
    html += `<div class="product-card">
      ${deal > 0 ? `<span class="deal-badge">%${deal}</span>` : ''}
      <img class="product-img" src="${p.img || placeholderImage(p.cat, getCategory(p.cat).icon)}" onerror="this.onerror=null;this.src=placeholderImage(p.cat,getCategory(p.cat).icon)" alt="${escapeHtml(p.name[state.lang])}" />
      <div class="product-body">
        <div class="product-title">${escapeHtml(p.name[state.lang])}</div>
        <div class="product-desc">${searching ? cat.icon + ' ' + escapeHtml(cat.name[state.lang]) + ' • ' : ''}${escapeHtml(p.desc[state.lang])}</div>
        ${p.ingredients && p.ingredients.length ? `<div class="product-ing">🧂 ${escapeHtml(ingText(p.ingredients))}</div>` : ''}
        <div class="product-footer">
          <span>${deal > 0 ? `<span class="old-price">${fmtPrice(p.price)}</span> ` : ''}<span class="product-price">${fmtPrice(effPrice(p))}</span></span>
          <button class="add-btn ${isInCart ? 'added' : ''}" onclick="addToCart(${p.id})">${isInCart ? '✓ ' + inCartQty : t('common.add')}</button>
        </div>
      </div>
    </div>`;
  });
  el.innerHTML = html;
}

// ===== Kasiyer görünümü =====
function renderCashier() {
  const el = $('#view-cashier');
  if (!state.user || state.user.role === 'admin') {
    requestAuth('cashier');
    return;
  }
  let html = `
    <div class="dashboard">
      <h1 class="page-title">💰 ${t('cashier.title')}</h1>
      <p class="page-sub">${t('cashier.sub')}</p>
      ${renderWaiterCalls()}
      <div class="toolbar">
        <button class="btn ${state.cashierView === 'station' ? 'btn-primary' : 'btn-secondary'}" onclick="setCashierView('station')">${t('cashier.viewStation')}</button>
        <button class="btn ${state.cashierView === 'table' ? 'btn-primary' : 'btn-secondary'}" onclick="setCashierView('table')">${t('cashier.viewTable')}</button>
        <button class="btn ${state.cashierView === 'paid' ? 'btn-primary' : 'btn-secondary'}" onclick="setCashierView('paid')">🧾 ${t('cashier.paidReceipts')}</button>
      </div>
  `;
  if (state.cashierView === 'station') {
    html += renderCashierStation();
  } else if (state.cashierView === 'paid') {
    html += renderCashierPaid();
  } else {
    html += renderCashierTable();
  }
  html += `</div>`;
  el.innerHTML = html;
}

function setCashierView(v) {
  state.cashierView = v;
  if (v === 'table') {
    window._tableFilter = '';
    try { localStorage.setItem('kahvebahane_table_filter', ''); } catch (e) {}
  }
  try { localStorage.setItem('kahvebahane_cashier_view', v); } catch (e) {}
  renderCashier();
}

function renderCashierPaid() {
  const receipts = state.receipts || [];
  const sumTotal = receipts.reduce((sum, r) => sum + r.total, 0);
  let html = `
    <div class="card" style="margin-bottom:20px">
      <h3>🧾 ${t('cashier.paidReceipts')} (${receipts.length})</h3>
      <div class="cart-total-row total" style="border-top:1px solid var(--border);padding-top:12px;margin-top:12px"><span>${t('cashier.total')}</span><span>${fmtPrice(sumTotal)}</span></div>
    </div>`;
  if (receipts.length === 0) {
    html += `<div class="empty-state">${t('cashier.noPaid')}</div>`;
  } else {
    html += `<div class="grid-2col">`;
    receipts.forEach(r => {
      const paidTime = r.paidAt ? new Date(r.paidAt).toLocaleString(state.lang === 'tr' ? 'tr-TR' : 'en-US') : '';
      html += `<div class="order-card" style="border-color:var(--success)">
        <div class="order-head">
          <span class="order-table">${t('customer.table')} ${escapeHtml(r.table)} • #${r.orderId} • 👤 ${escapeHtml(r.person)}</span>
          ${r.method === 'card' ? '<span class="pill paid">💳 ' + t('pay.card') + '</span>' : '<span class="pill paid">💵 ' + t('pay.cash') + '</span>'}
        </div>
        <div class="order-time">🕐 ${escapeHtml(paidTime)}</div>
        <div class="order-items">
          <ul class="order-rows">`;
      r.items.forEach(i => {
        html += `<li><span><span class="q">${i.qty}×</span> ${escapeHtml(i.name)}</span><span>${fmtPrice(i.price * i.qty)}</span></li>`;
      });
      html += `</ul>
        </div>
        ${r.discount > 0 ? `<div class="order-time">🏷️ ${state.lang === 'tr' ? 'İndirim' : 'Discount'}: -${fmtPrice(r.discount)}</div>` : ''}
        <div class="order-total">${t('cart.total')}: ${fmtPrice(r.total)}</div>
        <div class="order-actions">
          <button class="btn btn-secondary" onclick="printReceipt(${r.id})">🖨 ${t('cashier.print')}</button>
        </div>
      </div>`;
    });
    html += `</div>`;
  }
  return html;
}

function printReceipt(id) {
  const r = state.receipts.find(x => x.id === id);
  if (!r) return;
  const stamp = r.paidAt ? new Date(r.paidAt).toLocaleString(state.lang === 'tr' ? 'tr-TR' : 'en-US') : '';
  printReceiptSheet({ kind: 'person', table: r.table, person: r.person, method: r.method, receipts: [r], stamp });
}

function renderCashierStation() {
  let html = `<div class="grid-2col">`;
  state.stations.forEach(station => {
    const stationOrders = state.orders.filter(o => o.status !== 'paid' && o.items.some(i => i.station === station));
    html += `<div class="card">
      <h3>${station === 'kitchen' ? '🍳 ' + t('cashier.kitchen') : '🍸 ' + t('cashier.bar')}</h3>`;
    if (stationOrders.length === 0) {
      html += `<div class="empty-state">${t('cashier.noOrders')}</div>`;
    } else {
      stationOrders.forEach(order => {
        const stationItems = order.items.filter(i => i.station === station);
        html += renderOrderCard(order, stationItems, true);
      });
    }
    html += `</div>`;
  });
  html += `</div>`;
  return html;
}

function renderCashierTable() {
  const tables = [...new Set(state.orders.filter(o => o.status !== 'paid').map(o => o.table))];
  const filterRaw = window._tableFilter || 'all';
  const filter = (filterRaw !== 'all' && !state.orders.some(o => o.table === filterRaw && o.status !== 'paid')) ? 'all' : filterRaw;
  const filtered = filter === 'all' ? state.orders.filter(o => o.status !== 'paid') : state.orders.filter(o => o.table === filter && o.status !== 'paid');
  let html = `<div class="toolbar"><select id="tableFilter" onchange="filterTables(this.value)">
    <option value="all"${filter === 'all' ? ' selected' : ''}>${t('cashier.allTables')}</option>
    ${tables.map(tb => `<option value="${escapeHtml(tb)}"${filter === tb ? ' selected' : ''}>${t('customer.table')} ${escapeHtml(tb)}</option>`).join('')}
  </select></div>`;
  html += `<div id="tableOrders">`;
  if (filtered.length === 0) {
    html += `<div class="empty-state">${t('cashier.noOrders')}</div>`;
  } else {
    // Masaları grupla
    const byTable = {};
    filtered.forEach(o => { (byTable[o.table] = byTable[o.table] || []).push(o); });
    const grand = filtered.reduce((sum, o) => sum + o.items.reduce((s,i) => s + i.price*i.qty, 0), 0);

    if (filter !== 'all') {
      const orders = byTable[filter] || [];
      const tableTotal = orders.reduce((sum, o) => sum + o.items.reduce((s,i) => s + i.price*i.qty, 0), 0);
      const people = collectPeople(orders);
      html += `<div class="card payment-choice-card" id="paymentArea">
        <div class="table-big-title">${t('customer.table')} <span>${escapeHtml(filter)}</span></div>
        <div class="cart-total-row total" style="margin-top:4px"><span>${t('cashier.bill')}</span><span>${fmtPrice(tableTotal)}</span></div>
        <div class="pay-choice-grid">
          <div class="pay-choice" onclick="openPaymentModal('bulk','${escapeHtml(String(filter).replace(/'/g, "\\'"))}',null,${tableTotal})">
            <div class="pc-icon">💰</div>
            <div class="pc-title">${t('cashier.payBulk')}</div>
            <div class="pc-sub">${t('cashier.payBulkDesc')}</div>
          </div>
          <div class="pay-choice" onclick="document.getElementById('personBills').scrollIntoView({behavior:'smooth'})">
            <div class="pc-icon">👤</div>
            <div class="pc-title">${t('cashier.paySeparate')}</div>
            <div class="pc-sub">${t('cashier.paySeparateDesc')}</div>
          </div>
        </div>
      </div>`;
      // Kişi başı hesaplar
      html += `<div class="card" id="personBills" style="margin-bottom:20px">
        <h3>👤 ${t('cashier.personBills')}</h3>`;
      html += `<div class="grid-2col">`;
      people.forEach(person => {
        const pItems = [];
        orders.forEach(o => o.items.forEach(i => { if (i.person === person) pItems.push(i); }));
        const personTotal = pItems.reduce((s, i) => s + i.price * i.qty, 0);
        html += `<div class="order-card">
          <div class="order-head"><span class="order-table">👤 ${escapeHtml(displayPerson(person))}</span><span class="order-total" style="border:0;padding:0">${fmtPrice(personTotal)}</span></div>
          <ul class="order-rows">
            ${pItems.map(i => `<li><span><span class="q">${i.qty}×</span> ${escapeHtml(i.name)}</span><span>${fmtPrice(i.price * i.qty)}</span></li>`).join('')}
          </ul>
          <div class="order-actions">
            <button class="btn btn-success btn-block" onclick="openPaymentModal('person','${escapeHtml(String(filter).replace(/'/g, "\\'"))}','${escapeHtml(person).replace(/'/g, "\\'")}',${personTotal})">💰 ${t('cashier.pay')}</button>
          </div>
        </div>`;
      });
      html += `</div>`;
      html += `</div>`;
      // Yine de bireysel sipariş kartları
      orders.forEach(order => { html += renderOrderCard(order, order.items, false); });
    } else {
      html += `<div class="table-tile-grid">`;
      Object.keys(byTable).forEach(tbl => {
        const orders = byTable[tbl];
        const tableTotal = orders.reduce((sum, o) => sum + o.items.reduce((s,i) => s + i.price*i.qty, 0), 0);
        const people = collectPeople(orders);
        html += `<div class="table-tile" onclick="openTablePay('${escapeHtml(String(tbl).replace(/'/g, "\\'"))}')">
          <div class="table-tile-num">${escapeHtml(tbl)}</div>
          <div class="table-tile-info">
            <span>👤 ${people.length} ${state.lang==='tr'?'kişi':'guests'}</span>
            <span class="table-tile-total">${fmtPrice(tableTotal)}</span>
          </div>
        </div>`;
      });
      html += `</div>`;
      html += `<div class="card" style="margin-top:20px"><h3>${t('cashier.total')} ${fmtPrice(grand)}</h3></div>`;
    }
  }
  html += `</div>`;
  return html;
}

function collectPeople(orders) {
  const set = new Set();
  orders.forEach(o => o.items.forEach(i => set.add(i.person || 'İsimsiz')));
  return [...set];
}

function displayPerson(name) {
  return name === 'İsimsiz' ? t('orders.unnamed') : name;
}

function filterTables(val) {
  window._tableFilter = val;
  try { localStorage.setItem('kahvebahane_table_filter', val); } catch (e) {}
  renderCashier();
}

function openTablePay(table) {
  window._tableFilter = table;
  try { localStorage.setItem('kahvebahane_table_filter', table); } catch (e) {}
  renderCashier();
  setTimeout(() => { const el = document.getElementById('paymentArea'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50);
}

// ===== Ödeme modalı =====
function openPaymentModal(kind, table, person, total) {
  window._payCtx = { kind, table, person, subtotal: total };
  $('#paymentTitle').textContent = '💳 ' + t('pay.title');
  const info = kind === 'bulk'
    ? t('pay.infoBulk') + ': ' + (state.lang === 'tr' ? 'Masa' : 'Table') + ' ' + escapeHtml(table)
    : '👤 ' + escapeHtml(displayPerson(person)) + ' — ' + t('pay.infoPerson');
  $('#paymentInfo').innerHTML = info;
  const dt = $('#discType'), dv = $('#discValue');
  if (dt) dt.value = 'percent';
  if (dv) dv.value = '';
  updatePaymentTotal();
  setPayMethod('cash');
  $('#paymentModal').classList.remove('hidden');
}
function readDiscount(subtotal) {
  const dt = $('#discType'), dv = $('#discValue');
  const type = (dt && dt.value === 'amount') ? 'amount' : 'percent';
  let value = dv ? Number(String(dv.value).replace(',', '.')) || 0 : 0;
  if (type === 'percent') value = Math.min(100, Math.max(0, value));
  else value = Math.min(subtotal, Math.max(0, Math.round(value)));
  return { type, value };
}
function discountAmount(subtotal, disc) {
  if (!disc || !(disc.value > 0)) return 0;
  if (disc.type === 'percent') return Math.round(subtotal * disc.value / 100);
  return Math.min(subtotal, disc.value);
}
function setDisc(p) {
  const dt = $('#discType'), dv = $('#discValue');
  if (dt) dt.value = 'percent';
  if (dv) dv.value = String(p);
  updatePaymentTotal();
}
function updatePaymentTotal() {
  const ctx = window._payCtx;
  if (!ctx) return;
  const disc = readDiscount(ctx.subtotal);
  const pay = ctx.subtotal - discountAmount(ctx.subtotal, disc);
  const el = $('#paymentTotal');
  if (el) {
    el.textContent = t('cart.total') + ': ' + fmtPrice(ctx.subtotal)
      + (disc.value > 0 ? ' → ' + (state.lang === 'tr' ? 'Ödenecek' : 'To pay') + ': ' + fmtPrice(pay) : '');
  }
}
function closePaymentModal() {
  $('#paymentModal').classList.add('hidden');
}
function setPayMethod(method) {
  const opts = document.querySelectorAll('.pay-opt');
  opts.forEach(o => o.classList.toggle('active', o.querySelector('input').value === method));
  const radio = document.querySelector('input[name="payMethod"][value="' + method + '"]');
  if (radio) radio.checked = true;
}
function getPayMethod() {
  const checked = document.querySelector('input[name="payMethod"]:checked');
  return checked ? checked.value : 'cash';
}
function showReceiptModal(ctx, mode) {
  window._payReceiptCtx = ctx;
  const el = $('#receiptModalContent');
  const isPreview = mode === 'preview';
  el.innerHTML = `<div class="modal-header">
      <h2>🧾 ${ctx.kind === 'bulk' ? t('pay.bulkReceipt') : t('pay.personReceipt')}</h2>
      <button class="icon-btn" onclick="closeReceiptModal()">✕</button>
    </div>
    <div class="modal-body" style="padding:0">${buildReceiptSheet(ctx)}</div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeReceiptModal()">${t('pay.close')}</button>
      <button class="btn btn-success" onclick="printReceiptSheet()">🖨️ ${t('pay.print')}</button>
      ${isPreview ? `<button class="btn btn-primary" onclick="doPayFromReceipt()">✅ ${t('pay.confirm')}</button>` : ''}
    </div>`;
  $('#receiptModal').classList.remove('hidden');
}

function doPayFromReceipt() {
  const ctx = window._payReceiptCtx;
  if (!ctx) return;
  const method = ctx.method || 'cash';
  const discount = (ctx.disc && ctx.disc.value > 0) ? ctx.disc : null;
  closeReceiptModal();
  if (ctx.kind === 'bulk') {
    payAllTable(ctx.table, method, discount);
  } else {
    payPerson(ctx.table, ctx.person, method, discount);
  }
}

function closeReceiptModal() {
  $('#receiptModal').classList.add('hidden');
  window._payReceiptCtx = null;
}

function buildReceiptSheet(ctx) {
  const kind = ctx.kind, table = ctx.table, method = ctx.method;
  const langTr = state.lang === 'tr';
  const tableLabel = (langTr ? 'Masa ' : 'Table ') + escapeHtml(table);
  const title = kind === 'bulk'
    ? tableLabel + ' — ' + t('pay.bulkReceipt')
    : tableLabel + ' — 👤 ' + escapeHtml(displayPerson(ctx.person)) + ' ' + t('pay.personReceipt');
  const stamp = ctx.stamp || new Date().toLocaleString(langTr ? 'tr-TR' : 'en-US');
  const allItems = ctx.items && ctx.items.length
    ? ctx.items
    : (ctx.receipts || []).reduce((a, rc) => a.concat(rc.items || []), []);
  let rowsHtml = '';
  let subtotal = 0;
  allItems.forEach(it => {
    const qty = it.qty || 1;
    const line = it.price * qty;
    subtotal += line;
    rowsHtml += '<div class="r-row"><span class="r-name">' + escapeHtml(it.name)
      + (qty > 1 ? ' <b>x' + qty + '</b>' : '')
      + (kind === 'bulk' ? ' <span class="r-person">(' + escapeHtml(displayPerson(it.person)) + ')</span>' : '')
      + '</span><span>' + fmtPrice(line) + '</span></div>';
  });
  if (!rowsHtml) rowsHtml = '<div class="r-row" style="color:#888">-</div>';
  const disc = Number(ctx.discount) || (ctx.receipts || []).reduce((s, rc) => s + (Number(rc.discount) || 0), 0);
  const total = subtotal - Math.min(subtotal, disc);
  const methodTxt = method === 'card' ? '💳 ' + t('pay.card') : '💵 ' + t('pay.cash');
  return '<div class="receipt-sheet">'
    + '<div class="r-head"><div class="r-logo">☕ ' + escapeHtml(t('menuTitle')) + '</div>'
    + '<div class="r-title">' + title + '</div><div class="r-stamp">' + stamp + '</div></div>'
    + '<div class="r-items">' + rowsHtml + '</div>'
    + '<div class="r-line"></div>'
    + (disc > 0 ? '<div class="r-row"><span>' + (langTr ? 'İndirim' : 'Discount') + '</span><span>-' + fmtPrice(disc) + '</span></div>' : '')
    + '<div class="r-row r-total"><span>' + t('pay.total') + '</span><span>' + fmtPrice(total) + '</span></div>'
    + '<div class="r-method">' + methodTxt + '</div>'
    + '<div class="r-thanks">' + t('pay.thanks') + '</div>'
    + '</div>';
}

function printReceiptSheet(ctx) {
  const c = ctx || window._payReceiptCtx;
  if (!c) return;
  const html = buildReceiptSheet(c);
  const w = window.open('', '_blank', 'width=420,height=640');
  if (!w) { toast('⛔', 'error'); return; }
  w.document.write('<html><head><title>' + t('pay.receipt') + '</title><style>'
    + '@page{size:80mm auto;margin:0;}'
    + 'body{margin:0;font-family:\'Courier New\',monospace;background:#fff;color:#000;font-size:13px;display:flex;justify-content:center;padding:24px 0;}'
    + '.receipt-sheet{width:70mm;}'
    + '.r-head{text-align:center;margin-bottom:10px;}'
    + '.r-logo{font-weight:bold;font-size:15px;}'
    + '.r-title{font-size:12px;margin:4px 0;}'
    + '.r-stamp{font-size:11px;color:#333;}'
    + '.r-items{border-top:1px dashed #666;padding:6px 0;}'
    + '.r-row{display:flex;justify-content:space-between;padding:2px 0;}'
    + '.r-name{max-width:60mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
    + '.r-person{font-size:10px;color:#555;display:block;}'
    + '.r-line{border-top:1px dashed #666;margin:4px 0;}'
    + '.r-total{font-weight:bold;font-size:14px;}'
    + '.r-method,.r-thanks{text-align:center;margin-top:8px;}'
    + '@media print{body{padding:0;}}'
    + '</style></head><body>' + html + '<script>window.onload=function(){setTimeout(function(){window.print();},300);};</scr'+'ipt></body></html>');
  w.document.close();
}

function confirmPayment() {
  const ctx = window._payCtx;
  if (!ctx) return;
  const method = getPayMethod();
  const disc = readDiscount(ctx.subtotal);
  const discount = discountAmount(ctx.subtotal, disc);
  closePaymentModal();
  const orders = state.orders.filter(o => o.table === ctx.table && o.status !== 'paid');
  const items = [];
  orders.forEach(o => o.items.forEach(it => {
    if (ctx.kind === 'bulk' || it.person === ctx.person) items.push(it);
  }));
  if (items.length === 0) { toast('⛔', 'error'); return; }
  showReceiptModal({ kind: ctx.kind, table: ctx.table, person: ctx.person, method, items, discount, disc: disc.value > 0 ? disc : null }, 'preview');
}

function payAllTable(table, method, discount) {
  const tableOrders = state.orders.filter(o => o.table === table && o.status !== 'paid');
  const people = collectPeople(tableOrders);
  if (people.length === 0) { toast('⛔', 'error'); return; }
  const personTotals = {};
  people.forEach(person => {
    personTotals[person] = tableOrders.reduce((s, o) => s + o.items.filter(i => i.person === person).reduce((a, i) => a + i.price * i.qty, 0), 0);
  });
  const grand = people.reduce((s, p) => s + personTotals[p], 0);
  let remaining = (discount && discount.type === 'amount') ? discount.value : 0;
  let done = 0;
  people.forEach((person, pi) => {
    let pd = null;
    if (discount && discount.value > 0) {
      if (discount.type === 'percent') {
        pd = { type: 'percent', value: discount.value };
      } else {
        const share = (pi === people.length - 1) ? remaining : Math.min(personTotals[person], Math.round(discount.value * personTotals[person] / Math.max(1, grand)));
        remaining -= share;
        pd = { type: 'amount', value: share };
      }
    }
    const personOrders = tableOrders.filter(o => o.items.some(i => i.person === person));
    let pDone = 0;
    personOrders.forEach(o => {
      apiFetch('/api/orders/' + o.id + '/pay-person', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, method, ...(pd ? { discount: pd } : {}) })
      }).then(r => r.json()).then(() => {
        pDone++;
        if (pDone === personOrders.length) {
          done++;
          if (done === people.length) {
            fetchOrders(() => {
              fetchReceipts();
              toast('💰 ' + t('cashier.payBulk') + ' ✓', 'success');
              if (!state.orders.some(o => o.table === table && o.status !== 'paid')) {
                window._tableFilter = '';
                try { localStorage.setItem('kahvebahane_table_filter', ''); } catch (e) {}
                renderCashier();
              }
            });
          }
        }
      }).catch(() => { pDone++; if (pDone === personOrders.length) { done++; if (done === people.length) { fetchOrders(() => { fetchReceipts(); }); } } });
    });
  });
}

function payPerson(table, person, method, discount) {
  const tableOrders = state.orders.filter(o => o.table === table && o.status !== 'paid' && o.items.some(i => i.person === person));
  if (tableOrders.length === 0) { toast('⛔', 'error'); return; }
  let done = 0;
  tableOrders.forEach(o => {
    apiFetch('/api/orders/' + o.id + '/pay-person', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ person, method: method || 'cash', ...(discount && discount.value > 0 ? { discount } : {}) })
    }).then(r => r.json()).then(() => {
      done++;
      if (done === tableOrders.length) {
        fetchOrders(() => {
          fetchReceipts();
          toast('👤 ' + displayPerson(person) + ' — ' + t('cashier.payPersonOk'), 'success');
          if (!state.orders.some(o => o.table === table && o.status !== 'paid')) {
            window._tableFilter = '';
            try { localStorage.setItem('kahvebahane_table_filter', ''); } catch (e) {}
            renderCashier();
          }
        });
      }
    }).catch(() => { done++; if (done === tableOrders.length) { fetchOrders(); fetchReceipts(); } });
  });
}

function renderOrderCard(order, items, showTable) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const statusLabel = order.status === 'new' ? t('cashier.status.new') : order.status === 'ready' ? t('cashier.status.ready') : t('cashier.status.served');
  const statusClass = order.status;
  let html = `<div class="order-card">
    <div class="order-head">
      <span class="order-table">${showTable ? t('customer.table') + ' ' + escapeHtml(order.table) : '#' + order.id}</span>
      <span class="pill ${statusClass}">${statusLabel}</span>
    </div>
    <div class="order-time">${showTable ? '#' + order.id + ' • ' : ''}${new Date(order.createdAt).toLocaleTimeString(state.lang === 'tr' ? 'tr-TR' : 'en-US')}</div>
    <div class="order-items">
      <ul class="order-rows">`;
  items.forEach(i => {
    html += `<li><span><span class="q">${i.qty}×</span> ${escapeHtml(i.name)}</span><span>${fmtPrice(i.price * i.qty)}</span></li>`;
  });
  html += `</ul>
    </div>`;
  if (order.note) html += `<div class="order-note">📝 ${escapeHtml(order.note)}</div>`;
  html += `<div class="order-total">${fmtPrice(total)}</div>
    <div class="order-actions">`;
  if (order.status === 'new') {
    html += `<button class="btn btn-secondary" onclick="updateOrder(${order.id},'ready')">✓ ${t('cashier.ready')}</button>`;
  }
  if (order.status === 'ready') {
    html += `<button class="btn btn-secondary" onclick="updateOrder(${order.id},'served')">${t('cashier.served')}</button>`;
  }
  html += `</div></div>`;
  return html;
}

function updateOrder(id, status) {
  if (state.user && state.user.role === 'admin' && !confirm('Admin modunda sen kasiyer olarak işaretlemek istiyor musun? (Cancel ise admin kal)' )) {}
  apiFetch('/api/orders/' + id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  }).then(r => r.json()).then(() => { fetchOrders(); }).catch(() => toast(t('toast.orderFail'), 'error'));
}

// ===== Admin görünümü =====
function renderAdmin() {
  const el = $('#view-admin');
  if (!state.user || state.user.role !== 'admin') {
    requestAuth('admin');
    return;
  }
  let html = `
    <div class="dashboard">
      <h1 class="page-title">⚙️ ${t('admin.title')}</h1>
      <p class="page-sub">${t('admin.sub')}</p>
      <div class="toolbar">
        <button class="btn btn-primary" onclick="openProductModal()">+ ${t('admin.addProduct')}</button>
      </div>
      <div class="grid-2col">
        <div class="card">
          <h3>${t('admin.menuManage')}</h3>
          <div class="menu-manage-list" id="adminProductList"></div>
        </div>
        <div class="card">
          <h3>${t('admin.manageCategories')}</h3>
          <div id="adminCategoryList"></div>
          <div class="cat-add-grid">
            <input id="newCatName" placeholder="${t('admin.categoryName')}" maxlength="30" />
            <input id="newCatNameEn" placeholder="${t('admin.categoryNameEn')}" maxlength="30" />
            <input id="newCatIcon" placeholder="🍽️ ${t('admin.categoryIcon')}" maxlength="4" />
            <select id="newCatStation"></select>
          </div>
          <button class="btn btn-secondary btn-block" style="margin-top:8px" onclick="addCategory()">+ ${t('admin.addCategory')}</button>
          <h3 style="margin-top:24px">${t('admin.stations')}</h3>
          <div id="adminStationList"></div>
          <div class="station-add-row">
            <input id="newStationName" placeholder="${t('admin.stationName')}" />
            <button class="btn btn-secondary" onclick="addStation()">+ ${t('admin.addStation')}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  el.innerHTML = html;
  renderAdminProductList();
  renderAdminCategories();
  renderAdminStations();
  refreshNewCatStationOptions();
}

function logout() {
  const msg = state.user && state.user.role === 'admin' ? t('nav.logoutAdminMsg') : t('nav.logoutCashierMsg');
  $('#logoutMsg').textContent = msg;
  $('#logoutModal').classList.remove('hidden');
}

function closeLogout() {
  $('#logoutModal').classList.add('hidden');
}

function confirmLogout() {
  const role = state.user ? state.user.role : '';
  state.user = null;
  try { state.token = null; } catch (e) {}
  try {
    localStorage.removeItem('kahvebahane_token');
    localStorage.removeItem('kahvebahane_auth');
    localStorage.setItem('kahvebahane_mode', 'customer');
  } catch (e) {}
  closeLogout();
  closeNav();
  toast(t('toast.logout'), '');
  switchMode('customer');
  updateNavUser();
  if (role) {
    setTimeout(() => toast(role === 'admin' ? t('nav.logoutAdminMsg') : t('nav.logoutCashierMsg'), 'success'), 300);
  }
}

function updateNavUser() {
  const infoEl = $('#navUserInfo');
  const logoutBtn = $('#navLogoutBtn');
  if (!infoEl) return;
  if (state.user) {
    const roleLabel = state.user.role === 'admin'
      ? (state.lang === 'tr' ? 'Admin' : 'Admin')
      : (state.lang === 'tr' ? 'Kasiyer' : 'Cashier');
    infoEl.innerHTML = `👤 <b>${escapeHtml(state.user.username)}</b> — ${roleLabel}`;
    infoEl.classList.remove('hidden');
    if (logoutBtn) logoutBtn.classList.remove('hidden');
  } else {
    infoEl.innerHTML = '';
    infoEl.classList.add('hidden');
    if (logoutBtn) logoutBtn.classList.add('hidden');
  }
}

function renderAdminProductList() {
  const el = $('#adminProductList');
  if (!el) return;
  const sel = state.adminProductCat || 'all';
  const catOpts = menu.categories.map(c =>
    `<option value="${c.id}"${sel === c.id ? ' selected' : ''}>${c.icon} ${escapeHtml(c.name[state.lang] || c.name.tr)}</option>`
  ).join('');
  const list = sel === 'all' ? menu.products : menu.products.filter(p => p.cat === sel);
  let html = `<div class="toolbar" style="margin-bottom:10px">
    <select id="adminProductCatFilter" onchange="setAdminProductCat(this.value)" style="padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);width:100%">
      <option value="all"${sel === 'all' ? ' selected' : ''}>📋 ${state.lang === 'tr' ? 'Tüm Kategoriler' : 'All Categories'} (${menu.products.length})</option>
      ${catOpts}
    </select>
  </div>`;
  list.forEach(p => {
    const cat = getCategory(p.cat);
    html += `<div class="menu-manage-item">
      <img class="mm-img" src="${p.img || placeholderImage(p.cat, getCategory(p.cat).icon)}" onerror="this.onerror=null;this.src=placeholderImage(p.cat,getCategory(p.cat).icon)" />
      <div class="mm-info">
        <div class="mm-name">${escapeHtml(p.name.tr)} <span style="color:var(--text-muted)">/ ${escapeHtml(p.name.en)}</span></div>
        <div class="mm-meta">${cat.icon} ${escapeHtml(cat.name.tr)} • ${cat.name.en} • ${fmtPrice(p.price)}${p.deal ? ` • %${p.deal}` : ''}${(p.tags || []).map(tid => { const f = menuFilters().find(x => x.id === tid); return f ? ' ' + f.icon : ''; }).join('')}</div>
        ${p.ingredients && p.ingredients.length ? `<div class="mm-meta">🧂 ${escapeHtml(ingText(p.ingredients))}</div>` : ''}
      </div>
      <div class="mm-actions">
        <button class="mini-btn" onclick="openProductModal(${p.id})">✏️ ${t('admin.edit')}</button>
        <button class="mini-btn danger" onclick="deleteProduct(${p.id})">🗑 ${t('admin.delete')}</button>
      </div>
    </div>`;
  });
  if (list.length === 0) html += `<div class="empty-state">-</div>`;
  el.innerHTML = html;
}

function setAdminProductCat(id) {
  state.adminProductCat = id;
  renderAdminProductList();
}

function renderAdminCategories() {
  const el = $('#adminCategoryList');
  if (!el) return;
  let html = '';
  menu.categories.forEach(cat => {
    html += `<div class="menu-manage-item">
      <div class="mm-info">
        <div class="mm-name">${cat.icon} ${escapeHtml(cat.name.tr)} <span style="color:var(--text-muted)">/ ${escapeHtml(cat.name.en)}</span></div>
        <div class="mm-meta">${t('admin.station')}: <b>${cat.station}</b></div>
      </div>
      <div class="mm-actions">
        <select onchange="setCategoryStation('${cat.id}', this.value)" style="padding:6px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)">
          ${state.stations.map(s => `<option value="${s}" ${s === cat.station ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
        <button class="mini-btn danger" onclick="deleteCategory('${cat.id}')">🗑 ${t('admin.delete')}</button>
      </div>
    </div>`;
  });
  el.innerHTML = html;
}

function renderAdminStations() {
  const el = $('#adminStationList');
  if (!el) return;
  let html = '';
  state.stations.forEach(s => {
    html += `<span class="station-badge">${escapeHtml(s)} <button onclick="removeStation('${escapeHtml(s)}')">✕</button></span>`;
  });
  el.innerHTML = html || `<div class="empty-state">-</div>`;
}

function setCategoryStation(catId, station) {
  const cat = menu.categories.find(c => c.id === catId);
  if (cat) cat.station = station;
  saveMenuProducts();
  toast(t('admin.productUpdated'), 'success');
}

function refreshNewCatStationOptions() {
  const el = $('#newCatStation');
  if (el) el.innerHTML = state.stations.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
}

function addCategory() {
  const nameEl = $('#newCatName');
  const nameEnEl = $('#newCatNameEn');
  const iconEl = $('#newCatIcon');
  const stEl = $('#newCatStation');
  const name = (nameEl.value || '').trim();
  if (!name) { toast(t('admin.categoryNameReq'), 'error'); return; }
  const nameEn = (nameEnEl.value || '').trim() || name;
  const icon = (iconEl.value || '').trim() || '🍽️';
  const station = (stEl && stEl.value) || state.stations[0];
  menu.categories.push({
    id: 'cat' + Date.now(),
    name: { tr: name, en: nameEn },
    station,
    icon
  });
  saveMenuProducts();
  nameEl.value = ''; nameEnEl.value = ''; iconEl.value = '';
  renderAdminCategories();
  renderCategories();
  renderProducts();
  toast(t('admin.categoryAdded'), 'success');
}

function deleteCategory(id) {
  if (menu.products.some(p => p.cat === id)) {
    toast(t('admin.categoryHasProducts'), 'error');
    return;
  }
  const cat = menu.categories.find(c => c.id === id);
  if (!confirm((cat ? cat.name.tr : id) + ' ' + t('admin.deleteConfirmCat'))) return;
  menu.categories = menu.categories.filter(c => c.id !== id);
  if (state.currentCategory === id) {
    state.currentCategory = menu.categories.length ? menu.categories[0].id : null;
  }
  if (state.adminProductCat === id) state.adminProductCat = 'all';
  saveMenuProducts();
  renderAdminCategories();
  renderCategories();
  renderProducts();
  toast(t('admin.categoryDeleted'), 'success');
}

function addStation() {
  const input = $('#newStationName');
  const name = input.value.trim();
  if (!name || state.stations.includes(name)) return;
  state.stations.push(name);
  input.value = '';
  renderAdminStations();
  renderAdminCategories();
  refreshNewCatStationOptions();
  toast(t('admin.stationAdded'), 'success');
}

function removeStation(name) {
  state.stations = state.stations.filter(s => s !== name);
  renderAdminStations();
  renderAdminCategories();
  refreshNewCatStationOptions();
}

function deleteProduct(id) {
  if (!confirm('Delete?')) return;
  menu.products = menu.products.filter(p => p.id !== id);
  saveMenuProducts();
  renderAdminProductList();
  renderProducts();
  toast(t('admin.productDeleted'), 'success');
}

function openProductModal(id) {
  state.adminEditing = id || null;
  const p = id ? menu.products.find(x => x.id === id) : null;
  const cats = menu.categories.map(c => `<option value="${c.id}">${c.icon} ${escapeHtml(c.name.tr)}</option>`).join('');
  const stations = state.stations.map(s => `<option value="${s}">${s}</option>`).join('');
  const selectedCat = p ? p.cat : menu.categories[0].id;
  const selectedStation = p && getCategory(p.cat) ? getCategory(p.cat).station : state.stations[0];
  const title = p ? t('admin.edit') : t('admin.addProduct');
  $('#manageModalContent').innerHTML = `
    <div class="modal-header"><h2>${title}</h2><button class="icon-btn" onclick="closeManageModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <label class="field"><span>${t('admin.productName')}</span><input id="mName" value="${p ? escapeHtml(p.name.tr) : ''}" /></label>
        <label class="field"><span>${t('admin.productNameEn')}</span><input id="mNameEn" value="${p ? escapeHtml(p.name.en) : ''}" /></label>
        <label class="field"><span>${t('admin.price')}</span><input id="mPrice" type="number" min="0" value="${p ? p.price : ''}" /></label>
        <label class="field"><span>${t('admin.discount')}</span><input id="mDeal" type="number" min="0" max="90" placeholder="%" value="${p && p.deal ? p.deal : ''}" /></label>
        <label class="field"><span>${t('admin.cost')}</span><input id="mCost" type="number" min="0" step="any" placeholder="—" value="${p && p.cost != null ? p.cost : ''}" /></label>
        <label class="field"><span>${t('admin.category')}</span><select id="mCat">${cats.replace('value="' + selectedCat + '"', 'value="' + selectedCat + '" selected')}</select></label>
        <label class="field"><span>🏷️ ${state.lang === 'tr' ? 'Filtreler' : 'Filters'}</span><div style="display:flex;gap:8px;flex-wrap:wrap">${menuFilters().map(f => `<label style="display:inline-flex;align-items:center;gap:5px;font-size:.85rem;font-weight:500"><input type="checkbox" class="mTag" value="${String(f.id).replace(/"/g, '&quot;')}"${p && p.tags && p.tags.indexOf(f.id) !== -1 ? ' checked' : ''} style="width:auto" /> ${f.icon} ${escapeHtml(f.name[state.lang] || f.name.tr)}</label>`).join('')}</div></label>
        <label class="field"><span>${t('admin.desc')}</span><input id="mDesc" value="${p ? escapeHtml(p.desc.tr) : ''}" /></label>
        <label class="field"><span>${t('admin.descEn')}</span><input id="mDescEn" value="${p ? escapeHtml(p.desc.en) : ''}" /></label>
        <label class="field full">
          <span>🧂 ${state.lang === 'tr' ? 'İçindekiler (malzeme, miktar, birim)' : 'Ingredients (item, amount, unit)'}</span>
          <div id="ingList">${((p && p.ingredients) || []).map(ingRowHtml).join('') || ingRowHtml(null)}</div>
          <button type="button" class="mini-btn" onclick="ingAddRow()">+ ${state.lang === 'tr' ? 'Malzeme Ekle' : 'Add Ingredient'}</button>
        </label>
        <div class="field full" style="background:var(--bg);border:1px dashed var(--border);border-radius:12px;padding:12px">
          <span>🧮 ${state.lang === 'tr' ? 'Otomatik Maliyet (malzeme fiyatlarından)' : 'Auto Cost (from ingredient prices)'}</span>
          <div id="ingCostBox" style="font-size:.85rem"></div>
          <div style="margin-top:8px"><button type="button" class="mini-btn" onclick="useModalCost()">⬇ ${state.lang === 'tr' ? 'Hesaplananı Maliyete Yaz' : 'Use Calculated Cost'}</button></div>
        </div>
        <label class="field full">
          <span>${state.lang === 'tr' ? 'Görsel' : 'Image'}</span>
          <div class="product-img-picker">
            <img id="mImgPrev" class="m-img-prev" src="${p ? (p.img || placeholderImage(p.cat, getCategory(p.cat).icon)) : placeholderImage(menu.categories[0].id, menu.categories[0].icon)}" alt="" />
            <div class="img-picker-actions">
              <div class="img-btn-row">
                <label class="mini-btn file-btn">📷 ${state.lang === 'tr' ? 'Fotoğraf Seç' : 'Choose Photo'}<input type="file" id="mImg" accept="image/*" hidden /></label>
                <button type="button" class="mini-btn edit-btn" id="mImgEdit"${p && p.img ? '' : ' style="display:none"'} title="${state.lang === 'tr' ? 'Mevcut görseli düzenle' : 'Edit current image'}">✂️ ${state.lang === 'tr' ? 'Düzenle' : 'Edit'}</button>
                <button type="button" class="mini-btn danger" id="mImgClear">🗑️ ${state.lang === 'tr' ? 'Kaldır' : 'Remove'}</button>
              </div>
              <div class="img-hint">${state.lang === 'tr' ? 'Fotoğraf seçince kırpma ekranı açılır' : 'Cropping opens when you choose a photo'}</div>
              <div class="picked-file hidden" id="mPickedFile"></div>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-primary btn-block" onclick="saveProduct()">${t('admin.save')}</button></div>
  `;
  $('#manageModal').classList.remove('hidden');
  state.pendingImg = null;
  window._modalCalcCost = 0;
  const ingListEl = $('#ingList');
  if (ingListEl) {
    ingListEl.addEventListener('input', updateModalCost);
    ingListEl.addEventListener('change', updateModalCost);
  }
  if (window._purchase) {
    updateModalCost();
  } else {
    apiFetch('/api/costs').then(r => r.json()).then(res => {
      if (res && res.success && res.purchase) window._purchase = res.purchase;
      updateModalCost();
    }).catch(() => updateModalCost());
  }
  const imgInput = $('#mImg');
  if (imgInput) imgInput.addEventListener('change', () => {
    const f = imgInput.files && imgInput.files[0];
    if (!f) return;
    const nameEl = $('#mPickedFile');
    if (nameEl) { nameEl.textContent = '📷 ' + f.name; nameEl.classList.remove('hidden'); }
    const reader = new FileReader();
    reader.onload = () => openCrop(reader.result, data => {
      state.pendingImg = data;
      const prev = $('#mImgPrev');
      if (prev) prev.src = data;
    });
    reader.onerror = () => toast('❌', 'error');
    reader.readAsDataURL(f);
  });
  const imgEdit = $('#mImgEdit');
  if (imgEdit) imgEdit.addEventListener('click', () => {
    if (p && p.img) openCrop(p.img, data => {
      state.pendingImg = data;
      const prev = $('#mImgPrev');
      if (prev) prev.src = data;
    });
  });
  const imgClear = $('#mImgClear');
  if (imgClear) imgClear.addEventListener('click', () => {
    state.pendingImg = '';
    const prev = $('#mImgPrev');
    if (prev) prev.src = p ? placeholderImage(p.cat, getCategory(p.cat).icon) : placeholderImage(menu.categories[0].id, menu.categories[0].icon);
    const pf = $('#mPickedFile');
    if (pf) { pf.textContent = ''; pf.classList.add('hidden'); }
  });
}

// ===== Fotoğraf kırpma / düzenleme =====
function openCrop(url, apply) {
  const pre = new Image();
  pre.onload = () => {
    $('#cropImg').src = '';
    $('#cropModal').classList.remove('hidden');
    // Ölçüm modal görünür hale geldikten SONRA yapılmalı (hidden iken width 0 olur)
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const stage = $('#cropStage');
      const sw = stage.clientWidth || stage.offsetWidth || 480;
      const sh = stage.clientHeight || stage.offsetHeight || 240;
      const cw = sw;
      const ch = cw * (2 / 3);
      const natH = sw * (pre.naturalHeight / pre.naturalWidth);
      state.crop = {
        url, apply,
        nw: pre.naturalWidth, nh: pre.naturalHeight,
        sw, sh, cw, ch, natH,
        s0: Math.max(1, ch / natH),
        tx: 0, ty: 0, dragging: false
      };
      $('#cropImg').src = url;
      $('#cropZoom').value = 1;
      setCropTransform();
      renderCropPreview();
    }));
  };
  pre.onerror = () => toast('❌', 'error');
  pre.src = url;
}

function closeCrop() {
  state.crop = null;
  $('#cropModal').classList.add('hidden');
}

function onCropZoom() {
  setCropTransform();
  renderCropPreview();
}

function cropStart(e) {
  const c = state.crop;
  if (!c) return;
  e.preventDefault();
  c.dragging = true;
  c.lastX = e.clientX;
  c.lastY = e.clientY;
}

function cropMove(e) {
  const c = state.crop;
  if (!c || !c.dragging) return;
  e.preventDefault();
  c.tx += (e.clientX - c.lastX);
  c.ty += (e.clientY - c.lastY);
  c.lastX = e.clientX;
  c.lastY = e.clientY;
  setCropTransform();
  if (c.prevTimer) clearTimeout(c.prevTimer);
  c.prevTimer = setTimeout(renderCropPreview, 200);
}

function cropEnd() {
  const c = state.crop;
  if (!c) return;
  c.dragging = false;
}

function setCropTransform() {
  const c = state.crop;
  if (!c) return;
  const s = c.s0 * parseFloat($('#cropZoom').value);
  const img = $('#cropImg');
  img.style.transform = 'translate3d(' + c.tx + 'px, ' + c.ty + 'px, 0) scale(' + s + ')';
}

function renderCropPreview() {
  const c = state.crop;
  if (!c) return;
  const s = c.s0 * parseFloat($('#cropZoom').value);
  const w = c.sw * s;
  const h = c.natH * s;
  const x0 = (c.sw - w) / 2 + c.tx;
  const y0 = (c.sh - h) / 2 + c.ty;
  const xf = (c.sw - c.cw) / 2;
  const yf = (c.sh - c.ch) / 2;
  const k = c.nw / w;
  let sx = (xf - x0) * k;
  let sy = (yf - y0) * k;
  const swr = c.cw * k;
  const shr = c.ch * k;
  sx = Math.max(0, Math.min(sx, c.nw - swr));
  sy = Math.max(0, Math.min(sy, c.nh - shr));
  const outW = 320;
  const outH = Math.round(320 * (c.ch / c.cw));
  const img = new Image();
  img.onload = () => {
    const cv = document.createElement('canvas');
    cv.width = outW; cv.height = outH;
    const cx = cv.getContext('2d');
    cx.drawImage(img, sx, sy, swr, shr, 0, 0, outW, outH);
    const prev = $('#cropPrevThumb');
    if (prev) prev.src = cv.toDataURL('image/jpeg', 0.8);
  };
  img.src = c.url;
}

function applyCrop() {
  const c = state.crop;
  if (!c || !c.apply) return;
  const s = c.s0 * parseFloat($('#cropZoom').value);
  const w = c.sw * s;
  const h = c.natH * s;
  const x0 = (c.sw - w) / 2 + c.tx;
  const y0 = (c.sh - h) / 2 + c.ty;
  const xf = (c.sw - c.cw) / 2;
  const yf = (c.sh - c.ch) / 2;
  const k = c.nw / w;
  let sx = (xf - x0) * k;
  let sy = (yf - y0) * k;
  const swr = c.cw * k;
  const shr = c.ch * k;
  sx = Math.max(0, Math.min(sx, c.nw - swr));
  sy = Math.max(0, Math.min(sy, c.nh - shr));
  const outW = 480;
  const outH = Math.round(480 * (c.ch / c.cw));
  const img = new Image();
  img.onload = () => {
    const cv = document.createElement('canvas');
    cv.width = outW; cv.height = outH;
    const cx = cv.getContext('2d');
    cx.drawImage(img, sx, sy, swr, shr, 0, 0, outW, outH);
    c.apply(cv.toDataURL('image/jpeg', 0.82));
    closeCrop();
  };
  img.src = c.url;
}

function saveMenuProducts() {
  try { localStorage.setItem('kahvebahane_menu', JSON.stringify({ products: menu.products, categories: menu.categories, filters: menu.filters || [] })); } catch (e) {}
  // Sunucudaki ortak menüye yaz (tüm cihazlar görsün) — kısa gecikmeyle toplu gönder
  try {
    if (window._menuSaveT) clearTimeout(window._menuSaveT);
    window._menuSaveT = setTimeout(() => {
      apiFetch('/api/menu', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: menu.products, categories: menu.categories, filters: menu.filters || [] })
      }).catch(() => {});
    }, 600);
  } catch (e) {}
}
function applyServerMenuFull(data) {
  if (!data || !Array.isArray(data.products) || !Array.isArray(data.categories)) return false;
  if (data.products.length === 0 || data.categories.length === 0) return false;
  menu.products = data.products;
  menu.categories = data.categories;
  if (Array.isArray(data.filters)) menu.filters = data.filters;
  if (state.currentCategory && !menu.categories.some(c => c.id === state.currentCategory)) {
    state.currentCategory = menu.categories[0].id;
  }
  return true;
}
function loadServerMenuFull() {
  apiFetch('/api/menu')
    .then(r => r.json())
    .then(res => {
      if (res && res.success && res.menu && applyServerMenuFull(res.menu)) {
        try { localStorage.setItem('kahvebahane_menu', JSON.stringify({ products: menu.products, categories: menu.categories, filters: menu.filters || [] })); } catch (e) {}
        if (state.mode === 'admin' && typeof renderAdmin === 'function') renderAdmin();
        else if (state.mode === 'cashier' && typeof renderCashier === 'function') renderCashier();
        else if (typeof renderCustomer === 'function') renderCustomer();
      }
    })
    .catch(() => {});
}
function loadMenuProducts() {
  try {
    const saved = localStorage.getItem('kahvebahane_menu');
    if (saved) {
      const parsed = JSON.parse(saved);
      const data = Array.isArray(parsed) ? { products: parsed } : parsed;
      if (data && Array.isArray(data.products) && data.products.length > 0) menu.products = data.products;
      if (data && Array.isArray(data.categories) && data.categories.length > 0) menu.categories = data.categories;
      if (data && Array.isArray(data.filters)) menu.filters = data.filters;
    }
  } catch (e) {}
}

// ===== Malzeme (içindekiler) editörü =====
const ING_UNITS = ['gr', 'kg', 'ml', 'lt', 'adet'];
function allIngNames() {
  const out = [];
  const seen = {};
  try {
    (menu.products || []).forEach(p => {
      (p.ingredients || []).forEach(x => {
        if (x && x.name && !seen[x.name]) { seen[x.name] = true; out.push(x.name); }
      });
    });
  } catch (e) {}
  try { return out.sort((a, b) => String(a).localeCompare(String(b), 'tr')); } catch (e) { return out; }
}
function ingRowHtml(ing) {
  const opts = ING_UNITS.map(u => `<option value="${u}"${ing && ing.unit === u ? ' selected' : ''}>${u}</option>`).join('');
  const names = allIngNames();
  const cur = ing ? ing.name : '';
  const nameOpts = names.map(n => `<option value="${escapeHtml(n)}"${cur === n ? ' selected' : ''}>${escapeHtml(n)}</option>`).join('');
  return `<div class="ing-row" style="display:flex;gap:6px;margin-bottom:6px">
    <select class="ing-name-sel" style="flex:2;min-width:0">
      <option value="">— ${state.lang === 'tr' ? 'Malzeme seç' : 'Pick'} —</option>${nameOpts}
    </select>
    <input class="ing-amt" type="number" min="0" step="any" placeholder="${state.lang === 'tr' ? 'Miktar' : 'Qty'}" value="${ing ? ing.amount : ''}" style="flex:1;min-width:0" />
    <select class="ing-unit" style="flex:1;min-width:0">${opts}</select>
    <button type="button" class="mini-btn danger" onclick="ingDelRow(this)">✕</button>
  </div>`;
}
function ingAddRow() {
  const l = $('#ingList');
  if (l) l.insertAdjacentHTML('beforeend', ingRowHtml(null));
  updateModalCost();
}
function ingDelRow(btn) {
  const r = btn.closest('.ing-row');
  if (r) r.remove();
  updateModalCost();
}
function collectIngs() {
  const out = [];
  document.querySelectorAll('#ingList .ing-row').forEach(r => {
    const selEl = r.querySelector('.ing-name-sel');
    const amtEl = r.querySelector('.ing-amt');
    const unitEl = r.querySelector('.ing-unit');
    const name = selEl ? (selEl.value || '').trim() : '';
    const amount = amtEl ? parseFloat(String(amtEl.value || '').replace(',', '.')) : NaN;
    const unit = unitEl ? unitEl.value : 'gr';
    if (name && amount > 0) out.push({ name, amount, unit });
  });
  return out;
}
function ingText(list) {
  return (list || []).map(x => `${x.amount} ${x.unit} ${x.name}`).join(', ');
}

function updateModalCost() {
  const box = $('#ingCostBox');
  if (!box) return;
  const purchase = (typeof window !== 'undefined' && window._purchase) || {};
  const tr = state.lang === 'tr';
  let total = 0;
  const lines = [];
  const missing = [];
  document.querySelectorAll('#ingList .ing-row').forEach(r => {
    const selEl = r.querySelector('.ing-name-sel');
    const amtEl = r.querySelector('.ing-amt');
    const unitEl = r.querySelector('.ing-unit');
    const name = selEl ? (selEl.value || '').trim() : '';
    const amount = amtEl ? parseFloat(String(amtEl.value || '').replace(',', '.')) : NaN;
    const unit = unitEl ? unitEl.value : 'gr';
    if (!name || !(amount > 0)) return;
    const e = purchase[name];
    if (!e || e.price == null || isNaN(Number(e.price))) { missing.push(name); return; }
    let contrib = null;
    if (e.unit === 'kg') {
      if (unit === 'adet') { missing.push(name + ' (?)'); return; }
      const g = unit === 'kg' ? amount * 1000 : unit === 'lt' ? amount * 1000 : amount;
      contrib = g / 1000 * Number(e.price);
    } else {
      if (unit !== 'adet') { missing.push(name + ' (?)'); return; }
      contrib = amount * Number(e.price);
    }
    total += contrib;
    lines.push(`${escapeHtml(name)}: ${fmtPrice(Math.round(contrib * 100) / 100)}`);
  });
  total = Math.round(total * 100) / 100;
  window._modalCalcCost = total;
  let html = `<div style="font-size:1.1rem;font-weight:800;margin-bottom:6px">${tr ? 'Hesaplanan' : 'Calculated'}: ${fmtPrice(total)}</div>`;
  if (lines.length) html += `<div style="opacity:.8">${lines.join(' • ')}</div>`;
  if (missing.length) html += `<div style="color:var(--danger);margin-top:4px">⚠️ ${tr ? 'Fiyat girilmemiş' : 'No price'}: ${escapeHtml([...new Set(missing)].join(', '))}</div>`;
  box.innerHTML = html;
}

function useModalCost() {
  const v = Number(window._modalCalcCost) || 0;
  if (v > 0) {
    const mc = $('#mCost');
    if (mc) mc.value = v;
    toast(state.lang === 'tr' ? 'Maliyete yazıldı ✓' : 'Written to cost ✓', 'success');
  }
}

function closeManageModal() {
  $('#manageModal').classList.add('hidden');
  state.adminEditing = null;
  window._modalCalcCost = 0;
}

function saveProduct() {
  const name = $('#mName').value.trim();
  const nameEn = $('#mNameEn').value.trim();
  const price = Number($('#mPrice').value);
  const cat = $('#mCat').value;
  const desc = $('#mDesc').value.trim();
  const descEn = $('#mDescEn').value.trim();
  let costRaw = $('#mCost') ? $('#mCost').value.trim() : '';
  if (costRaw === '' && (Number(window._modalCalcCost) || 0) > 0) {
    costRaw = String(window._modalCalcCost);
    const mc = $('#mCost');
    if (mc) mc.value = costRaw;
  }
  const cost = costRaw === '' ? null : Number(costRaw);
  const dealRaw = $('#mDeal') ? $('#mDeal').value.trim() : '';
  let deal = dealRaw === '' ? 0 : Math.round(Number(dealRaw));
  if (!(deal > 0) || deal >= 100) deal = 0;
  const ingredients = collectIngs();
  const tags = Array.from(document.querySelectorAll('.mTag:checked')).map(x => x.value);
  if (!name || !price) return;
  if (state.adminEditing) {
    const p = menu.products.find(x => x.id === state.adminEditing);
    if (p) {
      p.name.tr = name; p.name.en = nameEn; p.price = price; p.cat = cat;
      p.desc.tr = desc; p.desc.en = descEn;
      p.cost = cost;
      if (deal > 0) p.deal = deal; else delete p.deal;
      if (tags.length > 0) p.tags = tags; else delete p.tags;
      p.ingredients = ingredients;
      if (state.pendingImg === '') p.img = null;
      else if (state.pendingImg) p.img = state.pendingImg;
    }
    toast(t('admin.productUpdated'), 'success');
  } else {
    const newId = Math.max(...menu.products.map(p => p.id)) + 1;
    const prod = { id: newId, cat, name: { tr: name, en: nameEn }, price, desc: { tr: desc, en: descEn }, img: state.pendingImg || null, cost, ingredients };
    if (deal > 0) prod.deal = deal;
    if (tags.length > 0) prod.tags = tags;
    menu.products.push(prod);
    toast(t('admin.productAdded'), 'success');
  }
  state.pendingImg = null;
  saveMenuProducts();
  closeManageModal();
  renderAdminProductList();
  renderProducts();
}

// ===== Başlatma =====
function init() {
  loadMenuProducts();
  loadServerMenuFull();
  // QR tablo parametresi
  const params = new URLSearchParams(location.search);
  const table = params.get('table');
  if (table) state.table = table;

  // Tema ve dil yükle
  setTheme(localStorage.getItem('theme') || 'dark');

  // Sepeti yenilemede geri yükle (render öncesi)
  loadCart();

  setLang(localStorage.getItem('lang') || 'tr');

  // Navbar işlemleri
  $('#themeToggle').addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  $('#langToggle').addEventListener('click', () => setLang(state.lang === 'tr' ? 'en' : 'tr'));
  $('#menuBtn').addEventListener('click', openNav);
  $('#navClose').addEventListener('click', closeNav);
  $('#navOverlay').addEventListener('click', closeNav);
  $('#navLogoutBtn').addEventListener('click', logout);
  // Bildirim zili (sadece kasiyer arayüzünde bulunur)
  notifications = loadNotifs();
  updateNotifBadge();
  const notifBtn = $('#notifBtn');
  if (notifBtn) notifBtn.addEventListener('click', openNotifs);
  const notifModal = $('#notifModal');
  if (notifModal) notifModal.addEventListener('click', (e) => { if (e.target.id === 'notifModal') closeNotifs(); });
  const notifClear = $('#notifClearBtn');
  if (notifClear) notifClear.addEventListener('click', clearNotifs);
  updateNavUser();
  $$('.nav-item').forEach(n => n.addEventListener('click', () => {
    const target = n.dataset.modeTarget;
    if (target === 'customer') { switchMode('customer'); }
    else if (target === 'cashier') {
      if (!state.user || state.user.role === 'admin') requestAuth('cashier');
      else switchMode('cashier');
    } else if (target === 'admin') {
      if (state.user && state.user.role === 'admin') switchMode('admin');
      else requestAuth('admin');
    }
  }));

  // Auth
  $('#authModal').addEventListener('click', (e) => { if (e.target.id === 'authModal') closeAuth(); });
  $('#authPassword').addEventListener('keydown', (e) => { if (e.key === 'Enter') submitAuth(); });

  // Sipariş
  $('#createOrderBtn').addEventListener('click', submitOrder);
  if ($('#clearCart')) $('#clearCart').addEventListener('click', () => {
    if (cartCount() === 0) return;
    const msg = state.lang === 'tr' ? 'Sepeti temizlemek istediğine emin misin?' : 'Are you sure you want to clear the cart?';
    if (window.confirm(msg)) clearCart();
  });

  // Kişi ekleme
  if ($('#addPersonBtn')) $('#addPersonBtn').addEventListener('click', addPerson);
  const personInput = $('#personInput');
  if (personInput) personInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addPerson(); } });

  const searchInput = $('#searchInput');
  if (searchInput) searchInput.addEventListener('input', (e) => setSearch(e.target.value));
  renderFilters();

  // Sipariş panelini otomatik tazele (her 8 sn)
  setInterval(() => {
    if (state.mode === 'customer' && state.table) refreshCustomerOrders();
  }, 8000);

  // Ödeme modalı
  $('#paymentModal').addEventListener('click', (e) => { if (e.target.id === 'paymentModal') closePaymentModal(); });
  $('#receiptModal').addEventListener('click', (e) => { if (e.target.id === 'receiptModal') closeReceiptModal(); });
  if ($('#paymentConfirmBtn')) $('#paymentConfirmBtn').addEventListener('click', confirmPayment);
  const payOptions = document.getElementById('paymentOptions');
  if (payOptions) payOptions.addEventListener('change', (e) => {
    if (e.target.name === 'payMethod') setPayMethod(e.target.value);
  });

  // Küçük ekranda kart paneli
  const cartPanel = $('#cartPanel');
  if (window.innerWidth <= 900) {
    if (!$('.cart-toggle-bar')) {
      const bar = document.createElement('div');
      bar.className = 'cart-toggle-bar';
      const chevUp = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 15 12 9 18 15"/></svg>';
      const chevDown = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
      const updateBar = () => {
        const open = !cartPanel.classList.contains('cart-closed');
        bar.innerHTML = `${open ? chevDown : chevUp} 🛒 ${t('cart.title')}`;
      };
      cartPanel.prepend(bar);
      bar.addEventListener('click', () => { cartPanel.classList.toggle('cart-closed'); updateBar(); });
      cartPanel.classList.add('cart-closed');
      updateBar();
    }
    if (!$('.cart-total-floating')) {
      const fb = document.createElement('button');
      fb.className = 'cart-total-floating';
      fb.style.display = 'none';
      fb.innerHTML = `<span>🛒 <span class="fb-count">0</span></span><span class="fb-total">0₺</span>`;
      document.body.appendChild(fb);
      fb.addEventListener('click', () => {
        cartPanel.classList.remove('cart-closed');
        const b = $('.cart-toggle-bar');
        if (b) b.innerHTML = `${chevDown} 🛒 ${t('cart.title')}`;
        fb.style.display = 'none';
      });
    }
  }

  loadCashierState();
  const savedAuth = loadAuth();
  if (savedAuth) {
    state.user = savedAuth;
    updateNavUser();
    const savedMode = loadMode() || savedAuth.role;
    try {
      if (savedMode === 'admin' && savedAuth.role === 'admin') {
        switchMode('admin');
      } else if (savedMode === 'cashier' && savedAuth.role !== 'admin') {
        switchMode('cashier');
      } else {
        renderCustomer();
      }
    } catch (e) {
      renderCustomer();
    }
  } else {
    renderCustomer();
  }
}

document.addEventListener('DOMContentLoaded', init);

// ===== Genel yardımcılar =====
function loadAuth() {
  try {
    const s = localStorage.getItem('kahvebahane_auth');
    if (s) {
      const u = JSON.parse(s);
      if (u && u.role) {
        try {
          const tok = localStorage.getItem('kahvebahane_token');
          if (tok && typeof state !== 'undefined') state.token = tok;
        } catch (e) {}
        return { username: u.username, role: u.role };
      }
    }
  } catch (e) {}
  return null;
}
function loadMode() {
  try { return localStorage.getItem('kahvebahane_mode'); } catch (e) {}
  return null;
}
function loadCashierState() {
  try {
    const v = localStorage.getItem('kahvebahane_cashier_view');
    if (v) state.cashierView = v;
    const f = localStorage.getItem('kahvebahane_table_filter');
    if (f) window._tableFilter = f;
  } catch (e) {}
}
function payOrder(id) {
  apiFetch('/api/orders/' + id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paid: true, status: 'paid' })
  }).then(r => r.json()).then(() => { fetchOrders(); toast(t('cashier.payOk'), 'success'); })
    .catch(() => toast(t('toast.orderFail'), 'error'));
}
