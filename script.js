function trackOrder(){
 const code=document.getElementById("trackCode").value.trim();
 const result=document.getElementById("trackResult"), codeLabel=document.getElementById("orderCode");
 if(!code){result.textContent="Masukkan kode pesanan terlebih dahulu.";return;}
 codeLabel.textContent=code.toUpperCase();
 result.innerHTML="✓ Pesanan <b>"+code.toUpperCase()+"</b> ditemukan. Status simulasi: <b>Dalam proses / Siap dikirim</b>.";
}
document.getElementById("orderForm").addEventListener("submit",function(e){
 e.preventDefault();
 const n=name.value,p=phone.value,s=service.value,a=address.value,c=note.value;
 const msg=`Halo Princess Laundry, saya ingin memesan laundry.%0A%0ANama: ${n}%0ANo. WhatsApp: ${p}%0ALayanan: ${s}%0AAlamat Pickup: ${a||"-"}%0ACatatan: ${c||"-"}`;
 window.open("https://wa.me/6285864385107?text="+msg,"_blank");
});