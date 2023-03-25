
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var listMusics = $('#music-list');
var nameSong = $('.name-song');
var imageSong = $('.imageAudio');
var audioMusic = $('.audio-music');

var progress = $('.timeline-range');
var volumeSong = $('.volume-range');

var stopBtn = $(".stop-btn");
var playBtn = $(".play-btn");
var nextBtn = $(".next-btn");
var randomBtn = $(".shuffle-btn");
var controlsBtn = $(".controls-btn");

var songcurrent = $('.current-time');
var songDuration = $('.song-duration');

var change_bgBtn = $('.change-bgBtn');
var list_bg = $('.list-background');
var change_background = $('.change-background');

change_bgBtn.addEventListener('click', function() {
    if ($('.list-background.is-open') && $('.change-background.is-open')) {
        list_bg.classList.remove('is-open');
        change_background.classList.remove('is-open');
    } else {
        list_bg.classList.add('is-open');
        change_background.classList.add('is-open');
    }
    app.listBackgrounds();
    var backgrounds = $$('.tab-background');
    backgrounds.forEach(background => {
        background.onclick = function () {
            var src_image = background.querySelector('img').src;
            return document.body.style.backgroundImage = `url('${src_image}')`;
        };
    });
});

volumeSong.oninput = function (e) {
  audioMusic.volume = (e.target.value / 100);
};

function pauseMusic() {
  imageSong.style.animationPlayState = "paused";
  controlsBtn.classList.remove("is-playing");
  audioMusic.pause();
};

function playMusic() {
  imageSong.style.animationPlayState = "running";
  controlsBtn.classList.add("is-playing");
  audioMusic.play();
}

audioMusic.ontimeupdate = function() {
  if (audioMusic.duration) {
    var progressPercent = audioMusic.currentTime * 100 / audioMusic.duration;
    progress.value = progressPercent;
    songcurrent.innerHTML = app.formatTime(audioMusic.currentTime);
    if(progress.value == 100) {
      if($(".shuffle-btn.is-random")) {
        app.randomSong();
      } else {
        app.nextSong();
      }
    }
  }
}

progress.oninput = function(e) {
  var seekTime = (e.target.value / 100) * audioMusic.duration;
  audioMusic.currentTime = seekTime;
}

var app = {
  currentIndex : 0,
  songs: [
    {
      name: 'Sau Này Liệu Chúng Ta',
      singer: 'Lofi-chill',
      path: './audio/songs/y2mate.com - 31072  Sau Này Liệu Chúng Ta  Sợ Lắm 2 ft Hẹn Yêu  Mix Freak D Mashup Lofi Sad Cực Chill  P2.mp3',
      image: './audio/image/1bfe5747e8b346dac08cf3c7f9a1d997.jpg'
    },
    {
      name: 'CHẠY NGAY ĐI',
      singer: 'Sơn Tùng MTP',
      path: './audio/songs/y2mate.com - CHẠY NGAY ĐI ONIONN REMIX RUN NOW ONIONN REMIX  SƠN TÙNG MTP  Official Music Video.mp3',
      image: './audio/image/3d54c515e1b75ea0f6db44ce3ec41c86.jpg'
    },
    {
      name: 'LẠC TRÔI',
      singer: 'Sơn Tùng MTP',
      path: './audio/songs/y2mate.com - LẠC TRÔI  OFFICIAL MUSIC VIDEO  SƠN TÙNG MTP.mp3',
      image: './audio/image/5853c947842662279bac87cc4866da1c.jpg'
    },
    {
      name: 'NƠI NÀY CÓ ANH',
      singer: 'Sơn Tùng MTP',
      path: './audio/songs/y2mate.com - NƠI NÀY CÓ ANH  OFFICIAL MUSIC VIDEO  SƠN TÙNG MTP.mp3',
      image: './audio/image/76d0bb50249e6c4c5c62074f644a9291.jpg'
    },
    {
      name: 'THERES NO ONE AT ALL',
      singer: 'Sơn Tùng MTP',
      path: './audio/songs/y2mate.com - SƠN TÙNG MTP  THERES NO ONE AT ALL ANOTHER VERSION  OFFICIAL MUSIC VIDEO.mp3',
      image: './audio/image/95774b399cc4f9903408af58e5765d5d.jpg'
    },
    {
      name: 'NGOÀI 30',
      singer: 'Nguyễn Thái Học',
      path: './audio/songs/y2mate.com - NGOÀI 30  THÁI HỌC x LÊ CHÍ TRUNG  OFFICIAL MV  Nửa thế giới em dành cho một ai đó thôi .mp3',
      image: './audio/image/be9277aa5324eeed0f00a8db592f3352.jpg'
    },
    {
      name: 'LÀ ANH',
      singer: 'PHAM LICH cover',
      path: './audio/songs/y2mate.com - LA ANH  Cover Lời Việt by PHAM LICH.mp3',
      image: './audio/image/d2680d30e66ebed781271bd91fa3dbb1.jpg'
    },
    {
      name: 'Thị Mầu',
      singer: 'Hòa Minzy x Masew',
      path: './audio/songs/y2mate.com - Thị Mầu  Hòa Minzy x Masew  Official Music Video.mp3',
      image: './audio/image/e7987d3f1f05d0b58e14fae719225296.jpg'
    },
    {
      name: 'EM LÀ CON THUYỀN CÔ ĐƠN',
      singer: 'Nguyễn Thái Học',
      path: './audio/songs/y2mate.com - EM LÀ CON THUYỀN CÔ ĐƠN  THÁI HỌC OFFICIAL MUSIC VIDEO.mp3',
      image: './audio/image/FXwsNRmVQAABwxI.jfif'
    },
    {
      name: 'EM CŨNG ĐI',
      singer: 'Nguyễn Thái Học',
      path: './audio/songs/y2mate.com - EM CŨNG ĐI  THÁI HỌC  OFFICIAL MUSIC VIDEO.mp3',
      image: './audio/image/Hinh-anh-anime-girl-deo-kinh.jpg'
    },
  ],

  backgrounds: [
    {source: './audio/image/background/1025069.png'},
    {source: './audio/image/background/1028709.jpg'},
    {source: './audio/image/background/1028801.jpg'},
    {source: './audio/image/background/1123250.png'},
    {source: './audio/image/background/1198620.jpg'},
    {source: './audio/image/background/736461.png'},
    {source: './audio/image/background/737151.png'},
    {source: './audio/image/background/742320.png'},
    {source: './audio/image/background/wallpaperflare.com_wallpaper (2).jpg'},
    {source: './audio/image/background/wallpaperflare.com_wallpaper (3).jpg'},
    {source: './audio/image/background/wallpaperflare.com_wallpaper (4).jpg'},
    {source: './audio/image/background/wallpaperflare.com_wallpaper (6).jpg'},
  ],

  listBackgrounds: function() {
    var htmls = this.backgrounds.map(background => {
        return `
            <div class="tab-background">
                <img src="${background.source}" alt="">
            </div>
        `;
    });
    list_bg.innerHTML = htmls.join('\n');
  },

  renderSong: function() {
    var htmls = this.songs.map(function(song) {
    return `
        <li class="tab-music">
          <div class="info-song">
              <img src="${song.image}" alt="">
              <div class="description-music">
                <h3>${song.name}</h3>
                <p>${song.singer}</p>
              </div>                        
          </div>
          <div>
              <i class="fa-solid fa-play" style="font-size: 30px" onclick="playSongInList()"></i>
          </div>
        </li>
      `
    });
    listMusics.innerHTML = htmls.join('');
  },

  currentSong: function() {
    return this.songs[this.currentIndex];
  },

  loadCurrentMusic: function() {
    nameSong.innerHTML = this.currentSong().name;
    imageSong.src = this.currentSong().image;
    audioMusic.src = this.currentSong().path;
    setTimeout(()=> {
      songDuration.innerHTML = app.formatTime(audioMusic.duration);
    }, 300);
  },

  isActive: function() {
    if ($('.tab-music.active')) {
      $('.tab-music.active').classList.remove('active');
      song.classList.add('active');
      app.currentIndex = index;
      app.loadCurrentMusic();
      playMusic();
    }
  },

  formatTime: function (time) {
    var minutes = Number.parseFloat(time/60).toFixed();
    var seconds = Number.parseFloat(time%60).toFixed();
    return (minutes + ':' + seconds);
  },

  start: function() {
    imageSong.style.animationPlayState = "paused"
    this.renderSong()
    var musics = $$('.tab-music');
    musics[this.currentIndex].classList.add('active');
    
    this.loadCurrentMusic()

    this.selectSong()
  },

  nextSong: function() {
    imageSong.style.transform = 'rotate(0deg)';
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    var musics = $$('.tab-music');
    $('.tab-music.active').classList.remove('active');
    musics[this.currentIndex].classList.add('active');
    this.scrollToActiveSong()
    this.loadCurrentMusic();
    playMusic();
  },

  backSong: function() {
    imageSong.style.transform = 'rotate(0deg)';
    this.currentIndex--;
    if (this.currentIndex < 0) {
        this.currentIndex = this.songs.length-1;
    }
    var musics = $$('.tab-music');
    $('.tab-music.active').classList.remove('active');
    musics[this.currentIndex].classList.add('active');
    this.scrollToActiveSong()
    this.loadCurrentMusic();
    playMusic();
  },

  checkRandom: function() {
    if ($('.shuffle-btn.is-random')) {
      randomBtn.classList.remove('is-random');
    } else {
      randomBtn.classList.add('is-random');
      this.randomSong();
    }
  },

  randomSong: function () {
    var randomIndex = Math.floor(Math.random() * this.songs.length)
    this.currentIndex = randomIndex;
    var musics = $$('.tab-music');
    $('.tab-music.active').classList.remove('active');
    musics[this.currentIndex].classList.add('active');
    this.scrollToActiveSong()
    this.loadCurrentMusic();
    playMusic();
  },

  rotateSong: function () {
    audioMusic.currentTime = 0;
    audioMusic.ontimeupdate = function () {
      if (audioMusic.duration) {
        var progressPercent = audioMusic.currentTime * 100 / audioMusic.duration;
        progress.value = progressPercent;
      }
    };
    this.loadCurrentMusic();
    playMusic();
  },
  
  selectSong: function () {
    var songInList = $$('.tab-music')
    songInList.forEach((song, index) => {
      song.onclick = function () {
        $('.tab-music.active').classList.remove('active');
        song.classList.add('active');
        app.currentIndex = index;
        app.loadCurrentMusic();
        playMusic();
      }
    });
  },

  scrollToActiveSong: function () {
    // elemenmt được active sẽ được hiển thị trong vùng nhìn thấy
    $('.tab-music.active').scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
  },
}

app.start();
