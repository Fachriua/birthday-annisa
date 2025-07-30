// Tombol mulai
document.getElementById('start-btn').addEventListener('click', function () {
  document.getElementById('opening-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  playMusic();
});

// Play musik
function playMusic() {
  const audio = document.getElementById('bg-music');
  audio.play();
}

document.getElementById('music-btn').addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
    document.getElementById('music-btn').innerText = '🔊';
  } else {
    audio.pause();
    document.getElementById('music-btn').innerText = '🔇';
  }
});

// VIDEO POPUP
const videoPopup = document.getElementById('video-popup');
const videoBtn = document.getElementById('video-btn');

videoBtn.addEventListener('click', () => {
  videoPopup.classList.remove('hidden');
});

function closeVideo() {
  videoPopup.classList.add('hidden');
}
window.closeVideo = closeVideo;

// SURAT PANJANG (TYPEWRITER EFEK)
const letterText = `HAAIIII!!, Happy birthday sayangkuuuu Annisa Maharani❤️
selamat yaa atas bertambah umurnyaa, seneng banget rasanya kita masih bisa bareng sampai umurmu ke yang 20 ini,
banyak banget yang pengen aku ucapin buat kamu, tapi kamu tau kan aku orangnya susah buat ngungkapin sesuatu hehehe,
lebih ke gatau cara mengekspresikannya wkkwkw

intinya disini aku seneng banget bisa tumbuh bareng kamu, aku seneng dan bangga banget punya wanita yang attitude nya baik kaya kamu,
aku kagum sama kepinteran kamu, ambisi kamu, rajinnya kamu, apalagi soal cantiknya kamu hehehe gausah ditanya, pokonya aku bangga banget deh.

yaaah ibu ku bilang bahwa ini tuh bukan bertambah umur, tapi berkurangnya umur kita kwkwkwk, maka dari itu
semoga kamu bisa mempertahankan apa yang dimiliki dari diri kamu sekarang, bahkan grow up terus buat ngejar cita cita kamu.

hari ini kamu sudah menginjak kepala 2, dimana kamu harus siap dengan permasalahan permasalahan baru, kamu harus kuat
apapun yang nanti kamu hadapi di umur 20an ini, aku pasti selalu ada di samping kamu, yaa walaupun kadang memang aku ini
sering menjadi penyebab pertengkaran kita, tapi yakinlah aku bener bener tulus sayang sama kamu, jadi kalau nanti ada apa apa
ceritakan yaa

semogaa dengan bertambahnya umur ini (apa berkurang yaa ? wkwk), kamu bisa menjadi pribadi yang lebih baik dari pribadi di umur 19 kemarin, 
selalu menjadi wanita ceria, penuh dengan hal hal positif, dan selalu membawakan hal baik, semoga aku selalu menjadi bagian dari setiap
catatan kehidupan kamu, bagian dari cerita pahit manis nya hidup kamu, semoga kita bisa mencapai apa yang selalu kita cita citakan hehe

sekali lagi, SELAMAT ULANG TAHUN ANNISA MAHARANI ❤️

`;

function startLetter() {
  const box = document.getElementById('letter-box');
  let i = 0;
  function type() {
    if (i < letterText.length) {
      box.textContent += letterText.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  box.textContent = "";
  type();
}
window.startLetter = startLetter;


function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = 6 + Math.random() * 5 + 's';
  document.querySelector('.opening-screen').appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 500);

const startBtn = document.getElementById('start-btn');
const openingScreen = document.getElementById('opening-screen');
const mainContent = document.getElementById('main-content');
const music = document.getElementById('bg-music');
const balloonsContainer = document.getElementById('balloons');

startBtn.addEventListener('click', () => {
  // Tampilkan confetti
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.9 }
  });

  // Tampilkan balon
  showBalloons();

  // Mainkan musik
  music.play();

  // Delay 5 detik sebelum masuk ke konten utama
  setTimeout(() => {
    openingScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    balloonsContainer.innerHTML = '';
  }, 5000);
});

function showBalloons() {
  balloonsContainer.classList.remove('hidden');
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.backgroundColor = getRandomColor();
    balloonsContainer.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ['#ff4d4d', '#4da6ff', '#33cc33', '#ffcc00', '#cc66ff', '#ff66cc'];
  return colors[Math.floor(Math.random() * colors.length)];
}

