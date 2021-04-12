## "The Citrus Bar" Restaurant Page

The goal behind creating this mock restaurant page was to practice using webpack/modules and practice building pages with javascript/tabs.

## Usage

1. Download all files inside the repository.

2. Open the dist folder and then load "index.html" in your browser.

3. 
    - If you have a field you want to visit, you can click its corresponding link in the header. Clicking a link will smooth-scroll down to the corresponding location and reveal its information.
    - If there isn't a particular section you want to visit, you can scroll down and click on any title that strikes your interest to reveal its information (e.g. Menu, Reservations, About Us).

4. If you've finished reading a section and don't want to view the information anymore, click on the container's title to clear its content.


## Page load logic
1. index.html is initially called and runs the main.js script (which is a bundle of all required modules/files by index.js).

2. index.js imports functions from modules I created for rendering each section's information. 

3. index.js runs load_inital_page() runs, which renders the inital page without openable/closeable information.

4. index.js calls add_nav_events(), which adds event listeners to each section title/header links. These event listeners call their corresponding modules. (e.g. if the "menu" title is clicked, it will run the imported menu_tab_event() function from the menu.js file)

5. When called, each module's exported function checks to see if its information has already been rendered. If it has, then it deletes the printed children, which has the effect of "closing" that section of the page. If it has not been called before, it will render its information, "opening" the page.
