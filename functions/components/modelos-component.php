<?php function modelos()
{
    ?>

    <section class="w-full md:py-20 py-10 px-5 md:px-0" id="veiculos">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col w-full items-center">
                <h2 class="md:text-4xl text-3xl text-blue-iveco tracking-5 uppercase md:font-semibold font-medium font-lexend mb-5 md:text-left text-center">Encontre o seu
                    parceiro ideal.</h2>
                <p class="text-black text-base font-inter md:text-left text-center">Conheça a linha completa: veículos potentes, seguros e prontos
                    para a estrada.</p>
            </div>
            <div class="relative w-full">
                <?php
                $args = array(
                    'post_type' => 'modelos',
                    'posts_per_page' => -1
                );

                $models = new WP_Query($args);
                if ($models->have_posts()):
                    ?>
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <?php while ($models->have_posts()):
                                $models->the_post(); ?>
                                <?php
                                $image = get_field('imagem_carrosel_home', get_the_ID());
                                $description = get_field('descricao_carrosel_home', get_the_ID());
                                $name = get_the_title();
                                $link = get_permalink();
                                ?>
                                <div class="swiper-slide transition-all duration-500" data-title="<?php echo esc_attr($name); ?>"
                                    data-link="<?php echo esc_url($link); ?>"
                                    data-description="<?php echo esc_attr($description) ?>">
                                    <img src="<?php echo esc_url($image); ?>">
                                </div>
                            <?php endwhile;
                            wp_reset_postdata(); ?>
                        </div>
                        <!-- Arrows -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>

                    <!-- Texto e botão -->
                    <div class="mt-4 flex md:flex-row flex-col w-full items-center">
                        <div class="md:w-1/6 w-full text-center md:text-left">
                            <h2 id="model-title" class="text-xl font-bold text-blue-iveco tracking-5 uppercase font-lexend">
                                Tector Semipesado</h2>
                        </div>
                        <div class="md:w-3/6 w-full text-center md:text-left mb-5 md:mb-0">
                            <h2 id="model-description" class="text-black text-sm font-normal uppercase tracking-5 font-lexend">
                                perfeito para longas distÂncias</h2>
                        </div>
                        <div class="md:w-2/6 w-full flex justify-end items-start text-center">
                            <a id="model-link" href="#"
                                class="bg-blue-iveco text-white py-2 w-80 text-center font-lexend uppercase">
                                Faça sua próxima escolha
                            </a>
                        </div>
                    </div>

                <?php endif; ?>
            </div>
        </div>
    </section>
    <?php
} 

add_shortcode( 'modelos' , 'modelos' )
?>