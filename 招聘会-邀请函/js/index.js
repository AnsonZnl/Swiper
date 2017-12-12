/**
 * Created by asus on 2017/12/12.
 */

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    nevigation: {
        nextEl: "swiper-button-next"

    },
    loop:true,
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }

});
//   动画旋转暂停和继续
love = document.getElementById("love");
musicGif=document.getElementById("music-gif");
music.onclick = function () {
    if (this.classList.contains('pause')) {
        this.classList.remove('pause');
        musicGif.style.display='block'
    } else {
        this.classList.add('pause');
        musicGif.style.display='none'
    }
    bf()
};
//音乐暂停和播放
function bf() {
    if (love.paused) {
        love.play();//audio.play();// 这个就是播放
    } else {
        love.pause();// 这个就是暂停
    }
}

