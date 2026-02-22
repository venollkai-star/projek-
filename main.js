let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let totalPercobaan = 0;

function cekAngka() {
    const input = document.getElementById("inputAngka");
    const pesan = document.getElementById("pesan");
    const percobaan = document.getElementById("percobaan");
    const sound = document.getElementById("winSound");
    const watermark = document.getElementById("watermark");

    let tebakan = parseInt(input.value);

    if (isNaN(tebakan)) {
        pesan.innerText = "Masukkan angka yang valid.";
        return;
    }

    totalPercobaan++;

    if (tebakan < angkaRahasia) {
        pesan.innerText = "terlalu kecil wkw🤏😹";
    } 
    else if (tebakan > angkaRahasia) {
        pesan.innerText = "terlalu basar wlee😜";
    } 
    else {
        pesan.innerText = "🥳benar cuyy! GG BANG!";
        percobaan.innerText = "Total percobaan: " + totalPercobaan;

        if (sound) sound.play();

        watermark.classList.add("show");

        angkaRahasia = Math.floor(Math.random() * 100) + 1;
        totalPercobaan = 0;
    }

    input.value = "";
}