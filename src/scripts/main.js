import Common from './modules/common';
import Mask from './modules/mask';

const availableModules = { Common, Mask };

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
