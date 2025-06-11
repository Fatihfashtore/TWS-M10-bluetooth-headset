
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = this.nama.value;
    const whatsapp = this.whatsapp.value;
    const alamat = this.alamat.value;
    const pembayaran = this.pembayaran.value;
    const message = `Halo, saya ingin memesan Bluetooth Headset:%0ANama: ${nama}%0ANo Whatsapp: ${whatsapp}%0AAlamat: ${alamat}%0AMetode Pembayaran: ${pembayaran}`;
    window.open(`https://wa.me/6281316660739?text=${message}`, '_blank');
});
