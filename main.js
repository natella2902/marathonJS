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


console.log(getRow(firstRow, secondRow)); // мама мыла раму