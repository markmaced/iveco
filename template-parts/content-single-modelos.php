<section
    class="md:h-screen h-[335px] w-full bg-cover bg-no-repeat flex md:items-center items-end pb-10 md:pb-0 md:px-0 px-5 relative"
    style="background-image: url('<?php echo get_field('banner_principal') ?>')">
    <div class="absolute inset-0 overlay-slider z-0"></div>
    <div class="max-w-6xl mx-auto w-full z-50">
        <div class="md:w-[65%] w-full">
            <h1
                class="font-medium uppercase tracking-5 font-lexend md:text-5xl text-2xl md:leading-[58.75px] transition-all duration-700 ease-in-out text-white">
                <?php echo get_field('titulo_banner_principal') ?>
            </h1>
            <?php if (!empty(get_field('descricao_banner_principal'))): ?>
                <h2
                    class="mt-4 text-custom-white font-inter font-normal md:text-lg text-base slider-subtitle transition-all duration-700 ease-in-out mb-5">
                    <?php echo get_field('descricao_banner_principal') ?>
                </h2>
            <?php endif ?>
        </div>
    </div>
</section>
<section class="w-full">
    <div class="w-full flex md:gap-10">
        <div class="md:w-1/2 w-full md:block hidden">
            <img src="<?php echo get_field('imagem_sec_2') ?>" class="w-full md:h-[700px] object-cover">
        </div>
        <div class="md:w-1/2 w-full flex flex-col md:px-20 px-5 justify-center items-center py-20 md:py-0">
            <h2 class="font-lexend uppercase font-medium tracking-5 leading-[100%] text-blue-iveco text-4xl mb-3">
                Destaques</h2>
            <div class="h-0.5 md:w-full w-60 bg-blue-iveco md:mb-20 mb-10"></div>
            <div class="flex justify-between w-full mb-10">
                <div class="w-1/2 flex-col items-center">
                    <h3
                        class="text-blue-iveco md:text-2xl text-lg uppercase font-medium tracking-5 leading-[100%] font-lexend text-center mb-2">
                        <?php echo get_field('destaque_1') ?>
                    </h3>
                    <p
                        class="md:text-base text-sm font-inter tracking-5 font-medium leading-[100%] text-center text-blue-iveco">
                        Potência e
                        torque</p>
                </div>
                <div class="w-1/2 flex flex-col items-center">
                    <h3
                        class="text-blue-iveco md:text-2xl text-lg uppercase font-medium tracking-5 leading-[100%] font-lexend text-center mb-2">
                        <?php echo get_field('destaque_2') ?>
                    </h3>
                    <p
                        class="md:text-base text-sm font-inter tracking-5 font-medium leading-[100%] text-center text-blue-iveco">
                        Consumo</p>
                </div>
            </div>
            <div class="flex justify-between w-full">
                <div class="w-1/2 flex flex-col items-center">
                    <h3
                        class="text-blue-iveco md:text-2xl text-lg uppercase font-medium tracking-5 leading-[100%] font-lexend text-center mb-2">
                        <?php echo get_field('destaque_3') ?>
                    </h3>
                    <p
                        class="md:text-base text-sm font-inter tracking-5 font-medium leading-[100%] text-center text-blue-iveco">
                        Capacidade do tanque
                    </p>
                </div>
                <div class="w-1/2 flex flex-col items-center">
                    <h3
                        class="text-blue-iveco md:text-2xl text-lg uppercase font-medium tracking-5 leading-[100%] font-lexend text-center mb-2">
                        <?php echo get_field('destaque_4') ?>
                    </h3>
                    <p
                        class="md:text-base text-sm font-inter tracking-5 font-medium leading-[100%] text-center text-blue-iveco">
                        Trasmissão</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w-full">
    <div class="flex w-full md:h-[900px] h-[400px] overflow-hidden gap-3">
        <div class="accordion-img cursor-pointer md:w-[80%] w-[70%] relative duration-1000 transition-all">
            <img src="<?php echo get_field('sanfona_1') ?>" class="w-full object-cover h-full object-left">
            <div
                class="w-full flex justify-end items-end h-full absolute z-20 top-0 md:left-0 max-w-full accordion-desc duration-500 transition-all">
                <p
                    class="text-[#f2f2f2] rotate-90 uppercase text-5xl tracking-[10%] leading-[100%] duration-1000 transition-all mb-[90px]">
                    Design</p>
            </div>
        </div>
        <div class="accordion-img cursor-pointer md:w-[10%] w-[15%] relative duration-1000 transition-all">
            <img src="<?php echo get_field('sanfona_2') ?>" class="w-full object-cover h-full object-left">
            <div
                class="w-full flex justify-center items-end h-full absolute z-20 top-0 md:left-0 max-w-full accordion-desc duration-500 transition-all">
                <p
                    class="text-[#f2f2f2] rotate-90 uppercase text-5xl tracking-[10%] leading-[100%] duration-1000 transition-all mb-[110px]">
                    Interior</p>
            </div>
        </div>
        <div class="accordion-img cursor-pointer md:w-[10%] w-[15%] relative duration-1000 transition-all">
            <img src="<?php echo get_field('sanfona_3') ?>" class="w-full object-cover h-full object-left">
            <div
                class="w-full flex justify-center items-end h-full absolute z-20 top-0 md:left-0 max-w-full accordion-desc duration-500 transition-all">
                <p
                    class="text-[#f2f2f2] rotate-90 uppercase text-5xl tracking-[10%] leading-[100%] duration-1000 transition-all mb-[175px]">
                    Performance</p>
            </div>
        </div>
    </div>
    </div>
</section>
<section class="w-full pt-20 md:px-0 px-5">
    <div class="max-w-6xl mx-auto">
        <h2
            class="font-lexend uppercase font-medium tracking-5 leading-[100%] text-blue-iveco md:text-4xl text-xl mb-5 md:text-right text-center">
            Conheça melhor o <?php echo the_title() ?></h2>
        <?php echo get_field('descricao') ?>
    </div>
</section>
<section class="w-full">
    <?php
    $galeria = get_field('galeria_de_modelo'); ?>
    <div class="flex md:flex-row flex-col-reverse gap-3">
        <div class="md:w-1/6 w-full relative">
            <div thumbsSlider="" class="mySwiperThumb mb-5">
                <div class="swiper-wrapper">
                    <?php foreach ($galeria as $item): ?>
                        <div class="swiper-slide">
                            <img src="<?php echo $item['imagem_da_galeria'] ?>" class="object-cover w-full" />
                        </div>
                    <?php endforeach ?>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        <div class="md:w-5/6 w-full">
            <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="mySwiper2 w-full">
                <div class="swiper-wrapper">
                    <?php foreach ($galeria as $item): ?>
                        <div class="swiper-slide">
                            <img src="<?php echo $item['imagem_da_galeria'] ?>" class="w-full object-cover" />
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w-full md:py-28 py-12 md:px-0 px-5">
    <div class="max-w-6xl mx-auto">
        <h2
            class="font-lexend uppercase font-medium tracking-5 leading-[100%] text-blue-iveco md:text-4xl text-2xl md:text-left text-center mb-10">
            Ficha técnica</h2>
        <div class="w-full flex md:flex-row flex-col md:justify-between">
            <div class="md:w-1/2 w-full">
                <div class="w-full mb-5 ">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Motor</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('motor') ?>
                    </p>
                </div>
                <div class="w-full mb-5 ">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Alimentação</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('alimentacao') ?>
                    </p>
                </div>
                <div class="w-full mb-5 ">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Cilindrada</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('cilindrada') ?>
                    </p>
                </div>
                <div class="w-full mb-5 ">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Potência máxima</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('potencia_maxima') ?>
                    </p>
                </div>
                <div class="w-full mb-5 ">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Torque máxima</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('torque_maxima') ?>
                    </p>
                </div>
                <div class="w-full mb-5 ">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Capacidade de passageiros</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('capacidade_de_passageiros') ?>
                    </p>
                </div>
            </div>
            <div class="md:w-1/2 w-full">
                <div class="w-full mb-5 md:pr-32">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Suspensão dianteira</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('suspensao_dianteira') ?>
                    </p>
                </div>
                <div class="w-full mb-5 md:pr-32">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Suspensão Traseira</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('suspensao_traseira') ?>
                    </p>
                </div>
                <div class="w-full mb-5 md:pr-32">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Pneus</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('pneus') ?>
                    </p>
                </div>
                <div class="w-full mb-5 md:pr-32">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Tanque de combustível</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('tanque_de_combustivel') ?>
                    </p>
                </div>
                <div class="w-full mb-5 md:pr-32">
                    <h2 class="font-lexend font-medium tracking-5 leading-[100%] text-blue-iveco text-2xl mb-1">
                        Peso Bruto Total (PBT)</h2>
                    <p class="text-base font-inter tracking-5 font-medium leading-[100%] text-blue-iveco">
                        <?php echo get_field('peso_bruto_total_pbt') ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w-full bg-blue-iveco py-20 flex items-center">
    <div class="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h2
            class="font-lexend uppercase font-medium tracking-5 leading-[100%] text-white md:text-5xl text-3xl mb-12 text-center">
            O caminhão que transforma sua operação está aqui.</h2>
        <p class="font-inter font-normal text-lg mb-12 text-center text-white">Agende uma visita à IVECO Florença e
            conheça de perto o S-Way.
        </p>
        <a href="#"
            class="bg-white text-blue-iveco py-4 w-80 text-left px-5 tracking-5 font-lexend uppercase flex justify-between items-center model-link">
            Solicitar cotação
            <span><img src="<?php echo get_theme_image('arrow-right-blue.png') ?>" class="w-4"></span>
        </a>
    </div>
</section>
<?php echo do_shortcode('[modelos]') ?>