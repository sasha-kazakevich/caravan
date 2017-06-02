$(document).ready(function () {
  var navLinks = $('#main-menu a');

  $('#main-menu a').on('click', function (e) {
    navLinks.removeClass('active').eq(navLinks.index(this)).addClass('active');
  });
  $('#logo').on('click', function (e) {
    navLinks.removeClass('active');
    $('.button-menu').removeClass('open');
    $('#main-menu').removeClass('open');
  });
  $('.button-menu').on('click', function (e){
    $('.button-menu').toggleClass('open');
    $('#main-menu').toggleClass('open');
  });
  $('#main-menu').on('click',function (e) {
    $('.button-menu').removeClass('open');
    $('#main-menu').removeClass('open');
  })
});

var flag;

function main(ctx, next) {
  $('.bounceinleft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 300
  });
  $('#button-up').on('click',function(){
    $('html,body').animate({ scrollTop: 0}, 700);
    return false;
  });
  $('.contacts-form').on('submit', function (e) {
    e.preventDefault();
    var name = e.target.elements.name.value;
    var number = e.target.elements.number.value;
    var email = e.target.elements.email.value;
    $.ajax({
        url: 'https://formspree.io/transcaravan@yandex.ru',
        method: 'POST',
        data: {name:name,
              number: number,
              email: email},
        dataType: 'json',
        complete: function(){
          $('.form-thank').css('display','block');
          setTimeout(function(){
            $('.form-thank').css('display','none');
          },3000)
        }
    });

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
    e.target.elements.email.value = '';
  });
}

function exitMain(ctx, next){
  $('#button-up').off('click');
  $('.contacts-form').off('submit');
  next();
}

function rent(ctx, next) {
  $('.bounceinleft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 300
  });
}
function service(ctx, next) {
  $('.bounceinleft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 300
  });
}
function contacts(ctx, next) {
  $('.bounceinleft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 300
  });
  $('.contacts-form').on('submit', function (e) {
    e.preventDefault();
    var name = e.target.elements.name.value;
    var number = e.target.elements.number.value;
    var email = e.target.elements.email.value;
    $.ajax({
        url: 'https://formspree.io/transcaravan@yandex.ru',
        method: 'POST',
        data: {name:name,
              number: number,
              email: email},
        dataType: 'json',
        complete: function(){
          $('.form-thank').css('display','block');
          setTimeout(function(){
            $('.form-thank').css('display','none');
          },3000)
        }
    });

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
    e.target.elements.email.value = '';
  });
};

function exitContacts(ctx, next){
  $('.contacts-form').off('submit');
  next();
}

function feedback(ctx, next) {
  var slider = document.querySelector('.Wallop');
  var wallop = new Wallop(slider);
  flag = false;

  $('.bounceinleft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 300
  });

  function timer (){
    if(flag) {
      clearTimeout(timer);
      return;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function(){
        wallop.next();
      },5000);
    }
  }
  wallop.on('change',timer);
}

function exitFeedBack(ctx, next){
  flag = true;
  next();
}

function about(ctx, next) {
  $('.bounceinleft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 300
  });
}
