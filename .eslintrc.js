module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        jquery: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/no-children-prop': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 4,
                printWidth: 80,
                // bracketSpacing: true,
                arrowParens: 'avoid',
            },
        ],
    },
    globals: {
        env: true,
        $: true,
        axios: true,
    },
};
