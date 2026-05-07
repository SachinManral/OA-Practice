// Generated from the V2 frontend OA set pasted into index.html on 2026-05-07.
const MCQ = [
  // ── HTML (50 NEW Qs) ──
  {id:201,s:"HTML",q:"What is the key difference between <span> and <div>?",o:["Both are block-level elements","<span> is inline; <div> is block-level","<div> is inline; <span> is block-level","Both are inline elements"],a:1},
  {id:202,s:"HTML",q:"What does the `defer` attribute on a <script> tag do?",o:["Executes script immediately before HTML parses","Downloads script in parallel; executes AFTER HTML is fully parsed","Blocks HTML parsing until script finishes","Same as async attribute"],a:1},
  {id:203,s:"HTML",q:"What does the `async` attribute on a <script> tag do?",o:["Executes after DOM is ready","Downloads and executes script asynchronously (may interrupt parsing)","Defers execution until after page load","Makes the script optional"],a:1},
  {id:204,s:"HTML",q:"Which meta tag is required for proper mobile responsiveness?",o:['<meta name="mobile" content="yes">','<meta name="viewport" content="width=device-width, initial-scale=1.0">','<meta name="responsive" content="true">','<meta http-equiv="mobile">'],a:1},
  {id:205,s:"HTML",q:"What is the `srcset` attribute on <img> used for?",o:["Sets the image source URL","Allows browser to choose appropriate image based on screen resolution/size","Sets fallback alt text","Adds multiple image effects"],a:1},
  {id:206,s:"HTML",q:"What does the HTML <template> element do?",o:["Creates a reusable CSS template","Holds client-side content that is NOT rendered on page load; used via JS","Defines HTML page structure","Creates iframe templates"],a:1},
  {id:207,s:"HTML",q:"What does `tabindex='0'` do on an HTML element?",o:["Moves element to tab position 0 in DOM","Makes a non-focusable element focusable via keyboard (tab order)","Hides element from tab navigation","Sets the tab title"],a:1},
  {id:208,s:"HTML",q:"What is the <datalist> element used for?",o:["Defines a data table","Provides autocomplete suggestions for an <input> element","Creates a dropdown list","Defines a list of CSS data"],a:1},
  {id:209,s:"HTML",q:"What does <link rel='preload'> do?",o:["Preloads an external stylesheet","Tells browser to fetch a resource early in page load for performance","Creates a link element","Preloads the next page"],a:1},
  {id:210,s:"HTML",q:"What is the <noscript> tag for?",o:["Disables JavaScript on the page","Provides fallback content for users with JavaScript disabled","Hides content from search engines","Delays script loading"],a:1},
  {id:211,s:"HTML",q:"What does `type='module'` on a <script> tag enable?",o:["Loads script from a CDN","Treats script as an ES module, enabling import/export syntax","Makes script run in strict mode only","Creates a sandboxed script context"],a:1},
  {id:212,s:"HTML",q:"For a purely decorative image (for accessibility), what should the alt value be?",o:["alt='decorative'","alt='image'","alt='' (empty string)","No alt attribute needed"],a:2},
  {id:213,s:"HTML",q:"What is the <progress> element used for?",o:["Shows progress of a CSS animation","Represents completion progress of a task","Creates a loading spinner","Tracks user scroll position"],a:1},
  {id:214,s:"HTML",q:"What is the <time> element and its datetime attribute for?",o:["Displays a clock on the page","Represents a machine-readable date/time value","Formats time with CSS","Creates a countdown timer"],a:1},
  {id:215,s:"HTML",q:"What does the <dialog> element represent?",o:["A conversation in a web app","A dialog box or interactive popup/modal","An alert message","A tooltip element"],a:1},
  {id:216,s:"HTML",q:"What is the <output> element used for?",o:["Represents raw HTML output","Displays the result of a calculation or user action in a form","Creates a print button","Outputs console messages"],a:1},
  {id:217,s:"HTML",q:"What is the `role` (ARIA) attribute used for?",o:["Controls CSS role","Provides semantic/accessible meaning to elements for screen readers","Sets the element's layout role","Defines JavaScript role bindings"],a:1},
  {id:218,s:"HTML",q:"What does <link rel='canonical' href='...'> do?",o:["Links a CSS stylesheet","Tells search engines which URL is the main/preferred version of a page","Preloads the linked page","Creates a canonical navigation link"],a:1},
  {id:219,s:"HTML",q:"What is the <picture> element used for?",o:["Embeds a photo gallery","Provides multiple image sources for different viewport or device scenarios","Wraps all images in a document","Creates a responsive canvas"],a:1},
  {id:220,s:"HTML",q:"Which attribute makes a checkbox checked by default?",o:["default","selected","value='true'","checked"],a:3},
  {id:221,s:"HTML",q:"What does <input type='range'> render?",o:["A numeric input box","A slider control","A rating widget","A progress bar"],a:1},
  {id:222,s:"HTML",q:"What does the `pattern` attribute on an input do?",o:["Adds a background pattern","Validates input value against a regular expression","Sets a placeholder pattern","Creates a visual input mask"],a:1},
  {id:223,s:"HTML",q:"What is `enctype='multipart/form-data'` required for?",o:["All HTML forms","Forms with text inputs only","Forms that include file uploads","Forms using POST method"],a:2},
  {id:224,s:"HTML",q:"What does the <ins> tag represent?",o:["An instruction element","Inserted/added text (visually underlined)","An important note","An index entry"],a:1},
  {id:225,s:"HTML",q:"What does the <kbd> element represent?",o:["A keyboard component","User keyboard input text","A key-value pair","A keyboard shortcut listener"],a:1},
  {id:226,s:"HTML",q:"What does the `download` attribute on an anchor <a> tag do?",o:["Enables AJAX download","Forces browser to download the linked file instead of navigating to it","Speeds up link loading","Creates a download event listener"],a:1},
  {id:227,s:"HTML",q:"What does the <caption> element inside a <table> do?",o:["Creates a column header","Adds a visible title/description for the table","Styles the first row","Creates a table footer"],a:1},
  {id:228,s:"HTML",q:"What is the `aria-label` attribute used for?",o:["CSS animation labeling","Provides an accessible name/description for an element for screen readers","JavaScript event labeling","SEO keyword labeling"],a:1},
  {id:229,s:"HTML",q:"What does <sup> vs <sub> do?",o:["Both create subscript","<sup> = superscript; <sub> = subscript","<sub> = superscript; <sup> = subscript","Both create superscript"],a:1},
  {id:230,s:"HTML",q:"What is the default `display` value of a <div> element?",o:["inline","inline-block","block","flex"],a:2},
  {id:231,s:"HTML",q:"What is the default `display` value of a <span> element?",o:["block","flex","inline-block","inline"],a:3},
  {id:232,s:"HTML",q:"Key difference between `disabled` and `readonly` on inputs?",o:["Identical","readonly prevents editing but still submits; disabled prevents editing AND excludes from submission","disabled prevents editing but submits; readonly excludes from submission","Both exclude from form submission"],a:1},
  {id:233,s:"HTML",q:"What is the <meter> element used for?",o:["Measuring temperature","A scalar measurement within a known range (like a fuel gauge)","Counting page visits","Measuring loading speed"],a:1},
  {id:234,s:"HTML",q:"What is the <address> element semantically for?",o:["Stores a home address","Contact information for the nearest <article> or <body>","A postal address field","IP address display"],a:1},
  {id:235,s:"HTML",q:"What does `<iframe sandbox>` do?",o:["Creates a sandboxed CSS environment","Applies restrictions on the embedded iframe content (no scripts, forms, etc.) by default","Sandboxes all child elements","Enables a secure payment iframe"],a:1},
  {id:236,s:"HTML",q:"What is the `<colgroup>` element used for?",o:["Grouping columns visually","Applying styles or attributes to one or more columns in a table","Creating column headers","Creating a column-based grid"],a:1},
  {id:237,s:"HTML",q:"What does `<details open>` attribute do?",o:["Locks the details element","Renders the disclosure widget in its expanded state by default","Sets the details to open on click","Opens a new tab"],a:1},
  {id:238,s:"HTML",q:"What is `inputmode='numeric'` on a text input for?",o:["Restricts input to numbers only","Shows a numeric keypad on mobile devices without restricting input type","Validates numeric input server-side","Disables non-numeric keys"],a:1},
  {id:239,s:"HTML",q:"What is the `<wbr>` element?",o:["A line break element","A word-break opportunity hint — where text CAN break if needed","A word boundary marker","A whitespace rule element"],a:1},
  {id:240,s:"HTML",q:"What does `rel='noopener noreferrer'` on a target='_blank' link do?",o:["Prevents the link from opening","Security: prevents new tab from accessing the opener window and hides referrer","Speeds up the link","Creates a non-indexed link"],a:1},
  {id:241,s:"HTML",q:"What is `<main>` element for?",o:["Same as <body>","Represents the dominant content area (only one per page)","Creates the main navigation","Defines the main header"],a:1},
  {id:242,s:"HTML",q:"What is `<article>` vs `<section>`?",o:["Identical elements","<article> = standalone, self-contained content; <section> = thematic grouping within page","<section> = standalone; <article> = grouped content","Both represent navigation areas"],a:1},
  {id:243,s:"HTML",q:"What is `<link rel='stylesheet' media='print'>` for?",o:["Prints the stylesheet","Applies the stylesheet ONLY when the page is being printed","Loads stylesheet for all media","Creates a print button"],a:1},
  {id:244,s:"HTML",q:"What does `<script defer>` vs `<script async>` differ in?",o:["No difference","defer runs scripts in order AFTER parsing; async runs as soon as downloaded (may be out of order)","async runs after parsing; defer runs immediately","Both block HTML parsing"],a:1},
  {id:245,s:"HTML",q:"What is `<head>` vs `<header>` in HTML5?",o:["Same element, different versions","<head> contains metadata (not displayed); <header> is a visible page section element","<header> contains metadata; <head> is visible","Both display visible content"],a:1},
  {id:246,s:"HTML",q:"What does `loading='eager'` on an image do?",o:["Loads image slowly","Loads image immediately regardless of viewport position (default behavior)","Enables lazy loading","Only loads on user interaction"],a:1},
  {id:247,s:"HTML",q:"What is the `formnovalidate` attribute on a submit button?",o:["Disables the button","Submits the form skipping HTML5 validation","Validates only that button's field","Creates a custom validation rule"],a:1},
  {id:248,s:"HTML",q:"What does `<link rel='dns-prefetch' href='//example.com'>` do?",o:["Preloads example.com","Tells browser to resolve DNS for a domain in advance (performance boost)","Creates an external link","Prefetches the full page"],a:1},
  {id:249,s:"HTML",q:"In a table, which attribute merges cells vertically?",o:["colspan","rowspan","cellspan","merge"],a:1},
  {id:250,s:"HTML",q:"What does `<area>` element work with?",o:["CSS grid areas","<map> element to define clickable regions in an image map","Canvas drawing areas","SVG areas"],a:1},

  // ── CSS (50 NEW Qs) ──
  {id:301,s:"CSS",q:"Which CSS unit is relative to the ROOT element's font size?",o:["em","px","rem","vh"],a:2},
  {id:302,s:"CSS",q:"Which CSS unit is relative to the ELEMENT'S OWN font size?",o:["rem","em","px","vw"],a:1},
  {id:303,s:"CSS",q:"What does `clamp(min, val, max)` do in CSS?",o:["Clamps a CSS variable","Returns val but enforces a min and max boundary","Creates a responsive grid","Clamps the element to its parent"],a:1},
  {id:304,s:"CSS",q:"What is the shorthand for margin: 10px top, 20px right/left, 10px bottom?",o:["margin: 10px 10px 20px","margin: 10px 20px","margin: 20px 10px","margin: 10px 20px 10px"],a:1},
  {id:305,s:"CSS",q:"What does `flex-direction: row-reverse` do?",o:["Reverses the main and cross axis","Lays flex items in a row in reverse order (right to left)","Rotates the container 180°","Reverses item content only"],a:1},
  {id:306,s:"CSS",q:"What is `align-self` vs `align-items` in flexbox?",o:["Identical","align-items applies to all items; align-self overrides alignment for ONE specific item","align-self aligns the container; align-items aligns children","align-self is for grid; align-items is for flex"],a:1},
  {id:307,s:"CSS",q:"What does `grid-column: 1 / 3` mean?",o:["Item is 3 columns wide","Item spans from grid line 1 to grid line 3 (2 columns wide)","Item is in column 1 to 3 inclusive","Item has 3px column gap"],a:1},
  {id:308,s:"CSS",q:"What is `grid-template-areas` used for?",o:["Naming CSS animations","Creating named layout areas in a grid for semantic placement","Defining grid column widths","Creating template HTML inside CSS"],a:1},
  {id:309,s:"CSS",q:"What does `place-items: center` do in CSS Grid?",o:["Centers the grid container","Shorthand for align-items: center + justify-items: center","Centers only the first item","Adds padding to all items"],a:1},
  {id:310,s:"CSS",q:"What does the `~` (general sibling) combinator select?",o:["All descendants","Only direct children","All sibling elements that FOLLOW the first element","The parent element"],a:2},
  {id:311,s:"CSS",q:"What does the `>` (child) combinator select?",o:["All descendants at any depth","Only DIRECT children (not grandchildren)","All siblings","The parent element"],a:1},
  {id:312,s:"CSS",q:"What is `:focus-visible` pseudo-class?",o:["Applies focus ring to all focused elements","Applies focus styles only when focus indicator should be visible (keyboard nav)","Same as :focus","Makes element visible on focus"],a:1},
  {id:313,s:"CSS",q:"What does `user-select: none` do?",o:["Removes cursor from element","Prevents users from selecting/highlighting text on the element","Disables pointer events","Prevents text input"],a:1},
  {id:314,s:"CSS",q:"What does `resize: none` on a textarea do?",o:["Removes the textarea","Prevents the user from manually resizing the textarea","Makes textarea auto-resize","Sets a fixed textarea size"],a:1},
  {id:315,s:"CSS",q:"What does `:root` selector target?",o:["The currently active rule","The highest-level parent element (<html>), useful for CSS variables","The root of a nested element","The main element"],a:1},
  {id:316,s:"CSS",q:"What does `appearance: none` do on form elements?",o:["Makes element invisible","Removes the default browser styling from form controls","Adds a custom appearance","Removes all CSS"],a:1},
  {id:317,s:"CSS",q:"What does `backdrop-filter: blur(5px)` do?",o:["Blurs the element's content","Applies a blur effect to the area BEHIND an element","Creates a glass morphism border","Blurs all child elements"],a:1},
  {id:318,s:"CSS",q:"What does `scroll-behavior: smooth` enable?",o:["Smooth CSS transitions","Smooth scrolling animation for anchor link navigation","Eases scroll event listeners","Creates momentum scrolling"],a:1},
  {id:319,s:"CSS",q:"What does the `:is()` pseudo-class do?",o:["Checks CSS property existence","Matches elements that match ANY selector in a given list","Creates a conditional style","Only works in CSS Grid"],a:1},
  {id:320,s:"CSS",q:"What is `@supports` rule used for?",o:["Supports external CSS loading","Conditionally applies CSS if a browser supports a specific feature","Creates cross-browser polyfills","Adds browser detection"],a:1},
  {id:321,s:"CSS",q:"What is `fit-content` in CSS sizing?",o:["Sizes element to its parent","Uses available space but never exceeds max-content","Sets element to content width always","Auto-sizes only in grid"],a:1},
  {id:322,s:"CSS",q:"What does `scroll-snap-type: x mandatory` do?",o:["Locks the page to x-axis","Enables horizontal scroll snapping, forcing snapping to defined points","Creates horizontal pagination","Prevents vertical scrolling"],a:1},
  {id:323,s:"CSS",q:"What is a CSS stacking context?",o:["A way to stack CSS imports","A 3D conceptual layer where z-index values are applied relative to that context","A layered CSS file","The CSS specificity hierarchy"],a:1},
  {id:324,s:"CSS",q:"What does `outline` differ from `border`?",o:["No difference","outline does NOT affect element layout (no space taken); border DOES affect layout","border doesn't affect layout; outline does","outline is only for text"],a:1},
  {id:325,s:"CSS",q:"What does `text-indent` control?",o:["Indentation of all lines","Indentation of ONLY the first line in a text block","Left padding of text","Tab width"],a:1},
  {id:326,s:"CSS",q:"What does `word-break: break-all` do?",o:["Breaks between words only","Breaks at any character to prevent overflow (even mid-word)","Hides overflowing words","Adds hyphens at word breaks"],a:1},
  {id:327,s:"CSS",q:"What does the CSS `initial` keyword do?",o:["Resets to the parent value","Resets a property to its initial (browser default) value","Inherits from parent","Sets value to 0"],a:1},
  {id:328,s:"CSS",q:"What does the CSS `unset` keyword do?",o:["Removes the property","If inherited: acts like inherit; if not inherited: acts like initial","Same as 'none'","Removes the element's styles"],a:1},
  {id:329,s:"CSS",q:"What does `isolation: isolate` do?",o:["Prevents CSS inheritance","Creates a new stacking context for the element (useful for mix-blend-mode)","Isolates element from flex layout","Prevents z-index inheritance"],a:1},
  {id:330,s:"CSS",q:"What does `aspect-ratio: 16 / 9` do?",o:["Sets the video aspect ratio only","Maintains the element's width-to-height ratio at 16:9 automatically","Sets width to 16px, height to 9px","Creates a 16-column 9-row grid"],a:1},
  {id:331,s:"CSS",q:"What is `font-display: swap` in @font-face for?",o:["Swaps two fonts","Shows fallback font while custom font loads, avoiding invisible text","Swaps fonts on hover","Delays font loading"],a:1},
  {id:332,s:"CSS",q:"What is the CSS `currentColor` keyword?",o:["The default CSS color","Refers to the element's current `color` property value for use in other properties","The browser's default text color","The last applied color class"],a:1},
  {id:333,s:"CSS",q:"What does `will-change: transform` do?",o:["Prevents transforms","Hints to the browser to optimize rendering for that element (creates compositing layer)","Forces GPU acceleration unconditionally","Disables transitions"],a:1},
  {id:334,s:"CSS",q:"What is `@layer` in CSS used for?",o:["Loading CSS layers from files","Defining cascade layers to manage specificity order of styles","Creating z-index layers","Defining media query breakpoints"],a:1},
  {id:335,s:"CSS",q:"What does `columns: 2` CSS property do?",o:["Creates a 2-item flexbox","Creates a 2-column multi-column text layout","Sets grid to 2 columns","Limits the element to 2 children"],a:1},
  {id:336,s:"CSS",q:"CSS specificity: what wins — `#nav a` or `.nav .link a`?",o:[".nav .link a wins (more classes)","#nav a wins (ID selector always beats class)","They're equal","Depends on source order"],a:1},
  {id:337,s:"CSS",q:"What does `overscroll-behavior: contain` do?",o:["Contains the element's overflow","Prevents scroll chaining to parent elements when scrolling reaches the end","Makes element scrollable","Creates a contained scroll area"],a:1},
  {id:338,s:"CSS",q:"What does `mix-blend-mode` do?",o:["Mixes CSS animations","Defines how an element's content blends with its background/parent","Blends two stylesheets","Creates gradient blending only"],a:1},
  {id:339,s:"CSS",q:"What is the CSS `content-visibility: auto` property?",o:["Hides content automatically","Skips rendering of off-screen elements, improving performance","Auto-shows hidden content","Sets visibility based on content type"],a:1},
  {id:340,s:"CSS",q:"What does `text-wrap: balance` (CSS) do?",o:["Prevents text wrapping","Distributes text across lines more evenly to prevent awkward line breaks","Wraps text at word boundaries only","Sets maximum wrap width"],a:1},
  {id:341,s:"CSS",q:"What does `gap` replace in older CSS Grid syntax?",o:["margin","padding","grid-gap / grid-row-gap / grid-column-gap","column-gap only"],a:2},
  {id:342,s:"CSS",q:"What does `font-variant: small-caps` do?",o:["Makes all text capital letters","Displays lowercase letters as smaller uppercase letters","Changes font family","Reduces font size by 50%"],a:1},
  {id:343,s:"CSS",q:"What is `clip-path` used for?",o:["Masking images only","Clipping an element to a specified shape","Creating a clipping animation","Hiding overflow"],a:1},
  {id:344,s:"CSS",q:"What does `border-image` allow in CSS?",o:["Adding an image inside an element","Using an image or gradient as the element's border","Creating a border animation","Setting border opacity with an image"],a:1},
  {id:345,s:"CSS",q:"What does `writing-mode: vertical-rl` do?",o:["Disables text writing","Renders text vertically flowing from right to left","Rotates text 90 degrees","Makes text right-to-left only"],a:1},
  {id:346,s:"CSS",q:"In Flexbox, what does `flex-basis` control?",o:["Minimum size of an item","Maximum size of an item","Initial size of a flex item before remaining space is distributed","Number of flex items"],a:2},
  {id:347,s:"CSS",q:"What does `grid-auto-flow: dense` do?",o:["Fills grid densely with items in order","Auto-places items in gaps created by spanning items (fills holes)","Makes all items dense/compact","Creates an auto-scrolling grid"],a:1},
  {id:348,s:"CSS",q:"What is `min-content` in CSS sizing?",o:["Sets minimum to 0","Sizes element to the smallest possible size without content overflow","Minimum viewport size","Removes minimum width"],a:1},
  {id:349,s:"CSS",q:"What does `:where()` differ from `:is()`?",o:["Identical","Same matching behavior but :where() has ZERO specificity","Different selector support","Different browser compatibility"],a:1},
  {id:350,s:"CSS",q:"Which CSS property prevents elements from being selected as flex/grid items?",o:["display: contents","display: none","display: hidden","display: exclude"],a:0},

  // ── JavaScript (60 NEW Qs) ──
  {id:401,s:"JS",q:"Output of: 1 == '1'",o:["false","true","TypeError","NaN"],a:1},
  {id:402,s:"JS",q:"Output of:\nlet x=1; function foo(){x=2;} foo();\nconsole.log(x);",o:["1","2","undefined","ReferenceError"],a:1},
  {id:403,s:"JS",q:"Output of: [] + []",o:["[]","0",'"" (empty string)',"null"],a:2},
  {id:404,s:"JS",q:"Output of: typeof class {}",o:['"class"','"object"','"function"','"undefined"'],a:2},
  {id:405,s:"JS",q:"Output of: [1,2,3].forEach(x => x*2)",o:["[2,4,6]","undefined","[1,2,3]","NaN"],a:1},
  {id:406,s:"JS",q:'Output of: "" || "hello"',o:["''",'"hello"',"false","undefined"],a:1},
  {id:407,s:"JS",q:'Output of: "hello" && "world"',o:['"hello"','"world"',"true","undefined"],a:1},
  {id:408,s:"JS",q:"Output of: null ?? 'default'",o:["null",'"default"',"undefined","false"],a:1},
  {id:409,s:"JS",q:"Output of: 0 ?? 'default'",o:['"default"',"null","0","false"],a:2},
  {id:410,s:"JS",q:"What is the optional chaining operator `?.` used for?",o:["Optional function parameters","Safely accessing nested properties without error if intermediate value is null/undefined","Optional CSS chaining","Null coalescing"],a:1},
  {id:411,s:"JS",q:"Output of:\nlet obj = null;\nconsole.log(obj?.a?.b);",o:["null","TypeError","undefined","ReferenceError"],a:2},
  {id:412,s:"JS",q:"What does Symbol() create?",o:["A unique string","A unique, immutable primitive value guaranteed to be unique","A secret key object","An ES6 class symbol"],a:1},
  {id:413,s:"JS",q:"Output of: Symbol('a') === Symbol('a')",o:["true","false","TypeError","undefined"],a:1},
  {id:414,s:"JS",q:"Output of: +[]",o:["[]","NaN","undefined","0"],a:3},
  {id:415,s:"JS",q:"Output of: +{}",o:["{}","0","NaN","undefined"],a:2},
  {id:416,s:"JS",q:'Output of: !""',o:["false","true","undefined","''"],a:1},
  {id:417,s:"JS",q:"What does Function.prototype.bind() do?",o:["Calls a function immediately","Creates a new function with `this` permanently bound to a specified value","Binds event listeners","Copies function properties"],a:1},
  {id:418,s:"JS",q:"Key difference between call() and apply()?",o:["No difference","Both invoke with specified `this`; call() takes args individually, apply() takes array","apply() creates new function; call() invokes directly","call() is async; apply() is sync"],a:1},
  {id:419,s:"JS",q:"Output of: let x=5; let y=x++; console.log(y, x);",o:["6 6","5 5","5 6","6 5"],a:2},
  {id:420,s:"JS",q:"Output of: let x=5; let y=++x; console.log(y, x);",o:["5 6","6 6","5 5","6 5"],a:1},
  {id:421,s:"JS",q:"What does Object.entries(obj) return?",o:["Array of keys","Array of values","Array of [key, value] pairs","Object with swapped keys/values"],a:2},
  {id:422,s:"JS",q:"What does Object.values(obj) return?",o:["Array of keys","Array of own enumerable values","Array of [key,value] pairs","Object of values"],a:1},
  {id:423,s:"JS",q:"Output of:\nlet a=1,b=2; [a,b]=[b,a];\nconsole.log(a, b);",o:["1 2","2 1","1 1","2 2"],a:1},
  {id:424,s:"JS",q:"What does instanceof check?",o:["Variable type","Whether an object was created by a specific constructor (prototype chain)","Object equality","Type of primitive"],a:1},
  {id:425,s:"JS",q:"Output of: [] instanceof Array",o:["false","true","TypeError","undefined"],a:1},
  {id:426,s:"JS",q:"Output of: typeof Promise.resolve()",o:['"promise"','"undefined"','"object"','"function"'],a:2},
  {id:427,s:"JS",q:"What does Promise.race() do?",o:["Races to reject fastest","Returns promise that settles as soon as the FIRST promise in the array settles","Runs all promises in parallel","Returns all fulfilled promises"],a:1},
  {id:428,s:"JS",q:"What does Promise.allSettled() differ from Promise.all()?",o:["Identical","allSettled waits for ALL to complete (never rejects); all() fails fast on first rejection","allSettled is faster","allSettled only handles rejections"],a:1},
  {id:429,s:"JS",q:"Output of:\nfor(var i=0;i<3;i++){setTimeout(()=>console.log(i),0);}",o:["0 1 2","3 3 3","0 0 0","1 2 3"],a:1},
  {id:430,s:"JS",q:"What fixes `for(var i=0;i<3;i++)` loop closures to print 0,1,2?",o:["Use const instead","Use let instead of var (block scoping creates new binding each iteration)","Use forEach","Add return statement"],a:1},
  {id:431,s:"JS",q:"What does Array.prototype.every() return?",o:["All matching elements","true only if ALL elements pass the callback condition","First matching element","Number of matching elements"],a:1},
  {id:432,s:"JS",q:"What does Array.prototype.some() return?",o:["All elements as boolean","true if AT LEAST ONE element passes the condition","Number of passing elements","Array of passing elements"],a:1},
  {id:433,s:"JS",q:"Output of: [1,2,3].every(x => x > 0)",o:["false","[true,true,true]","true","undefined"],a:2},
  {id:434,s:"JS",q:"Output of: 3 > 2 > 1",o:["true","false","NaN","TypeError"],a:1},
  {id:435,s:"JS",q:"Output of: 3 < 2 < 1",o:["false","true","NaN","TypeError"],a:1},
  {id:436,s:"JS",q:"What is structuredClone() used for?",o:["Creating shallow copies","Deep cloning an object including nested structures (built-in, no JSON trick needed)","Cloning DOM nodes","Cloning ES6 classes"],a:1},
  {id:437,s:"JS",q:"Output of:\nPromise.resolve().then(()=>console.log('A'));\nconsole.log('B');",o:["A B","B A","A","B"],a:1},
  {id:438,s:"JS",q:"What is a Proxy in JavaScript?",o:["A network proxy in Node.js","An object wrapping another to intercept and customize fundamental operations","A design pattern for API calls","A type of prototype"],a:1},
  {id:439,s:"JS",q:"What does new Set([1,2,2,3]) result in?",o:["[1,2,2,3]","Set {1,2,3} (duplicates removed)","[1,2,3]","Map {1,2,3}"],a:1},
  {id:440,s:"JS",q:"Output of: [...new Set([1,2,2,3])].length",o:["4","2","3","1"],a:2},
  {id:441,s:"JS",q:"What does Array.prototype.at(-1) return?",o:["Element at index -1 (undefined)","The last element of the array","Error","0"],a:1},
  {id:442,s:"JS",q:"What does Array.prototype.flat() do?",o:["Filters flat elements","Flattens a nested array by one depth level (default) or specified depth","Sorts array in ascending order","Makes array immutable"],a:1},
  {id:443,s:"JS",q:"What is the nullish coalescing operator ??",o:["Same as || operator","Returns right-hand value ONLY if left is null or undefined (not 0, '', false)","Short-circuits on any falsy value","Replaces ternary operator"],a:1},
  {id:444,s:"JS",q:"What does Object.create(proto) do?",o:["Clones an object","Creates a new object with the specified prototype object","Creates an empty object always","Copies all properties"],a:1},
  {id:445,s:"JS",q:"What is a WeakMap vs Map?",o:["No difference","WeakMap keys must be objects and are weakly held (garbage-collectible); Map accepts any key type","WeakMap is faster","WeakMap is immutable"],a:1},
  {id:446,s:"JS",q:"What does `Object.hasOwn(obj, 'key')` check?",o:["If object has any property","Whether the object has the specified property as its OWN (not inherited)","If property is writable","Same as 'key' in obj"],a:1},
  {id:447,s:"JS",q:"Output of: console.log(3 ** 2)",o:["6","9","8","32"],a:1},
  {id:448,s:"JS",q:"What does Array.prototype.flatMap() do?",o:["Flattens and filters","Maps each element and flattens result by one level","Same as flat()","Applies map and flat separately"],a:1},
  {id:449,s:"JS",q:"What is `Object.defineProperty()` used for?",o:["Defining methods only","Defining a property with specific descriptors (writable, enumerable, configurable)","Creating getters only","Cloning properties"],a:1},
  {id:450,s:"JS",q:"What does `async function foo(){ return 1; }` return when called?",o:["1","undefined","A Promise that resolves to 1","An async value"],a:2},
  {id:451,s:"JS",q:"What is `queueMicrotask()` for?",o:["Queuing tasks on a worker thread","Queuing a microtask that runs before the next macrotask (e.g. before setTimeout)","Creating micro-animations","Queuing network requests"],a:1},
  {id:452,s:"JS",q:"What is the temporal dead zone (TDZ)?",o:["A broken setTimeout","The period between entering scope and the declaration of a let/const variable (accessing it throws ReferenceError)","A garbage collection zone","A network timeout zone"],a:1},
  {id:453,s:"JS",q:"Output of: '5' * 2",o:['"52"',"10","NaN","52"],a:1},
  {id:454,s:"JS",q:"What does `globalThis` provide?",o:["The global CSS object","A universal way to access the global object across environments (browser/Node)","The global event object","The window object only"],a:1},
  {id:455,s:"JS",q:"Output of: typeof NaN === typeof 1",o:["false","true","TypeError","undefined"],a:1},
  {id:456,s:"JS",q:"What does the `delete` operator do to an object property?",o:["Sets value to null","Removes the property from the object","Sets value to undefined","Makes property non-writable"],a:1},
  {id:457,s:"JS",q:"What does `Object.isFrozen(obj)` return?",o:["true if object has no properties","true if object cannot be modified (frozen with Object.freeze)","true if object is sealed","Always true for plain objects"],a:1},
  {id:458,s:"JS",q:"Output of: [1]+[2]",o:["3","[1,2]",'"1,2"','"12"'],a:3},
  {id:459,s:"JS",q:"What is a tagged template literal?",o:["A template literal with a name","A function called with template literal parts and interpolated values as arguments","A template for HTML tags","An ES6 string method"],a:1},
  {id:460,s:"JS",q:"What does `import()` (dynamic import) do?",o:["Same as static import","Imports a module dynamically at runtime, returning a Promise","Imports CSS files","Imports only default exports"],a:1},
];

const CODING = [
  {id:"C1",title:"Reverse a string",diff:"easy",topic:"Strings",
   desc:"Write a JavaScript function `reverseString(str)` that reverses a string without using the built-in .reverse() method directly on a string.",
   examples:"reverseString('hello') → 'olleh'\nreverseString('JTG') → 'GTJ'",
   hint:"Convert to array using split(''), reverse, then join back.",
   solution:`function reverseString(str) {
  return str.split('').reverse().join('');
}

// Without reverse():
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}`},
  {id:"C2",title:"Palindrome check",diff:"easy",topic:"Strings",
   desc:"Write a function `isPalindrome(str)` that returns true if the string reads the same forwards and backwards (case-insensitive).",
   examples:"isPalindrome('racecar') → true\nisPalindrome('hello') → false\nisPalindrome('Madam') → true",
   hint:"Convert to lowercase, then compare string with its reverse.",
   solution:`function isPalindrome(str) {
  const clean = str.toLowerCase();
  return clean === clean.split('').reverse().join('');
}`},
  {id:"C3",title:"Sum of 4 smallest numbers",diff:"easy",topic:"Arrays",
   desc:"Write a function `sumFourSmallest(arr)` that returns the sum of the 4 smallest numbers in an array. (This exact problem was asked in Josh Technology OA 2024.)",
   examples:"sumFourSmallest([3,1,4,1,5,9,2,6]) → 7 (1+1+2+3)\nsumFourSmallest([10,20,5,3,1,2]) → 11 (1+2+3+5)",
   hint:"Sort the array ascending and sum the first 4 elements.",
   solution:`function sumFourSmallest(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, 4)
    .reduce((sum, n) => sum + n, 0);
}`},
  {id:"C4",title:"Remove duplicates from array",diff:"easy",topic:"Arrays",
   desc:"Write a function `removeDuplicates(arr)` that returns a new array with all duplicate values removed, preserving the original order.",
   examples:"removeDuplicates([1,2,2,3,1,4]) → [1,2,3,4]\nremoveDuplicates(['a','b','a','c']) → ['a','b','c']",
   hint:"Use a Set — it only stores unique values. Spread it back to an array.",
   solution:`function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Without Set:
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}`},
  {id:"C5",title:"FizzBuzz",diff:"easy",topic:"Loops",
   desc:"Write a function `fizzBuzz(n)` that returns an array of strings from 1 to n: 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both, and the number as string otherwise.",
   examples:'fizzBuzz(15) → ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
   hint:"Use the modulo operator %. Check FizzBuzz condition first, then Fizz, then Buzz.",
   solution:`function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(String(i));
  }
  return result;
}`},
  {id:"C6",title:"Count character occurrences",diff:"easy",topic:"Strings / Objects",
   desc:"Write a function `charCount(str)` that returns an object with each character as a key and its count as the value.",
   examples:"charCount('hello') → {h:1, e:1, l:2, o:1}\ncharCount('aabbc') → {a:2, b:2, c:1}",
   hint:"Iterate the string; use an object as a map. Use bracket notation to create/increment.",
   solution:`function charCount(str) {
  const count = {};
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}`},
  {id:"C7",title:"Find second largest number",diff:"easy",topic:"Arrays",
   desc:"Write a function `secondLargest(arr)` that returns the second largest unique number in an array.",
   examples:"secondLargest([1,3,2,5,4]) → 4\nsecondLargest([1,1,2]) → 1",
   hint:"Sort in descending order and remove duplicates first, then return index 1.",
   solution:`function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}`},
  {id:"C8",title:"Check anagrams",diff:"easy",topic:"Strings",
   desc:"Write a function `isAnagram(str1, str2)` that returns true if two strings are anagrams of each other (same characters, different order, case-insensitive).",
   examples:"isAnagram('listen', 'silent') → true\nisAnagram('hello', 'world') → false",
   hint:"Sort both strings alphabetically and compare. Convert to lowercase first.",
   solution:`function isAnagram(str1, str2) {
  const normalize = s => s.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}`},
  {id:"C9",title:"Flatten nested array",diff:"medium",topic:"Arrays / Recursion",
   desc:"Write a function `flattenArray(arr)` that flattens a deeply nested array to a single level without using Array.flat().",
   examples:"flattenArray([1,[2,[3,[4]]]]) → [1,2,3,4]\nflattenArray([1,[2,3],[4,[5]]]) → [1,2,3,4,5]",
   hint:"Use recursion: for each element, if it's an array, recursively flatten; otherwise add to result.",
   solution:`function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : [...acc, val]
  , []);
}`},
  {id:"C10",title:"Closure-based counter",diff:"medium",topic:"Closures",
   desc:"Write a function `createCounter()` that returns an object with increment, decrement, and reset methods. The counter starts at 0. Demonstrates closure.",
   examples:"const c = createCounter();\nc.increment(); // 1\nc.increment(); // 2\nc.decrement(); // 1\nc.reset(); // 0",
   hint:"Use a closure variable `count` inside createCounter(). Return an object with methods that reference it.",
   solution:`function createCounter() {
  let count = 0;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    reset()     { return (count = 0); },
    value()     { return count; }
  };
}`},
  {id:"C11",title:"Implement debounce",diff:"medium",topic:"Async / Closures",
   desc:"Write a `debounce(fn, delay)` function that returns a debounced version of fn — it only executes after `delay` ms have passed since the last call.",
   examples:"const debouncedSearch = debounce(search, 300);\n// Called rapidly — only fires once after 300ms of inactivity",
   hint:"Use setTimeout and clearTimeout. Store the timer in a closure variable and clear it on every new call.",
   solution:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}`},
  {id:"C12",title:"Implement Array.map manually",diff:"medium",topic:"Arrays / HOF",
   desc:"Implement your own version of Array.prototype.map as a function `myMap(arr, callback)` without using the built-in map().",
   examples:"myMap([1,2,3], x => x*2) → [2,4,6]\nmyMap(['a','b'], s => s.toUpperCase()) → ['A','B']",
   hint:"Create an empty result array, loop through input array, apply callback, push to result.",
   solution:`function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}`},
  {id:"C13",title:"Find pairs that sum to target",diff:"medium",topic:"Arrays / HashMap",
   desc:"Write a function `findPairs(arr, target)` that returns all unique pairs of numbers from the array that add up to the target value.",
   examples:"findPairs([1,2,3,4,5], 6) → [[1,5],[2,4]]\nfindPairs([1,1,2,4,5], 6) → [[1,5],[2,4]]",
   hint:"Use a Set to track seen numbers. For each number, check if (target - number) is in the set.",
   solution:`function findPairs(arr, target) {
  const seen = new Set();
  const pairs = [];
  const used = new Set();
  for (const num of arr) {
    const complement = target - num;
    const key = Math.min(num, complement) + ',' + Math.max(num, complement);
    if (seen.has(complement) && !used.has(key)) {
      pairs.push([complement, num]);
      used.add(key);
    }
    seen.add(num);
  }
  return pairs;
}`},
  {id:"C14",title:"Implement memoization",diff:"medium",topic:"Closures / Performance",
   desc:"Write a `memoize(fn)` function that caches the results of a function so that repeated calls with the same arguments return the cached result instead of recomputing.",
   examples:"const slowSquare = memoize(n => n*n);\nslowSquare(4); // computed: 16\nslowSquare(4); // cached: 16 (no re-computation)",
   hint:"Use a Map or object as cache. Key = stringified arguments. Return cached value if it exists.",
   solution:`function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}`},
  {id:"C15",title:"Sort array of objects by property",diff:"easy",topic:"Arrays / Sorting",
   desc:"Write a function `sortBy(arr, key)` that sorts an array of objects by a specified key in ascending order.",
   examples:`sortBy([{name:'Zara',age:22},{name:'Amit',age:19}], 'age')\n→ [{name:'Amit',age:19},{name:'Zara',age:22}]`,
   hint:"Use Array.sort() with a comparator that compares obj[key] values.",
   solution:`function sortBy(arr, key) {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}`},
  {id:"C16",title:"Implement throttle",diff:"medium",topic:"Async / Closures",
   desc:"Write a `throttle(fn, limit)` function that ensures fn is called at most once per `limit` ms, regardless of how many times it's invoked.",
   examples:"const throttledScroll = throttle(onScroll, 100);\n// Even if called 100 times, only fires once per 100ms",
   hint:"Use a boolean flag `lastRan`. If fn hasn't run recently, run it and set a timeout to reset the flag.",
   solution:`function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}`},
  {id:"C17",title:"Deep clone an object",diff:"medium",topic:"Objects / Recursion",
   desc:"Write a function `deepClone(obj)` that creates a true deep copy of an object (including nested objects/arrays) without using JSON.parse/JSON.stringify.",
   examples:"const a = {x:{y:1}}; const b = deepClone(a);\nb.x.y = 99; console.log(a.x.y); // still 1",
   hint:"Use recursion. Check if value is array or object and recursively clone. Handle primitives directly.",
   solution:`function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for (const key of Object.keys(obj)) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}`},
  {id:"C18",title:"Toggle dark mode with classList",diff:"easy",topic:"DOM",
   desc:"Write a JavaScript function `toggleDarkMode()` that toggles a 'dark-mode' class on the document body element.",
   examples:"// On first call: document.body.classList = 'dark-mode'\n// On second call: document.body.classList = '' (removed)",
   hint:"Use document.body.classList.toggle('dark-mode') — it adds if absent, removes if present.",
   solution:`function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// With a button:
document.getElementById('themeBtn')
  .addEventListener('click', toggleDarkMode);`},
  {id:"C19",title:"Email validation with regex",diff:"medium",topic:"Regex / Strings",
   desc:"Write a function `isValidEmail(email)` that returns true if the email is in a valid format (e.g. user@example.com).",
   examples:"isValidEmail('test@gmail.com') → true\nisValidEmail('invalid@') → false\nisValidEmail('no-at-sign') → false",
   hint:"Use a regex pattern that checks for: local part, @, domain, dot, and TLD.",
   solution:`function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}`},
  {id:"C20",title:"Fetch data with async/await and error handling",diff:"medium",topic:"Async / Fetch API",
   desc:"Write an async function `fetchUser(id)` that fetches a user from 'https://jsonplaceholder.typicode.com/users/{id}', returns the user's name, and gracefully handles errors.",
   examples:"await fetchUser(1) → 'Leanne Graham'\nawait fetchUser(9999) → 'User not found'",
   hint:"Use async/await with try/catch. Check response.ok before parsing JSON.",
   solution:`async function fetchUser(id) {
  try {
    const response = await fetch(
      \`https://jsonplaceholder.typicode.com/users/\${id}\`
    );
    if (!response.ok) return 'User not found';
    const user = await response.json();
    return user.name;
  } catch (error) {
    return 'Error: ' + error.message;
  }
}`},
];

window.JOSH_FRONTEND_OA_SET = {
  id: "frontend",
  label: "Frontend OA Practice",
  title: "Josh Technology - Frontend OA Practice",
  badge: "160 MCQs + 20 coding",
  quizNote: "Frontend OA V2 practice set covering 50 HTML, 50 CSS, and 60 JavaScript MCQs. Standard scoring: 1 point for every correct answer.",
  quizMaxCount: 160,
  scoreConfig: {correct: 1, wrong: 0, timerSeconds: 45, noNegativeFlag: null},
  subjectColors: {HTML: "html", CSS: "css", JavaScript: "js"},
  subjectLabels: {ALL: "All", HTML: "HTML", CSS: "CSS", JavaScript: "JavaScript"},
  subjectOrder: ["ALL", "HTML", "CSS", "JavaScript"],
  questions: MCQ.map(q => ({
    ...q,
    s: q.s === "JS" ? "JavaScript" : q.s,
    e: `Correct answer: ${q.o[q.a]}`
  })),
  codingChallenges: CODING
};
