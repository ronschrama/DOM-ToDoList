# &lt;/salt&gt;

## Salt ToDo

This is the classic Todo app exercise. Your task is to create a simple todo app - no backend required.
Exactly how you implement and design this is up to you - but your solution should be implemented in the files `index.html`, `js/todo.js` and `style/todo.css`. You may use the screenshot at the bottom of this page as inspiration.

There is a webpack-dev-server already set up for you to get started developing quickly. Get going with `npm run dev`.

You may not use any frameworks or libraries. SASS is OK.

### UI Requirements
* Initially, the list of todo cards should be empty.
* There should be a form where the user can add a new 'todo'.
* When a new todo task is submitted from the form, a new todo card should be appended to the list.
* Clicking on a todo card should visually mark the card as done. Exactly how is up to you.
* Add a remove-button to cards marked as 'done'. When the button is clicked, the card should be removed from the board.
* Move the cards marked as 'done' to the bottom of the list.

### Technical requirements
* Keep state in a object and *NOT* in the DOM. In its simplest form, this means that the todo’s should be stored in an array. The view should be dependent on the state, not the other way around.
* Lint your code with Airbnb’s ESlint-configuration
* `Optional:` Persisting in localstorage. This is actually really simple once you have a state object: store the current state in the browser's localstorage. When the app is closed and then opened again, the state should be restored.

### A few tips on the way
* Check the console, make sure it's clean before sending in the code
* Keep your code modular (build small functions, think that each function should have one single responsibility)
* Use modern JavaScript
* Think about naming your variables and functions in a way that make the code self-documenting
* Use consistent naming (e.g. don't mix camel case & hyphens)
* Use semantic html (e.g use the form element)
* Use a css reset or normalize (or sensible defaults for elements)

Have fun!!

| ![Todo](todo.png) |
|:---:|
| Example of a todo app |
