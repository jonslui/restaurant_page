function about_us_tab_event(){
    let aboutus_text = document.getElementById('aboutus_text');

    if (aboutus_text != null){
        aboutus_text.remove();        
    } else {        
        aboutus_text = document.createElement('div');
        aboutus_text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        aboutus_text.setAttribute('class','container_text');
        aboutus_text.setAttribute('id','aboutus_text');

        let aboutus_container = document.getElementById('aboutus_container');
        aboutus_container.appendChild(aboutus_text);
    }
};

export default about_us_tab_event;