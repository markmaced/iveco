<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class('bg-white text-gray-900 antialiased'); ?>>

	<?php do_action('tailpress_site_before'); ?>

	<div id="page" class="min-h-screen flex flex-col">

		<?php do_action('tailpress_header'); ?>

		<header class="bg-blue-iveco py-5 md:px-0 px-5">
			<div class="max-w-6xl mx-auto w-full flex items-center">
				<div class="md:w-1/6 w-1/2 flex items-center">
					<a href="/">
						<img src="<?php echo get_theme_image('logo-iveco.png') ?>" class="w-full">
					</a>
				</div>
				<div class="md:w-4/6 w-1/2 flex justify-end items-center">
					<ul class="p-0 md:flex gap-5 hidden">
						<li class="font-lexend text-white text-lg before:transition-all before:duration-500 relative before:w-0 before:h-1 before:bg-white before:content-[''] before:absolute before:-bottom-1 hover:before:w-1/2 before:z-40 after:w-0 after:h-1 after:duration-300 after:transition-all after:absolute after:-bottom-1 after:content-[''] after:bg-primary hover:after:w-full after:left-0 hover:after:duration-1000 z-50">
							<a href="/" style="text-decoration: none;">Home</a>
						</li>
						<li class="font-lexend text-white text-lg before:transition-all before:duration-500 relative before:w-0 before:h-1 before:bg-white before:content-[''] before:absolute before:-bottom-1 hover:before:w-1/2 before:z-40 after:w-0 after:h-1 after:duration-300 after:transition-all after:absolute after:-bottom-1 after:content-[''] after:bg-primary hover:after:w-full after:left-0 hover:after:duration-1000 z-50">
							<a href="/servicos" style="text-decoration: none;">Serviços</a>
						</li>
						<li class="font-lexend text-white text-lg before:transition-all before:duration-500 relative before:w-0 before:h-1 before:bg-white before:content-[''] before:absolute before:-bottom-1 hover:before:w-1/2 before:z-40 after:w-0 after:h-1 after:duration-300 after:transition-all after:absolute after:-bottom-1 after:content-[''] after:bg-primary hover:after:w-full after:left-0 hover:after:duration-1000 z-50">
							<a href="#veiculos" style="text-decoration: none;">Veículos</a>
						</li>
						<li class="font-lexend text-white text-lg before:transition-all before:duration-500 relative before:w-0 before:h-1 before:bg-white before:content-[''] before:absolute before:-bottom-1 hover:before:w-1/2 before:z-40 after:w-0 after:h-1 after:duration-300 after:transition-all after:absolute after:-bottom-1 after:content-[''] after:bg-primary hover:after:w-full after:left-0 hover:after:duration-1000 z-50">
							<a href="/consorcio" style="text-decoration: none;">Consórcio</a>
						</li>
						<li class="font-lexend text-white text-lg before:transition-all before:duration-500 relative before:w-0 before:h-1 before:bg-white before:content-[''] before:absolute before:-bottom-1 hover:before:w-1/2 before:z-40 after:w-0 after:h-1 after:duration-300 after:transition-all after:absolute after:-bottom-1 after:content-[''] after:bg-primary hover:after:w-full after:left-0 hover:after:duration-1000 z-50">
							<a href="/pecas" style="text-decoration: none;">Peças</a>
						</li>
						<li class="font-lexend hidden text-white text-lg before:transition-all before:duration-500 relative before:w-0 before:h-1 before:bg-white before:content-[''] before:absolute before:-bottom-1 hover:before:w-1/2 before:z-40 after:w-0 after:h-1 after:duration-300 after:transition-all after:absolute after:-bottom-1 after:content-[''] after:bg-primary hover:after:w-full after:left-0 hover:after:duration-1000 z-50">
							<a href="/loja" style="text-decoration: none;">Loja</a>
						</li>
						<li class="font-lexend text-white text-lg before:transition-all before:duration-500 relative before:w-0 before:h-1 before:bg-white before:content-[''] before:absolute before:-bottom-1 hover:before:w-1/2 before:z-40 after:w-0 after:h-1 after:duration-300 after:transition-all after:absolute after:-bottom-1 after:content-[''] after:bg-primary hover:after:w-full after:left-0 hover:after:duration-1000 z-50">
							<a href="/contato" style="text-decoration: none;">Contato</a>
						</li>
					</ul>
					<div class="md:hidden flex flex-col items-end justify-center w-1/2 open-menu">
						<div class="h-0.5 w-5 bg-white mb-1"></div>
						<div class="h-0.5 w-5 bg-white mb-1"></div>
						<div class="h-0.5 w-5 bg-white mb-1"></div>
					</div>
				</div>
				<div class="w-1/6 md:flex gap-3 items-center justify-end hidden">
					<a href="https://www.facebook.com/FlorencaCaminhoesIveco" target="_blank">
						<img src="<?php echo get_theme_image('facebook.png') ?>" class="w-10">
					</a>
					<a href="https://www.instagram.com/florencacaminhoes/" target="_blank">
						<img src="<?php echo get_theme_image('insta.png') ?>" class="w-10">
					</a>
				</div>
			</div>
			<div class="md:hidden flex flex-col fixed w-full bg-blue-iveco h-screen top-0 -right-100 transition-all duration-500 z-50 items-start px-5"
				id="mobileMenu">
				<button id="closeMenu" class="absolute top-5 right-5 text-white hover:text-white">&times;</button>
				<div class="flex justify-center pt-20 pb-10 w-full flex-col items-center border-b px-5 border-b-white">
					<img src="<?php echo get_theme_image('logo-rodape.png') ?>"
						class="w-64 mx-auto object-contain mb-10">
					<ul class="flex p-0 gap-5 flex-col text-center">
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
				<div class="w-full flex gap-3 items-center justify-center pt-10">
					<a href="https://www.facebook.com/FlorencaCaminhoesIveco" target="_blank">
						<img src="<?php echo get_theme_image( 'facebook.png') ?>" class="w-10">
					</a>
					<a href="https://www.instagram.com/florencacaminhoes/" target="_blank">
						<img src="<?php echo get_theme_image('insta.png') ?>" class="w-10">
					</a>
				</div>
			</div>
		</header>

		<div id="content">

			<?php do_action('tailpress_content_start'); ?>

			<main>