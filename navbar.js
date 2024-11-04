const navbarHTML = `
<!-- navbar.html -->
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="index.html">JS 套件介紹</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="aos.html">AOS 動畫</a></li>
                <li class="nav-item"><a class="nav-link" href="text-to-speech.html">文字轉語音</a></li>
                <li class="nav-item"><a class="nav-link" href="lottie.html">Lottie 動畫</a></li>
                <li class="nav-item"><a class="nav-link" href="chart.html">Chart.js 圖表</a></li>
                <li class="nav-item"><a class="nav-link" href="lazy-loading.html">圖片懶加載</a></li>
                <li class="nav-item"><a class="nav-link" href="dayjs.html">Day.js 日期處理</a></li>
                <li class="nav-item"><a class="nav-link" href="axios.html">Axios HTTP 客戶端</a></li>
                <li class="nav-item"><a class="nav-link" href="animejs.html">Anime.js 動畫</a></li>
                <li class="nav-item"><a class="nav-link" href="threejs.html">Three.js 3D 圖形</a></li>
                <li class="nav-item"><a class="nav-link" href="swiper.html">Swiper 滑動效果</a></li>
            </ul>
        </div>
    </div>
</nav>
`;

document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
