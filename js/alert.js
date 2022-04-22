const doc = document.querySelectorAll('.js-alert');
const wrapper = document.querySelector('.main-wrapper');
const alert = document.querySelectorAll('.alert-wrapper');

var currIndex = -1;

doc.forEach((link, index) => {
    link.addEventListener('click', () => {
        if(wrapper.style.filter) {
            wrapper.style.filter = '';
            currIndex = -1;
        }
        else {
            wrapper.style.filter = "blur(10px)";
            alert[index].style.display = "flex";
            currIndex = index;
            console.log(index);
        }
    
    });
});

function alertClose() {
    wrapper.style.filter = '';
    alert[currIndex].style.display = "none";
    currIndex = -1;
}