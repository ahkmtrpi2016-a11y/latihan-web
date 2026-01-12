// 1. Tangkap elemen-elemen penting
const formSapaan = document.getElementById('form-sapaan');
const inputNama = document.getElementById('input-nama');
const hasilDiv = document.getElementById('hasil-sapaan');

// 2. Tambahkan Event Listener pada FORM (bukan tombolnya saja)
// Kita menggunakan 'submit' agar script jalan baik saat user klik tombol ATAU tekan Enter
formSapaan.addEventListener('submit', function(event) {
    
    // PENTING: Mencegah browser me-refresh halaman (behavior default form)
    event.preventDefault();

    // Ambil nilai yang diketik user
    const namaUser = inputNama.value;

    // Validasi sederhana (Cek apakah kosong)
    if(namaUser === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    // Tampilkan hasilnya
    hasilDiv.style.display = "block"; // Munculkan kotak hasil
    hasilDiv.textContent = "Halo, " + namaUser + "! Selamat belajar coding.";

    // Kosongkan input setelah submit (UX yang baik)
    inputNama.value = "";
    
    console.log("Sapaan terkirim untuk: " + namaUser);
});