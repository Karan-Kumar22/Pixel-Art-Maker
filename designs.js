//submitting the form with grid height, grid weight and color
document.getElementById("submit").addEventListener('click', function(){
    var gridHeight = document.getElementById("inputHeight").value;
    var gridWidth = document.getElementById("inputWidth").value;
    makeGrid(gridHeight,gridWidth);
});

/**
 * @description make a empty grid, and add eventlistener to cells of grid
 * @param {number} gridHeight 
 * @param {number} gridWidth 
 */
function makeGrid(gridHeight,gridWidth) {
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
        tr.setAttribute('id', String(i));
        for (var j =0;j<gridWidth;j++){
            let td = document.createElement('td');
            td.setAttribute('id',String(i)+'*'+String(j));
            
            td.addEventListener('click', function(){
                td.style.backgroundColor = document.getElementById('colorPicker').value;
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