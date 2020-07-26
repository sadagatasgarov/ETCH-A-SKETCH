
let number = prompt('sayi girin');


const container = document.querySelector('#container');
container.style='display:flex;  flex-direction:column;justify-conteny:center; text-align: center;top: 0px;left: 0px;width: 100%;height: 100%;padding: 2px 0px 0px;background: radial-gradient(circle, rgb(255, 75, 75) 0%, rgb(218, 63, 63) 100%)';
const button = document.createElement('button');
const divElement1 = document.createElement('div');
divElement1.className = 'divElement1'
divElement1.appendChild(button);
container.appendChild(divElement1);
const divElement2 = document.createElement('div');
divElement1.className = 'divElement2';
container.appendChild(divElement2);

function divCizim(number) {
    divElement2.style = `position:relative;margin:20%;display: grid;grid-template-columns: repeat(${number}, minmax(16px,auto));grid-template-rows: repeat(${number}, minmax(16px,auto));`
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement('div');
        div.className = 'divElement'
        div.style = 'width:auto ;border: 2px solid red; height: auto;background: white'
        divElement2.appendChild(div);
    }
}
divCizim(number);

const divselect = document.querySelectorAll('.divElement');
divselect.forEach((div) => {
    div.addEventListener('click', () => { div.style = 'background-color: blueviolet' });
    div.addEventListener('mouseover', () => { div.style = 'background-color: pink' });
    div.addEventListener('mouseover', () => { div.style = 'background-color: yellow' });
    div.addEventListener('mousedown', () => { div.style = 'background-color: black' });
    div.addEventListener('mouseup', () => { div.style = 'background-color: red' });
});