const myTrack = [
    {
        nameMusic: "Tanhaei",
        artist: "Ehyaa",
        cover: "./images/Picsart_24-03-11_22-35-18-821.jpg",
        download: "./music/test.mp3",
        urlSoundCloud: "",
        urlYouTube: "",
    },
    {
        nameMusic: "Bad Zone",
        artist: "Ehyaa",
        cover: "./covers/Bad Zone - Ehyaa.jpg",
        download: "./tracks/Ehyaa - Bad Zone.mp3",
        urlSoundCloud: "",
        urlYouTube: "",
    },
    {
        nameMusic: "",
        artist: "Ehyaa",
        cover: "",
        download: "",
        urlSoundCloud: "",
        urlYouTube: "",
    }
];

// ---------------------------------

const socialBtn = document.querySelector('#socialBtn');
const socialPage = document.querySelector("#articleSocial");

const musicsBtn = document.querySelector('#musicsBtn');
const musicsPage = document.querySelector('#articleMusics');

socialPage.classList.remove("hidden")
socialPage.style.display = "flex";
socialBtn.classList.add('trueBack')
musicsBtn.classList.add('falseBack')

musicsBtn.addEventListener('click' , () => {
    socialPage.style.display = 'none';
    musicsPage.classList.remove('hidden')
    musicsPage.style.display = 'flex';
    socialBtn.classList.add('falseBack')
    musicsBtn.classList.remove('falseBack')
    musicsBtn.classList.add('trueBack')
})

socialBtn.addEventListener('click', () => {
    musicsPage.style.display = 'none';
    socialPage.classList.remove('hidden');
    socialPage.style.display = "flex";
    musicsBtn.classList.remove("trueBack")
    musicsBtn.classList.add('falseBack')
    socialBtn.classList.remove('falseBack')
})

const soundCloud = document.querySelector("#soundCloud");
const instagram = document.querySelector("#instagram");
const telegram = document.querySelector("#telegram");
const youTube = document.querySelector("#youTube");

soundCloud.addEventListener('click', () => {
    window.open("", '_blank');
})
instagram.addEventListener('click', () => {
    window.open("", '_blank');
})
telegram.addEventListener('click', () => {
    window.open("", '_blank');
})
youTube.addEventListener('click', () => {
    window.open("", '_blank');
})



myTrack.forEach(track => {
    const playerContainer = document.createElement('div');
    playerContainer.classList.add("musicPlayer");
    const coverContainer = document.createElement('div');
    coverContainer.classList.add("coverContainer");
    const coverImage = track.cover ? `<img src="${track.cover}" class="cover" />` : '';
    coverContainer.innerHTML = coverImage || '<div class="defaultCover"></div>';

    const playBtn = document.createElement('div');
    playBtn.classList.add('playBtn');
    playBtn.innerText = "Play";

    coverContainer.appendChild(playBtn);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info');
    infoContainer.innerHTML = `
    <div class="trackName">${track.nameMusic}</div>
    <div class="artistName">${track.artist}</div>
    <input type="range" class="progress" value="0" />
    <div class="timer">0:00 / 0:00</div>
    `;

    playerContainer.appendChild(coverContainer);
    playerContainer.appendChild(infoContainer);

    musicsPage.appendChild(playerContainer);
    playBtn.onclick = () => {
        
    }
})