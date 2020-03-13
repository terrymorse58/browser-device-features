/*!
  bdf-test.js - test all of the `browser-device-features` functions
  Copyright 2020 by Terry Morse
  MIT License
 */

const BdfTest = (function () {

  const methods = {
    'browserSupported': 'this browser supports all test functions',
    'hasTouch': 'device has touch screen',
    'canHover': 'hover is possible (mouse, trackpad)',
    'hasPointer': 'pointing device exists',
    'hasFinePointer': 'pointer has fine point (mouse, trackpad, stylus)',
    'hasCoarsePointer': 'pointer has coarse point (touch screen)',
    'prefersLight': 'user prefers light mode',
    'prefersDark': 'user prefers dark mode',
    'noLightDarkPreference': 'no user light-dark preference',
    'isPortrait': 'display is in portrait orientation',
    'isLandscape': 'display is in landscape orientation',
    'windowSize': 'Bootstrap window size',
    'screenHeight': "device's screen height",
    'screenWidth': "device's screen width",
    'userHasTouched': 'user has touched the screen',
    'userHasMoused': 'user has moved mouse',
    'userHasPointed': 'user has moved pointer'
  };

  /**
   * return array of function results
   * @return {[{name,value,meaning}]}
   */
  function testAll () {
    let results = [];

    for (const [name, meaning] of Object.entries(methods)) {
      results.push({
        name,
        value: BdFeatures[name](),
        meaning
      });
    }
    return results;
  }

  return {
    testAll
  };

})();
