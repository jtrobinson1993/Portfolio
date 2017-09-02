
const OPEN_CLASS = 'open';

/* Create a jQuery-like selector
querySelectorAll doesn't really return an array, it returns something
'array-like', this uses some fancy ES6 syntax [... ] to turn it into
a real array
*/
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

function toggleClass(elem, c) {
    const classes = elem.className;
    /* Capturing Groups are enclosed in parentheses().
    ?: Prevents the capturing group from being referenced later on, which
    stops the .replace from getting rid of spaces before the class name, 'c'.
    ^ matches the start of a string
    | means "or"
    \\s means "whitespace"
    ?:^|\\s means "Match on whitespace or start of string, but don't
    save the capturing group in memory".
    The '+' after the ')' means "one or many characters", meaning that
    our class name, 'c', will contain one or many characters before the
    next regex.
    ?! essentially means "Is not followed by:"
    and \S (escaped with an extra \) means non-white space characters
    (negated version of \s).
    so ?!\\S means "Not followed by non-whitespace characters".
    */
    const openRegex = new RegExp('(?:^|\\s)+'+ c +'(?!\\S)');

    if (classes.indexOf(c) === -1) {
      elem.className += ' ' + c;
    } else {
      elem.className = classes.replace(openRegex, '');
    }
}

function setupMainMenu() {
  const $mainMenuIcon = $('#main-header .menu-icon');
  const $mainMenu = $('#main-menu');

  $mainMenuIcon.addEventListener('click', () => {
    toggleClass($mainMenu, OPEN_CLASS);
    toggleClass($mainMenuIcon, OPEN_CLASS);
    $mainMenuIcon.blur();
  });
}

function init() {
  setupMainMenu();
}

init();
