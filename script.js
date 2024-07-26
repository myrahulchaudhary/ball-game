const howTOPlay=document.querySelector("#how-to-play");
const rules=document.querySelector("#rules");
const selects=document.querySelectorAll(".select");
const gameHistory=document.querySelector("#game-history")
const gameResult=document.querySelector("#result")
const playAgain=document.querySelector("#restart")
let flag=true;
let ball=21;
howTOPlay.addEventListener("click",()=>{
    if(flag){
        rules.style.height="220px"
    }
    else{
        rules.style.height="0px"
    }
    flag=!flag;
})
let para=document.createElement("p")
let para1=document.createElement("p")
let para2=document.createElement("p")
let para3=document.createElement("p")
let para4=document.createElement("p")
selects.forEach((select)=>{
    let val=0;
    document.querySelector("#one").addEventListener("click",()=>{
        val=1;
    })
    document.querySelector("#two").addEventListener("click",()=>{
        val=2;
    })
    document.querySelector("#three").addEventListener("click",()=>{
        val=3;
    })
    document.querySelector("#four").addEventListener("click",()=>{
        val=4;
    })
select.addEventListener("click",()=>{
        if(val>0 && val<=4){
            if(val>ball){
                para4.innerHTML="balls not available";
                gameHistory.append(para4)
            }
            else{
            para.innerHTML="you pick "+val+" ball";
            para1.innerHTML="computer pick "+(5-val)+" ball";
            ball=ball-5;
            if(ball<=0){
                para2.innerHTML="you peak the last ball";
                gameResult.prepend(para2)
                gameResult.setAttribute("class","px-8 py-4 flex flex-col items-center justify-center gap-4 border-black  shadow-transparent rounded-lg bg-gradient-to-r from-slate-800 to-slate-600 min-w-[80%] md:min-w-[40%] min-h-[30vh] absolute top-[31%] left-[50%] -translate-x-2/4 -translate-y-2/4 scale-100")
            }
            else{
                para2.innerHTML="Remaining balls is "+ball;
                para3.innerHTML="choose again"
                gameHistory.appendChild(para);
                gameHistory.appendChild(para1);
                gameHistory.appendChild(para2);
                gameHistory.appendChild(para3);
            }
           
            }
        }
        else{
            let para=document.createElement("p")
            para.innerHTML="Please choose between 1-4";
            gameHistory.appendChild(para);
        }
    
})
playAgain.addEventListener("click",()=>{
    window.location.reload();
})
})