import React from './react.production.min.js'
// import { render } from 'react-dom'

import { name } from './constants.js'

// import '../css/style.css'

class Cls {
    constructor() {
        this.name = name
    }

    num = 1

    do() {
        document.body.innerText += this.name + this.num
    }
}

const cls = new Cls()
cls.do()

const t = <h1>Hello, world!</h1>
console.log(t)

// render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );
