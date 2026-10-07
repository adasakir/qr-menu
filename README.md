# qr-menu
I made this web site for a friend of mine. He is working in a advertisement company and he asked me to do a website to show other cafes or restaurants if they want a qr menu like this. I made this web site mostly with ai. Website link is in the read me file.

https://kahvebahane-eight.vercel.app/

# Kahvebahane: An AI-Assisted Real-Time Cafe Management Ecosystem

The **Kahvebahane Ecosystem** is an end-to-end cafe management solution designed by Ada Şakir. Conceptualized, coded, and structured **largely with the assistance of advanced Artificial Intelligence**, this suite demonstrates how AI-driven development can yield enterprise-grade, synchronized software architecture.

The system connects three independent yet fully synchronized applications operating concurrently in real time via a cloud database backend:

```
  +-------------------------------+             Real-Time Cloud Sync            +-------------------------------+
  |   Kahvebahane Web App         | <-----------------------------------------> |   Kahvebahane Kasiyer App     |
  |  (Customer Order & QR Menus)  |                                             |   (POS, Kitchen & Checkout)   |
  +-------------------------------+                                             +-------------------------------+
                 ^                                                                             ^
                 |                                                                             |
                 +------------------------->  Firebase / Cloud Backend  <----------------------+
                                                        ^
                                                        |
                                        +-------------------------------+
                                        |   Kahvebahane Admin App       |
                                        |  (Control, Inventory & Analytics)|
                                        +-------------------------------+

```

---

## 1. Kahvebahane Web Application *(Customer Interface)*

The customer web interface (`[https://kahvebahane-eight.vercel.app/](https://kahvebahane-eight.vercel.app/)`) serves as a contact-free, self-service digital menu accessible via table QR codes without installing external mobile apps.

* **Digital Menu Browsing:** Customers browse structured, visual category channels (Hot Coffees, Cold Coffees, Teas, Main Dishes, Appetizers, Pastas) featuring real-time pricing and full item descriptions.


* **Shared Table & Person-Based Basket:** Built specifically for group dining. Table occupants enter their names under the active session and assign items to individual members using interactive drag-and-drop mechanics or item allocation controls.
* **Special Preparation Notes:** Supports custom item options and preparation notes (e.g., *"çay demli olsun"* / "make the tea strong").


* **Digital Waiter Call:** Features a direct action button allowing patrons to call for staff assistance straight to the cashier panel.



---

## 2. Kahvebahane Kasiyer App *(Cashier & POS Desktop Application)*

Developed as a desktop application using **Electron**, the Cashier app manages station routing, table accounting, and ticket settlements in real time.

* **Automated Station Routing (*İstasyon Yönetimi*):** Incoming customer orders automatically dispatch to production hubs based on category bindings:
* **Bar Station (*Bar İstasyonu*):** Receives coffee orders, teas, cocktails, and cold beverages.


* **Kitchen Station (*Mutfak İstasyonu*):** Receives food orders, toasts, pastas, grilled meats, and appetizers.




* **Live Alerts & Waiter Requests (*Garson Çağrıları*):** Features native Electron desktop notifications (*"Yeni sipariş geldi!"*) alongside a dedicated call panel to acknowledge customer waiter calls (*Tamam*).


* **Split Billing & Settlement Capabilities:**
* **Group Table Payment (*Toplu Ödeme*):** Clears the entire table balance in one transaction.


* **Individual Billing (*Ayrı Ödeme / Kişi Bazlı Hesaplar*):** Integrates with the customer web app's name-tagging system, showing individual member totals (e.g., Ada: 185₺, Ekrem: 115₺) for separate checkout processing.




* **Receipt Ledgers:** Maintains a history of settled receipts (*Ödenmiş Fişler*).



---

## 3. Kahvebahane Admin App *(Management, Inventory & Intelligence Dashboard)*

The Admin panel is an executive desktop application for business owners to oversee inventory, financial costing, menu management, and sales intelligence.

* **Executive Dashboard & Real-Time Analytics:** Tracks total revenue (*Toplam Ciro*), average receipt value (*Ortalama Fiş*), payment channel distribution (*Nakit / Kart*), pending table totals, and best-selling items across categories.


* **Recipe Costing & Profit Margins (*Maliyet Hesaplama*):**
* Configures raw material purchasing costs per unit/kg/litre (e.g., coffee beans, milk, cocoa, tea leaves).


* Cross-references ingredient costs against product recipes to automatically compute gross profit amounts and net profit percentages (e.g., Espresso profit margin: 75%, Latte: 44%, Tea: 84%).




* **Automated Stock Management (*Stok & Reçete Yönetimi*):**
* Tracks raw material stock levels and sets critical threshold alerts (*Kritik Eşik*).


* **Automatic Inventory Deduction:** Every settled order automatically calculates ingredient consumption based on recipe weights and deducts stock in real time.


* **Menu Management & Dynamic QR Generation:**
* Edits menu products, updates images, sets discount percentages, assigns dietary filters (e.g., Vegetarian), and binds categories directly to station routes (Bar vs. Kitchen).


* **Table QR Generator:** Generates, previews, and batch-prints customized QR codes linked directly to table numbers (`.../?table=1`).




* **Reporting & Data Exporting (*Raporlar*):** Displays hourly traffic density (*Saat Yoğunluğu*), table ciro charts, and daily/monthly financial reports with one-click **Excel** and **PDF** exports.



---

## End-to-End Real-Time Synchronization Example

1. **Ordering:** A group sits at **Table 2** and scans the printed table QR code. Ada orders a Latte (95₺) and Hot Chocolate (90₺), while Ekrem orders an Espresso (75₺) and Tea (40₺) with a special note.


2. **Dispatch & Production:** The order instantly syncs to the **Kasiyer App**. The system plays an alert audio chime and displays a desktop pop-up notification (*"Yeni sipariş geldi!"*). Drinks route directly to the **Bar Station**.


3. **Fulfillment:** Baristas prepare the beverages and click **Hazır İşaretle**.


4. **Checkout:** Ekrem approaches the register. The cashier selects **Table 2 -> Ayrı Ödeme**, clicks **Ödemeyi Tamamla** for Ekrem's 115₺ portion, and settles his receipt.


5. **Inventory & Executive Analytics Sync:** The 115₺ transaction immediately posts to the **Admin App**:
* Cash/card revenue totals update in real time.


* Recipe ingredients (espresso beans, tea leaves, milk) are automatically deducted from stock levels.
* Hourly peak charts and product profit summaries are updated.
