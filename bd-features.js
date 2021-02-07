// browser-device-features.js - detect a browser device's features using media queries
//                      and mouse|touch|pointer events

const BdFeatures = (function () {

  const WINDOW_XL = 'WINDOW_XL',
    WINDOW_LARGE = 'WINDOW_LARGE',
    WINDOW_MEDIUM = 'WINDOW_MEDIUM',
    WINDOW_SMALL = 'WINDOW_SMALL',
    WINDOW_XS = 'WINDOW_XS';

  let hasTouched = false,
    hasMoused = false,
    hasPointed = false;

  const hasMatchMedia = typeof window.matchMedia !== 'undefined';
  const hasWindowScreen = typeof window.screen !== 'undefined';

  function browserSupported () {
    return hasMatchMedia && hasWindowScreen;
  }

  function queryTest (query) {
    if (hasMatchMedia) {
      return window.matchMedia(query).matches;
    }
    return null;
  }

  const hasTouch = () => queryTest('(hover: none)');
  const canHover = () => queryTest('(hover: hover)');
  const hasPointer = () => {
    const qt = queryTest('(pointer: none)');
    return (qt === undefined) ? qt : !qt;
  };
  const hasFinePointer = () => queryTest('(pointer: fine)');
  const hasCoarsePointer = () => queryTest('(pointer: coarse)');
  const prefersLight = () => queryTest('(prefers-color-scheme: light)');
  const prefersDark = () => queryTest('(prefers-color-scheme: dark)');
  const noLightDarkPreference = () =>
    queryTest('(prefers-color-scheme: no-preference)');
  const isPortrait = () => queryTest('(orientation: portrait)');
  const isLandscape = () => queryTest('(orientation: landscape)');

  /**
   * detect Bootstrap window size
   * @return {string}
   */
  function windowSize () {
    const width = window.innerWidth;
    console.log('windowSize width:', width);
    if (width >= 1200) {
      return WINDOW_XL;
    }
    if (width >= 992) {
      return WINDOW_LARGE;
    }
    if (width >= 768) {
      return WINDOW_MEDIUM;
    }
    if (width >= 576) {
      return WINDOW_SMALL;
    }
    console.log('windowSize returning WINDOW_XS');
    return WINDOW_XS;
  }

  function screenHeight () {
    if (hasWindowScreen) { return window.screen.height; }
    return null;
  }

  function screenWidth () {
    if (hasWindowScreen) { return window.screen.width; }
    return null;
  }



  const userHasTouched = () => hasTouched;
  const userHasMoused = () => hasMoused;
  const userHasPointed = () => hasPointed;

  // detect first touch event
  window.addEventListener('touchstart', function touched () {
    hasTouched = true;
    window.removeEventListener('touchstart', touched, false);
  }, false);

  // detect first mousemove event
  window.addEventListener('mousemove', function moused () {
    hasMoused = true;
    window.removeEventListener('mousemove', moused, false);
  }, false);

  // detect first pointermove event
  window.addEventListener('pointermove', function pointerMoved () {
    hasPointed = true;
    window.removeEventListener('pointermove', pointerMoved, false);
  }, false);

  return {
    browserSupported,
    hasTouch,
    canHover,
    hasPointer,
    hasFinePointer,
    hasCoarsePointer,
    prefersLight,
    prefersDark,
    noLightDarkPreference,
    isPortrait,
    isLandscape,
    windowSize,
    screenHeight,
    screenWidth,
    userHasTouched,
    userHasMoused,
    userHasPointed,
    WINDOW_XS,
    WINDOW_SMALL,
    WINDOW_MEDIUM,
    WINDOW_LARGE,
    WINDOW_XL
  };
})();
