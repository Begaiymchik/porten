document.querySelectorAll('button[data-modal=consultation]').forEach(el => el.addEventListener('click', () => {
    document.querySelectorAll('.overlay, #consultation').forEach(el => el.style.display="block")
}))
$(window).scroll(function () {
    if($(this).scrollTop() > 1000){
        $('.page__up').fadeIn()
    }else{
        $('.page__up').fadeOut()
    }
});
