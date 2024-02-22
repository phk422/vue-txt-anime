import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: [
      'types',
    ],
  },
  {
    rules: {
      'antfu/no-import-dist': 'off',
    },
  },
)
