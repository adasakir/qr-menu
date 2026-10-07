const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=480&q=70`;

const MENU_DATA = {
  categories: [
    { id: 'hot', name: { tr: 'Sıcak İçecekler', en: 'Hot Drinks' }, station: 'bar', icon: '☕' },
    { id: 'cold', name: { tr: 'Soğuk İçecekler', en: 'Cold Drinks' }, station: 'bar', icon: '🥤' },
    { id: 'alcohol', name: { tr: 'Alkollü İçecekler', en: 'Alcoholic' }, station: 'bar', icon: '🍷' },
    { id: 'main', name: { tr: 'Ana Yemekler', en: 'Main Dishes' }, station: 'kitchen', icon: '🍽️' },
    { id: 'appetizer', name: { tr: 'Başlangıçlar', en: 'Appetizers' }, station: 'kitchen', icon: '🥗' },
    { id: 'pasta', name: { tr: 'Makarnalar', en: 'Pastas' }, station: 'kitchen', icon: '🍝' }
  ],
  products: [
    { id: 1, cat: 'hot', name: { tr: 'Türk Kahvesi', en: 'Turkish Coffee' }, price: 60, desc: { tr: 'Geleneksel cezvede pişirilmiş', en: 'Traditionally brewed in cezve' }, img: U('1495474472287-4d71bcdd2085'), ingredients: [{ name: 'Su', amount: 70, unit: 'ml' }, { name: 'Türk kahvesi', amount: 10, unit: 'gr' }, { name: 'Şeker', amount: 5, unit: 'gr' }] },
    { id: 2, cat: 'hot', name: { tr: 'Espresso', en: 'Espresso' }, price: 75, desc: { tr: 'Yoğun aromalı espresso', en: 'Intense aromatic espresso' }, img: U('1510591509098-f4fdc6d0ff04'), ingredients: [{ name: 'Espresso çekirdeği', amount: 18, unit: 'gr' }, { name: 'Su', amount: 36, unit: 'ml' }] },
    { id: 3, cat: 'hot', name: { tr: 'Latte', en: 'Caffe Latte' }, price: 95, desc: { tr: 'Sütlü kahve', en: 'Milky coffee' }, img: U('1541167760496-1628856ab772'), ingredients: [{ name: 'Espresso', amount: 36, unit: 'ml' }, { name: 'Süt', amount: 200, unit: 'ml' }, { name: 'Süt köpüğü', amount: 30, unit: 'ml' }] },
    { id: 4, cat: 'hot', name: { tr: 'Cappuccino', en: 'Cappuccino' }, price: 95, desc: { tr: 'Kremalı kahve', en: 'Creamy coffee' }, img: U('1572442388796-11668a67e53d'), ingredients: [{ name: 'Espresso', amount: 36, unit: 'ml' }, { name: 'Süt', amount: 100, unit: 'ml' }, { name: 'Süt köpüğü', amount: 60, unit: 'ml' }, { name: 'Kakao', amount: 2, unit: 'gr' }] },
    { id: 5, cat: 'hot', name: { tr: 'Çay', en: 'Tea' }, price: 40, desc: { tr: 'Demleme çay', en: 'Brewed tea' }, img: U('1544787219-7f47ccb76574'), ingredients: [{ name: 'Çay', amount: 10, unit: 'gr' }, { name: 'Su', amount: 200, unit: 'ml' }] },
    { id: 6, cat: 'hot', name: { tr: 'Sıcak Çikolata', en: 'Hot Chocolate' }, price: 90, desc: { tr: 'Sütlü sıcak çikolata', en: 'Milky hot chocolate' }, img: U('1577805947697-89e18249d767'), ingredients: [{ name: 'Süt', amount: 200, unit: 'ml' }, { name: 'Bitter çikolata', amount: 30, unit: 'gr' }, { name: 'Kakao', amount: 5, unit: 'gr' }] },
    { id: 7, cat: 'cold', name: { tr: 'Ice Americano', en: 'Iced Americano' }, price: 85, desc: { tr: 'Buzlu americano', en: 'Iced americano' }, img: U('1461023058943-07fcbe16d735'), ingredients: [{ name: 'Espresso', amount: 36, unit: 'ml' }, { name: 'Su', amount: 150, unit: 'ml' }, { name: 'Buz', amount: 80, unit: 'gr' }] },
    { id: 8, cat: 'cold', name: { tr: 'Buzlu Limonata', en: 'Iced Lemonade' }, price: 70, desc: { tr: 'Taze sıkılmış', en: 'Freshly squeezed' }, img: U('1523677011781-c91d1bbe2f9e'), ingredients: [{ name: 'Limon', amount: 2, unit: 'adet' }, { name: 'Su', amount: 250, unit: 'ml' }, { name: 'Toz şeker', amount: 20, unit: 'gr' }, { name: 'Nane', amount: 4, unit: 'adet' }, { name: 'Buz', amount: 80, unit: 'gr' }] },
    { id: 9, cat: 'cold', name: { tr: 'Alkolsüz Kokteyl', en: 'Mocktail' }, price: 110, desc: { tr: 'Meyveli alkolsüz kokteyl', en: 'Fruity alcohol-free cocktail' }, img: U('1437418747212-8d9709afab22'), ingredients: [{ name: 'Portakal suyu', amount: 100, unit: 'ml' }, { name: 'Nar suyu', amount: 50, unit: 'ml' }, { name: 'Soda', amount: 100, unit: 'ml' }, { name: 'Buz', amount: 80, unit: 'gr' }] },
    { id: 10, cat: 'cold', name: { tr: 'Soğuk Çay', en: 'Ice Tea' }, price: 65, desc: { tr: 'Şeftali aromalı', en: 'Peach flavor' }, img: U('1556679343-c7306c1976bc'), ingredients: [{ name: 'Çay', amount: 10, unit: 'gr' }, { name: 'Su', amount: 190, unit: 'ml' }, { name: 'Şeftali püresi', amount: 40, unit: 'ml' }, { name: 'Buz', amount: 80, unit: 'gr' }] },
    { id: 11, cat: 'cold', name: { tr: 'Karpuz Suyu', en: 'Watermelon Juice' }, price: 80, desc: { tr: 'Taze sıkılmış', en: 'Fresh squeezed' }, img: U('1563114773-84221bd62daa'), ingredients: [{ name: 'Karpuz', amount: 300, unit: 'gr' }, { name: 'Buz', amount: 60, unit: 'gr' }, { name: 'Limon', amount: 0.5, unit: 'adet' }] },
    { id: 12, cat: 'alcohol', name: { tr: 'Şarap Kadehi', en: 'Wine Glass' }, price: 140, desc: { tr: 'Ev şarabı', en: 'House wine' }, img: U('1510812431401-41d2bd2722f3'), ingredients: [{ name: 'Kırmızı şarap', amount: 150, unit: 'ml' }] },
    { id: 13, cat: 'alcohol', name: { tr: 'Bira', en: 'Beer' }, price: 120, desc: { tr: 'Yerli bira', en: 'Domestic beer' }, img: U('1608270586620-248524c67de9'), ingredients: [{ name: 'Bira', amount: 330, unit: 'ml' }] },
    { id: 14, cat: 'alcohol', name: { tr: 'Kokteyl', en: 'Cocktail' }, price: 160, desc: { tr: 'Klasik kokteyeller', en: 'Classic cocktails' }, img: U('1551024709-8f23befc6f87'), ingredients: [{ name: 'Votka', amount: 50, unit: 'ml' }, { name: 'Portakal suyu', amount: 100, unit: 'ml' }, { name: 'Buz', amount: 80, unit: 'gr' }, { name: 'Limon', amount: 1, unit: 'adet' }] },
    { id: 15, cat: 'main', name: { tr: 'Izgara Tavuk', en: 'Grilled Chicken' }, price: 220, desc: { tr: 'Sebze garnitür ile', en: 'With vegetable garnish' }, img: U('1555939594-58d7cb561ad1'), ingredients: [{ name: 'Tavuk göğsü', amount: 200, unit: 'gr' }, { name: 'Zeytinyağı', amount: 10, unit: 'ml' }, { name: 'Kekik', amount: 2, unit: 'gr' }, { name: 'Tuz', amount: 3, unit: 'gr' }, { name: 'Garnitür sebze', amount: 100, unit: 'gr' }] },
    { id: 16, cat: 'main', name: { tr: 'Köfte', en: 'Meatballs' }, price: 240, desc: { tr: 'Izgara köfte, patates', en: 'Grilled meatballs, fries' }, img: U('1529042410759-befb1204b468'), ingredients: [{ name: 'Dana kıyma', amount: 180, unit: 'gr' }, { name: 'Soğan', amount: 30, unit: 'gr' }, { name: 'Bayat ekmek', amount: 20, unit: 'gr' }, { name: 'Patates', amount: 150, unit: 'gr' }, { name: 'Tuz', amount: 3, unit: 'gr' }] },
    { id: 17, cat: 'main', name: { tr: 'Balık Izgara', en: 'Grilled Fish' }, price: 280, desc: { tr: 'Mevsim balığı', en: 'Seasonal fish' }, img: U('1467003909585-2f8a72700288'), ingredients: [{ name: 'Levrek', amount: 250, unit: 'gr' }, { name: 'Zeytinyağı', amount: 10, unit: 'ml' }, { name: 'Limon', amount: 1, unit: 'adet' }, { name: 'Tuz', amount: 3, unit: 'gr' }] },
    { id: 18, cat: 'main', name: { tr: 'Karışık Tost', en: 'Mixed Toast' }, price: 130, desc: { tr: 'Kaşar, sucuk, domates', en: 'Cheese, sausage, tomato' }, img: U('1528735602780-2552fd46c7af'), ingredients: [{ name: 'Tost ekmeği', amount: 2, unit: 'adet' }, { name: 'Kaşar peyniri', amount: 40, unit: 'gr' }, { name: 'Sucuk', amount: 30, unit: 'gr' }, { name: 'Domates', amount: 30, unit: 'gr' }] },
    { id: 19, cat: 'appetizer', name: { tr: 'Mevsim Salata', en: 'Seasonal Salad' }, price: 120, desc: { tr: 'Taze yeşillikler', en: 'Fresh greens' }, img: U('1512621776951-a57141f2eefd'), ingredients: [{ name: 'Marul', amount: 60, unit: 'gr' }, { name: 'Domates', amount: 50, unit: 'gr' }, { name: 'Salatalık', amount: 50, unit: 'gr' }, { name: 'Zeytinyağı', amount: 10, unit: 'ml' }, { name: 'Limon', amount: 0.5, unit: 'adet' }] },
    { id: 20, cat: 'appetizer', name: { tr: 'Çıtır Patates', en: 'Crispy Fries' }, price: 90, desc: { tr: 'Kızarmış patates', en: 'Fried potatoes' }, img: U('1541592106381-b31e9677c0e5'), ingredients: [{ name: 'Patates', amount: 200, unit: 'gr' }, { name: 'Ayçiçek yağı', amount: 500, unit: 'ml' }, { name: 'Tuz', amount: 3, unit: 'gr' }] },
    { id: 21, cat: 'appetizer', name: { tr: 'Bruschetta', en: 'Bruschetta' }, price: 110, desc: { tr: 'Domates, fesleğen', en: 'Tomato, basil' }, ingredients: [{ name: 'Ekmek', amount: 2, unit: 'adet' }, { name: 'Domates', amount: 60, unit: 'gr' }, { name: 'Fesleğen', amount: 5, unit: 'gr' }, { name: 'Zeytinyağı', amount: 10, unit: 'ml' }, { name: 'Sarımsak', amount: 1, unit: 'adet' }] },
    { id: 22, cat: 'appetizer', name: { tr: 'Humus', en: 'Hummus' }, price: 95, desc: { tr: 'Nohut ezmesi, zeytinyağı', en: 'Chickpea dip, olive oil' }, ingredients: [{ name: 'Nohut', amount: 100, unit: 'gr' }, { name: 'Tahin', amount: 30, unit: 'gr' }, { name: 'Zeytinyağı', amount: 15, unit: 'ml' }, { name: 'Limon', amount: 0.5, unit: 'adet' }, { name: 'Tuz', amount: 2, unit: 'gr' }] },
    { id: 23, cat: 'pasta', name: { tr: 'Spagetti Bolonez', en: 'Spaghetti Bolognese' }, price: 180, desc: { tr: 'Kıymalı sos', en: 'Meat sauce' }, img: U('1551183053-bf91a1d81141'), ingredients: [{ name: 'Spagetti', amount: 120, unit: 'gr' }, { name: 'Dana kıyma', amount: 100, unit: 'gr' }, { name: 'Domates sos', amount: 80, unit: 'ml' }, { name: 'Parmesan', amount: 10, unit: 'gr' }] },
    { id: 24, cat: 'pasta', name: { tr: 'Penne Arrabbiata', en: 'Penne Arrabbiata' }, price: 170, desc: { tr: 'Acılı domates sosu', en: 'Spicy tomato sauce' }, img: U('1473093295043-cdd812d0e601'), ingredients: [{ name: 'Penne', amount: 120, unit: 'gr' }, { name: 'Domates sos', amount: 80, unit: 'ml' }, { name: 'Acı biber', amount: 3, unit: 'gr' }, { name: 'Sarımsak', amount: 1, unit: 'adet' }, { name: 'Zeytinyağı', amount: 10, unit: 'ml' }] },
    { id: 25, cat: 'pasta', name: { tr: 'Fettuccine Alfredo', en: 'Fettuccine Alfredo' }, price: 190, desc: { tr: 'Kremalı sos', en: 'Cream sauce' }, img: U('1563379926898-05f4575a45d8'), ingredients: [{ name: 'Fettuccine', amount: 120, unit: 'gr' }, { name: 'Krema', amount: 80, unit: 'ml' }, { name: 'Parmesan', amount: 15, unit: 'gr' }, { name: 'Tereyağı', amount: 10, unit: 'gr' }] },
    { id: 26, cat: 'pasta', name: { tr: 'Kremalı Mantarlı Makarna', en: 'Creamy Mushroom Pasta' }, price: 185, desc: { tr: 'Mantar, krema', en: 'Mushroom, cream' }, ingredients: [{ name: 'Makarna', amount: 120, unit: 'gr' }, { name: 'Mantar', amount: 80, unit: 'gr' }, { name: 'Krema', amount: 60, unit: 'ml' }, { name: 'Tereyağı', amount: 10, unit: 'gr' }, { name: 'Sarımsak', amount: 1, unit: 'adet' }] }
  ]
};

// Placeholder images (colored SVG per category)
const PLACEHOLDER_COLORS = {
  hot: '#b45309',
  cold: '#0e7490',
  alcohol: '#9d174d',
  main: '#b91c1c',
  appetizer: '#15803d',
  pasta: '#a16207'
};

function placeholderImage(catId, iconOverride) {
  const color = PLACEHOLDER_COLORS[catId] || '#4b5563';
  const icon = iconOverride || ({
    hot: '☕', cold: '🥤', alcohol: '🍷', main: '🍽️', appetizer: '🥗', pasta: '🍝'
  }[catId] || '🍽️');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='${color}'/><text x='50%' y='52%' font-size='80' text-anchor='middle' dominant-baseline='middle'>${icon}</text></svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}
