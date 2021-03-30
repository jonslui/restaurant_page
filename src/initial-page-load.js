function load_initial_page(){
    let contentBody = document.getElementById("content");
    
    // Add image
    let img = document.createElement('img');
    img.src = "./assets/kaboompics_Bourbon Glazed Salmon.jpeg";
    img.classList.add("mainbodyimage");
    contentBody.appendChild(img);

    // add header container + title/tabs
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
    create_tab('tab3', 'RESERVATIONS');

    // add slogan text
    let slogan = document.createElement('div');
    slogan.innerHTML = "FARM FRESH, EVERY TIME.";
    slogan.setAttribute('id', 'slogan');
    contentBody.appendChild(slogan);

    // add aboutus container + children
    let aboutus_container = document.createElement('div');
    aboutus_container.setAttribute('class','text_container');
    contentBody.appendChild(aboutus_container);
    
    let aboutus_title = document.createElement('div');
    aboutus_title.innerHTML = "ABOUT US";
    aboutus_title.setAttribute('class','container_title');
    aboutus_container.appendChild(aboutus_title);

    let aboutus_text = document.createElement('div');
    aboutus_text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    aboutus_text.setAttribute('class','container_text');
    aboutus_container.appendChild(aboutus_text);

    // menu image
    let menuImage = document.createElement('img');
    menuImage.src = "./assets/kaboompics_Healthy Dinner.jpeg";
    menuImage.classList.add('mainbodyimage');
    contentBody.appendChild(menuImage);

    // add menu container + children
    let menu_container = document.createElement('div');
    menu_container.setAttribute('class', 'text_container');
    menu_container.setAttribute('id', 'menu_container');
    contentBody.appendChild(menu_container);

    let menu_title = document.createElement('div');
    menu_title.innerHTML = "MENU";
    menu_title.setAttribute('class','container_title');
    menu_container.appendChild(menu_title);

    let menu_text = document.createElement('div');
    menu_text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    menu_text.setAttribute('class', 'container_text');
    menu_container.appendChild(menu_text);

    // events/reservations image
    let eventsImage = document.createElement('img');
    eventsImage.src = "./assets/kaboompics_People holding glasses of white wine making a toast.jpeg";
    eventsImage.classList.add('mainbodyimage');
    contentBody.appendChild(eventsImage);

    // add events/reservations container + children
    let events_container = document.createElement('div');
    events_container.setAttribute('class','text_container');
    events_container.setAttribute('id', 'events_container');
    contentBody.appendChild(events_container);

    let reservations_title = document.createElement('div');
    reservations_title.innerHTML = "RESERVATIONS";
    reservations_title.setAttribute('class','container_title');
    events_container.appendChild(reservations_title);

    let reservations_text = document.createElement('div');
    reservations_text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    reservations_text.setAttribute('class', 'container_text');
    events_container.appendChild(reservations_text);

    let events_title = document.createElement('div');
    events_title.innerHTML = "EVENTS";
    events_title.setAttribute('class','container_title');
    events_title.setAttribute('id','events_title');
    events_container.appendChild(events_title);

    let events_text = document.createElement('div');
    events_text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    events_text.setAttribute('class', 'container_text');
    events_container.appendChild(events_text);


    // Footer image
    let footerImage = document.createElement('img');
    footerImage.src = "./assets/man-with-tattooed-hands-prepping-food.jpg";
    footerImage.classList.add("mainbodyimage");
    contentBody.appendChild(footerImage);


    // create contact us container and children
    let contact_container = document.createElement('div');
    contact_container.setAttribute('id','contact_container');
    contentBody.appendChild(contact_container);

    // function to create each contact child
    function createContactDiv(city, street, state, zipcode, phoneNumber){
        let contact = document.createElement('div');
        contact.setAttribute('class', 'contact_text');
        contact.innerHTML = city + '\n' + street + '\n' + city + ', ' + state + ', ' + zipcode + '\n' + phoneNumber;
        contact_container.appendChild(contact);
    }
    createContactDiv('Brookyln', '1054 Anmoore Road', 'NY', '11201', '(718) 797-7239');
    createContactDiv('Denver', '899 Davis Lane', 'CO', '80203', '(720) 263-4947');
    createContactDiv('Seattle', '1392 Elliot Avenue','WA','98122','(206) 568-1365');

    let hours = document.createElement('div');
    hours.setAttribute('class', 'contact_text');
    hours.innerHTML = 'Monday - Thursday:' + '\n' + '8am - 11pm' + '\n' + 'Friday - Sunday' + '\n' + '11am - 11pm';
    contact_container.appendChild(hours);
};


export default load_initial_page();