import printMe from './print';
import './style.css';
import _ from 'lodash';

function components() {
    var el = document.createElement('div');
    var btn = document.createElement('button');
    el.innerHTML = 'hello xlj 啊啊啊' + _;
    el.classList.add('hello');
    btn.innerHTML = 'click me';
    btn.onclick = printMe;
    el.appendChild(btn);
    return el;
}
let element = components(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('sss Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = components(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}