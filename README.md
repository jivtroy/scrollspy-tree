# Bootstrap ScrollSpy Tree

Bootstrap framework scrollspy tree that unfolds gradually as you navigate to a specific branch.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NPM](#npm)
   2. [Bun](#bun)
   3. [Deno](#deno)
   4. [PNPM](#pnpm)
   5. [Yarn](#yarn)
   6. [Nub](#nub)
   7. [Vlt](#vlt)
3. [Usage](#usage)
   1. [CDN](#cdn)
   2. [Local](#local)
   3. [Bundler](#bundler)
4. [Sponsors](#sponsors)
5. [Author](#author)
6. [License](#license)

## Compatibility

Library | Version
------- | -------
Bootstrap | >= 5.3 and < 6.0

## Installation

### NPM

```bash
npm install scrollspy-tree
```

### Bun

```bash
bun add scrollspy-tree
```

### Deno

```bash
deno add npm:scrollspy-tree
```

### PNPM

```bash
pnpm add scrollspy-tree
```

### Yarn

```bash
yarn add scrollspy-tree
```

### Nub

```bash
nub install scrollspy-tree
```

### Vlt

```bash
vlt install scrollspy-tree
```

## Usage

### CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ScrollSpy Tree</title>

    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/scrollspy-tree@1/dist/css/scrollspy-tree.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="row">
      <div class="col-lg-3">
        <div class="navbar bg-light navbar-expand" id="sidebar-scrollspy" data-bs-theme="light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav nav-tree nav-y-2 flex-column">
              <li class="nav-item show"><a class="nav-link active" href="#scrollspy-nav-item">Nav item</a>
                <ul class="navbar-nav nav-tree nav-y-2 ps-3 flex-column">
                  <li class="nav-item"><a class="nav-link font-2" href="#scrollspy-nav-subitem">Sub item</a>
                    <ul class="navbar-nav nav-tree nav-y-2 ps-3 flex-column">
                      <li class="nav-item"><a class="nav-link font-1" href="#scrollspy-nav-subitem1">Sub item 1</a></li>
                      <li class="nav-item"><a class="nav-link font-1" href="#scrollspy-nav-subitem2">Sub item 2</a></li>
                      <li class="nav-item"><a class="nav-link font-1" href="#scrollspy-nav-subitem3">Sub item 3</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown dropend dropdown-hover"><a class="nav-link dropdown-toggle" href="#scrollspy-dropdown" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#scrollspy-dropdown-item1">Menu item 1</a></li>
                  <li><a class="dropdown-item" href="#scrollspy-dropdown-item2">Menu item 2</a></li>
                  <div class="dropdown dropend dropdown-hover">
                    <li><a class="dropdown-item dropdown-toggle" href="#scrollspy-dropdown-item3" data-bs-toggle="dropdown">Menu item 3</a></li>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#scrollspy-dropdown-subitem1">Sub item 1</a></li>
                      <li><a class="dropdown-item" href="#scrollspy-dropdown-subitem2">Sub item 2</a></li>
                      <li><a class="dropdown-item" href="#scrollspy-dropdown-subitem3">Sub item 3</a></li>
                    </ul>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-9 scrollspy-tree" data-bs-spy="scroll" data-bs-target="#sidebar-scrollspy" style="overflow-y: scroll; max-height: 300px;">
        <div class="p-3 bg-primary-subtle border border-primary-subtle text-primary-emphasis">
          <div id="scrollspy-nav-item">
            <h2>Nav item</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-nav-subitem">
            <h2>Sub item</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-nav-subitem1">
            <h2>Sub item 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-nav-subitem2">
            <h2>Sub item 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-nav-subitem3">
            <h2>Sub item 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-dropdown">
            <h2>Dropdown</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-dropdown-item1">
            <h2>Dropdown item 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-dropdown-item2">
            <h2>Dropdown item 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-dropdown-item3">
            <h2>Dropdown item 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-dropdown-subitem1">
            <h2>Sub item 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-dropdown-subitem2">
            <h2>Sub item 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="scrollspy-dropdown-subitem3">
            <h2>Sub item 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/scrollspy-tree@1/dist/js/scrollspy-tree.umd.js"></script>
  </body>
</html>
```

### Local

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ScrollSpy Tree</title>

    <!-- CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/scrollspy-tree.min.css" rel="stylesheet">
  </head>
  <body>
    <!-- JS -->
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/scrollspy-tree.umd.js"></script>
  </body>
</html>
```

### Bundler

ESM import:

```js
import 'scrollspy-tree/css'
/* or */
import 'scrollspy-tree/dist/css/scrollspy-tree.min.css'

import 'scrollspy-tree'
```

CommonJS import:

```js
require('scrollspy-tree/css')
/* or */
require('scrollspy-tree/dist/css/scrollspy-tree.min.css')

require('scrollspy-tree')
```

CSS import:

```css
@import "scrollspy-tree/css";
/* or */
@import "scrollspy-tree/dist/css/scrollspy-tree.min.css";
```

## Sponsors

## Author

* [Dev](https://dev.to/jivtroy)
* [Medium](https://medium.com/@jivtroy)
* [YouTube](https://www.youtube.com/@jivtroy)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.