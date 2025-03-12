<?php function insta()
{
    ?>
    <section class="w-full py-10 px-5 md:px-0">
        <div class="max-w-6xl mx-auto w-full">
            <div class="w-full flex flex-col md:flex-row gap-5">
                <div class="md:w-2/3 w-full">
                    <h2
                        class="font-lexend text-blue-iveco font-medium md:text-3xl text-2xl text-center md:text-left uppercase md:mb-2 mb-4 tracking-5">
                        Nos acompanhe nas
                        redes sociais.</h2>
                    <p class="text-lg font-inter font-normal md:text-left text-center">Dicas de manutenção, novidades e
                        promoções para você continuar
                        rodando tranquilo.</p>
                </div>
                <div class="md:w-1/3 w-full flex justify-end items-start">
                    <a href="https://www.instagram.com/florencacaminhoes/"
                        class="bg-blue-iveco text-center justify-center text-white py-2 w-80 h-14 flex items-center px-5 font-lexend uppercase" target="_blank">
                        Ir para o instagram
                    </a>
                </div>
            </div>
            <div class="w-full mt-10">
                <?php echo do_shortcode('[instagram feed="590"]') ?>
            </div>
        </div>
    </section>
    <?php
}
add_shortcode('insta', 'insta');
?>