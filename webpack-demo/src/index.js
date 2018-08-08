import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.json';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello','webpack'], ' ');
    element.classList.add('xljfont','hello');
    var myImg = new Image();
    myImg.src = Icon;
    element.appendChild(myImg);
    console.log(Data);
    return element;
}

document.body.appendChild(component());