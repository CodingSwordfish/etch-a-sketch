document.addEventListener("DOMContentLoaded",(e)=>{
    createBoard(16)
})

function createBoard(size){
    
         let board = document.querySelector("#board");
        let squareBoxes = size * size;
        for(let i = 0; i< squareBoxes; i++){
            let styles = window.getComputedStyle(board);
            let width = parseInt(styles.width);
            let height = parseInt(styles.height);
            // let border = styles.border;
            let divs = document.createElement("div");
            
            divs.style.width = `${width/size}px`;
            divs.style.height = `${height/size}px`;
            
            board.appendChild(divs);
    
        }
       }
 
 





