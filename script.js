gridContainer = document.createElement('div');
gridContainer.classList.add('container')
document.body.appendChild(gridContainer);

document.querySelector('#gridSizeButton').addEventListener("click", function() {
    setGridSize(window.prompt());
});


function setGridSize(value) {
    removeAllChildNodes(gridContainer);
    for (i=0;i<value*value;i++) {
        tmp = document.createElement('div');
        tmp.classList.add("colorBlock");
        blockSize = 400 / value + 'px';
        tmp.style.height = blockSize;
        tmp.style.width = blockSize;
        tmp.addEventListener("mouseover", (e) => e.currentTarget.style.backgroundColor = 'lightpink' )
        gridContainer.appendChild(tmp);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}