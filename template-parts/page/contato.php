<section
    class="md:h-[30.875rem] 3xl:h-[38rem] h-[335px] w-full bg-cover bg-no-repeat flex md:items-center items-end pb-10 md:pb-0 md:px-0 px-5 relative md:bg-center bg-right"
    style="background-image: url('<?php echo get_theme_image('hero-contato.jpg') ?>')">
    <div class="absolute inset-0 overlay-slider z-0"></div>
    <div class="max-w-6xl mx-auto w-full z-50">
        <div class="md:w-1/2 w-full">
            <h1
                class="font-medium uppercase tracking-5 font-lexend md:text-5xl text-2xl md:leading-[58.75px] transition-all duration-700 ease-in-out text-white">
                Estamos aqui para atender você!
            </h1>
            <h2
                class="mt-4 text-custom-white font-inter font-normal md:text-lg text-base slider-subtitle transition-all duration-700 ease-in-out">
                Se mantenha sempre pronto com peças feitas para durar.</h2>
        </div>
    </div>
</section>
<section class="px-5 md:px-0 w-full py-16">
    <div class="max-w-6xl mx-auto w-full">
        <h2 class="text-black font-inter md:text-xl text-base font-medium md:leading-[100%] leading-[24px] text-center">Na IVECO Florença, valorizamos cada cliente
            e entendemos que a comunicação ágil faz toda a diferença. Nossa equipe está sempre pronta para oferecer o
            suporte que você precisa, onde quer que esteja.</h2>
    </div>
</section>
<section class="w-full pb-16 md:px-0 px-5">
    <div class="max-w-6xl mx-auto flex">
        <div class="w-1/2 hidden md:block">
            <img src="<?php echo get_theme_image('contato.jpg') ?>" class="h-full w-full object-cover md:h-[708px]">
        </div>
        <div class="md:w-1/2 w-full md:pl-10">
            <form action="">
                <div class="grid grid-cols-1 gap-x-8">
                    <div class="relative mb-6">
                        <input type="text" id="userName"
                            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none "
                            placeholder="Nome" required>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-x-8">
                    <div class="relative mb-6">
                        <input type="text" id="userEmail"
                            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none "
                            placeholder="Email" required>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-x-8">
                    <div class="relative mb-6">
                        <input type="text" id="userTel"
                            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none "
                            placeholder="Telefone" required>
                    </div>
                    <div class="relative mb-6">
                        <input type="text" id="userCep"
                            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none "
                            placeholder="CEP" required>
                    </div>
                </div>
                <div class="relative mb-6">
                    <input type="text" id="userCity"
                        class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none "
                        placeholder="Cidade" required>
                </div>
                <div class="relative mb-6">
                    <input type="text" id="UserBairro"
                        class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none "
                        placeholder="Bairro" required>
                </div>
                <div class="relative mb-6">
                    <select id="UserModel"
                        class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none "
                        required>
                        <option class="text-black" value="" disabled selected hidden>Selecione um modelo</option>
							<option class="text-black" value="S-Way">S-Way</option>
							<option class="text-black" value="Daily Hi-matic">Daily Hi-matic</option>
							<option class="text-black" value="Daily Chassi">Daily Chassi</option>
							<option class="text-black" value="Daily Furgão">Daily Furgão</option>
							<option class="text-black" value="Tector Médio">Tector Médio</option>
							<option class="text-black" value="Tector Semipesado">Tector Semipesado</option>
							<option class="text-black" value="Iveco Bus">Iveco Bus</option>
                    </select>
                </div>
                <div class="relative mb-6">
                    <textarea type="text" id="UserMessage"
                        class="block w-full h-40 px-5 py-2.5 bg-white leading-7 resize-none text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none "
                        placeholder="Mensagem" required></textarea>
                </div>
                <div class="flex items-center justify-center">
                    <button type="button"
                        class="w-full h-12 bg-black cursor-pointer uppercase transition-all duration-700 shadow-xs text-white text-base font-semibold leading-6 registerLead">Enviar
                        Mensagem</button>
                </div>
            </form>
        </div>
    </div>
    <section class="w-full md:py-20 pt-10 pb-0">
        <div class="w-full max-w-6xl mx-auto">
            <div class="flex md:flex-row flex-col w-full">
                <div class="md:w-1/2 w-full md:pr-5 mb-10">
                    <h2 class="text-4xl font-normal text-blue-iveco tracking-5 leading-[100%] uppercase font-lexend md:text-left text-center">Entre em
                        contato pelos nossos canais.</h2>
                </div>
                <div class="w-full flex md:flex-row flex-col gap-5 md:pl-10 md:-mb-10 mb-10 z-10">
                    <div class="md:w-1/2 w-full flex">
                        <div class="w-full flex bg-blue-iveco rounded-xl pt-8 md:min-h-56 min-h-36 flex-col items-center">
                            <img src="<?php echo get_theme_image('mail-alt.png') ?>" class="mb-5">
                            <h2 class="uppercase text-white font-inter text-3xl tracking-5 text-center mb-5">E-mail
                            </h2>
                            <p class="uppercase text-white font-inter text-base tracking-5 text-center mb-10">
                                contato@florenca.com.br</p>
                        </div>
                    </div>
                    <div class="md:w-1/2 w-full flex">
                        <div class="w-full flex bg-blue-iveco rounded-xl pt-8 md:min-h-56 min-h-36 flex-col items-center">
                            <img src="<?php echo get_theme_image('phone-call.png') ?>" class="mb-5">
                            <h2 class="uppercase text-white font-inter text-3xl tracking-5 text-center mb-5">Telefone
                            </h2>
                            <p class="uppercase text-white font-inter text-base tracking-5 text-center mb-10">
                            (41) 3311-6700</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.9961354870175!2d-49.196754425696305!3d-25.571795338515134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf762bfe67c21%3A0x7fcb2a1539ddf7e0!2sIVECO%20-%20Floren%C3%A7a%20Caminh%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1741285071708!5m2!1spt-BR!2sbr"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </section>

</section>