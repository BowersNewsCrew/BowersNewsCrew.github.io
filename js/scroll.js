var container = document.getElementsByClassName("container")[0];

window.onscroll = function () {
    container.style.transform = "scale("+ (window.scrollY / 100) * 2 +")";
    //alert(window.scrollY);
};
