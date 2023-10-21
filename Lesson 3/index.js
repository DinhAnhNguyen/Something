const h1Elm = document.getElementById('title');
const wrapperElm = document.getElementById('wrapper-box')
const btn = document.getElementById('btn')
h1Elm.textContent = "MindX"

h1Elm.classList.add('small-text');

const arr1 = [0, 1, 2, 3, 4, 5]

const renderList = (arr) => {
    const arr2 = arr1.filter(item => item%2 !== 0);
    let child = wrapperElm.lastElementChild;
    while (child) {
        wrapperElm.removeChild(child);
        child = wrapperElm.lastElementChild;
    }
    arr.forEach((item) => {
        const divElm = document.createElement('div');
        divElm.classList.add('box')
        divElm.textContent = item;
        wrapperElm.appendChild(divElm);
    })
}

const handleFilterNumber = () => {
    const arr2 = arr1.filter(item => item%2 !== 0);
    renderList(arr2)
}

renderList(arr1);
btn.addEventListener('click', handleFilterNumber)

