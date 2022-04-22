const infos = document.querySelectorAll('.info');
const rows = document.querySelectorAll('.row');

var i = 0.3;

infos.forEach((link, index) => {
    link.style.animationDelay = `${i + 0.5}s`;
    i += 0.3;
});

rows.forEach((link, index) => {
    link.style.animationDelay = `${index*10 + 5}ms`;
});