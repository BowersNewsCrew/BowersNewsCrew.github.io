var container = document.getElementsByClassName("container")[0];

window.onscroll = function () {
    if (window.scrollY >= 20) {
      container.classList.remove("blur");
    }
    //alert(window.scrollY);
};
