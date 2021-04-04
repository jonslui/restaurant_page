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
    create_tab('tab4', 'ABOUT US');

    // add slogan text
    let slogan = document.createElement('div');
    slogan.innerHTML = "FARM FRESH, EVERY TIME.";
    slogan.setAttribute('id', 'slogan');
    contentBody.appendChild(slogan);

    // add aboutus container + children
    let aboutus_container = document.createElement('div');
    aboutus_container.setAttribute('class','text_container');
    aboutus_container.setAttribute('id','aboutus_container');
    contentBody.appendChild(aboutus_container);
    
    let aboutus_title = document.createElement('div');
    aboutus_title.innerHTML = "ABOUT US";
    aboutus_title.setAttribute('class','container_title');
    aboutus_title.setAttribute('id','aboutus_title');
    aboutus_container.appendChild(aboutus_title);

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
    menu_title.setAttribute('id', 'menu_title');
    menu_container.appendChild(menu_title);

    // events/reservations image
    let reservationsImage = document.createElement('img');
    reservationsImage.src = "./assets/kaboompics_People holding glasses of white wine making a toast.jpeg";
    reservationsImage.classList.add('mainbodyimage');
    contentBody.appendChild(reservationsImage);

    // add events/reservations container + children
    let reservations_container = document.createElement('div');
    reservations_container.setAttribute('class','text_container');
    reservations_container.setAttribute('id', 'reservations_container');
    contentBody.appendChild(reservations_container);

    let reservations_title = document.createElement('div');
    reservations_title.innerHTML = "RESERVATIONS";
    reservations_title.setAttribute('class','container_title');
    reservations_title.setAttribute('id','reservations_title');
    reservations_container.appendChild(reservations_title);

    // Footer image
    let footerImage = document.createElement('img');
    footerImage.src = "./assets/man-with-tattooed-hands-prepping-food.jpg";
    footerImage.classList.add("mainbodyimage");
    contentBody.appendChild(footerImage);


    // create contact us container and children
    let contact_container = document.createElement('div');
    contact_container.setAttribute('id','contact_container');
    contentBody.appendChild(contact_container);
    
    let contact_title = document.createElement('div');
    contact_title.innerHTML = "CONTACT US";
    contact_title.setAttribute('id','contact_title');
    contact_container.appendChild(contact_title);


    // function to create each contact child
    function createContactDiv(city, street, state, zipcode, phoneNumber){
        let contact = document.createElement('div');
        contact.setAttribute('class', 'contact_text');
        contact.innerHTML = city + ':\n' + street + '\n' + city + ', ' + state + ', ' + zipcode + '\n' + phoneNumber;
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


export default load_initial_page;