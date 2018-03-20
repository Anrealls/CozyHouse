

function headerClick(){
	var hamburger = document.querySelector('.hamburger');
	var list = document.querySelector('.header-nav_list');

	hamburger.addEventListener('click', function(e) {
			this.classList.toggle('is-active');
			list.classList.toggle('header-nav_list-active');
	});
}
headerClick();


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:45,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
});
var owl = $('.our-friends_slider');
owl.owlCarousel();
// Go to the next item
$('.our-friends_slider-btn--right').click(function() {
    owl.trigger('next.owl.carousel', [300]);
});
// Go to the previous item
$('.our-friends_slider-btn--left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});


$(document).ready(function(){
    $(".header-nav_list").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
