
document.getElementById("pesanBtn").addEventListener("click", function () {
  fbq('track', 'ViewContent');
  fbq('track', 'Purchase', { value: 174000, currency: 'IDR' });

  var nama = document.getElementById("nama").value;
  var wa = document.getElementById("wa").value;
  var alamat = document.getElementById("alamat").value;
  var varian = document.getElementById("varian").value;
  var pembayaran = document.getElementById("pembayaran").value;

  var pesan = 'Halo, saya mau pesan headset:\nNama: ' + nama + '\nNo WA: ' + wa + '\nAlamat: ' + alamat + '\nVarian: ' + varian + '\nPembayaran: ' + pembayaran;
  var url = 'https://wa.me/6281316660739?text=' + encodeURIComponent(pesan);
  window.open(url, '_blank');
});
