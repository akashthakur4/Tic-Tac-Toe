let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true; //playerX, Player0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("The box was clicked");
    // box.innerText="abcd";
    if (turn0 === true) {
      box.innerText = "0";
      box.style.color="black";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

// let showDraw=()=>{
//   let count=0;
//   for(box of boxes){
//     if(box.innerText !=""){
//       count++;
//     }
//     if(count===9){
//       msg.innerText=`The Match is a Draw`;
//       msgContainer.classList.remove("hide");
//     }
//   }
// }

let resetGame=()=>{
  turn0=true;
  enableBoxes();
}

let disableBoxes=()=>{
  for(box of boxes){
    box.disabled=true;
  }
}

let enableBoxes=()=>{
  for(box of boxes){
    box.disabled=false;
    box.innerText="";
    msgContainer.classList.add("hide");
  }
}

let showWinner=(winner)=>{
    msg.innerText=`congratulation, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

let checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos0Val = boxes[pattern[0]].innerText;
      let pos1Val = boxes[pattern[1]].innerText;
      let pos2Val = boxes[pattern[2]].innerText;
  
      // Ensure all three positions are filled and have the same value
      if (pos0Val != "" && pos1Val != "" && pos2Val != "") {
        if (pos0Val === pos1Val && pos1Val === pos2Val) {
          // console.log("winner",pos0Val);
          // return;  // Stop after finding the first winner that's why this return statement
          showWinner(pos0Val);
          // showDraw();
        }
      }
    }
  };

  resetBtn.addEventListener("click", resetGame);
  newGameBtn.addEventListener("click", resetGame);
  
