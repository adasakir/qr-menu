// ===== Admin Kullanım Kılavuzu içeriği =====
var HELP_ADMIN = [
{ t: '🚀 Başlarken', h: `
<h4>Admin paneli nedir?</h4>
<p>Sol menüde 10 bölüm vardır: <b>Ana Menü, İstatistikler, Maliyet, Ürün Ekleme, Eski Fişler, Raporlar, Giderler, Stok, Filtreler, Masa QR</b>. Müşteri ve kasiyer ekranları burada görünmez, onlar ayrı programlardadır.</p>
<div class="help-steps">
<div class="help-step">Programı açıp admin şifrenizle girin.</div>
<div class="help-step">Sol üstteki <b>☰</b> düğmesiyle menüyü açıp bölümler arası geçin.</div>
</div>
<div class="help-ok">💡 Yaptığınız menü/fiyat değişiklikleri anında tüm müşteri telefonlarına ve kasaya yansır.</div>
` },
{ t: '📊 İstatistikler', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step"><b>İstatistikler</b> bölümünde sekmeler vardır: satış özeti, ürün, kategori, ödeme (nakit/kart), saat, masa, fişler ve ortalama.</div>
<div class="help-step">Gün seçerek geçmiş günlerin cirosunu ve fiş detayını görürsünüz. Bugünün verisi canlıdır.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">📭 <b>"Kayıtlı satış yok" görünüyor:</b> Henüz ödeme alınmamıştır. Ödeme alınmadan istatistik oluşmaz, sipariş tek başına yetmez. Test için ödeme yapıp sayfayı yenileyin.</div>
<div class="help-warn">🔑 <b>Ekran boş / giriş istiyor:</b> Oturum süresi dolmuştur, tekrar admin şifrenizle girin.</div>
` },
{ t: '🧮 Maliyet Hesaplama', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step">Önce her malzemenin <b>alış fiyatını</b> girin (ör. un: kg başına ₺). Fiyatı bilinmeyenler <b>özel malzeme</b> olarak eklenir, ilgisizler <b>gizli</b> listesine alınır.</div>
<div class="help-step"><b>Kaydet</b> basın. Her ürünün maliyeti reçetesindeki miktarlara göre otomatik hesaplanır.</div>
<div class="help-step">Satış fiyatı ile maliyet farkını görüp fiyat güncellemesi yapabilirsiniz.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">0️⃣ <b>Maliyet 0 görünüyor:</b> Ürünün reçetesi boştur ya da malzemelerin alış fiyatı girilmemiştir. Önce <b>Ürün Ekleme</b> bölümünde reçeteyi, burada alış fiyatını tamamlayın.</div>
` },
{ t: '➕ Ürün Ekleme', h: `
<h4>Yeni ürün</h4>
<div class="help-steps">
<div class="help-step"><b>Ürün Ekleme</b> bölümünde <b>Yeni Ürün</b> deyin, adı (Türkçe/İngilizce), fiyatı, kategorisi ve hazırlandığı istasyonu (<b>mutfak/bar</b>) seçin. İstasyon yanlışsa sipariş yanlış ekrana düşer!</div>
<div class="help-step"><b>Fotoğraf</b> seçip kırpma ekranında sürükleyip yakınlaştırın, <b>Kırp ve Onayla</b> basın.</div>
<div class="help-step"><b>Reçete (malzemeler)</b> ekleyin: malzeme adı, miktar, birim (gr/ml/adet). Bu bilgiler maliyeti ve stoku çalıştırır.</div>
<div class="help-step">Kampanya varsa <b>indirim yüzdesi</b> girin, müşteri indirimli fiyatı görür.</div>
<div class="help-step"><b>Kaydet</b> basın. Menü anında yayınlanır.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">🖼️ <b>Foto görünmüyor:</b> Kırpma adımını atlamış olabilirsiniz. Ürünü düzenleyip fotoğrafı tekrar kırpın.</div>
<div class="help-warn">🍳 <b>Sipariş yanlış ekranda:</b> Ürünün kategorisinin istasyonunu kontrol edin (içecekler bar, yemekler mutfak).</div>
<div class="help-warn">💰 <b>Fiyat değişmedi:</b> Kaydet'e bastığınızdan ve aynı ürünü iki kez eklemediğinizden emin olun.</div>
` },
{ t: '🧾 Eski Fişler', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step"><b>Eski Fişler</b> bölümünde tarih seçin, o günün tüm fişleri kişi, masa, tutar ve ödeme tipiyle listelenir.</div>
<div class="help-step">Müşteri "dün şunu ödedim" derse buradan fişi bulup kontrol edin.</div>
</div>
<div class="help-ok">💡 Bugünün fişleri kasiyer programındaki <b>Ödenenler</b> ekranında da görünür.</div>
` },
{ t: '📥 Raporlar', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step"><b>Raporlar</b> bölümünde dönem seçin (günlük/haftalık/aylık), <b>Önizle</b> ile kontrol edin.</div>
<div class="help-step"><b>Excel İndir</b> ile dosyayı bilgisayarınıza alın (genelde İndirilenler klasörüne gider).</div>
<div class="help-step"><b>Yazdır</b> ile kağıt çıktı alın. Gün sonu özeti için gün bitmeden raporu kaydedin.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">📂 <b>Excel'i bulamıyorum:</b> Tarayıcı İndirilenler klasörüne bakın, dosya adı tarih içerir.</div>
<div class="help-warn">🔢 <b>Rakamlar tutmuyor:</b> İndirim ve ikramlar toplamdan düşer, brüt ciroya bakıyorsanız fark normaldir. Nakit/kart ayrımını ödeme sekmesinden kontrol edin.</div>
` },
{ t: '💸 Giderler ve Kâr', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step"><b>Giderler</b> bölümünde kira, maaş, fatura gibi harcamaları <b>tek seferlik</b> ya da <b>aylık</b> olarak ekleyin.</div>
<div class="help-step"><b>Kâr</b> sekmesinde seçili dönemin cirosundan giderler düşülerek net kâr gösterilir.</div>
<div class="help-step">Yanlış girilen gideri listesinden <b>sil</b>ebilirsiniz.</div>
</div>
<div class="help-ok">💡 Aylık giderler her ay otomatik hesaba katılır, tekrar eklemeyin.</div>
` },
{ t: '📦 Stok', h: `
<h4>Nasıl çalışır?</h4>
<div class="help-steps">
<div class="help-step"><b>Stok</b> bölümünde her malzemenin kalan miktarı ve <b>kritik eşik</b> değeri vardır. Eşiğin altına düşenler uyarı rengiyle gösterilir.</div>
<div class="help-step">Mal geldiğinde <b>Stok Ekle</b> ile miktarı artırın. Eşiği ürünün günlük tüketimine göre ayarlayın.</div>
<div class="help-step">Ödeme alındıkça reçetedeki malzemeler <b>otomatik düşer</b>. İkram ürünlerde de düşer.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">📉 <b>Stok düşmüyor:</b> Ürünün reçetesi boştur. <b>Ürün Ekleme</b> bölümünden malzemeleri ekleyin.</div>
<div class="help-warn">🔔 <b>Sürekli uyarı veriyor:</b> Eşik değeri çok yüksek ayarlanmıştır, düşürün ya da stok ekleyin.</div>
` },
{ t: '🏷️ Filtreler', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step"><b>Filtreler</b> bölümünde müşteri menüsündeki etiketleri yönetirsiniz (ör. vegan, acılı, kampanyalı).</div>
<div class="help-step">Yeni filtre ekleyip hangi ürünlerde görüneceğini seçin. Müşteri menüde bu rozetleri görür.</div>
</div>
` },
{ t: '🔳 Masa QR', h: `
<h4>Nasıl kullanılır?</h4>
<div class="help-steps">
<div class="help-step"><b>Masa QR</b> bölümünde masa sayısını girip kodları üretin.</div>
<div class="help-step"><b>İndir/Yazdır</b> ile çıkartıp her masaya ilgili numarayı koyun. Müşteri okutunca menü o masayla açılır.</div>
<div class="help-step">Masa sayısı değişirse kodları yeniden üretip eskileri toplayın.</div>
</div>
<h4>Sorun / çözüm</h4>
<div class="help-warn">🔗 <b>QR yanlış siteye gidiyor:</b> Programın bağlı olduğu sunucu adresi değişmiştir. Yönetici konsoldan adresi kontrol etsin. Masa numarasız açılıyorsa QR eski basımdır, yeniden üretin.</div>
` },
{ t: '🧹 Tüm Verileri Temizle', h: `
<div class="help-warn">⛔ Bu bölüm <b>tüm geçmişi</b> siler: siparişler, fişler, satış geçmişi, giderler, stoklar. <b>Menü silinmez.</b> Geri dönüşü yoktur.</div>
<h4>Akış</h4>
<div class="help-steps">
<div class="help-step">Admin şifrenizi girip doğrulayın.</div>
<div class="help-step">3 uyarıyı tek tek onaylayın.</div>
<div class="help-step">Son ekrana <b>SİL</b> yazıp düğmeye basın.</div>
<div class="help-step">Bitince istatistikler yeni sipariş gelene kadar sıfır görünür.</div>
</div>
` },
{ t: '🛠️ Sorun Giderme', h: `
<h4>Bağlantı / giriş</h4>
<div class="help-steps">
<div class="help-step"><b>"Sunucuya ulaşılamıyor":</b> wifi ve sunucu bilgisayarı kontrol edin, düzelmezse sunucu adresini yönetici konsoldan değiştirsin.</div>
<div class="help-step"><b>Sürekli giriş istiyor:</b> Oturum süresi dolmuştur, tekrar girin. Düzelmezse programı kapatıp açın.</div>
</div>
<h4>Veri sorunları</h4>
<div class="help-steps">
<div class="help-step"><b>Menü telefonda görünmüyor:</b> Ürün kaydedilmiş mi, kategorisi doğru mu kontrol edin.</div>
<div class="help-step"><b>Kasiyer siparişi görmüyor:</b> Ürün istasyonu (mutfak/bar) ve bağlantıyı kontrol edin.</div>
<div class="help-step"><b>Yanlış ödeme alındı:</b> Geri alma yoktur. Fiş numarasını not edip siparişi müşteri ekranından yeniden girin, gün sonu rapora not düşün.</div>
</div>
` }
];
