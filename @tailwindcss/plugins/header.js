const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({addComponents, theme}) {
    addComponents({
        '.header': {
            width: theme('width.full')
        },
        '.header-body': {
            display: 'flex',
            justifyContent: 'ju'
        },
        '.nav-body > *': {
            margin: '0px 10px 0px 10px',
            backgroundColor: 'transparent'
        },
        '.nav-body > select': {
            border: 'none',
            outline: 'none',
            width: '80px'
        }
    })
})
