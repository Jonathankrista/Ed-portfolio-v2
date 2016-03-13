$(document).ready(function() {
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var sectThree = $('.section-3');
    var mainHead = $('.main-head');
    var sectTwo = $('.section-2');
    if (scroll > 400) {
      // sectThree.css({
      //   position: 'relative';
      //
      // });
      sectTwo.css({
        position: 'absolute',
        top: '0',
        left: '0'
      });
    }else{
      sectTwo.css({
        position: '';
      });
      sectThree.css({
        position: '';
      });
    }
      if (scroll > 2) {
        mainHead.css({
          backgroundColor: 'rgb(189, 189, 189)',
          color: 'black';
        });
      }else{
        mainHead.css({
          backgroundColor: '',
          color: '';
        });
      }
  });

});
