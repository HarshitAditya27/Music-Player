window.onload = () => {
    const song_img_element = document.querySelector('#song-image');
    const song_title_element = document.querySelector('#song-title');
    const song_artist_element = document.querySelector('#song-artist');
    const song_next_element = document.querySelector('#song-next-up');
    const play_btn = document.querySelector('#play-btn');
    const play_btn_icon = document.querySelector('#play-btn .play-icon');
    const prev_btn = document.querySelector('#prev-btn');
    const next_btn = document.querySelector('#next-btn');
    const audio_player = document.querySelector('#music-player');
    let current_song_index;
    let next_song_index;



    let songs = [
        {
            title: 'Last One Standing',
            artist: 'Skylar Grey, Polo G, Mozzy & Eminem',
            song_path: 'music/Last-One-Standing_320.mp3',
            img_path: 'images/Skylar_Grey_-_Last_One_Standing.png'
        },
        {
            title: 'Levitating',
            artist: 'Dua Lipa',
            song_path: 'music/Levitating.mp3',
            img_path: 'images/levitating.jfif'
        },
        {
            title: 'Saami Saami',
            artist: 'Mounika Yadav',
            song_path: 'music/Saami-Saami_320(PagalWorld).mp3',
            img_path: 'images/Saami_Saami-jpg.jpg'
        },
        {
            title: 'Why this Kolaveri Di?',
            artist: 'Dhanush',
            song_path: 'music/Why_This_Kolaveri_Di.mp3',
            img_path: 'images/Kolaveri-Di.jpg'
        }
    ];
    play_btn.addEventListener('click', TogglePlaySong)
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();


    function InitPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function TogglePlaySong() {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong(next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;
            if (current_song_index > songs.length - 1) {
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }
            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }
        UpdatePlayer();
        TogglePlaySong();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];
        song_img_element.style = "background-image: url('" + song.img_path + "')";
        song_title_element.innerText = song.title;
        song_artist_element.innerText = song.artist;
        song_next_element.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;
    }

}

