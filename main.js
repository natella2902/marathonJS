const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

//В каждой из них необходимо посчитать количество букв 
//"а" и вывести ту строку, в которой таких букв больше.


function getRow(firstRow, secondRow) {

  let firstCounter = 0;
  let secondCounter = 0;


  for (let i=0; i < firstRow.length; i++) {
    if (firstRow.charAt(i) === 'а') {
      firstCounter++;
    }
  }

  for (let i=0; i < secondRow.length; i++) {
    if (secondRow.charAt(i) === 'а') {
      secondCounter++;
    }
  }

  if (firstCounter > secondCounter) {
    return firstRow;
  } else {
    return secondRow;
  }  

}


//console.log(getRow(firstRow, secondRow)); // мама мыла раму


let input = prompt('Введите номер телефона');

function formattedPhone(phone) {
  return `${phone.charAt(0)}${phone.charAt(1)} (${phone.charAt(2)}${phone.charAt(3)}${phone.charAt(4)}) ${phone.charAt(5)}${phone.charAt(6)}${phone.charAt(7)}-${phone.charAt(8)}${phone.charAt(9)}-${phone.charAt(10)}${phone.charAt(11)}`;
}

alert( `Твой номер ${formattedPhone(input)}`); 
//console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90