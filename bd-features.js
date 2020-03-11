// browser-device-features.js - detect a browser device's features using media queries
//                      and mouse|touch|pointer events

const BdFeatures = (function () {

  const SCREEN_XL = 'SCREEN_XL',
    SCREEN_LARGE = 'SCREEN_LARGE',
    SCREEN_MEDIUM = 'SCREEN_MEDIUM',
    SCREEN_SMALL = 'SCREEN_SMALL',
    SCREEN_XS = 'SCREEN_XS';

  let hasTouched = false,
    hasMoused = false,
    hasPointed = false;

  function browserSupported () {
    return typeof window.matchMedia !== 'undefined';
  }

  function queryTest (query) {
    if (!browserSupported()) {
      return null;
    } else {
      return window.matchMedia(query).matches;
    }
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

  /**
   * detect Bootstrap window size
   * @return {string}
   */
  function windowSize () {
    if (queryTest('(min-width: 1200px)')) {
      return SCREEN_XL;
    } else if (queryTest('(min-width: 992px)')) {
      return SCREEN_LARGE;
    } else if (queryTest('(min-width: 768px)')) {
      return SCREEN_MEDIUM;
    } else if (queryTest('(min-width: 576px)')) {
      return SCREEN_SMALL;
    } else {
      return SCREEN_XS;
    }
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
    windowSize,
    userHasTouched,
    userHasMoused,
    userHasPointed,
    SCREEN_XS,
    SCREEN_SMALL,
    SCREEN_MEDIUM,
    SCREEN_LARGE,
    SCREEN_XL
  };
})();
