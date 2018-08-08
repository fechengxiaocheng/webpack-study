import printMe from './print';
function components() {
    var el = document.createElement('div');
    var btn = document.createElement('button');
    el.innerHTML = 'hello xlj 啊啊啊';
    btn.innerHTML = 'click me';
    btn.onclick = printMe;
    el.appendChild(btn);
    return el;
}
document.body.appendChild(components());