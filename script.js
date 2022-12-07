let birthDate = document.getElementById("date-birth");
let luckyNumber = document.getElementById("num-lucky");
let bttnHandler = document.getElementById("bttn");
let outPut = document.getElementById("txt-area");


function birthdayLuckyChecker(dt){
  var dt=birthDate.value;
  var luckynumber=luckyNumber.value;
  if(dt&&luckynumber){
    if(luckynumber>0){
      final(dt)
    }else{
      outPut.innerHTML="please enter positive number"
    }
    
  }else{
    outPut.innerHTML="please enter both fields"
  }
}

function final(dt){
  sum=0;
  dt=dt.replaceAll("-","");
  for(let i=0;i<dt.length;i++){
    sum=sum+Number(dt[i]);
    var luckynumber=luckyNumber.value;
    if(sum%luckynumber===0){
      outPut.innerHTML="Yuppy you are a lucky person"
    }else{
      outPut.innerHTML="sorry but you are cursed"
    }
  }
}

bttnHandler.addEventListener('click', birthdayLuckyChecker);