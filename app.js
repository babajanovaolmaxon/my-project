// 1-Masala mantiqi
function aniqlaSonTuri() {
    const input = document.getElementById("sonTuriInput");
    const natija = document.getElementById("sonTuriNatija");
    const son = Number(input.value);

    if (input.value === "") {
        natija.style.display = "block";
        natija.className = "result toq";
        natija.innerText = "Son kiriting!";
        return;
    }

    natija.style.display = "block";
    if (son > 0) {
        natija.className = "result juft";
        natija.innerText = `${son} - Musbat son`;
    } else if (son < 0) {
        natija.className = "result toq";
        natija.innerText = `${son} - Manfiy son`;
    } else {
        natija.className = "result";
        natija.style.backgroundColor = "#e2e8f0";
        natija.style.color = "#334155";
        natija.innerText = "Bu son NOL ga teng";
    }
}

// 2-Masala mantiqi
function tekshirImtihon() {
    const ballInput = document.getElementById("ballInput");
    const natija = document.getElementById("imtihonNatija");
    const ball = Number(ballInput.value);

    if (ballInput.value === "") {
        natija.style.display = "block";
        natija.className = "result toq";
        natija.innerText = "Ballni kiriting!";
        return;
    }

    natija.style.display = "block";
    if (ball >= 50 && ball <= 100) {
        natija.className = "result juft";
        natija.innerText = `Tabriklaymiz! ${ball} ball bilan O'TDINGIZ 🎉`;
    } else if (ball >= 0 && ball < 50) {
        natija.className = "result toq";
        natija.innerText = `Afsus, ${ball} ball bilan YIQILDINGIZ 😔`;
    } else {
        natija.className = "result toq";
        natija.innerText = "0 dan 100 gacha kiriting!";
    }
}

// 3-Masala mantiqi
function tekshirYil() {
    const yilInput = document.getElementById("yilInput");
    const natija = document.getElementById("yilNatija");
    const yil = Number(yilInput.value);

    if (yilInput.value === "") {
        natija.style.display = "block";
        natija.className = "result toq";
        natija.innerText = "Yilni kiriting!";
        return;
    }
    
    natija.style.display = "block";
    if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
        natija.className = "result juft";
        natija.innerText = `${yil} - Kabisa yili (366 kun)`;
    } else {
        natija.className = "result toq";
        natija.innerText = `${yil} - Oddiy yil (365 kun)`;
    }
}

// 4-Masala mantiqi
function tekshirYosh() {
    const yoshInput = document.getElementById("yoshInput");
    const natija = document.getElementById("yoshNatija");
    const yosh = Number(yoshInput.value);

    if (yoshInput.value === "") {
        natija.style.display = "block";
        natija.className = "result toq";
        natija.innerText = "Yoshingizni kiriting!";
        return;
    }

    natija.style.display = "block";
    if (yosh >= 18) {
        natija.className = "result juft";
        natija.innerText = "Ruxsat beriladi! 🚗";
    } else {
        const qoldi = 18 - yosh;
        natija.className = "result toq";
        natija.innerText = `Yoshingiz yetmaydi. Yana ${qoldi} yil kuting 🛑`;
    }
}

// 5-Masala mantiqi
function tavsiyaBer() {
    const haroratInput = document.getElementById("haroratInput");
    const natija = document.getElementById("haroratNatija");
    const gradus = Number(haroratInput.value);

    if (haroratInput.value === "") {
        natija.style.display = "block";
        natija.className = "result toq";
        natija.innerText = "Haroratni kiriting!";
        return;
    }

    natija.style.display = "block";
    if (gradus >= 25) {
        natija.className = "result juft";
        natija.style.backgroundColor = "#ffedd5";
        natija.style.color = "#9a3412";
        natija.innerText = `Kun issiq (${gradus}°C). Yengil kiyining ☀️`;
    } else if (gradus >= 10 && gradus < 25) {
        natija.className = "result juft";
        natija.style.backgroundColor = "#dbeafe";
        natija.style.color = "#1e40af";
        natija.innerText = `Havo yaxshi (${gradus}°C). Yengil kofta kiying 🌤`;
    } else {
        natija.className = "result toq";
        natija.innerText = `Kun sovuq (${gradus}°C). Qalin kiyining ❄️`;
    }
}
