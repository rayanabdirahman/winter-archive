const extendedTheme = require('../src/lib/theme/extendedTheme.ts');

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: extendedTheme,
  },
}