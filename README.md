# AR Pashmina Studio — E-commerce Demo

Website e-commerce untuk brand hijab pashmina viscose **AR**, terdiri dari:

- **Situs pelanggan** — beranda, katalog, detail produk, keranjang, checkout, konfirmasi pesanan.
- **Admin panel** (`/admin`) — dashboard, kelola produk (CRUD), kelola pesanan (ubah status).

Situs pelanggan dan admin panel **terhubung**: keduanya membaca/menulis data yang sama lewat `localStorage` di browser (lihat `assets/js/data.js`). Jadi kalau kamu tambah/edit produk di admin, otomatis muncul di toko. Kalau ada pesanan baru dari checkout, otomatis muncul di admin.

> ⚠️ Ini adalah **demo/contoh**. Pembayaran (QRIS, transfer, COD) bersifat simulasi — tidak ada transaksi uang sungguhan. Data disimpan di `localStorage` browser, bukan di database sungguhan/server. Untuk produksi nyata, backend (API + database) dan payment gateway (mis. Midtrans/Xendit) perlu diintegrasikan menggantikan `data.js`.

## Struktur folder

```
ar-hijab-store/
├── index.html              # Beranda
├── shop.html                # Katalog produk
├── product.html              # Detail produk
├── cart.html                 # Keranjang
├── checkout.html             # Checkout + pembayaran (demo)
├── order-success.html        # Konfirmasi pesanan
├── admin/
│   ├── login.html            # Login admin
│   ├── dashboard.html        # Statistik toko
│   ├── products.html         # CRUD produk
│   └── orders.html           # Kelola status pesanan
├── assets/
│   ├── css/style.css         # Semua styling (design system)
│   └── js/
│       ├── data.js           # "Database" localStorage bersama
│       ├── ui.js              # Perilaku UI situs pelanggan
│       └── admin.js           # Auth guard + sidebar admin
└── README.md
```

## Cara menjalankan

Situs ini statis (HTML/CSS/JS murni, tanpa build step), jadi tinggal buka `index.html` di browser, atau jalankan local server, misalnya:

```bash
npx serve .
# atau
python3 -m http.server 8000
```

## Login admin (demo)

Buka `admin/login.html`:

- **Username:** `admin`
- **Password:** `ar12345`

## Push ke GitHub

Repo git sudah disiapkan secara lokal dengan commit awal. Untuk push ke GitHub kamu:

```bash
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git branch -M main
git push -u origin main
```

Ganti `USERNAME/NAMA-REPO` dengan repo GitHub kamu. Setelah itu bisa langsung deploy gratis ke **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Catatan pengembangan lanjutan

- Ganti gambar placeholder (`placehold.co`) dengan foto produk asli.
- Untuk data permanen multi-device, ganti `assets/js/data.js` dengan pemanggilan API ke backend + database sungguhan (mis. Laravel/Supabase, sesuai stack yang biasa kamu pakai).
- Untuk pembayaran nyata, integrasikan Midtrans/Xendit QRIS di halaman `checkout.html`.
