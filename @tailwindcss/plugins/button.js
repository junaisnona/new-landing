const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({addComponents, theme}) {
    addComponents({
        '.btn': {
            borderRadius: theme('borderRadius.sm'),
        },
        '.btn-secondary': {
            backgroundColor: 'white',
            color: 'green',  
        },
        '.btn-primary': {
            backgroundColor: '#006400',
            color: 'white'
        },
        '.btn-outline': {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white'
        }
    })
})