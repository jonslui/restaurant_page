function load_initial_page(){
    let contentBody = document.getElementById("content");
    
    // Add image
    let img = document.createElement('img');
    img.src = "./assets/kaboompics_Bourbon Glazed Salmon.jpeg";
    img.classList.add("mainbodyimage");
    contentBody.appendChild(img);

    // add header bar/tabs
    let header_container = document.createElement('div');
    header_container.setAttribute('id', 'header_container');
    contentBody.appendChild(header_container);

    let restaurant_name = document.createElement('div');
    restaurant_name.innerHTML = 'THE CITRUS BAR';
    restaurant_name.setAttribute('id', 'restaurant_name');
    header_container.appendChild(restaurant_name);

    // function to create tabs
    function create_tab(id, text){
        let tab = document.createElement('div');
        tab.innerHTML = text;
        tab.setAttribute('id', id);
        tab.setAttribute('class', 'tab');
        header_container.appendChild(tab);
    }
    create_tab('tab1', 'MENU');
    create_tab('tab2', 'CONTACT');
    create_tab('tab3', 'EVENTS');

    // add slogan text
    let slogan = document.createElement('div');
    slogan.innerHTML = "FARM FRESH, EVERY TIME.";
    slogan.setAttribute('id', 'slogan');
    contentBody.appendChild(slogan);

    // add footer
    let footer = document.createElement('div');
    footer.innerHTML = "contact information etc";
    footer.setAttribute('id', 'footer');
    contentBody.appendChild(footer);
};


export default load_initial_page();