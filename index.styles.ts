import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
}

body {
  margin: 0;
  line-height: inherit;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}


hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

abbr:where([title]) {
  text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

code,
kbd,
samp,
pre,
b,
strong {
  font-family: theme(
    "fontFamily.mono",
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace
  );
  font-size: 1em;
}

small,
sub,
sup {
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea,
b,
strong,
address,
cite,
dfn,
em,
i,
var,
mark,
q,
small,
sub,
sup,
th,
button,
select {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  font-style: inherit;
  text-decoration: none;
  text-align: inherit;
  border-radius: 0;
  text-transform: inherit;
  letter-spacing: inherit;
}

button,
select,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring,
*:focus,
*:-moz-focusring {
  outline: 0;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre,
fieldset,
legend,
ol,
ul,
menu,
dialog,
li,
code,
pre,
kbd,
samp,
b,
strong,
address,
cite,
dfn,
em,
i,
var,
del,
ins,
s,
u,
mark,
q,
small,
sub,
sup,
svg:not([fill]),
caption,
th,
button,
select,
table,
button {
  margin: 0;
  padding: 0;
}

li,
ol li,
ul li {
  list-style-type: none;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

[hidden],
script {
  display: none !important;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: theme("colors.gray.400", #9ca3af);
}

button,
[role="button"],
:disabled {
  cursor: pointer;
}

input[type="button"],
input[type="reset"],
input[type="submit"],
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}

button:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
input[type="submit"]:focus {
  outline: 0;
}

input::placeholder,
textarea::placeholder {
  color: inherit;
  opacity: 0.625;
}

*,
::before,
::after {
  min-width: 0;
  min-height: 0;
  background-position: center center;
  background-repeat: no-repeat;
  object-position: center center;
}

html {
  line-height: 1;
}

input[type="button"],
input[type="reset"],
input[type="submit"] {
  text-align: inherit;
  cursor: pointer;
}

code,
pre,
kbd,
samp {
  font-family: inherit;
}

b,
strong {
  font-weight: inherit;
}

address,
cite,
dfn,
em,
i,
var {
  font-style: inherit;
}

del,
ins,
s,
u {
  text-decoration: none;
}

mark {
  background-color: transparent;
  color: inherit;
}

q {
  quotes: "â€œ" "â€" "â€˜" "â€™";
}

q::before {
  content: open-quote;
}

q ::after {
  content: close-quote;
}
`;

export default GlobalStyles;
