import load_inital_page from './initial-page-load';
import about_us_tab_event from './aboutus.js';
import menu_tab_event from './menu.js'
import reservations_tab_event from './reservations.js'


function add_nav_events(){
    let aboutus_tab = document.getElementById('tab4');
    let aboutus_title = document.getElementById('aboutus_title');
    aboutus_tab.addEventListener('click', about_us_tab_event);
    aboutus_title.addEventListener('click', about_us_tab_event);

    let menu_tab = document.getElementById('tab1');
    let menu_title = document.getElementById('menu_title');
    menu_tab.addEventListener('click', menu_tab_event);
    menu_title.addEventListener('click', menu_tab_event);
   

    let reservations_tab = document.getElementById('tab3');
    let reservations_title = document.getElementById('reservations_title');
    reservations_tab.addEventListener('click',reservations_tab_event);
    reservations_title.addEventListener('click', reservations_tab_event);
}

load_inital_page();
add_nav_events();

