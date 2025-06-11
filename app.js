
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    const message = `Halo, saya ingin memesan Headset Bluetooth TWS-M10 atas nama:%0A%0A` +
                    `- Nama: ${name}%0A` +
                    `- No Whatsapp: ${whatsapp}%0A` +
                    `- Alamat: ${address}%0A` +
                    `- Pembayaran: ${payment}%0A%0A` +
                    `Terima Kasih`
                    ;

    window.open(`https://wa.me/6281316660739?text=${message}`, '_blank');
});
