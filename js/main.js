// RECURSION - SUM OF DIGITS 
var numArray = [5, 2, 3];

function sumNonRecursive(numArray) {
  var n = 0;
  l = numArray.length;
  for (var i = 0; i < l; i++) {
    n = n + numArray[i];
  }
  return n;
}
// Sum of 2d Array 
// var arr1 = [];
// var x = [[2, 3, 4] , [5, 6, 7]];
// var y = [[1, 2, 3] , [4, 5, 6]];
// for (var i = 0; i < x.length ; i++) {
//   for (var j = 0; j = y.length; j++) {
//    z =  arr1.push([x[i] + y[j]]);
//   } //For x and y of the same length
//   console.log(z);
// }

var array1 = [[33, 22, 40], [41, 33, 41]];
var array2 = [[32, 22, 40], [42, 33, 41]];

for(var i = 0; i < array1.length; i++){
    for(var j = 0; j < array2[i].length; j++){
        console.log(array1[i][j] + array2[i][j]);
        
    }
}



function myFunction() {
  document.getElementById("demo").innerHTML = (sumNonRecursive(numArray));
}
console.log(sumNonRecursive(numArray));
// Butterfly Shuffle
var imgArray = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
var imgIndex = 0;

function rotateArray(imgArray) {
  var img = document.getElementsByClassName("image");
  var lastimg = imgArray.pop();
  imgArray.unshift(lastimg);
  for (var i = 0; i < imgArray.length; i++) {
    img[i] = imgArray[i];
    console.log(img[i]);
  }
}
// Basic Calculator
function cal() {
  document.example1.answer.value = eval(document.example1.calculator.value)
}
// Email-Validation
function emailcheck() {    
  var string1 = document.example.email.value;    
  if (string1.indexOf("@") == -1) {        
    console.log("Please input a valid email address!");        
    document.example.email.focus();    
  }
}
// $(function() {
//   var tabindex = 1;
//   $('input,select').each(function() {
//     if (this.type != "hidden") {
//       var $input = $(this);
//       $input.attr("tabindex", tabindex);
//       tabindex++;
//     }
//   });
// });
// var object = document.getElementById("11");
// object.setAttribute("aria-disabled",value);
// var value = object.getAttribute("aria-disabled");
// console.log(value);
// var elements = document.getElementsByClassName('aria-controls');
// aaria = elements.find('a[aria-expanded]').val('aria-expanded');
// document.getElementById("demo").innerHTML = aria(); 
// ARia Controls
console.log($('.aria-controls').find('a[aria-expanded]').attr('aria-expanded'));
console.log($('.aria-controls').find('a[aria-atomic]').attr('aria-atomic'));
console.log($('.aria-controls').find('a[aria-busy]').attr('aria-busy'));
// // Set Tab index dynamically by QuerySelector
// document.querySelectorAll('a,span').forEach(function (el, index) {
//   el.tabIndex = ++index;
// });
// // Set Tab index dynamically by Tags Name
// var links = document.getElementsByTagName("span");
// for (var i = 0; i < links.length; i++) {
//    links[i].tabIndex = i+1;
// }
// 2d Array of Matrix
var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var sum = 0;
//console.log(array.length);
for (var i = 0; i < array.length; i++) {
  //console.log(array[i]);
  for (var j = 0; j < array[i].length; j++) {
    console.log(array[j][i]);
    sum = array[i][j];
  }
}
console.log(sum);
// Keyboard Menu Navigation Left and right
// var x = document.getElementsByClassName("menu_navigation");
//       y = document.querySelectorAll('.menuitem');
//       var  i;
//       for(i=0;i<y.length;i++){
//        y[i].style.backgroundColor="red";
//       }
// var x = document.querySelectorAll(".example");
//     var i;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.backgroundColor = "red";
//     }
//         x.style.border = "10px solid red";
//  $('.menu_navigation').on('keypress keyup', function (e) {
//         if (e.keyCode == 39) {      
//            $(".menu_navigation").next().focus();
//               // console.log($('.menu_navigation li a[role="menuitem"]').html());
//         }
//         if (e.keyCode == 37) {      
//            $(".menu_navigation").next().focus();
//         }
//     }
// );
// $(document).ready(function(){
//     $(".menu_navigation li").next().css({"color": "red", "border": "2px solid red"});
// });
// $('.menu_navigation li > a.menu-item').on('keydown', function(e){
//        if(e.keyCode === 40 || e.which === 40){ //down arrow
//            var dropdown = $(this).next();
//            if(dropdown.length > 0){
//                e.preventDefault();
//                e.stopPropagation();
//                dropdown.find('a').first().focus();
//            }
//        }
//    });
// Keyboard Navigation
// function myFunction(event) {
//     var x = event.which || event.keyCode;
//     if (x == 27) {
//         alert ("You pressed the Escape key!");
//     }
// }
$("a.menuitem").keydown(function(e) {
  e.preventDefault();
  $('a.menuitem').find('.menuit').css({
    "color": "red",
    "border": "2px solid red"
  });
});
$("a.menuitem").trigger('keydown');
$("body").keydown(function(e) {
  if (e.which == 37) { // left     
    $(".previous a").trigger("click");
  }
  else if (e.which == 39) { // right     
    $(".next a").trigger("click");
  }
});
document.getElementsByClassName("demo").addEventListener("keydown", myFunction);