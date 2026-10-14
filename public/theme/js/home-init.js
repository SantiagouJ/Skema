function startSkemaHome() {
  if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.slick) {
    window.setTimeout(startSkemaHome, 40);
    return;
  }
  window.jQuery(function ($) {
  var $menu = $("#principal-menu");
  $menu.addClass("navbar-glass-youtube");

  function onScroll() {
    $menu.toggleClass("menu-scrolled", $(window).scrollTop() >= 50);
    var banner = document.querySelector(".slider-banner");
    var dots = document.querySelector(".home-hero-dots");
    if (!banner || !dots) return;
    var rect = banner.getBoundingClientRect();
    dots.classList.toggle("home-hero-dots--hero-off", rect.bottom < 90);
  }
  $(window).on("scroll resize", onScroll);
  onScroll();

  var $yt = $(".slick-slider-banner--youtube");
  if ($yt.length && $.fn.slick) {
    var heroCount = $yt.children(".hero-yt-slide").length;
    $yt.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: heroCount > 1,
      autoplaySpeed: 5000,
      infinite: heroCount > 1,
      arrows: false,
      adaptiveHeight: false,
      dots: heroCount > 1,
      appendDots: $yt.closest(".slider-banner").find(".home-hero-dots"),
    });
    if (heroCount < 2) {
      $yt.closest(".slider-banner").find(".home-hero-dots").hide();
    }
  }

  var $projects = $(".skema-proyectos__slider");
  if ($projects.length && $.fn.slick) {
    var count = parseInt($projects.data("slides-count"), 10) || 1;
    var prev =
      '<button type="button" class="proyect-prev" aria-label="Anterior"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 53 53" fill="none"><ellipse cx="26.2061" cy="26.6026" rx="26.2141" ry="26.1988" fill="#FC7416"/><path d="M28.4076 7.39893L10.9769 26.8252L28.4076 46.2515L34.9441 38.9667L24.0499 26.8252L34.9441 14.6838L28.4076 7.39893Z" fill="white"/></svg></button>';
    var next =
      '<button type="button" class="proyect-next" aria-label="Siguiente"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 54 53" fill="none"><ellipse cx="27.2027" cy="26.6025" rx="26.2141" ry="26.1988" transform="rotate(-180 27.2027 26.6025)" fill="#FC7416"/><path d="M25.0013 45.8059L42.4319 26.3796L25.0013 6.95331L18.4648 14.2382L29.359 26.3796L18.4648 38.521L25.0013 45.8059Z" fill="white"/></svg></button>';
    $projects.slick({
      slidesToShow: Math.min(4, count),
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      prevArrow: prev,
      nextArrow: next,
      responsive: [
        { breakpoint: 1400, settings: { slidesToShow: Math.min(3, count), slidesToScroll: 1 } },
        { breakpoint: 992, settings: { slidesToShow: Math.min(2, count), slidesToScroll: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    });
  }

  var $mapSelect = $("#selectMapas");
  if ($mapSelect.length) {
    $("#" + $mapSelect.val()).show();
    $mapSelect.on("change", function () {
      $(".divMapa").hide();
      $("#" + $(this).val()).fadeIn(120);
      $(this).parent(".div-select").removeClass("rotated");
    });
    $mapSelect.on("click", function () {
      $(this).parent(".div-select").toggleClass("rotated");
    });
  }

  var $city = $("#selectContact");
  if ($city.length) {
    $(".divContact").hide();
    $("." + $city.val()).show();
    $city.on("change", function () {
      $(".divContact").hide();
      $("." + $(this).val()).fadeIn(180);
    });
  }

  $(".btn-abrir").on("click", function () {
    $(".navbar-collapse").css({ right: "0" });
    $(this).attr("aria-expanded", "true");
  });
  $(".btn-cerrar").on("click", function () {
    $(".navbar-collapse").css({ right: "-100%" });
    $(".btn-abrir").attr("aria-expanded", "false");
  });

  $(document).on("click", ".is-inactive > a", function (event) {
    event.preventDefault();
  });

  $(document).on("click", "#menuPrincipal a.dropdown-toggle", function (event) {
    if (window.innerWidth > 719) return;
    event.preventDefault();
    var $item = $(this).parent();
    var open = $item.hasClass("show");
    $item.siblings(".show").removeClass("show").children(".dropdown-menu").removeClass("show");
    $item.toggleClass("show", !open);
    $item.children(".dropdown-menu").toggleClass("show", !open);
    $(this).attr("aria-expanded", String(!open));
  });

  var popup = document.getElementById("skema-popup");
  function closePopup() {
    if (popup) popup.classList.add("is-hidden");
  }
  if (popup) {
    popup.querySelector(".skema-popup__close")?.addEventListener("click", closePopup);
    popup.addEventListener("click", function (event) {
      if (event.target === popup) closePopup();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closePopup();
    });
  }

  $(".wpcf7-form").on("submit", function (event) {
    event.preventDefault();
    var form = this;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var output = form.querySelector(".wpcf7-response-output");
    if (output) {
      output.hidden = false;
      output.classList.add("is-visible");
      output.textContent = "Gracias. Este es un sitio de demostración y el mensaje no se envió.";
    }
    form.reset();
  });
  });
}
startSkemaHome();
