<?php
class Framework
{
    /**
     * Framework - I'm putting everything here for now
     */
    public function Framework()
    {
        include('bootstrap_init.html');
    }

    /**
     * navbar - displays the navbar at the top of the page
     */
    public function navbar ($title, $menu_items)
    {
        include('navbar.php');
    }
}
?>