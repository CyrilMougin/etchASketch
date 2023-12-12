gridContainer = document.createElement('div');
gridContainer.classList.add('container')
gridContainer.style.display = 'flex';
document.body.appendChild(gridContainer);

for (i=0;i<16;i++) {
    tmp = document.createElement('div');
    tmp.style.height = '50px';
    tmp.style.width = '50px';
    tmp.style.backgroundColor = 'red'
    tmp.style.border = '1px solid black';

    tmp.classList.add("colorBlock");
    gridContainer.appendChild(tmp);

}
