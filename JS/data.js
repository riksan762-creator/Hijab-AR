/* =========================================================
   AR — data layer
   This is the "shared database" between the user site and the
   admin panel. Both read/write the same localStorage keys, so
   changes made in /admin (add product, update order status...)
   are immediately reflected on the storefront and vice versa.

   NOTE: this is a front-end demo. In a real deployment this file
   would be replaced by real API calls to a backend + database.
   ========================================================= */

const AR_KEYS = {
  PRODUCTS: 'ar_products_v1',
  CART: 'ar_cart_v1',
  ORDERS: 'ar_orders_v1',
  ADMIN_SESSION: 'ar_admin_session_v1',
};

const AR_SEED_PRODUCTS = [
  { id:'p1', name:'Pashmina Viscose Dusty Rose', category:'Polos', color:'Dusty Rose', hex:'#D8A7B1', price:89000, oldPrice:110000, stock:24, sku:'AR-PV-001', desc:'Pashmina instan berbahan viscose premium yang jatuh lembut dan adem dipakai seharian. Warna dusty rose yang lembut cocok untuk acara formal maupun harian.', featured:true },
  { id:'p2', name:'Pashmina Viscose Mocha Brown', category:'Polos', color:'Mocha Brown', hex:'#8B6F52', price:89000, oldPrice:null, stock:31, sku:'AR-PV-002', desc:'Warna mocha brown yang hangat dan netral, mudah dipadukan dengan outfit apa pun. Tekstur viscose premium anti panas.', featured:true },
  { id:'p3', name:'Pashmina Viscose Olive Sage', category:'Polos', color:'Olive Sage', hex:'#6B7A4A', price:85000, oldPrice:99000, stock:0, sku:'AR-PV-003', desc:'Olive sage yang earthy dan elegan. Bahan viscose 2 sisi doff, tidak menerawang dan mudah dibentuk.', featured:false },
  { id:'p4', name:'Pashmina Viscose Navy Storm', category:'Polos', color:'Navy Storm', hex:'#2C3E60', price:89000, oldPrice:null, stock:18, sku:'AR-PV-004', desc:'Navy storm yang tegas dan profesional, pilihan favorit untuk hijab kerja dan seragam kantor.', featured:true },
  { id:'p5', name:'Pashmina Viscose Maroon Velvet', category:'Polos', color:'Maroon', hex:'#6B2C39', price:92000, oldPrice:105000, stock:9, sku:'AR-PV-005', desc:'Merah maroon pekat yang mewah, cocok untuk acara pernikahan dan momen spesial.', featured:false },
  { id:'p6', name:'Pashmina Viscose Sand Beige', category:'Polos', color:'Sand Beige', hex:'#C7B892', price:85000, oldPrice:null, stock:40, sku:'AR-PV-006', desc:'Sand beige netral yang lembut di mata, best seller untuk pemakaian sehari-hari.', featured:true },
  { id:'p7', name:'Pashmina Viscose Onyx Black', category:'Polos', color:'Onyx Black', hex:'#1C1C1C', price:89000, oldPrice:null, stock:52, sku:'AR-PV-007', desc:'Hitam pekat klasik, wajib punya. Material viscose premium dua sisi, ringan dan tidak panas.', featured:true },
  { id:'p8', name:'Pashmina Viscose Dusty Blue', category:'Polos', color:'Dusty Blue', hex:'#7B93A6', price:85000, oldPrice:95000, stock:15, sku:'AR-PV-008', desc:'Dusty blue yang menenangkan, favorit untuk gaya kasual harian.', featured:false },
  { id:'p9', name:'Pashmina Viscose Lilac Mist', category:'Polos', color:'Lilac Mist', hex:'#B497BD', price:85000, oldPrice:null, stock:0, sku:'AR-PV-009', desc:'Ungu lilac yang lembut dan feminin, cocok untuk tampilan yang playful namun tetap sopan.', featured:false },
  { id:'p10', name:'Pashmina Print Ceplok Bali', category:'Motif', color:'Multicolor', hex:'#B08D57', price:98000, oldPrice:115000, stock:12, sku:'AR-PP-010', desc:'Motif ceplok khas Nusantara dengan warna earthy, dicetak di atas viscose premium yang tetap adem.', featured:true },
  { id:'p11', name:'Pashmina Print Garis Senja', category:'Motif', color:'Multicolor', hex:'#A2503A', price:98000, oldPrice:null, stock:20, sku:'AR-PP-011', desc:'Motif garis gradasi warna senja, memberi kesan modern dan effortless.', featured:false },
  { id:'p12', name:'Pashmina Viscose Cream Ivory', category:'Polos', color:'Cream Ivory', hex:'#EDE4D3', price:85000, oldPrice:null, stock:27, sku:'AR-PV-012', desc:'Cream ivory yang soft dan mudah dipadukan, cocok jadi basic collection kamu.', featured:false },
];

/* ---------- Low level storage helpers ---------- */
function arGet(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){
    console.error('AR storage read error', key, e);
    return fallback;
  }
}
function arSet(key, value){
  try{
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }catch(e){
    console.error('AR storage write error', key, e);
    return false;
  }
}

/* ---------- Init / seed ---------- */
function arInit(){
  if(localStorage.getItem(AR_KEYS.PRODUCTS) === null){
    arSet(AR_KEYS.PRODUCTS, AR_SEED_PRODUCTS);
  }
  if(localStorage.getItem(AR_KEYS.CART) === null){
    arSet(AR_KEYS.CART, []);
  }
  if(localStorage.getItem(AR_KEYS.ORDERS) === null){
    arSet(AR_KEYS.ORDERS, []);
  }
}

/* ---------- Products ---------- */
function arGetProducts(){ return arGet(AR_KEYS.PRODUCTS, []); }
function arSaveProducts(list){ return arSet(AR_KEYS.PRODUCTS, list); }
function arGetProduct(id){ return arGetProducts().find(p => p.id === id) || null; }
function arUpsertProduct(product){
  const list = arGetProducts();
  const idx = list.findIndex(p => p.id === product.id);
  if(idx >= 0){ list[idx] = product; } else { list.push(product); }
  arSaveProducts(list);
}
function arDeleteProduct(id){
  arSaveProducts(arGetProducts().filter(p => p.id !== id));
}
function arNextProductId(){
  const list = arGetProducts();
  let max = 0;
  list.forEach(p => { const n = parseInt(String(p.id).replace('p','')) || 0; if(n > max) max = n; });
  return 'p' + (max + 1);
}

/* ---------- Cart ---------- */
function arGetCart(){ return arGet(AR_KEYS.CART, []); }
function arSaveCart(cart){ arSet(AR_KEYS.CART, cart); arUpdateCartBadge(); }
function arAddToCart(productId, qty){
  const cart = arGetCart();
  const existing = cart.find(i => i.productId === productId);
  if(existing){ existing.qty += qty; }
  else{ cart.push({ productId, qty }); }
  arSaveCart(cart);
}
function arUpdateCartQty(productId, qty){
  let cart = arGetCart();
  if(qty <= 0){ cart = cart.filter(i => i.productId !== productId); }
  else{
    const item = cart.find(i => i.productId === productId);
    if(item) item.qty = qty;
  }
  arSaveCart(cart);
}
function arRemoveFromCart(productId){
  arSaveCart(arGetCart().filter(i => i.productId !== productId));
}
function arCartCount(){
  return arGetCart().reduce((sum,i) => sum + i.qty, 0);
}
function arCartDetailed(){
  const products = arGetProducts();
  return arGetCart().map(item => {
    const p = products.find(pr => pr.id === item.productId);
    return p ? { ...item, product: p, lineTotal: p.price * item.qty } : null;
  }).filter(Boolean);
}
function arCartSubtotal(){
  return arCartDetailed().reduce((s,i) => s + i.lineTotal, 0);
}
function arUpdateCartBadge(){
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    const c = arCartCount();
    el.textContent = c;
    el.style.display = c > 0 ? 'flex' : 'none';
  });
}

/* ---------- Orders ---------- */
function arGetOrders(){ return arGet(AR_KEYS.ORDERS, []).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)); }
function arSaveOrders(list){ arSet(AR_KEYS.ORDERS, list); }
function arGetOrder(id){ return arGetOrders().find(o => o.id === id) || null; }
function arNextOrderId(){
  const n = arGetOrders().length + 1;
  const y = new Date().getFullYear();
  return `AR-${y}-${String(n).padStart(4,'0')}`;
}
function arCreateOrder({ customer, payment, items, subtotal, shippingFee, total }){
  const order = {
    id: arNextOrderId(),
    createdAt: new Date().toISOString(),
    status: 'pending',
    customer,
    payment,
    items,
    subtotal,
    shippingFee,
    total,
  };
  const list = arGetOrders();
  list.push(order);
  arSaveOrders(list);
  // decrement stock
  const products = arGetProducts();
  items.forEach(it => {
    const p = products.find(pr => pr.id === it.productId);
    if(p) p.stock = Math.max(0, p.stock - it.qty);
  });
  arSaveProducts(products);
  return order;
}
function arUpdateOrderStatus(orderId, status){
  const list = arGetOrders();
  const o = list.find(x => x.id === orderId);
  if(o) o.status = status;
  arSaveOrders(list);
}

/* ---------- Formatting ---------- */
function arFormatIDR(n){
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}
function arFormatDate(iso){
  return new Date(iso).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
}
function arPlaceholderImg(hex, label){
  const clean = hex.replace('#','');
  const txt = encodeURIComponent(label || 'AR');
  return `https://placehold.co/600x750/${clean}/FFFFFF?font=playfair-display&text=${txt}`;
}

/* Run init immediately on every page load */
arInit();
