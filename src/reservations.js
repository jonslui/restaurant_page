function reservations_tab_event(){
    let reservations_text = document.getElementById('reservations_text');
    
    if(reservations_text != null){
        reservations_text.remove();
    } else {
        reservations_text = document.createElement('div');
        reservations_text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        reservations_text.setAttribute('class', 'container_text');
        reservations_text.setAttribute('id', 'reservations_text');
        
        let reservations_container = document.getElementById('reservations_container');
        reservations_container.appendChild(reservations_text);
    };
}

export default reservations_tab_event;