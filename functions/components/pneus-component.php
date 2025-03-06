<?php function pneus()
{
    ?>
    <section class="w-full py-20 relative overflow-hidden">
        <div class="max-w-6xl mx-auto flex gap-5 relative">
            <div class="w-2/3 pr-2">
                <div class="w-3/4 mb-8">
                    <h2
                        class="font-medium uppercase tracking-5 font-lexend text-5xl leading-[58.75px] slider-title transition-all duration-700 ease-in-out text-blue-iveco">
                        Pneus para seu IVECO a um clique de distância!
                    </h2>
                </div>
                <p class="font-inter font-normal text-base text-black mb-24 w-3/5">
                    Encontre pneus originais com durabilidade e resistência, tudo com a praticidade da nossa loja virtual
                    24h.
                </p>
            </div>
        </div>
        <div class="absolute right-0 top-0 w-[50%] h-full flex justify-end items-center">
            <img src="<?php echo get_theme_image('pneus-home.png') ?>" class="w-xl">
        </div>
    </section>
    <?php
} 
add_shortcode( 'pneus' , 'pneus' )
?>