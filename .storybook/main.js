module.exports = {
    "stories": [
      "../src/**/*.stories.tsx"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-styling"
    ],
    "framework": "@storybook/react",
    "staticDirs": ['../public']
  }