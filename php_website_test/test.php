<?php 
include('Framework.php');
$menu_items = ['about' => 'About', 'contact' => 'Contact'];
$framework = new Framework();
$framework->navbar("small test", $menu_items);

?>