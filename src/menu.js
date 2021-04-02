function menu_tab_event(){
    let menu_text = document.getElementById('menu_text');

    if(menu_text != null){
        menu_text.remove();
    } else {
        menu_text = document.createElement('div');
        menu_text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        menu_text.setAttribute('class', 'container_text');
        menu_text.setAttribute('id','menu_text');
        
        let menu_container = document.getElementById('menu_container');
        menu_container.appendChild(menu_text);
    }
};

export default menu_tab_event;