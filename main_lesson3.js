const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const p = document.querySelector('.paraghraph')
console.log(html);
console.log(css);
console.log(js);
console.log(p);

const divs = document.querySelectorAll('div');
console.log(divs);

console.log(js.innerHTML);
js.innerHTML = 'phyton'

const div = document.getElementById('div');

console.log(div.className);
div.className = 'div-green';
div.classList.add('div-green');
const divP = document.getElementById('divP');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    divP.classList.toggle('hide');
});
const btnHTML = document.getElementById('btnHTML');
btnHTML.addEventListener('click', () => {
    html.style.fontSize = '60px'
});
const btnEV = document.getElementById('btnEV');
const sm = () => {
    alert('push btn')
};
const sm1 = () => {
    alert('push btn2')
};
//btnEV.onclick = sm;
btnEV.addEventListener('click', () => {
    sm();
    sm1()
})