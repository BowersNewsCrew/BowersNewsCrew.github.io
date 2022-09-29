var schedule = document.getElementsByClassName("container")[0];

window.onscroll = function () {
    if (window.pageYOffset > 40) {
      schedule.classList.remove("blur");
    }
};
