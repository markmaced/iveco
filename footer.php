<?php # echo do_shortcode('[pneus]') ?>

<?php echo do_shortcode('[insta]') ?>

</main>

<?php do_action('tailpress_content_end'); ?>

</div>

<?php do_action('tailpress_content_after'); ?>

<footer id="colophon" class="site-footer bg-blue-iveco pt-14 pb-10 px-5 md:px-0" role="contentinfo">
	<?php do_action('tailpress_footer'); ?>
	<div class="max-w-6xl mx-auto md:border-b border-b-white">
		<div class="w-full flex flex-col items-center justify-center md:mb-20 mb-10 md:border-b-0 border-b border-b-white md:pb-0 pb-10">
			<img src="<?php echo get_theme_image('logo-footer.png') ?>" class="md:mb-10 mb-20 w-96">
			<h2 class="text-white font-lexend font-medium md:text-3xl text-xl text-center md:text-left tracking-5 mb-5 uppercase md:normal-case">Seu IVECO sempre pronto para rodar!
			</h2>
			<p class="text-white font-inter font-normal md:text-2xl text-base">Precisa de suporte ou revisão? A Florença está sempre
				ao seu lado. Faça uma visita!</p>
		</div>
		<div class="w-full flex md:flex-row flex-col-reverse md:justify-between mb-6">
			<div class="md:w-1/3 w-full md:block flex items-center flex-col">
				<h2 class="text-white font-lexend font-medium text-2xl tracking-5 md:mb-5 mb-2 uppercase">Nosso endereço</h2>
				<p class="text-white font-light text-base font-lexend md:mb-0 mb-3">São José dos Pinhais</p>
				<p class="text-white font-light text-base md:text-left text-center font-lexend md:mb-10 mb-3">Rodovia Contorno Leste BR 116 (km 104),
					17317</p>
				<p class="text-white font-light text-base font-lexend">Telefone: (41) 3311-6700</p>

			</div>
			<div class="md:w-2/3 w-full mb-10 md:mb-0 md:border-b-0 border-b border-b-white md:pb-0 pb-10">
				<ul class="p-0 flex md:flex-nowrap flex-wrap md:flex-row md:text-left text-center justify-center gap-5 md:justify-end">
					<li class="font-lexend text-white uppercase text-base font-medium tracking-5">
						<a href="/" style="text-decoration: none;">Home</a>
					</li>
					<li class="font-lexend text-white uppercase text-base font-medium tracking-5">
						<a href="/servicos" style="text-decoration: none;">Serviços</a>
					</li>
					<li class="font-lexend text-white uppercase text-base font-medium tracking-5">
						<a href="#veiculos" style="text-decoration: none;">Veículos</a>
					</li>
					<li class="font-lexend text-white uppercase text-base font-medium tracking-5">
						<a href="/consorcio" style="text-decoration: none;">Consórcio</a>
					</li>
					<li class="font-lexend text-white uppercase text-base font-medium tracking-5">
						<a href="/pecas" style="text-decoration: none;">Peças</a>
					</li>
					<li class="font-lexend hidden text-white uppercase text-base font-medium tracking-5">
						<a href="/loja" style="text-decoration: none;">Loja</a>
					</li>
					<li class="font-lexend text-white uppercase text-base font-medium tracking-5">
						<a href="/contato" style="text-decoration: none;">Contato</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="w-full flex md:gap-3 gap-5 md:justify-end justify-center md:border-b-0 border-b border-b-white md:pb-0 pb-5">
			<a href="https://www.facebook.com/FlorencaCaminhoesIveco" target="_blank">
				<img src="<?php echo get_theme_image(image_name: 'facebook.png') ?>" class="w-10">
			</a>
			<a href="https://www.instagram.com/florencacaminhoes/" target="_blank">
				<img src="<?php echo get_theme_image('insta.png') ?>" class="w-10">
			</a>
		</div>
	</div>
	<div class="w-full flex md:flex-row flex-col md:text-left text-center justify-center gap-5 pt-10">
		<p class="text-white font-light text-base font-lexend">© Copyright 2025</p>
		<p class="text-white font-light text-base font-lexend">IVECO Florença. Uma marca do Grupo Florença.</p>
	</div>
</footer>

</div>

<?php wp_footer(); ?>

</body>

</html>