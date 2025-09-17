const formJabatan = document.getElementById('formJabatan');

formJabatan.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(formJabatan);
  const jabatan = formData.get('jabatan');

  if (!jabatan) {
    alert('Mohon pilih jabatan terlebih dahulu.');
    return;
  }

  // Simpan jabatan ke sessionStorage agar bisa diakses di halaman berikutnya
  sessionStorage.setItem('selectedJabatan', jabatan);

  // Redirect ke halaman daftar
  window.location.href = 'form.html';
});