const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
//console.log(tabs);
//console.log(content);
const changeClass = el => {
    // console.log(el);
    for (let i = 0; i < tabs.children.length; i += 1) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active')
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target)
    for (let i = 0; i < content.length; i += 1) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');

        }
    }
    //console.log(currTab);
})