module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/app/components/**/*.stories.ts"
    // "../s"

  ],
  // "stories": ['../src/app/components/**/*.stories.ts'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  }
}