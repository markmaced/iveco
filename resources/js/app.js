jQuery(document).ready(function ($) {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '">' + '0' + (index + 1) + "</div>";
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 5000,
        },
        effect: "fade",
        on: {
            init: function () {
                let activeSlide = $(".swiper-slide-active");
                animateSlideElements(activeSlide);
            },
            slideChangeTransitionStart: function () {
                $(".swiper-slide .slider-title, .swiper-slide .slider-subtitle, .swiper-slide .slider-cta")
                    .removeClass("opacity-100 translate-x-0")
                    .addClass("opacity-0 translate-x-10");
            },
            slideChangeTransitionEnd: function () {
                let activeSlide = $(".swiper-slide-active");
                animateSlideElements(activeSlide);
            },
        },
    });

    function animateSlideElements(slide) {
        if (!slide.length) return;

        setTimeout(() => {
            slide.find("h1").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
        }, 200);

        setTimeout(() => {
            slide.find("h2").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
        }, 400);

        setTimeout(() => {
            slide.find("a").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
        }, 600);
    }
    setTimeout(() => {
        let activeSlide = $(".swiper-slide-active");
        animateSlideElements(activeSlide);
    }, 500);

    function startCounter(counter) {
        let $counter = $(counter);
        let target = parseInt($counter.attr("data-target"));
        let count = 0;
        let increment = Math.ceil(target / 100);

        let interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                $counter.text(target.toLocaleString('pt-BR') + '+');
                clearInterval(interval);
            } else {
                $counter.text(count.toLocaleString('pt-BR') + '+');
            }
        }, 25);
    }

    function checkVisibility() {
        $(".counter").each(function () {
            let $this = $(this);
            let offsetTop = $this.offset().top;
            let windowHeight = $(window).height();
            let scrollTop = $(window).scrollTop();

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
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 3, // Desktop e tablets
            },
            0: {
                slidesPerView: 1, // Mobile
            }
        },
        on: {
            init: function () {
                updateSlideContent();
            },
            slideChangeTransitionEnd: function () {
                updateSlideContent();
            }
        }
    });

    var swiper = new Swiper(".swiper-pages", {
        slidesPerView: 4,
        slidesPerGroup: 4, // Move 3 slides por vez
        loop: true,
        centeredSlides: false,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4, // Também move 3 por vez no desktop
            },
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1, // No mobile, move 1 slide por vez
            }
        },
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
            $("#model-link").attr("href", link).fadeIn(200);
            // $("#model-link").fadeIn(200);
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
        $('#mobileMenu').removeClass('-right-100').addClass('right-0')
    })
    $('#closeMenu').on('click', function () {
        $('#mobileMenu').removeClass('right-0').addClass('-right-100')
    })
    $('.menu-item a').on('click', function (e) {
        $('#mobileMenu').removeClass('right-0').addClass('-right-100')
    })

    $(document).on('click', '.openModal', function (e) {
        e.preventDefault()
        if (wpurl.isPage != 'servicos' && wpurl.isPage != '') {
            $('#floating_service').val(wpurl.isPage)
        }
        $('#hasService').val(true)
        $('.floating_service').removeClass('hidden')
        $('.floating_model').addClass('hidden')
        $("#customModal").fadeIn(300).css("display", "flex");
        $('#wppLead').css('display', 'none')
        $("#siteIveco").css("display", "block");
        $('#formName').val('Site Iveco');
    });

    $(document).on('click', '#openWppLead', function () {
        $("#customModal").fadeIn(300).css("display", "flex");
        $('#siteIveco').css('display', 'none')
        $("#wppLead").css("display", "block");
        $('#formName').val('Whatsapp Lead');
    });

    $(document).on('click', '.model-link', function (e) {
        e.preventDefault()
        var model = selectedModel(wpurl.isPage)
        console.log(model)
        $('#floating_model').val(model)
        $('#hasService').val(false)
        $('.floating_model').removeClass('hidden')
        $('.floating_service').addClass('hidden')
        $("#customModal").fadeIn(300).css("display", "flex");
        $('#wppLead').css('display', 'none')
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

        let campos = [
            { id: "floating_name", name: "nome", mensagem: "O campo Nome é obrigatório." },
            { id: "floating_cep", name: "cep", mensagem: "O campo CEP é obrigatório." },
            { id: "floating_email", name: "email", mensagem: "O campo Email é obrigatório." },
            { id: "floating_telefone", name: "telefone", mensagem: "O campo Telefone é obrigatório." },
            { id: "floating_bairro", name: "bairro", mensagem: "O campo Bairro é obrigatório." },
            { id: "floating_city", name: "cidade", mensagem: "O campo Cidade é obrigatório." },
            { id: "floating_model", name: "modelo", mensagem: "O campo Modelo é obrigatório.", obrigatorio: !hasService },
            { id: "floating_service", name: "servico", mensagem: "O campo Serviço é obrigatório.", obrigatorio: hasService },
            { id: "userMessage", name: "mensagem", mensagem: "" }, // Campo opcional
            { id: "formName", name: "form_name", mensagem: "O campo Hidden é obrigatório." }
        ];

        // Verifica se algum campo obrigatório está vazio
        for (let campo of campos) {
            let elemento = document.getElementById(campo.id);
            if (campo.obrigatorio !== false && campo.id !== "userMessage" && (!elemento || !elemento.value.trim())) {
                Swal.close();
                return Swal.fire("Erro!", campo.mensagem, "error");
            }
        }

        Swal.fire({
            title: "Aguarde...",
            text: "Estamos processando seu cadastro.",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        // Monta os dados do formulário excluindo os campos desnecessários
        let formData = campos.reduce((dados, campo) => {
            let elemento = document.getElementById(campo.id);
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
            $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
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
    let $imgs = $('.accordion-img');

    function resetWidths() {
        if (window.innerWidth <= 768) {
            // Mobile: 70%, 15%, 15%
            $imgs.eq(0).css('width', '70%');
            $imgs.eq(1).css('width', '15%');
            $imgs.eq(2).css('width', '15%');
        } else {
            // Desktop: 80%, 10%, 10% (mantém como antes)
            $imgs.eq(0).css('width', '80%');
            $imgs.eq(1).css('width', '10%');
            $imgs.eq(2).css('width', '10%');
        }
    }

    // Executa ao carregar a página
    resetWidths();

    // Atualiza ao redimensionar a tela
    $(window).resize(resetWidths);

    // Adiciona efeito ao clique no mobile
    $imgs.on('click', function () {
        if (window.innerWidth <= 768) {
            $imgs.css('width', '15%'); // Reduz todos para 15%
            $(this).css('width', '70%'); // Expande apenas o clicado
        } else {
            $imgs.css('width', '10%');
            $(this).css('width', '80%');
            $('.accordion-desc').removeClass('justify-end').addClass('justify-center')
            $(this).children('.accordion-desc').removeClass('justify-center').addClass('justify-end');
        }
    });

    // $imgs.on('mouseenter', function () {
    //     $imgs.css('width', '10%'); // Reduz tudo para 10%
    //     $(this).css('width', '80%'); // Aumenta só o hover

    //     $(this).find('.accordion-desc').css('right', '20px'); // Ajusta o texto na ativa
    // });

    // $('.flex').on('mouseleave', function () {
    //     resetWidths(); // Retorna ao estado inicial
    // });

    function initSwipers() {
        var swiperThumbs = new Swiper(".mySwiperThumb", {
            spaceBetween: 10,
            direction: 'vertical', // Padrão: vertical
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    slidesPerView: 3,
                    direction: 'horizontal' // No mobile (<= 767px), muda para horizontal
                },
                768: {
                    slidesPerView: 3,
                    direction: 'vertical' // Em telas maiores, mantém vertical
                }
            }
        });

        var swiperMain = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiperThumbs,
            },
        });
    }

    setTimeout(() => {
        initSwipers();
    }, 500);

    function selectedModel(model) {
        var selected = ''
        switch (model) {
            case 's-way':
                selected = 'S-Way'
                break;
            case 'daily-hi-matic':
                selected = 'Daily Hi-matic'
                break;
            case 'daily-chassi':
                selected = 'Daily Chassi'
                break;
            case 'daily-furgao':
                selected = 'Daily Furgão'
                break;
            case 'tector-medio':
                selected = 'Tector Médio'
                break;
            case 'tector-semipesado':
                selected = 'Tector Semipesado'
                break;
            case 'iveco-bus':
                selected = 'Iveco Bus'
                break;
            default:
                selected = ''
                break;
        }

        return selected
    }
});  