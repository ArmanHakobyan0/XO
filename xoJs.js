const vandakner = document.getElementById("vandakner");
let count = 0;
let result = "";
vandakner.addEventListener("click" , e => {
    if(e.target.className = "vandak"){
    
        if(count % 2 === 0){
            e.target.innerHTML = "x";
        }else{
            e.target.innerHTML = "o";
        }
        count++;
        win();
    }
});

const win = () => {
    const vandak = document.getElementsByClassName('vandak')
    const arr = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
    for(let i=0;i<arr.length;++i){
        if(vandak[arr[i][0]].innerHTML == "x" && 
           vandak[arr[i][1]].innerHTML == "x" &&
           vandak[arr[i][2]].innerHTML == "x" 
           ){
            result ="x";
            result1(result)
        }
        else if (vandak[arr[i][0]].innerHTML == "o" && 
                  vandak[arr[i][1]].innerHTML == "o" &&
                  vandak[arr[i][2]].innerHTML == "o" 
                ){
                    result = "o";
                    result1(result)
        }
    }
}
const contentWrapper = document.getElementById('content')
const modalResult = document.getElementById('result')
const overLay = document.getElementById('overlay')
const mbtnClose = document.getElementById('btn-close')

const result1 = winner => {
contentWrapper.innerHTML =`winner ${winner} `
modalResult.style.display = 'block';
}

const closeModаl= (     ) =>{
    modalResult.style.display = "none";
    location.reload();
}
    
overLay.addEventListener('click', closeModаl)
mbtnClose.addEventListener('click', closeModаl)
