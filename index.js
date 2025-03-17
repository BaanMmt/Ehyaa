const pageName = "EHYAA";
const imgBanner = "./images/Banner.jpg";
const imgProfile = "./images/Profile.jpg";
const mySocialMediaPages = [
    {instagram: "https://instagram.com/ehyaaofficial"},
    {telegram: "https://t.me/EhyaaChannel"},
    {soundCloud: ""},
    {youTube: "not page!"}
];
const myTrack = [
    {
        nameMusic: "Tanhaei",
        artist: "Ehyaa",
        cover: "./covers/Tanhaei%20-%20Ehyaa.jpg",
        urlMusic: "./tracks/Ehyaa%20-%20Tanhaei.mp3",
        urlSoundCloud: "https://on.soundcloud.com/anvvnDJeGcJotCKY9",
        urlYouTube: "https://www.youtube.com/embed/BmuqgZ9bj3c",
    },{
        nameMusic: "Bad Zone",
        artist: "Ehyaa",
        cover: "./covers/Bad%20Zone%20-%20Ehyaa.jpg",
        urlMusic: "./tracks/Ehyaa%20-%20Bad%20Zone.mp3",
        urlSoundCloud: "https://soundcloud.com/reza-pishro-rail/qabil-1",
        urlYouTube: "https://www.youtube.com/watch?v=BmuqgZ9bj3c",
    },
];

// ---------------------------------

document.title = pageName;
document.querySelector('#h1').innerText = pageName ;
document.querySelector('.banner').style.backgroundImage = `url(${imgBanner})`;
const profile = document.querySelector("#profile");
profile.src = imgProfile ; profile.alt = pageName ;


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


// ---------------------------------

const soundCloud = document.querySelector("#soundCloud");
const instagram = document.querySelector("#instagram");
const telegram = document.querySelector("#telegram");
const youTube = document.querySelector("#youTube");

soundCloud.addEventListener('click', () => {
    const soundCloudUrl = mySocialMediaPages.find(item => item.soundCloud).soundCloud;
    window.open(soundCloudUrl, '_blank');
})
instagram.addEventListener('click', () => {
    const instagramUrl = mySocialMediaPages.find(item => item.instagram).instagram;
    window.open("", '_blank');
})
telegram.addEventListener('click', () => {
    const telUrl = mySocialMediaPages.find(item => item.telegram).telegram;
    window.open(telUrl, '_blank');
})
youTube.addEventListener('click', () => {
    const youTubeUrl = mySocialMediaPages.find(item => item.youTube).youTube;
    window.open(youTubeUrl, '_blank');
})


// ---------------------------------

const articleMusicPlayer = document.querySelector('#articleMusicPlayer')
const closeBtn = document.querySelector('.close');
articleMusicPlayer.style.display = 'none';

closeBtn.addEventListener('click', () => {
    articleMusicPlayer.style.display = 'none';
})

// ---------------------------------

const playedMusicPlayer = document.querySelector(".circleCover");
const playBtn = document.querySelector('#playMusicPlayerBtn');
const stopBtn = document.querySelector("#stopMusicPlayerBtn");
const rangeMusicPlayer = document.querySelector("#rangeMusicPlayer");
const startTimer = document.querySelector('.startTimerMusicPlayer');
const endTimer = document.querySelector('.endTimerMusicPlayer');

stopBtn.classList.add("hidden")

let isPlaying = false ;



// ---------------------------------


myTrack.forEach(track => {

    const tracks = document.createElement('div');
    tracks.classList.add('tracks');
    tracks.style.backgroundImage = `url(${track.cover})`;

    tracks.innerHTML = `<p>${track.nameMusic}<span>&nbsp;- ${track.artist}</span></p>`;
    musicsPage.appendChild(tracks);

    tracks.addEventListener('click', ()=> {
        articleMusicPlayer.style.display = 'flex';
        const boxTitleMusicPlayerP = document.querySelector('.pBold');
        boxTitleMusicPlayerP.innerHTML = `${track.nameMusic}<span>&nbsp;- ${track.artist}</span>`;
        const dlBtn = document.querySelector('.dlBtn');
        dlBtn.addEventListener('click', () => {
            window.open(track.urlMusic)
        })
        const coverMusicPlayer = document.querySelector('.coverMusicPlayer');
        coverMusicPlayer.src = `${track.cover}`; coverMusicPlayer.alt = `${track.nameMusic} - ${track.artist}`;

        const titleMusicPlayer = document.querySelector('.titleMusicPlayer');
        titleMusicPlayer.innerHTML = `${track.nameMusic}`;
        const ArtistMusicPlayer = document.querySelector('.ArtistMusicPlayer');
        ArtistMusicPlayer.innerHTML = `${track.artist}`;

        const iframeSoundCloud = document.querySelector('#iframeSoundCloud');
        iframeSoundCloud.src = `${track.urlSoundCloud}`;
        const soundCloudPlayer = document.querySelector('.soundCloudPlayer');
        
        if (track.urlSoundCloud === '') {
            soundCloudPlayer.style.display = "none";
        } else {
            iframeSoundCloud.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(track.urlSoundCloud)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
            soundCloudPlayer.style.display = 'flex';
        }

        const iframeYouTube = document.querySelector('#iframeYouTube');
        iframeYouTube.src = `${track.urlYouTube}`;
        const youTubePlayer = document.querySelector('.youTubePlayer');

        if (track.urlYouTube === '') {
            youTubePlayer.style.display = "none";
        } else {
            iframeYouTube.src = track.urlYouTube;
            youTubePlayer.style.display = 'flex';
        }
        const audio = new Audio(track.urlMusic);
        playedMusicPlayer.addEventListener('click', () => {

            if (isPlaying) {
                audio.pause();
                // audio = null;
                stopBtn.classList.add('hidden');
                playBtn.classList.remove('hidden')
            } else {
                audio.play();
                stopBtn.classList.remove('hidden');
                playBtn.classList.add('hidden');
                updateTimer();
            }
            isPlaying = !isPlaying;
            closeBtn.addEventListener('click', () => {
                if (audio) {
                    audio.pause();
                    audio = null;
                }
                
            })
        });
        
        function updateTimer() {
            const duration = audio.duration;
            endTimer.textContent = formatTime(duration);
            rangeMusicPlayer.max = 100;

            audio.ontimeupdate = () => {
                const currentTime =audio.currentTime;
                startTimer.textContent = formatTime(currentTime);

                const value = (currentTime / duration) * 100;
                rangeMusicPlayer.value = value;

                if (currentTime === duration) {
                    isPlaying = false;
                    stopBtn.classList.add('hidden');
                    playBtn.classList.remove('hidden');
                    rangeMusicPlayer.value = 0;
                    startTimer.textContent = '0:00';
                }
            };
            function formatTime(seconds) {
                const minutes = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
            }
        }
        
    })
    
})