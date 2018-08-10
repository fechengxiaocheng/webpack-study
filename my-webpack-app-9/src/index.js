import './style.css';

async function getComponents() {
    const el = document.createElement('div');
    const btn = document.createElement('button');
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    el.innerHTML = _.join(['hello xlj','happy'], ' ~~ ');
    el.classList.add('hello');
    btn.innerHTML = 'click me';
    btn.onclick =  e => import(/* webpackChunkName: "print" */ './print.js').then(module => {
        const printMe = module.default;
        printMe();
    });
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