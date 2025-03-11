/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<div class="' + className + '">' + '0' + (index + 1) + "</div>";
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 5000
    },
    effect: "fade",
    on: {
      init: function init() {
        var activeSlide = $(".swiper-slide-active");
        animateSlideElements(activeSlide);
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        $(".swiper-slide .slider-title, .swiper-slide .slider-subtitle, .swiper-slide .slider-cta").removeClass("opacity-100 translate-x-0").addClass("opacity-0 translate-x-10");
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        var activeSlide = $(".swiper-slide-active");
        animateSlideElements(activeSlide);
      }
    }
  });
  function animateSlideElements(slide) {
    if (!slide.length) return;
    setTimeout(function () {
      slide.find("h1").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
    }, 200);
    setTimeout(function () {
      slide.find("h2").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
    }, 400);
    setTimeout(function () {
      slide.find("a").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
    }, 600);
  }
  setTimeout(function () {
    var activeSlide = $(".swiper-slide-active");
    animateSlideElements(activeSlide);
  }, 500);
  function startCounter(counter) {
    var $counter = $(counter);
    var target = parseInt($counter.attr("data-target"));
    var count = 0;
    var increment = Math.ceil(target / 100);
    var interval = setInterval(function () {
      count += increment;
      if (count >= target) {
        $counter.text(target.toLocaleString() + '+');
        clearInterval(interval);
      } else {
        $counter.text(count.toLocaleString() + '+');
      }
    }, 25);
  }
  function checkVisibility() {
    $(".counter").each(function () {
      var $this = $(this);
      var offsetTop = $this.offset().top;
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      if (scrollTop + windowHeight > offsetTop && !$this.hasClass("counting")) {
        $this.addClass("counting");
        startCounter(this);
      }
    });
  }
  $(window).on("scroll", function () {
    checkVisibility();
  });
  checkVisibility();
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      768: {
        slidesPerView: 3 // Desktop e tablets
      },
      0: {
        slidesPerView: 1 // Mobile
      }
    },
    on: {
      init: function init() {
        updateSlideContent();
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        updateSlideContent();
      }
    }
  });
  var swiper = new Swiper(".swiper-pages", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    // Move 3 slides por vez
    loop: true,
    centeredSlides: false,
    grabCursor: true,
    keyboard: {
      enabled: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4 // Também move 3 por vez no desktop
      },
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1 // No mobile, move 1 slide por vez
      }
    }
  });
  function updateSlideContent() {
    $(".mySwiper .swiper-slide").removeClass("opacity-100").addClass("opacity-50");
    $(".mySwiper .swiper-slide-active").removeClass("opacity-50").addClass("opacity-100"); // Slide centralizado

    var activeSlide = $(".mySwiper .swiper-slide-active"); // Slide do meio

    var title = '';
    var link = '';
    var description = '';
    activeSlide.each(function () {
      title = $(this).data('title');
      link = $(this).data('link');
      description = $(this).data('description');
    });

    // Aplicando fade suave na troca do título, descrição e botão
    $("#model-title, #model-description, #model-link").fadeOut(200, function () {
      $("#model-title").text(title).fadeIn(200);
      $("#model-description").text(description).fadeIn(200);
      // $("#model-link").attr("href", link).fadeIn(200);
      $("#model-link").fadeIn(200);
    });
  }
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var target = $($.attr(this, 'href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });
  $('.open-menu').on('click', function () {
    $('#mobileMenu').removeClass('-right-100').addClass('right-0');
  });
  $('#closeMenu').on('click', function () {
    $('#mobileMenu').removeClass('right-0').addClass('-right-100');
  });
  $('.menu-item a').on('click', function (e) {
    $('#mobileMenu').removeClass('right-0').addClass('-right-100');
  });
  $(document).on('click', '.openModal', function (e) {
    e.preventDefault();
    if (wpurl.isPage != 'servicos' && wpurl.isPage != '') {
      $('#floating_service').val(wpurl.isPage);
    }
    $('#hasService').val(true);
    $('.floating_service').removeClass('hidden');
    $('.floating_model').addClass('hidden');
    $("#customModal").fadeIn(300).css("display", "flex");
    $('#wppLead').css('display', 'none');
    $("#siteIveco").css("display", "block");
    $('#formName').val('Site Iveco');
  });
  $(document).on('click', '#openWppLead', function () {
    $("#customModal").fadeIn(300).css("display", "flex");
    $('#siteIveco').css('display', 'none');
    $("#wppLead").css("display", "block");
    $('#formName').val('Whatsapp Lead');
  });
  $(document).on('click', '#model-link', function (e) {
    e.preventDefault();
    $('#hasService').val(false);
    $('.floating_model').removeClass('hidden');
    $('.floating_service').addClass('hidden');
    $("#customModal").fadeIn(300).css("display", "flex");
    $('#wppLead').css('display', 'none');
    $("#siteIveco").css("display", "block");
    $('#formName').val('Site Iveco');
  });
  $("#closeModal, #customModal").click(function (e) {
    if (e.target.id === "customModal" || e.target.id === "closeModal") {
      $("#customModal").fadeOut(300);
    }
  });
  $("#floating_telefone").mask("(00) 00000-0000");
  $("#wpp_telefone").mask("(00) 00000-0000");
  $("#floating_cep").mask("00000-000");
  $(document).on("click", ".registerLead", function (event) {
    event.preventDefault();
    var hasService = $('#hasService').val() === "true"; // Converte para booleano

    var campos = [{
      id: "floating_name",
      name: "nome",
      mensagem: "O campo Nome é obrigatório."
    }, {
      id: "floating_cep",
      name: "cep",
      mensagem: "O campo CEP é obrigatório."
    }, {
      id: "floating_email",
      name: "email",
      mensagem: "O campo Email é obrigatório."
    }, {
      id: "floating_telefone",
      name: "telefone",
      mensagem: "O campo Telefone é obrigatório."
    }, {
      id: "floating_bairro",
      name: "bairro",
      mensagem: "O campo Bairro é obrigatório."
    }, {
      id: "floating_city",
      name: "cidade",
      mensagem: "O campo Cidade é obrigatório."
    }, {
      id: "floating_model",
      name: "modelo",
      mensagem: "O campo Modelo é obrigatório.",
      obrigatorio: !hasService
    }, {
      id: "floating_service",
      name: "servico",
      mensagem: "O campo Serviço é obrigatório.",
      obrigatorio: hasService
    }, {
      id: "userMessage",
      name: "mensagem",
      mensagem: ""
    },
    // Campo opcional
    {
      id: "formName",
      name: "form_name",
      mensagem: "O campo Hidden é obrigatório."
    }];

    // Verifica se algum campo obrigatório está vazio
    for (var _i = 0, _campos = campos; _i < _campos.length; _i++) {
      var campo = _campos[_i];
      var elemento = document.getElementById(campo.id);
      if (campo.obrigatorio !== false && campo.id !== "userMessage" && (!elemento || !elemento.value.trim())) {
        Swal.close();
        return Swal.fire("Erro!", campo.mensagem, "error");
      }
    }
    Swal.fire({
      title: "Aguarde...",
      text: "Estamos processando seu cadastro.",
      allowOutsideClick: false,
      didOpen: function didOpen() {
        return Swal.showLoading();
      }
    });

    // Monta os dados do formulário excluindo os campos desnecessários
    var formData = campos.reduce(function (dados, campo) {
      var elemento = document.getElementById(campo.id);
      if (campo.obrigatorio !== false && elemento) {
        dados[campo.name] = elemento.value.trim();
      }
      return dados;
    }, {});

    // Envia os dados via AJAX
    // $.ajax({
    //     url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/site-iveco",
    //     type: "POST",
    //     contentType: "application/json",
    //     data: JSON.stringify(formData),
    //     success: function (response) {
    //         Swal.close();
    //         Swal.fire("Sucesso!", response.message || "Cadastro realizado com sucesso!", "success");
    //         campos.forEach(campo => {
    //             let elemento = document.getElementById(campo.id);
    //             if (elemento) elemento.value = "";
    //         });
    //     },
    //     error: function () {
    //         Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
    //     }
    // });
  });

  // $(document).on("click", "#registerLeadWpp", function (event) {
  //     event.preventDefault(); // Evita comportamento padrão do botão

  //     // Lista de campos obrigatórios e seus nomes corretos para o backend
  //     let campos = [
  //         { id: "wpp_name", name: "nome", mensagem: "O campo Nome é obrigatório." },
  //         { id: "wpp_email", name: "email", mensagem: "O campo Email é obrigatório." },
  //         { id: "wpp_telefone", name: "telefone", mensagem: "O campo Telefone é obrigatório." },
  //         { id: "formName", name: "form_name", mensagem: "O campo Hidden é obrigatório." }
  //     ];

  //     // Verifica se algum campo está vazio
  //     for (let campo of campos) {
  //         if (!$(`#${campo.id}`).val().trim()) {
  //             return Swal.fire("Erro!", campo.mensagem, "error");
  //         }
  //     }

  //     // Monta os dados do formulário com os names corretos para o backend
  //     let formData = campos.reduce((dados, campo) => {
  //         dados[campo.name] = $(`#${campo.id}`).val().trim();
  //         return dados;
  //     }, {});

  //     // Exibe o loading antes da requisição
  //     Swal.fire({
  //         title: "Aguarde...",
  //         text: "Estamos processando seu cadastro.",
  //         allowOutsideClick: false,
  //         didOpen: () => {
  //             Swal.showLoading();
  //         }
  //     });

  //     // Envia os dados via AJAX
  //     $.ajax({
  //         url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/site-iveco",
  //         type: "POST",
  //         contentType: "application/json",
  //         data: JSON.stringify(formData),
  //         success: function (response) {
  //             Swal.fire({
  //                 title: "Sucesso!",
  //                 text: response.message || "Cadastro realizado com sucesso!",
  //                 icon: "success",
  //                 confirmButtonText: "OK"
  //             }).then((result) => {
  //                 if (result.isConfirmed) {
  //                     campos.forEach(campo => $(`#${campo.id}`).val(""));

  //                     let linkWpp = `https://wa.me/5541992580720`;
  //                     window.location.href = linkWpp;
  //                 }
  //             });
  //         },
  //         error: function () {
  //             Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
  //         }
  //     });
  // });
  $("#floating_cep").on("blur", function () {
    var cep = $(this).val().replace(/\D/g, "");
    if (cep.length === 8) {
      $.getJSON("https://viacep.com.br/ws/".concat(cep, "/json/"), function (data) {
        if (!("erro" in data)) {
          $("#floating_city").val(data.localidade);
          $("#floating_bairro").val(data.bairro);
        }
      }).fail(function () {
        alert("Erro ao buscar o CEP.");
      });
    } else {
      alert("CEP inválido.");
    }
  });
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/editor-style.css":
/*!****************************************!*\
  !*** ./resources/css/editor-style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/editor-style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailpress"] = self["webpackChunktailpress"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/editor-style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/editor-style"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/editor-style"], () => (__webpack_require__("./resources/css/editor-style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;