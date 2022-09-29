var container = document.getElementsByClassName("container")[0];

window.onscroll = function () {
    container.style.transform = "scale("+ window.scrollY * 1.001 +")";
    //alert(window.scrollY);
};
