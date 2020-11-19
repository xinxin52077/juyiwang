// 设置html字体大小
(function (doc, win, designWidth) {
    var html = doc.documentElement;

    function refreshRem() {
        var clientWidth = html.clientWidth;
        if (clientWidth >= designWidth) {
            html.style.fontSize = '100px';
        } else {
            html.style.fontSize = (100 * (clientWidth / designWidth) + 'px');
        }
    }

    // document加载完的一个事件
    doc.addEventListener('DOMContentLoaded', refreshRem)
})(document, window, 750)