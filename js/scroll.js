var schedule = document.getElementsByClassName("schedule")[0];

window.onscroll = function () {
    if (window.pageYOffset > 500) {
      schedule.classList.remove("blur");
    }
};
