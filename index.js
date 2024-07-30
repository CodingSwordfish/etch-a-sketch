document.addEventListener("DOMContentLoaded",(e)=>{
    let board = document.querySelector("#board");
    let reset = document.querySelector("#reset");  
})

function createBoard(size){
    
         
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
        let count = document.querySelectorAll("div").length;
          console.log(count)
       }
       createBoard(16)
       function getSize(){
        let input = prompt("Enter a number between 1 and 40");
        let message = document.querySelector("#message");
        if(input==""){
            message.textContent = "Please enter a number between 1 and 40";
            alert("Enter a number between 1 and 40")
        }else if(input<0 || input>40){
            message.textContent = "Provide a number between 1 and 40";
            alert("Enter a number between 1 and 40");
        }else {
            message.textContent = "You are ready to draw!"
            return input;
        }
       }
 
       let btn_popup = document.querySelector("#popup");
       btn_popup.addEventListener("click",(e)=>{
        board.innerHTML = "";
         let size = getSize();
          createBoard(size)
          
       })

reset.addEventListener("click",(e)=>{
    board.innerHTML = "";
    createBoard(16);
    alert("Board has been Reset, You are ready to Draw!");
})
      



