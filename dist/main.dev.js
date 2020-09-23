"use strict";

$(function () {
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    blockId = $(this).data('scroll');
    blockOffset = $(blockId).offset().top;
    $('html, body').animate({
      scrollTop: blockOffset
    }, 600);
  });
  var play = document.querySelector("#playVid"),
      vid = document.querySelector('#vid');
  play.addEventListener('click', function () {
    vid.play();
    play.style.display = "none";
  });
  vid.addEventListener('ended', function () {
    play.style.display = 'block';
  });
  $("[data-modal]").on("click", function (event) {
    event.preventDefault();
    $(places_modal).addClass('show');
  });
  $('.close').on("click", function () {
    $(places_modal).removeClass('show');
  });
  $("[data-modalLog]").on("click", function (event) {
    event.preventDefault();
    $('#modal-header').addClass('showLog');
  });
  $('.close').on("click", function () {
    $('#modal-header').removeClass('showLog');
  });
  $("[data-modalFind]").on("click", function (event) {
    event.preventDefault();
    $('#modal-find').addClass('showFind');
  });
  $('.close').on("click", function () {
    $('#modal-find').removeClass('showFind');
  });
  $('#btnApp').on('click', function () {
    alert('Thanks for download our app!');
  });
  $('#btnSend').on('click', function () {
    alert('Thanks for feedback');
  });
  $("[data-modalSubs]").on("click", function (event) {
    event.preventDefault();
    $('#modal-subs').addClass('showSubs');
  });
  $('.close').on("click", function () {
    $('#modal-subs').removeClass('showSubs');
  });
  $('formG').submit(function () {
    return false;
  });
}); //---------Slider-------------------------

var slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var slide = _step.value;
      slide.style.display = "none";
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  slides[slideIndex - 1].style.display = "block";
} //------------------------------------