console.clear();


function bn_close(){
  $('.top-bn>.bn-img>img').css('width', '0'); 
   $('.top-bn>.close-btn').css('display', 'none');
}
function bn_init(){
  var $btnClose = $('.top-bn>.close-btn');
  $btnClose.click(bn_close);
}
bn_init();

function bn_show(){
  $('.bn-slider-box>.slider-1').slick({
    dots:true,
      customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    if (i=='0'){
      i = "1 ";
    } else if (i=='1'){
      i = "2";
    }
    else if (i=='2'){
      i = "3";
    }
    return '<a class="dot">'+i+'</a>';
      }
  });  
}
bn_show();


$(function () {
  function ProdBox1__init() {
      $('.prod-box-1 > .owl-carousel').owlCarousel({
          responsive: {
              0: {
                  items: 4
              }
          },
          margin: 30,
          loop: true,
          dots: false,
          nav: true,
          navText: ['←', '→']
      });
  }
  ProdBox1__init();

});



