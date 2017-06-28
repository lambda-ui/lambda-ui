import { configure } from '@storybook/react';

function loadStories() {
  const _require = require.context('../src', true, /.*\.story\.js/);
  _require.keys().forEach(_require);
}

configure(loadStories, module);
