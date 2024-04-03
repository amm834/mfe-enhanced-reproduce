// rsbuild.config.ts
import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {ModuleFederationPlugin} from '@module-federation/enhanced/rspack';

export default defineConfig({
    server: {
        port: 3000,
    },
    dev: {
        // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
        assetPrefix: 'http://localhost:3000',
    },
    tools: {
        rspack: (config, {appendPlugins}) => {
            appendPlugins([
                new ModuleFederationPlugin({
                    name: 'producer',
                    exposes: {
                        './button': './src/components/button.tsx',
                        './card': './src/components/card.tsx',
                    },
                    shared: ['react', 'react-dom'],
                }),
            ]);
        },
    },
    plugins: [pluginReact()],
});
