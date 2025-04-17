module.exports = {
    root: true,
    extends: ['plugin:react/recommended', 'prettier', 'universe/node'],
    plugins: ['react-hooks', 'react', 'jest', 'prettier', 'unused-imports'],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_|\\[_,',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: 'react**',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: 'src/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
                distinctGroup: false,
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/no-children-prop': 'off',
        'react/display-name': 'off',
        'react/jsx-key': 'warn',
        'no-use-before-define': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'no-console': 2,
        'spaced-comment': ['warn', 'always'],
        'flowtype/no-types-missing-file-annotation': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@babel/no-unused-expressions': ['warn', { allowTernary: true }],
        'react/jsx-boolean-value': 0,
        'react/jsx-curly-brace-presence': 0,
        '@typescript-eslint/ban-types': 0,
        'no-undef': 2,
        'import/no-duplicates': 1,
    },
    globals: {
        __DEV__: true,
        fetch: true,
    },
    env: {
        'jest/globals': true,
        es2020: true,
    },
    settings: {
        'import/ignore': ['react-native'],
    },
};
