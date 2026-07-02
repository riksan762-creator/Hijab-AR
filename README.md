# 🧕 Aliya Rahmawati — Premium Hijab Store

Selamat datang di **Aliya Rahmawati**, website e-commerce premium untuk brand hijab modern dengan desain elegan, clean, dan nyaman digunakan.

✨ Menyediakan koleksi hijab berkualitas seperti **Pashmina Viscose Premium**, dengan tampilan website modern yang memudahkan pelanggan berbelanja.

---

## 🌸 Fitur Utama

### 🛍️ Customer Website
Website pelanggan yang lengkap dengan fitur:

- 🏠 **Homepage Premium** — tampilan brand yang elegan
- 🧕 **Katalog Produk** — melihat semua koleksi hijab
- 🔍 **Detail Produk** — informasi lengkap produk
- 🛒 **Shopping Cart** — keranjang belanja interaktif
- 💳 **Checkout** — proses pembayaran praktis
- ✅ **Order Success** — konfirmasi pesanan berhasil

---

### 👑 Admin Panel
Panel admin untuk mengelola toko:

- 📊 **Dashboard** — statistik penjualan
- 📦 **Kelola Produk** — tambah/edit/hapus produk
- 📑 **Kelola Pesanan** — update status order
- 🔐 **Admin Login** — keamanan akses admin

---

## 🔄 Sinkronisasi Data

Situs pelanggan dan admin panel **terhubung secara otomatis** menggunakan `localStorage`.

Artinya:

- Jika admin menambah produk ➜ otomatis muncul di toko
- Jika customer checkout ➜ pesanan masuk ke admin panel
- Semua data tersimpan otomatis di browser

> ⚠️ Demo ini menggunakan `localStorage`, bukan database online.

---

## 📁 Struktur Folder

```bash
aliya-rahmawati-store/
├── index.html
├── shop.html
├── product.html
├── cart.html
├── checkout.html
├── order-success.html
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   ├── products.html
│   └── orders.html
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── data.js
│       ├── ui.js
│       └── admin.js
└── README.md
```

---

## 🚀 Cara Menjalankan

Website ini dibuat dengan:

- HTML
- CSS
- JavaScript

Tanpa build step atau framework tambahan.

Jalankan dengan:

```bash
npx serve .
```

atau:

```bash
python3 -m http.server 8000
```

---

## 🔑 Login Admin

Masuk ke:

```bash
/admin/login.html
```

Gunakan akun demo:

- **Username:** `admin`
- **Password:** `aliya123`

---

## ☁️ Deploy GitHub

Push project ke GitHub:

```bash
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Lalu deploy gratis via **GitHub Pages**.

---

## 💎 Pengembangan Selanjutnya

Beberapa upgrade yang direkomendasikan:

- 📸 Gunakan foto produk asli
- 🗄️ Integrasi database online
- 💰 Payment gateway (QRIS / Midtrans / Xendit)
- 📱 Optimasi mobile UI
- 🤖 Sistem notifikasi otomatis

---

# ✨ Aliya Rahmawati
### Elegance in Every Layer

Hijab premium untuk wanita modern yang anggun, stylish, dan percaya diri.
