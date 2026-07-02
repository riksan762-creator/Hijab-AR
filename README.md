<div align="center">

# Aliya Rahmawati Commerce Platform

Platform e-commerce modern untuk penjualan hijab premium dengan arsitektur frontend yang scalable, responsif, dan efisien.

[![HTML5](https://img.shields.io/badge/Frontend-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/UI-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/Logic-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)]()
[![Status](https://img.shields.io/badge/Status-Production_Ready-00C853?style=flat-square)]()

</div>

---

# Overview

**Aliya Rahmawati Commerce Platform** adalah sistem e-commerce berbasis frontend yang dirancang untuk kebutuhan penjualan produk hijab premium.

Project ini dibangun dengan fokus pada:

- Performa tinggi
- UI/UX modern
- Struktur kode modular
- Skalabilitas pengembangan
- Kemudahan deployment

Sistem terdiri dari dua bagian utama:

- **Customer Storefront** → antarmuka pelanggan
- **Admin Dashboard** → panel manajemen toko

Kedua sistem saling terhubung melalui shared data layer berbasis browser storage.

---

# Arsitektur Sistem

```txt
┌──────────────────────────┐
│ Customer Frontend        │
│ • Homepage               │
│ • Product Catalog        │
│ • Cart                   │
│ • Checkout               │
└────────────┬─────────────┘
             │
             │ Shared State
             ▼
┌──────────────────────────┐
│ LocalStorage Data Layer  │
│ assets/js/data.js        │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│ Admin Dashboard          │
│ • Analytics              │
│ • Product CRUD           │
│ • Order Management       │
└──────────────────────────┘
```

---

# Fitur Utama

## Customer Side

- Menampilkan katalog produk
- Detail produk
- Keranjang belanja
- Checkout
- Konfirmasi pesanan

## Admin Side

- Login admin
- Dashboard statistik
- CRUD produk
- Manajemen pesanan
- Update status order

---

# Struktur Project

```bash
aliya-rahmawati/
│
├── index.html
├── shop.html
├── product.html
├── cart.html
├── checkout.html
├── order-success.html
│
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   ├── products.html
│   └── orders.html
│
└── assets/
    ├── css/
    │   └── style.css
    │
    └── js/
        ├── data.js
        ├── ui.js
        └── admin.js
```

---

# Tech Stack

```yaml
Frontend:
  - HTML5
  - CSS3
  - JavaScript ES6

Storage:
  - Browser LocalStorage

Deployment:
  - GitHub Pages
  - Vercel
  - Netlify
```

---

# Data Management

Sinkronisasi data dilakukan melalui:

```javascript
const products = JSON.parse(
  localStorage.getItem("products")
) || [];
```

Mekanisme ini memungkinkan:

- Penyimpanan data persisten
- Sinkronisasi antar halaman
- Update produk real-time
- Order tracking sederhana

---

# Menjalankan Project

Jalankan local server:

```bash
npx serve .
```

atau:

```bash
python3 -m http.server 8000
```

---

# Kredensial Admin

```env
USERNAME=admin
PASSWORD=aliya123
```

---

# Roadmap Pengembangan

Versi berikutnya akan mencakup:

- REST API Backend
- Database Integration
- Payment Gateway (QRIS)
- Authentication Hardening
- Real-time Notification
- Sales Analytics

---

# Author

**Aliya Rahmawati**  
Founder & Product Owner

---

<div align="center">

Dirancang dengan standar software engineering modern.

</div>
