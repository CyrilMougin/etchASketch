gridContainer = document.createElement('div');
gridContainer.classList.add('container')
gridContainer.style.display = 'flex';
gridContainer.style.flexWrap = 'wrap';
gridContainer.style.height = '408x';
gridContainer.style.width = '408px';

gridContainer.style.backgroundColor ='lightPink'
document.body.appendChild(gridContainer);

for (i=0;i<16;i++) {
    tmp = document.createElement('div');
    tmp.style.height = '100px';
    tmp.style.width = '100px';
    tmp.style.backgroundColor = 'lightGreen'
    tmp.style.border = '1px solid black';

    tmp.classList.add("colorBlock");
    gridContainer.appendChild(tmp);

}
