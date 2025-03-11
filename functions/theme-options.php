<?php 

function get_theme_image($image_name)
{
  $image_url = home_url() . '/wp-content/themes/iveco-theme/resources/images/' . $image_name;

  return $image_url;
}

function criar_cpt_modelos() {
  $args = array(
      'labels' => array(
          'name'               => 'Modelos',
          'singular_name'      => 'Modelo',
          'add_new'            => 'Adicionar Novo',
          'add_new_item'       => 'Adicionar Novo Modelo',
          'edit_item'          => 'Editar Modelo',
          'new_item'           => 'Novo Modelo',
          'view_item'          => 'Ver Modelo',
          'search_items'       => 'Procurar Modelos',
          'not_found'          => 'Nenhum modelo encontrado',
          'not_found_in_trash' => 'Nenhum modelo encontrado na lixeira',
          'all_items'          => 'Todos os Modelos',
          'menu_name'          => 'Modelos',
          'name_admin_bar'     => 'Modelo',
      ),
      'public'             => true,
      'has_archive'        => true,
      'rewrite'            => array('slug' => 'modelos'),
      'show_in_rest'       => true, // Se você quiser usar o editor do Gutenberg
      'supports'           => array('title', 'editor', 'thumbnail', 'custom-fields'), // Personalize conforme necessário
      'menu_icon'          => 'dashicons-images-alt2', // Ícone do menu
      'show_in_menu'       => true,
      'show_in_admin_bar'  => true,
      'hierarchical'       => false, // Não será hierárquico, como páginas
      'exclude_from_search'=> false,
  );

  register_post_type('modelos', $args);
}
add_action('init', 'criar_cpt_modelos');

function page_detected(){
  if(is_front_page()){
    $page = 'home';
  }else if(is_page('servicos')){
    $page = 'servicos';
  }else if(is_page('consorcio')){
    $page = 'consorcio';
  }else if(is_page('pecas')){
    $page = 'pecas';
  }else{
    $page = '';
  }

  return $page;
}