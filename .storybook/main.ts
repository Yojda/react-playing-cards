import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  staticDirs: ["../src/public"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    // Find and disable the default SVG rule
    const existingRules = config.module!.rules! as any[];
    
    existingRules.forEach((rule) => {
      if (rule?.test instanceof RegExp && rule.test.test(".svg")) {
        rule.exclude = /\.svg$/i;
      }
    });

    // Push SVGR at the end
    existingRules.push({
      test: /\.svg$/i,
      use: [{ loader: "@svgr/webpack", options: { exportType: "default" } }],
    });

    return config;
  },
};

export default config;