function menu_tab_event(){
    let menu_text = document.getElementById('menu_items_container');

    // if the menu is already created, remove it. Otherwise, create it and insert it into the page.
    if(menu_text != null){
        menu_text.remove();
    } else {
        menu_text = document.createElement('div');
        menu_text.setAttribute('id','menu_items_container');

        // populate grid with menu
        create_subtitle("APPETIZERS", menu_text);
        appetizers.forEach(item => create_dish(item, menu_text));

        create_subtitle("ENTREES", menu_text);
        entrees.forEach(item => create_dish(item, menu_text));

        create_subtitle("DESSERTS", menu_text);
        desserts.forEach(item => create_dish(item, menu_text));

        create_subtitle("DRINKS", menu_text);
        drinks.forEach(item => create_dish(item, menu_text));


        let menu_container = document.getElementById('menu_container');
        menu_container.appendChild(menu_text);
    }
};

// creates a label for different menu sections (ENTREES, DESSERTS, etc.) and adds it to the menu parent container
function create_subtitle(title, parent_container){
    let subtitle = document.createElement('div');
    subtitle.setAttribute('class','menu_subtitle')
    subtitle.innerHTML = title;
    parent_container.appendChild(subtitle);
}

// Creates and populates a "dish" div with information from an array, and then adds it to the menu parent container
function create_dish(item, parent_container){
    // create parent div for dish
    let dish = document.createElement('div');
    dish.setAttribute('class','dish');

    // create children divs for dish values, add values from item to child
    let dish_name = document.createElement('div');
    dish_name.setAttribute('class','dish_name');
    dish_name.innerHTML = item[0];

    let dish_description = document.createElement('div');
    dish_description.setAttribute('class','dish_description');
    dish_description.innerHTML = item[1];

    let dish_price = document.createElement('div');
    dish_price.setAttribute('class','dish_price');
    dish_price.innerHTML = item[2];

    // append dish value divs to parent, then append to parent's container
    dish.appendChild(dish_name);
    dish.appendChild(dish_description);
    dish.appendChild(dish_price);

    parent_container.appendChild(dish);
}

// Different arrays holding menu items
let appetizers = [["SAUTÉED WILD MUSHROOMS", "$7", ""],["SALADE NIÇOISE","$6", ""], ["FRESH HERB RISOTTO", "$7",""], ["FRUIT GAZPACHO", "$8", ""],["HARICOT VERTS","$6", ""],["FRENCH ONION SOUP","$5", ""]]
let entrees = [["BEEF TENDERLOIN","Roasted with a spicy chili infusion, served medium rare and topped with chimichurri salsa","$26"] , ["DELMONICO","Hand-cut 20oz bone-in sirloin steak topped with pink peppercorn, cognac and leek reduction","$28"], ["PRIME RIB","Aged 8 oz prime rib slow roasted in rock salt and served with au jus and fresh grated horseradish","$28"],["NEW ORLEANS BOUILLABAISSE","Petite prawns, Andouille sausage, mirepoix and Cajun cream sauce served over red rice","$16"],["OREGON TROUT","Sautéed fresh boneless trout with tarragon butter suace, parsley and caramelized shallots", "$19"],["COHO SALMON","Over-roasted line-caught salmon with chervil and kumquat pesto", "$26"]];
let desserts = [["CRÈME ANGLAISE AND FRESH ASSORTED BERRIES", "$11",""],["TRIO OF CRÈME BRULEE","$14",""],["CRÈME DE PAPAYA","$9",""]];
let drinks = [["NOVELTY HILL VIOGNIER","Riesling - Columbia Valley '19","$30"],["COLTERENZIO PINOT GRIGIO","White - Italy '18","$28"],["ISABEL MONDAVI","Chardonnay - Sonoma, California '17","$32"],["BOTANI MOSCATEL SECO","Chardonnay - Sierras de Malaga, Spain '19","$32"],["PROSECCO BRUT, PRESTO","Sparkling - Italy '18","$27"],["MOSCATO D'ASTI, TRANCHERO","Sweet - Italy '18","$18"]];


export default menu_tab_event;