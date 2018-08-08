import printMe from './print';
import './style.css';

/* function getComponents() {
    return import(/* webpackChunkName: "lodash" */'lodash').then(_ => {
        const el = document.createElement('div');
        const btn = document.createElement('button');
        _ = _.default;
        el.innerHTML = _.join(['hello xlj','sad'], ' ~~ ');
        el.classList.add('hello');
        btn.innerHTML = 'click me';
        btn.onclick = printMe;
        el.appendChild(btn);
        return el;
    }).catch(error => 'a error in here');
} */

// async
async function getComponents() {
    const el = document.createElement('div');
    const btn = document.createElement('button');
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    el.innerHTML = _.join(['hello xlj','sad'], ' ~~ ');
    el.classList.add('hello');
    btn.innerHTML = 'click me';
    btn.onclick = printMe;
    el.appendChild(btn);
    return el;
}
getComponents().then(component => {
    document.body.appendChild(component);
}); 


if (module.hot) {
    module.hot.accept('./print.js', function() {
        document.body.removeChild(element);
        getComponents().then(component => {
            document.body.appendChild(component);
        }); 
    })
}