function checkJquery(callback) {
  if (typeof(jQuery) == 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = function(){
      callback();
    }
  } else {
    callback();
  }
}

function checkBxslider(callback) {
  if (typeof($.bxSlider) == 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = function(){
      callback();
    }
  } else {
    callback();
  }
}

function loadBxsliderCss() {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.css'
  link.media = 'all';
  document.getElementsByTagName('head')[0].appendChild(link);
}

function sliderInit() {
  $(function() {
    $('[data-slider-id="dozack"]').html('<div class="slider"><div><img src="2.jpg" /></div><div><img src="https://bxslider-production.s3.amazonaws.com/uploads/slide/image/6590d524-6340-4d28-bfb8-65d51facddb5/2.jpg" /></div><div><img src="https://bxslider-production.s3.amazonaws.com/uploads/slide/image/64cb650e-5a11-40fb-b8a4-44ad615961b9/3.jpg" /></div><div><img src="https://bxslider-production.s3.amazonaws.com/uploads/slide/image/41627784-61ce-4708-b0ef-00393a9c0e28/4.jpg" /></div><div><img src="https://bxslider-production.s3.amazonaws.com/uploads/slide/image/61ce2fa8-6e6c-43f8-8923-83a731df1cb7/5.jpg" /></div><div><img src="https://bxslider-production.s3.amazonaws.com/uploads/slide/image/557d1092-4d1d-4743-9d40-879a66f30301/6.jpg" /></div></div>');
    $('.slider').bxSlider({"auto":true,"mode":"horizontal","pager":true,"speed":500,"controls":true,"pagerType":"full","startSlide":0,"randomStart":false,"slideMargin":0,"autoControls":true});
  });
}

loadBxsliderCss();

checkJquery(function(){
  checkBxslider(function(){
    sliderInit();
  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-36499930-14', 'auto');
ga('send', 'pageview');