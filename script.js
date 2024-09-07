function pilihanComputer() {
  const computer = Math.floor(Math.random() * 3 + 1);

  if (computer == 1) return "gajah";
  if (computer == 2) return "orang";
  return "semut";
}

function hasil(pilihanComputer, pilihanPlayer) {
  if (pilihanComputer == pilihanPlayer) return "SERI";
  if (pilihanPlayer == "gajah")
    return pilihanComputer == "orang" ? "MENANG" : "KALAH";
  if (pilihanPlayer == "orang")
    return pilihanComputer == "semut" ? "MENANG" : "KALAH";
  if (pilihanPlayer == "semut")
    return pilihanComputer == "gajah" ? "MENANG" : "KALAH";
}

// const gajah = document.querySelector(".gajah");
// gajah.addEventListener("click", function () {
//   const pComputer = pilihanComputer();
//   const pPlayer = gajah.className;

//   const hasilSuwit = hasil(pComputer, pPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", `img/${pComputer}.png`);
//   const info = document.querySelector(".info");
//   info.innerHTML = hasilSuwit;
// });

function acak() {
  const imageComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];

  const acakHabis = new Date().getTime() + 1000;
  let i = 0;

  let acakGambar = setInterval(function () {
    const mulaiAcak = new Date().getTime();
    if (mulaiAcak >= acakHabis) {
      clearInterval(acakGambar);
    }
    imageComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

// CARA YANG EFEKTIF
const pilihan = document.querySelectorAll("li img");
let playerScore = 0;
let playerComputer = 0;
const textScorePlayer = document.querySelector(".player-score");
const textScoreComputer = document.querySelector(".com-score");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pComputer = pilihanComputer();
    const pPlayer = pil.className;

    const hasilSuwit = hasil(pComputer, pPlayer);

    acak();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", `img/${pComputer}.png`);
      const info = document.querySelector(".info");
      info.innerHTML = hasilSuwit;

      if (hasilSuwit == "MENANG") {
        playerScore++;
        textScorePlayer.innerHTML = playerScore;
      } else if (hasilSuwit == "KALAH") {
        playerComputer++;
        textScoreComputer.innerHTML = playerComputer;
      }
    }, 1000);
  });
});
