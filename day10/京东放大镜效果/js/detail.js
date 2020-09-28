window.addEventListener('load', function () {
    // 鼠标经过显示mask和big 鼠标离开则隐藏
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 遮罩层随鼠标移动
    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskx = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2;
        var maskmax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskx < 0) {
            maskx = 0
        } else if (maskx > maskmax) {
            maskx = maskmax
        }
        if (masky < 0) {
            masky = 0
        } else if (masky > maskmax) {
            masky = maskmax
        }
        mask.style.left = maskx + 'px';
        mask.style.top = masky + 'px';
        // 大图的移动 
        // 大图移动距离= 遮罩层移动距离*大图最大移动距离/遮罩层最大移动距离
        var bigimg = document.querySelector('.bigImg');
        var bigmax = bigimg.offsetWidth - big.offsetWidth;
        var bigx = maskx * bigmax / maskmax;
        var bigy = masky * bigmax / maskmax;
        bigimg.style.left = -bigx + 'px';
        bigimg.style.top = -bigy + 'px';
    })
})
