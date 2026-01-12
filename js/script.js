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
// ... (biarkan kode bagian sapaan di atas tetap ada) ...

// === FITUR DAFTAR TARGET (DENGAN PENYIMPANAN) ===

const inputTarget = document.getElementById('input-target');
const tombolTambah = document.getElementById('tombol-tambah');
const daftarList = document.getElementById('daftar-target');

// 1. Fungsi untuk membuat elemen HTML List (Reusable)
function buatItemList(text) {
    const liBaru = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    
    const tombolHapus = document.createElement('button');
    tombolHapus.textContent = "Hapus";
    tombolHapus.className = "hapus-btn";

    // Event Hapus
    tombolHapus.addEventListener('click', function() {
        daftarList.removeChild(liBaru);
        simpanData(); // Update penyimpanan setelah menghapus
    });

    liBaru.appendChild(textSpan);
    liBaru.appendChild(tombolHapus);
    
    daftarList.appendChild(liBaru);
}

// 2. Fungsi untuk menyimpan data ke Local Storage browser
function simpanData() {
    // Ambil semua teks yang ada di dalam <li> saat ini
    const listItems = daftarList.querySelectorAll('li span');
    const arrayData = [];

    // Masukkan teks satu per satu ke dalam array
    listItems.forEach(item => {
        arrayData.push(item.textContent);
    });

    // Simpan array ke Local Storage (harus diubah jadi String/JSON dulu)
    localStorage.setItem('targetBelajar', JSON.stringify(arrayData));
}

// 3. Fungsi untuk memuat data saat website dibuka
function muatData() {
    const dataTersimpan = localStorage.getItem('targetBelajar');
    
    if (dataTersimpan) {
        // Ubah kembali string JSON menjadi Array
        const arrayData = JSON.parse(dataTersimpan);
        
        // Buat elemen list untuk setiap data yang ditemukan
        arrayData.forEach(text => {
            buatItemList(text);
        });
    }
}

// 4. Event Listener Tombol Tambah
tombolTambah.addEventListener('click', function() {
    const textIsi = inputTarget.value;

    if (textIsi === "") {
        alert("Tulis target dulu dong!");
        return;
    }

    buatItemList(textIsi); // Buat tampilan
    simpanData();          // Simpan ke memory
    
    inputTarget.value = "";
});

// 5. Jalankan fungsi muatData saat halaman pertama kali siap
document.addEventListener('DOMContentLoaded', muatData);
