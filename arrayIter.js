//Add random values to array
function getRandomValues(length, max) {
  let randomValues = [];
  for (let i = 0; i < length; i++) {
    let val = Math.floor(Math.random() * max);
    randomValues.push(val);
  }
  //// kalo pake cara ini saya masih belum terlalu paham

  // randomArray = (length, max) => [...new Array(length)]
  //     .map(() => Math.round(Math.random() * max));
  return randomValues;
}

//Extracts numbers at odd index
function getOddValues(valueArray) {
  let oddArray = [];
  for (let position in valueArray) {
    if (position % 2 !== 0) {
      oddArray.push(valueArray[position]);
    }
  }
  return oddArray;
}

//Extracts even numbers
function getEvenValues(valueArray) {
  let evenArray = [];
  for (let position in valueArray) {
    if (position % 2 === 0) {
      evenArray.push(valueArray[position]);
    }
  }
  return evenArray;
}

//Gets the smallest number
function getMinValue(valueArray) {
  //initiate variable to store the smallest number
  let smallest = 100;
  for (let number of valueArray) {
    if (number < smallest) {
      smallest = number;
    }
  }
  return smallest;
}

//Gets the largest number
function getMaxValue(valueArray) {
  //initiate variable to store the largest number
  let largest = 0;
  for (let number of valueArray) {
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}

//Add all of the numbers in the array
function calculateTotal(valueArray) {
  let total = 0;
  for (let number of valueArray) {
    total += number;
  }
  return total;
}

let allValues = getRandomValues(100, 50);
let oddValues = getOddValues(allValues);
let evenValues = getEvenValues(allValues);


let oddMin = getMinValue(oddValues);
let evenMin = getMinValue(evenValues);

let oddMax = getMaxValue(oddValues);
let evenMax = getMaxValue(evenValues);

let oddTotal = calculateTotal(oddValues);
let evenTotal = calculateTotal(evenValues);

let oddAverage = oddTotal / oddValues.length;
let evenAverage = evenTotal / evenValues.length;

//Print all variables into
console.log("min ganjil: " + oddMin);
console.log("min genap: " + evenMin);
console.log("max ganjil:" + oddMax);
console.log("max genap: " + evenMax);
console.log("total ganjil: " + oddTotal);
console.log("total genap: " + evenTotal);
console.log("rata-rata ganjil: " + oddAverage);
console.log("rata-rata genap: " + evenAverage);
console.log('\n');

//Compares min value
if (oddMin > evenMin){
  console.log("Nilai min ganjil lebih besar")
}
else if (evenMin > oddMin){
  console.log("Nilai min genap lebih besar");
}
else{
  console.log("Nilai min genap dan ganjil sama");
}

//Compares max value
if (oddMax > evenMax){
  console.log("Nilai max ganjil lebih besar");
}
else if (evenMax > oddMax){
  console.log("Nilai max genap lebih besar");
}
else{
  console.log("Nilai max genap dan ganjil sama");
}

//Compares total
if (oddTotal > evenTotal){
  console.log("Ganjil memiliki total lebih besar");
}
else if (evenTotal > oddTotal){
  console.log("Genap memiliki total lebih besar");
}
else{
  console.log("Total ganjil dan genap sama");
}

//Compares average
if (oddAverage > evenAverage){
  console.log("Rata-rata ganjil lebih besar");
}
else if (evenAverage > oddAverage){
  console.log("Rata-rata genap lebih besar");
}
else{
  console.log("Rata-rata genap dan ganjil sama");
}
