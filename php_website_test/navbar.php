<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- todo: logo here -->

        <!-- header -->
        <div class="navbar-header">
            <!-- expand options button -->
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- title -->
            <a class="navbar-brand">
                <?php echo $title ?>
            </a>
            <!-- menu items -->
            <?php foreach ($menu_items as $view => $menu_item) : ?>
                <ul class="nav navbar-nav">
                    <li>
                        <a href="<?php echo $view; ?>">
                            <?php echo $menu_item; ?>
                        </a>
                    </li>
                </ul>
            <?php endforeach; ?>
        </div>
    </div>
</nav>