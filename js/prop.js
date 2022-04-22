const infos = document.querySelectorAll('.info');

var i = 0;

infos.forEach((link, index) => {
    link.style.animationDelay = `${i + 0.7}s`;
    i += 0.3;
});