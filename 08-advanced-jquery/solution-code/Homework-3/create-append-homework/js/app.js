/* 
Use DOM manipulation to create the sidebar elements (heading and paragraphs) and text content shown in the preview.png image,
and then append them to the DOM.

For styling purposes, use the following HTML elements and structure:

aside      // parent element: already in the HTML file
    h3
    p
    p
    img    // BONUS
    h3     // BONUS
    ul     // BONUS
        li // BONUS
        ...
*/

// * STEP 1
// Write a statement to create the h3 element, then write statements to create the two p elements.
// (HINT: Create variables to store each of the newly created elements.)

let heading = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');

// * STEP 2
// Write a statement to create the text node for the h3 element, using the text "About Us", then write statements to create the text nodes for the two p elements, using the following text values:

//     Text for the first paragraph:
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.

//     Text for the second paragraph:
//     Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.

heading.innerHTML = "About Us";
p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.";
p2.innerHTML = "Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.";


// * STEP 3
// Write a statement to create a variable called sidebar and set its value to reference the aside element.
// (NOTE: 'aside' is an HTML element similar to a div; it's used for related content, such as this sidebar.)

let sidebar = document.querySelector('aside');


// * STEP 4
// Write a statement to attach the heading element as a child of the aside element, then write statements to attach the paragraph elements as children of the aside element.
// (HINT: Be sure to attach the elements in the order in which they should appear in the browser window, from top to bottom.)

sidebar.appendChild(heading);
sidebar.appendChild(p1);
sidebar.appendChild(p2);


// * STEP 5
// Save your changes, open index.html in your browser, then compare the web page to the preview.png image.


// ** BONUS 1: Add the image shown in the preview-bonus.png image. Specify "images/about.jpg" as the source file.
// (HINT: The image should be a sibling to the h3 and p elements you already added.)

let image = document.createElement('img');
let imageSource = "images/about.jpg";
image.src = imageSource;
sidebar.appendChild(image);


// ** BONUS 2: Add "Recent issues" heading and the list of issues, as shown in the preview-bonus.png image.
// (HINT: The list should be a sibling to the h3 and p elements you already added.)

let issuesHead = document.createElement('h3');
let list = document.createElement('ul');
let item1 = document.createElement('li'); // could also use a loop here to DRY out the code
let item2 = document.createElement('li');
let item3 = document.createElement('li');
let item4 = document.createElement('li');
let item5 = document.createElement('li');
let item6 = document.createElement('li');

let issuesHeadText = document.createTextNode("Recent Issues");
item1.innerHTML = "Issue Nineteen: Camping"; // could also create an array of values and use a loop
item2.innerHTML = "Issue Eighteen: Food";
item3.innerHTML = "Issue Seventeen: Signs";
item4.innerHTML = "Issue Sixteen: Friends";
item5.innerHTML = "Issue Fifteen: Carnivals";
item6.innerHTML = "Issue Fourteen: Gatherings";

list.appendChild(item1); // could also use a loop here to DRY out the code
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);
list.appendChild(item5);
list.appendChild(item6);

sidebar.appendChild(issuesHead);
sidebar.appendChild(list);