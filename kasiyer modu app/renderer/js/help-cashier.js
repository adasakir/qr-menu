// ===== Kasiyer Kullanım Kılavuzu içeriği =====
var HELP_CASHIER = [
{ t: '🚀 Başlarken', h: `
<h4>Programı açma</h4>
<div class="help-steps">
<div class="help-step">Programı çift tıklayın. Kullanıcı adı ve şifrenizi girin. Şifre ekranı kapatılamaz, giriş yapmadan kasa kullanılmaz.</div>
<div class="help-step">Üstte 3 görünüm vardır: <b>İstasyon</b> (mutfak/bar), <b>Masalar</b> (hesap kapatma), <b>Ödenenler</b> (günün fişleri).</div>
</div>
<div class="help-ok">💡 İnternet ve kafe wifisi açık olmalıdır. Üstte bağlantı hatası görürseniz <b>Bağlantı Sorunları</b> başlığına bakın.</div>
` },
{ t: '🧾 Siparişleri İzleme', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step"><b>İstasyon</b> görünümünde mutfak ve bar siparişleri ayrı kartlarda listelenir. Yeni sipariş gelince <b>ding</b> sesi çalar ve zil ikonunda sayı belirir.</div>
<div class="help-step">Sipariş kartındaki düğmelerle durumu ilerletin: <b>Yeni → Hazır → Servis Edildi</b>. Mutfak personeli de bu ekrandan takip eder.</div>
<div class="help-step">Zil ikonuna basarak bildirim listesini görebilir, <b>Temizle</b> ile sıfırlayabilirsiniz.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">🔕 <b>Ses gelmiyor:</b> Tarayıcı kuralı gereği ekrana bir kez tıklamadan ses çalışmaz. Programa bir kez tıklayın, sonraki siparişlerde ses gelir.</div>
<div class="help-warn">📭 <b>Sipariş düşmüyor:</b> Sayfa 5 saniyede bir kendini yeniler. 10 saniyeden uzun süredir gelmiyorsa bağlantıyı kontrol edin.</div>
` },
{ t: '💰 Hesap Ödeme', h: `
<h4>Toplu ödeme (masanın tamamı)</h4>
<div class="help-steps">
<div class="help-step"><b>Masalar</b> görünümünde masa karesine dokunun, üstte <b>💰 Toplu Ödeme</b> kutusuna basın.</div>
<div class="help-step">Ödeme tipini seçin: <b>💵 Nakit</b> veya <b>💳 Kart</b>.</div>
<div class="help-step">Varsa indirimi girin: <b>%</b> ya da <b>₺</b> seçip tutarı yazın. Hazır düğmeler: %5, %10, %20. <b>🎁 İkram</b> hesabı %100 indirim yapar (0₺).</div>
<div class="help-step"><b>Ödemeyi Tamamla</b> basın. Fiş ekranı açılır, yazdırabilirsiniz.</div>
</div>
<h4>Kişi ayrı ödeme</h4>
<div class="help-steps">
<div class="help-step">Masa ekranında aşağıda her kişinin ayrı hesabı listelenir. İlgili kişinin <b>💰 Öde</b> düğmesine basın.</div>
<div class="help-step">Nakit/kart + indirim seçip onaylayın. O kişinin ürünleri hesaptan düşer, kalanlar masada kalır.</div>
</div>
<svg viewBox="0 0 420 120" style="width:100%;max-width:420px;background:var(--bg);border:1px solid var(--border);border-radius:10px;margin-top:8px">
<rect x="8" y="35" width="110" height="50" rx="10" fill="none" stroke="var(--primary)" stroke-width="2"/><text x="63" y="55" text-anchor="middle" fill="var(--text)" font-size="12">Masa 5</text><text x="63" y="72" text-anchor="middle" fill="var(--text-muted)" font-size="11">480₺</text>
<rect x="155" y="8" width="120" height="44" rx="10" fill="none" stroke="var(--success)" stroke-width="2"/><text x="215" y="26" text-anchor="middle" fill="var(--text)" font-size="12">💰 Toplu</text><text x="215" y="41" text-anchor="middle" fill="var(--text-muted)" font-size="10">hepsi birden</text>
<rect x="155" y="62" width="120" height="44" rx="10" fill="none" stroke="var(--success)" stroke-width="2"/><text x="215" y="80" text-anchor="middle" fill="var(--text)" font-size="12">👤 Ayrı ayrı</text><text x="215" y="95" text-anchor="middle" fill="var(--text-muted)" font-size="10">kişi bazlı</text>
<rect x="305" y="35" width="107" height="50" rx="10" fill="none" stroke="var(--primary)" stroke-width="2"/><text x="358" y="55" text-anchor="middle" fill="var(--text)" font-size="12">🧾 Fiş</text><text x="358" y="72" text-anchor="middle" fill="var(--text-muted)" font-size="11">yazdır</text>
<line x1="118" y1="60" x2="155" y2="30" stroke="var(--text-muted)" stroke-width="2"/><line x1="118" y1="60" x2="155" y2="84" stroke="var(--text-muted)" stroke-width="2"/><line x1="275" y1="30" x2="305" y2="55" stroke="var(--text-muted)" stroke-width="2"/><line x1="275" y1="84" x2="305" y2="65" stroke="var(--text-muted)" stroke-width="2"/>
</svg>
<div class="help-ok">💡 İndirim tutarı fişte ayrı satır görünür. İkram verilen ürün stoktan yine düşer.</div>
` },
{ t: '⚠️ Yanlış Ödemede Ne Yapılır?', h: `
<div class="help-warn">⛔ <b>Önemli:</b> Ödeme tamamlanınca <b>geri alma düğmesi yoktur</b>. Ödenen ürünler hesaptan düşer ve fiş arşive işlenir. O yüzden <b>Ödemeyi Tamamla</b> basmadan önce kişi, tutar ve nakit/kart seçimini iki kez kontrol edin.</div>
<h4>Yanlışlıkla ödendi, şimdi ne olacak?</h4>
<div class="help-steps">
<div class="help-step">Sakin olun, fiş numarasını ve tutarı bir kağıda not edin (<b>Ödenenler</b> ekranında fiş görünür).</div>
<div class="help-step">Müşteriden para alındıysa iade gerekiyorsa elden iade edin ve fişin üzerine not düşün.</div>
<div class="help-step">Siparişin yeniden hazırlanması gerekiyorsa müşteri telefonundan (QR menüden) siparişi tekrar girsin. Kasa ekranından sipariş girilmez.</div>
<div class="help-step">Gün sonunda kasa sayımında fark çıkarsa yöneticiye fiş numarasıyla birlikte bildirin, <b>Raporlar</b> ekranında açıklama olarak yazılır.</div>
</div>
<h4>Yanlış kişiye ödeme işlendi</h4>
<div class="help-steps">
<div class="help-step">Kalan kişilerden doğru ödemeyi alın, fazla alınan tutarı elden iade edin.</div>
<div class="help-step">Fiş numaralarını not edip yöneticiye bildirin.</div>
</div>
` },
{ t: '🔔 Garson Çağrıları', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step">Müşteri masadan <b>Garson Çağır</b> basınca kasiyer ekranında çağrı kartı belirir ve ses çalar.</div>
<div class="help-step">Masaya gidip ilgilendikten sonra karttaki <b>Karşılandı / Kapat</b> düğmesine basın.</div>
</div>
<div class="help-ok">💡 Aynı masa 3 dakika içinde tekrar çağıramaz. Üst üste çağrı geliyorsa müşteri bekliyordur, öncelik verin.</div>
` },
{ t: '🖨️ Fiş Yazdırma', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step">Ödeme sonrası açılan fiş önizlemede <b>Yazdır</b> düğmesine basın.</div>
<div class="help-step">Açılan pencerede doğru yazıcıyı seçin (80mm termal yazıcı). Kağıt biterse ruloyu değiştirip tekrar yazdırın.</div>
<div class="help-step">Eski bir fişi tekrar yazdırmak için <b>Ödenenler</b> ekranında ilgili fişin <b>Yazdır</b> düğmesine basın.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">🖨️ <b>Yazdır penceresi açılmıyor:</b> Programı kapatıp yeniden açın. Düzelmezse yöneticiye bildirin.</div>
<div class="help-warn">🧾 <b>Yazılar sığmıyor / kesik çıkıyor:</b> Yazıcı ayarlarında kağıt boyutunun <b>80mm</b> olduğundan emin olun.</div>
` },
{ t: '📶 Bağlantı Sorunları', h: `
<h4>Belirtiler</h4>
<div class="help-steps">
<div class="help-step">Ekranda <b>"Sunucuya ulaşılamıyor"</b> yazıyorsa siparişler gelmez ve ödeme alınamaz.</div>
</div>
<h4>Ne yapmalı?</h4>
<div class="help-steps">
<div class="help-step">Kafe wifisine bağlı olduğunuzu kontrol edin (telefonunuzda wifi var mı?).</div>
<div class="help-step">Sunucu bilgisayarın açık olduğunu ve siyah sunucu ekranının durduğunu kontrol edin. Kapalıysa <b>KAHVEBAHANE-BASLAT</b> dosyasına çift tıklayın.</div>
<div class="help-step">Düzelmezse siparişleri kağıda yazarak almaya devam edin, sistemi zorlamayın. Yöneticiye haber verin.</div>
</div>
<div class="help-warn">⚠️ Bağlantı yokken alınan ödemeleri <b>elden ve notla</b> takip edin, sistem düzelince işleyin.</div>
` },
{ t: '🚪 Çıkış ve Vardiya', h: `
<h4>Nasıl çalışır?</h4>
<div class="help-steps">
<div class="help-step">Kasiyer ekranından çıkış yapılamaz, çıkışa basınca tekrar giriş ekranı gelir. Böylece kasa başıboş kalmaz.</div>
<div class="help-step">Vardiya değişiminde <b>Çıkış</b> deyip yeni kasiyer kendi şifresiyle girsin.</div>
<div class="help-step">Gün sonunda <b>Ödenenler</b> ekranındaki toplam ile çekmecedeki parayı karşılaştırın.</div>
</div>
` }
];
