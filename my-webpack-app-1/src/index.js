import './style.css';
import bgImage from './1.jpg';
function components() {
    const el = document.createElement('div');
    el.innerHTML = 'hello xlj';
    el.classList.add('hello');
    const image = new Image();
    image.src = bgImage;
    el.appendChild(image);
    return el;
}
document.body.appendChild(components());