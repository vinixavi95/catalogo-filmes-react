module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // 'semi': ['error', 'always'],
        // 'quotes': ['error', 'single'],
        // 'indent': ['error', 4],
        // 'coma-apacing': ['warn', {before: false, after: true }]
    }
};
