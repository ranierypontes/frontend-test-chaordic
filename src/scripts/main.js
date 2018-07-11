import Common from './modules/common';
import Mask from './modules/mask';
import UrlsJson from './modules/urls';
import Shortener from './modules/shortener';

const availableModules = { Common, Mask, UrlsJson, Shortener };

window.modules = {};

$(() => {
  const htmlModules = $('[data-module]');

  // Loading htmlModules if they are in availableModules
  htmlModules.each((key, value) => {
    const mod = $(value).data('module');

    if (Object.prototype.hasOwnProperty.call(availableModules, mod)) {
      window.modules[mod] = new availableModules[mod]();
    } else {
      console.log(`The module "${mod}" does not exists.`);
    }
  });
});
