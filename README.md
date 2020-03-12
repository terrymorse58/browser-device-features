# browser-device-features

Detect features and capabilities of a browser.
---
***browser-device-features*** detects several features of a browser, including:

* Is the browser touch-capable?
* Can the user move a pointer?
* Does the pointer has a coarse or fine tip?
* Does the user prefer light or dark mode?
* What is the browser window's current size?
* What is the device's screen size?
* Has the user touched anything?
* Has the user moved a mouse?
* Has the user moved a pointer?

## Install
```shell script
  npm install browser-device-features
```
## Usage
```html
<script src="bd-features.js"></script>
<script>
    let touchDevice = BdFeatures.hasTouch();
    /* --- */
    let pointed = BdFeatures.userHasPointed();
</script>
```
Or simply use the CDN:
```html
<script
  src="https://cdn.jsdelivr.net/gh/terrymorse58/browser-device-features/bd-features.js">
</script>
```
---
## Functions

Function Name       | Returns   | Description
------------------- | --------- | -----------
browserSupported    | boolean   | *browser-device-features* supports this browser
hasTouch            | boolean   | touch is possible
canHover            | boolean   | hover is possible
hasPointer          | boolean   | pointing device exists
finePointer         | boolean   | pointer has fine point (mouse, trackpad, stylus)
coarsePointer       | boolean   | pointer has coarse point (touch screen) 
wantsLight          | boolean   | user prefers light mode
wantsDark           | boolean   | user prefers dark mode
lightOrDark         | boolean   | no user light-dark preference
windowSize          | string    | (see below)
screenHeight        | number    | height of the device screen
screenWidth         | number    | width of the device screen
touched             | boolean   | user has used touch
moused              | boolean   | user has moved mouse
pointed             | boolean   | user has moved pointer

### Constants returned by windowSize()

`windowSize()` returns sizes matching the **Bootstrap** window sizes. The
 following constants define the sizes:

Constant                  | Meaning
------------------------- | -------
BdFeatures.WINDOW_XS      | extra-small screen (width < 576px)
BdFeatures.WINDOW_SMALL   | small screen (576 ≤ width < 768px)
BdFeatures.WINDOW_MEDIUM  | medium screen (768 ≤ width < 992px)
BdFeatures.WINDOW_LARGE   | large screen (992 ≤ width < 1200px)
BdFeatures.WINDOW_XL      | extra- large screen (width ≥ 1200px)

## Browser Compatibility

***browser-device-features*** is compatible with the following browsers:

Browser            | Compatible Version
------------------ | ------------------
IE                 | (none)
Edge               | 12+ (2015)
Firefox            | 64+ (2018)
Chrome             | 41+ (2015)
Safari             | 9+ (2015)
Opera              | 28+ (2015)
iOS Safari         | 9+ (2015)
Android Browser    | 80+ (2020)
Opera Mobile       | 46+ (2016)
Chrome for Android | 80+

Functions that are not compatible with the browser
 will return *null*.
 
A current list of compatible browsers is maintained at
[caniuse.com](https://caniuse.com/#search=media%20query%20pointer).

## MIT License

Copyright (c) 2020 Terry Morse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
