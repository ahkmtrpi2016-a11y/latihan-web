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
// ... code js sebelumnya ...

// === FITUR DAFTAR TARGET ===

const inputTarget = document.getElementById('input-target');
const tombolTambah = document.getElementById('tombol-tambah');
const daftarList = document.getElementById('daftar-target');

// Fungsi menambah item
tombolTambah.addEventListener('click', function() {
    const textIsi = inputTarget.value;

    // Validasi: jangan tambah kalau kosong
    if (textIsi === "") {
        alert("Tulis target dulu dong!");
        return;
    }

    // 1. Buat elemen LI baru (masih melayang di memori, belum di layar)
    const liBaru = document.createElement('li');
    
    // 2. Isi teks li tersebut
    // Kita pakai span agar teks terpisah dari tombol hapus
    const textSpan = document.createElement('span');
    textSpan.textContent = textIsi;
    
    // 3. Buat tombol hapus
    const tombolHapus = document.createElement('button');
    tombolHapus.textContent = "Hapus";
    tombolHapus.className = "hapus-btn"; // Agar kena style CSS tadi

    // Fitur Hapus: Hapus elemen LI ini saat tombol merah diklik
    tombolHapus.addEventListener('click', function() {
        daftarList.removeChild(liBaru);
    });

    // 4. Rakit elemen-elemennya
    liBaru.appendChild(textSpan);    // Masukkan teks ke li
    liBaru.appendChild(tombolHapus); // Masukkan tombol ke li
    
    // 5. Terakhir: Tempelkan ke layar (ke dalam UL)
    daftarList.appendChild(liBaru);

    // Reset input
    inputTarget.value = "";
});
