let birthDate = document.getElementById("date-birth");
let luckyNumber = document.getElementById("num-lucky");
let bttnHandler = document.getElementById("bttn");
let outPut = document.getElementById("txt-area");


function birthdayLuckyCalculater(sum, luckyNumber) {
  if (sum % luckyNumber.value) {
    outPut.innerHTML = "Yuppy you are damn lucky!!";
  } else {
    outPut.innerHTML = "Sorry you are not so lucky!!";
  }
}

function birthdayLuckyChecker() {
  dob = birthDate.value;
  sum = addAllNumbers(dob);
  if (sum && dob) {
    birthdayLuckyCalculater(sum, luckyNumber.value)
  } else {
    outPut.innerHTML = "Invalid!!";
  }



}
function addAllNumbers(dob) {

  dob = dob.replaceAll("-", "");
  sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
    return sum
  }

}


bttnHandler.addEventListener('click', birthdayLuckyChecker);