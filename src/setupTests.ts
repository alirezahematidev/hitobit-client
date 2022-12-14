// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import React from "react";

// eslint-disable-next-line no-console
console.log("Current React Version:", React.version);

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useLayoutEffect: jest.requireActual('react').useEffect,
// }));

/* eslint-disable global-require */
if (typeof window !== "undefined") {
  global.window.resizeTo = (width, height) => {
    //@ts-ignore
    global.window.innerWidth = width || global.window.innerWidth;
    //@ts-ignore
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event("resize"));
  };
  global.window.scrollTo = () => {
    //
  };
  // ref: https://github.com/ant-design/ant-design/issues/18774
  if (!window.matchMedia) {
    Object.defineProperty(global.window, "matchMedia", {
      value: jest.fn((query) => ({
        matches: query.includes("max-width"),
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  }

  // Fix css-animation or rc-motion deps on these
  // https://github.com/react-component/motion/blob/9c04ef1a210a4f3246c9becba6e33ea945e00669/src/util/motion.ts#L27-L35
  // https://github.com/yiminghe/css-animation/blob/a5986d73fd7dfce75665337f39b91483d63a4c8c/src/Event.js#L44
  window.AnimationEvent =
    window.AnimationEvent ||
    (() => {
      //
    });
  window.TransitionEvent =
    window.TransitionEvent ||
    (() => {
      //
    });
}

window.matchMedia = function () {
  return {
    matches: false,
    media: "",
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};
