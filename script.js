gridContainer = document.createElement('div');
gridContainer.classList.add('container')
document.body.appendChild(gridContainer);


for (i=0;i<16;i++) {
    tmp = document.createElement('div');
    tmp.classList.add("colorBlock");
    tmp.addEventListener("mouseover", (e) => e.currentTarget.style.backgroundColor = 'green' )
    gridContainer.appendChild(tmp);

}
