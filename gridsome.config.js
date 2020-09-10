// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'Gregory Devant - Portofolio',
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    plugins: [
      {
        use: 'gridsome-source-static-meta',
        options: {
          path: '~/data/*.json'
        }
      }
    ]
}
