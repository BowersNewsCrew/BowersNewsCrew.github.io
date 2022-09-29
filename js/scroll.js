var schedule = document.getElementsByClassName("schedule")[0];

window.onscroll = function () {
    if (window.pageYOffset > 160) {
      schedule.classList.remove("blur");
    }
};
