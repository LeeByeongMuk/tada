module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        jquery: true,
    },
    parser: '@typescript-eslint/parser',
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
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    plugins: ['react', 'prettier', '@typescript-eslint'],
    ignorePatterns: ['node_modules/'],
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/no-children-prop': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                tabWidth: 4,
                useTabs: false,
                semi: true,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                arrowParens: 'avoid',
            },
        ],
    },
    // globals: {
    //     env: true,
    //     $: true,
    //     axios: true,
    // },
};
