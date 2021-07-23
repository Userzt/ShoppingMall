window.onload = function() {
    var imgList = document.getElementById('imgList').getElementsByTagName('img');
    var sliderList = document.getElementsByClassName('slider')[0].getElementsByTagName('i');
    var imgDiv = document.getElementsByClassName('img')[0];
    var index = 0;

    var timer = setInterval(autoPlay , 3000);

    //鼠标悬停，图片停止轮播
    imgDiv.onmouseover = function() {
        clearInterval(timer);
    }

    //鼠标移开，图片开始轮播
    imgDiv.onmouseout = function() {
        timer = setInterval(autoPlay , 3000);
    }

    //自动播放
    function autoPlay() {
        index++;
        if (index >= imgList.length) {
            index = 0;
        }
        changeImg(index);
    }

    //鼠标悬停在小圆点上，显示对于的图
    for (var i = 0 ; i < sliderList.length ; i++) {
        sliderList[i].onmouseover = function() {
            clearInterval(timer);
            index = this.dataset.index - 1;
            changeImg(index);
        }
    }

    //图片切换
    function changeImg(curIndex) {
        for (var i = 0 ; i < imgList.length ; i++) {
            imgList[i].style.display = 'none';
            sliderList[i].className = '';
        }
        imgList[curIndex].style.display = 'block';
        sliderList[curIndex].className = 'on';
    }
}

