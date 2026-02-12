let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');

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

reset.addEventListener("click", restart);

function restart(){
    c = 0;
    f = 0;
    for (let i of boxes){
        i.disabled = false;
        i.innerHTML = "";
    }
}


f = 0;
c = 0;
for (let i of boxes){

    if (c == 7 && f == 0){
        alert("Tie");
        setTimeout(restart(),500);
    };
        
    i.addEventListener("click", ()=> {
    c%2==0 ? i.innerHTML = 'X': i.innerHTML = 'O';
    i.disabled = true;

    setTimeout(checkwin, 500);
    
    c++;

        });


};

function checkwin(){
    for (let pat of winPatterns){
        pos1 = boxes[pat[0]].innerText;
        pos2 = boxes[pat[1]].innerText;
        pos3 = boxes[pat[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3){
                f = 1;
                alert("Winner is " + pos1);
                Displock();
                restart();
        }
    }
    }

}

function Displock(){
    for (let i of boxes){
        i.disabled = true;
    }; 
};
