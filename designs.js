//submitting the form with grid height, grid weight and color
document.getElementById("submit").addEventListener('click', function(){
    const gridHeight = document.getElementById("inputHeight").value;
    const gridWidth = document.getElementById("inputWidth").value;
    const pickedColor = document.getElementById("colorPicker").value;
    makeGrid(gridHeight,gridWidth,pickedColor);
});

/**
 * @description make a empty grid, and add eventlistener to cells of grid
 * @param {number} gridHeight 
 * @param {number} gridWidth 
 * @param {string} pickedColor 
 */
function makeGrid(gridHeight,gridWidth,pickedColor) {
    // if table is already present, remove it
    if(document.getElementById('grid') != null){
        document.getElementById('grid').remove();
    }
    // create a new table element
    let table = document.createElement('table');
    table.setAttribute('id','grid');

    // add cells with event listener to the cells of the table
    for (var i =0; i <gridHeight; i++){
        let tr = document.createElement('tr');
        for (var j =0;j<gridWidth;j++){
            let td = document.createElement('td');

            td.addEventListener('click', function(){
                td.style.backgroundColor = pickedColor;
            })

            td.addEventListener('dblclick',function(){
                td.style.backgroundColor = 'white';
            })
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById('body').appendChild(table);
};
