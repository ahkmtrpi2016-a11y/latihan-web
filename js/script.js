alert("JavaScript terhubung!");
// 1. Tangkap elemen HTML berdasarkan ID-nya
const judul = document.getElementById('judul-utama');
const tombol = document.getElementById('tombol-aksi');

// 2. Tambahkan fungsi untuk menangani klik
function ubahTampilan() {
    // Ubah teks pada judul
    judul.textContent = "Halo! Terima kasih sudah berkunjung.";
    
    // Ubah warna teks judul menjadi oranye
    judul.style.color = "#f4a261";

    // Ubah teks tombol agar user tahu aksi berhasil
    tombol.textContent = "Berhasil Diklik!";
    
    // Log ke Console (Fitur penting developer untuk pengecekan)
    console.log("Tombol sudah diklik dan tampilan diperbarui.");
}

// 3. Pasang "telinga" (Event Listener) pada tombol
// Saat 'click' terjadi, jalankan fungsi 'ubahTampilan'
tombol.addEventListener('click', ubahTampilan);