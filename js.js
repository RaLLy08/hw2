"use strict";
/*
.Все коды можно проверить через привязанный html
*/
/////////////////////////////////////////////////////////////////////////////
function _1HW() {
  let num1, num2, result;
  num1 = Number(document.getElementById('n1').value);
  num1 = parseInt(num1);
  num2 = Number(document.getElementById('n2').value);
  if (num1%2==0) {
    result = num1*num2;
  } else {
    result =num1+num2;
  }
    //innerHTML
  document.getElementById('out1').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _2HW() {
  let x, y, result;
  x = Number(document.getElementById('n3').value);
  //x = parseInt(x);
  y = Number(document.getElementById('n4').value);

  result = (x>0&&y>0) ? '1четверть':
    (x<0&&y<0) ? '3четверть':
    (x>0&&y<0) ? '4четверть':
    (x<0&&y>0) ? '2четверть':"";

  document.getElementById('out2').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _3HW() {
  let num1, num2, num3, result;
  num1 = Number(document.getElementById('n5').value);
  num2 = Number(document.getElementById('n6').value);
  num3 = Number(document.getElementById('n7').value);
  let possitiveNums = []
  let nums = []
  result = 0
  nums.push(num1,num2,num3)
  for (var i = 0; i < nums.length; i++) {
    if (nums[i]>0){
      result+=nums[i];
    }
  }
  document.getElementById('out3').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _4HW() {
  let num1, num2, num3, mult, sum, result;
  num1 = Number(document.getElementById('n8').value);
  num2 = Number(document.getElementById('n9').value);
  num3 = Number(document.getElementById('n10').value);
  mult = num1*num2*num3;
  sum = num1+num2+num3;
  if (sum>mult){
    result = sum+3;
  } else {
    result = mult+3;
  }
  document.getElementById('out4').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _5HW() {
  let sco, result;
  sco = Number(document.getElementById('n11').value);
  result = (sco>0&&sco<=19) ? 'F':
    (sco>19&&sco<=39) ? 'E':
    (sco>39&&sco<=59) ? 'D':
    (sco>59&&sco<=74) ? 'C':
    (sco>74&&sco<=89) ? 'B':
    (sco>89&&sco<=100) ? 'A':'что то не так';
    document.getElementById('out5').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _6HW() {
  let i, result
  result = 0
  i = 0
  while (i<100) {
    i++;
    if (i%2==0) {
      result+=i;
    }
  }
  document.getElementById('out6').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _7HW(){
  let num, i,  result;
  num = Number(document.getElementById('n12').value);
  let dividers =[];
  i=0
  for (i; i<num; i++) {
    if (num%i==0) {
      dividers.push(1)
    }
}
  if (dividers.length<3){
    result = "простое";
  }else {
    result = "не простое";
  }
  document.getElementById('out7').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _8HW(){
  let num, i, j1, j2, result;
  num = Number(document.getElementById('n13').value);
  if (num<0){num=-1*num};
  i=1
  result = 0
while (result==0) {
  j1= i*i; i++;
  j2= i*i;
if (j1<=num&&j2>=num) {
  if ((num-j1)<=(j2-num)) {
    result=i-1;
    }else {
      result=i;
    }
  }
}
  document.getElementById('out8').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _9HW(){
  let num, i, n, result;
  let f = 1;
  num = Number(document.getElementById('n14').value);
for (n = 1; n<=num; n++) {
  f=f*n;
}
  result = f
  document.getElementById('out9').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _10HW(){
  let num, result;
  num = String(document.getElementById('n15').value);
  result = Number(num[0])+Number(num[1])+Number(num[2]);
  document.getElementById('out10').innerHTML = result;
}
/////////////////////////////////////////////////////////////////////////////
function _11HW(){
  let num;
  num = Number(document.getElementById('n16').value);
  let result = ''
for (var i = String(num).length-1; i >= 0; i--) {
  result = result+String(num)[i];
}
  document.getElementById('out11').innerHTML = result;
  }
/////////////////////////////////////////////////////////////////////////////
function _12HW() {
  let arr = [3,2,10,23,4,1,12,20],
   maxEl = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (maxEl < arr[i]) {
    maxEl = arr[i];
  }
}
alert(maxEl);
}
//////////////////////////////////////////////////////////////////////////////
function _13HW() {
  let arr = [3,2,10,23,4,1,12,20],
   minEl = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (minEl > arr[i]) {
    minEl = arr[i];
  }
}
alert(minEl);
}
//////////////////////////////////////////////////////////////////////////////
function _14HW() {
  let arr = [3,2,10,23,4,1,12,20],
   minEl = arr[0], id;
  for (let i = 0; i < arr.length; i++) {
    if (minEl>arr[i]) {
      minEl=arr[i];
      id = i
    }
  }
  alert(id);
}
//////////////////////////////////////////////////////////////////////////////
function _15HW() {
  let arr = [3,2,10,23,4,1,12,20],
   maxEl = arr[0], id;
  for (let i = 0; i < arr.length; i++) {
    if (maxEl<arr[i]) {
      maxEl=arr[i];
      id = i
    }
  }
  alert(id);
}
//////////////////////////////////////////////////////////////////////////////
function _16HW() {
  let arr = [3,2,10,23,4,1,12,20], id, sum = 0;
  for (let i = 0; i< arr.length; i++) {
    if (arr[i]%2==0&&i>1) {
      sum =arr[i]+sum;
    }
  }
  alert(sum);
}
//////////////////////////////////////////////////////////////////////////////
function _17HW() {
  let arr = [3,2,10,23,4,1,12,20], id, n=0;
  for (let i = 0; i< arr.length; i++) {
    if (arr[i]%2!=0) {
      n+=1
    }
  }
  alert(n);
}
//////////////////////////////////////////////////////////////////////////////
function _18HW() {
  let arr = [3,2,10,23,4,1,12,20],
   invArr = [],
   arrLen = arr.length ;
  for (arrLen; arrLen >= 0; --arrLen) {
    invArr.push(arr[arrLen-1]);
   }
   alert(invArr);
}
//////////////////////////////////////////////////////////////////////////////
function _19HW() {
  let arr = [3,2,10,23,4,1,12,20],
   invArr = [],
   arrLen = arr.length,
   arrHalfLen = arrLen/2, i=0;
  for (arrHalfLen; arrHalfLen <= arrLen ; arrHalfLen++) {
    invArr.push(arr[arrHalfLen]);
    }
  for (i; i <= arr.length/2 ; i++) {
    invArr.push(arr[i]);

    }
    alert(invArr);
}
//////////////////////////////////////////////////////////////////////////////
function _22HW () {
   function sqrt(num){ if (num<0){num=-1*num};
     let i, j1, j2, result;
     i=1
     result = 0
   while (result==0) {
     j1= i*i; i++;
     j2= i*i;
   if (j1<=num&&j2>=num) {
     if ((num-j1)<=(j2-num)) {
       result=i-1;
       }else {
         result=i;
       }
      }
   }
   return(result)
   }

   let formula, x1, x2, y1, y2, distance;
   x1 = Number(document.getElementById('x1').value);
   y1 = Number(document.getElementById('y1').value);
   x2 = Number(document.getElementById('x2').value);
   y2 = Number(document.getElementById('y2').value);
   formula = ((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
   if (formula==0){
     distance = 0;
   } else {
     distance = sqrt(formula);
   }

   document.getElementById('out20').innerHTML = distance  ;
}












//3
//4
//5































//
