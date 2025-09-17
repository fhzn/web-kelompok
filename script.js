// Ambil elemen judul form dan tabel
const jabatanTitle = document.getElementById('jabatanTitle');
const jabatanTabel = document.getElementById('jabatanTabel');
const jabatanInput = document.getElementById('jabatan');

// Ambil jabatan dari sessionStorage
const selectedJabatan = sessionStorage.getItem('selectedJabatan');

if (!selectedJabatan) {
  alert('Anda belum memilih jabatan. Silakan pilih jabatan terlebih dahulu.');
  window.location.href = 'web.html'; // Redirect ke halaman utama
} else {
  // Set judul form dan tabel
  jabatanTitle.textContent = selectedJabatan;
  jabatanTabel.textContent = selectedJabatan;

  // Set nilai input hidden jabatan
  jabatanInput.value = selectedJabatan;
}

// Selanjutnya kode form submit dan penambahan data ke tabel seperti biasa
const form = document.getElementById('formData');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const nama = formData.get('nama').trim();
  const umur = formData.get('umur').trim();
  const alamat = formData.get('alamat').trim();
  const jk = formData.get('jk');
  const jabatan = formData.get('jabatan');

  if (!nama || !umur || !alamat || !jk || !jabatan) {
    alert('Mohon isi semua data dengan lengkap.');
    return;
  }

  if (isNaN(umur) || umur <= 0) {
    alert('Umur harus berupa angka positif.');
    return;
  }
  
  const newRow = document.createElement('tr');
  const no = tableBody.children.length + 1;

  newRow.innerHTML = `
    <td>${no}</td>
    <td>${nama}</td>
    <td>${umur}</td>
    <td>${alamat}</td>
    <td>${jk}</td>
    <td>${jabatan}</td>
  `;

  tableBody.appendChild(newRow);

  form.reset();

  // Reset jabatan agar tetap sesuai pilihan awal
  jabatanInput.value = selectedJabatan;
});