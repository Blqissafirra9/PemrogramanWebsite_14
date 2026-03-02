function scrollToForm() {
    document.getElementById("profile").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let prodi = document.getElementById("prodi").value;
    let karir = document.getElementById("karir").value;

    if (nama === "" || prodi === "" || karir === "") {
        alert("Semua field wajib diisi!");
    } else {
        alert("Registrasi berhasil! Profil kompetensi Anda telah dibuat.");
    }
});