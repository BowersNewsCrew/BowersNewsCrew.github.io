var container = document.getElementsByClassName("container")[0];

window.onscroll = function () {
    if (window.scrollY > 50) {
      container.classList.remove("blur");
    }
};
