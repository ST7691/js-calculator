function TriangelArea(){
  const inputBase = document.getElementById('input-base');
  const inputText = inputBase.value;
  const triangle = parseFloat(inputText);
  console.log(triangle);
//   hight
const inputHight = document.getElementById('input-hight');
const innerText = inputHight.value;
const hightArea = parseFloat(innerText);
console.log(hightArea);

const Area = 0.5 * triangle * hightArea;
console.log( 'Area of triangle', Area);

const TriangleSpanArea = document.getElementById('triangle-area');
TriangleSpanArea.innerText = Area;


}  
// console.log('hello');