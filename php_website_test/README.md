To get the XAMPP server running from the git repo, I changed two things:
1) httpd.conf:
    DocumentRoot "C:/xampp/htdocs"
            got changed to 
    DocumentRoot "C:/Users/Dominic/Desktop/projects/random_projects/php_website_test"
2) httpd-vhosts.conf:
    added: 
    <Directory "C:/Users/Dominic/Desktop/projects/random_projects/php_website_test">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride all
        Order Deny,Allow
        Allow from all
        Require all granted
    </Directory>