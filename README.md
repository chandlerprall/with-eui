**Boilerplate repo for using `@elastic/eui` from component sources**

## Running
To start the dev server execute `yarn start`. After the bundle is compiled, open [http://localhost:8040](http://localhost:8040) in your browser.

Hot module replacement is enabled but not configured so every JS or SCSS change will automatically recompile and reload the webpage.

## SCSS
Styles are included by `@import` statements to _src/index.scss_ or one of its dependencies. `EUI`'s mixins and variables and available are globally available, no need to import anything!   