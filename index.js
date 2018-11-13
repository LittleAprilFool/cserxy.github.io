import template from './src/homepage.pug'
import data from './src/homepage.js'
import style from './src/scss/common.scss'
import mixitup from 'mixitup'

let html = template({data:data})
document.querySelector("#app").innerHTML = html;
var mixer = mixitup('.container')