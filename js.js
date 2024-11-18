const gridSize = 16;
const validWords = ['goku', 'vegeta', 'messi', 'cristianoronaldo', 'neymar', 'barella', 'bolaboladeouro', 'jiren', 'moro', 'gas', 'granola']

const upperCaseWords = validWords.map(word => word.toUpperCase());



/* criei uma variavel chamada grid, od ela representa?
    dogo q dentro tem um arry from significa aonde
    aonde tem um arry? comprimento: 16, cada um dos elemntos do arry
    será complemnto por uma uma string vazia, fill significa preencher
    tanto fill  quanto from quanto Map são metodo nativos do javascript
    são funções automaticas que os js faz para facilitar nosso trabalho 
*/
let grid = Array.from({length: gridSize}, () => Array(gridSize).fill(''))


//função p preencher as celulas vazias com letras aleotorias
function fillEmptyCells(){
    for(let row=0; row < gridSize; row++){
        for(let col=0; col < gridSize; col++){
            if(grid[row][col] === ''){

                //gera uma letra aleatoria A-Z
                grid[row][col] = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            }
        }
    }
}


//função p desenhar a grade do caça-palavra
function drawGrid(){
    const table = document.getElementById('puzzleGrid');
    table.innerHTML = '' //limpa a grade antes de desenhar
    grid.forEach((row, rowIndex) =>{
        const tr = document.createElement('tr');//tr é table row
        row.forEach((cell, cellIndex) => {
            const td = document.createElement('td');
            td.textContent = cell;
            td.dataset.row = rowIndex;
            td.dataset.col = cellIndex;
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })
}


function shufflwRords(){
    upperCaseWords.forEach(word => {
        let placed = false;
        while(!palavra){
            const vertical = Math.random() < 0.5;
            const rowStar = Math.floor(Math.random() * gridSize)
            const colStar = Math.floor(Math.random() * gridSize)
            const stepR = vertical ? 1 : 0;
            const stepC = vertical ? 0 : 1;
            let fits = true;



            for(let i = 0; i < word.length; i++){
                const r = rowStar + i * stepR;
                const c = colStarStar + i * stepC;


                if(r >= gridSize || c >= gridSize || (grid [r][c] !== '' &&  grid[r][c]  !== word[i])){
                    fits = false;
                    break;
                }
            }


            if(fits){
                for(let i = 0; i < word.length; i++){
                    const r = rowStar + i * stepR;
                    const c = colStar + i * stepC;
                    grid[r][c] = word[i];
                }

                placed = true;
            }
        }

    })
}