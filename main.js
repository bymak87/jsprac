// 1: how could you rewrite the following to make it shorter?
if (foo) {
  bar.doSomething(el);
} else {
  bar.doSomethingElse(el);
}

foo === true ? bar.doSomethingElse(el) : bar.doSomethingElse(el);
==========================================================================

// 2: what is the faulty logic in the following code?
var foo = 'hello';

(function() {
  var foo = foo || 'world';
  console.log(foo);
})();

//has to do with scopes. logs world but global scope should make it say hello
=======================================================================================
// 3: given the following code, how would you override the value of the bar
// property for the variable foo without affecting the value of the bar
// property for the variable bim? how would you affect the value of the bar
// property for both foo and bim? how would you add a method to foo and bim to
// console.log the value of each object's bar property? how would you tell if
// the object's bar property had been overridden for the particular object?
var Thinger = function() {
  return this;
};

Thinger.prototype = {
  bar : 'baz'
};

var foo = new Thinger(),
    bim = new Thinger();

===============================================================================================
// 4: given the following code, and assuming that each defined object has a
// 'destroy' method, how would you destroy all of the objects contained in the
// myObjects object?
var myObjects = {
  thinger : new myApp.Thinger(),
  gizmo : new myApp.Gizmo(),
  widget : new myApp.Widget()
};
===============================================================================================
// 5: given the following array, create an array that contains the contents of
// each array item repeated three times, with a space between each item. so,
// for example, if an array item is 'foo' then the new array should contain an
// array item 'foo foo foo'. (you can assume the library of your choice is
// available)
var myArray = [ 'foo', 'bar', 'baz' ];

var myArray = [ 'foo', 'bar', 'baz' ];
var len = myArray.length;
var newArray = [];

for (var i = 0; i < len; i++){
    var word = myArray[i];
    newArray.push(word+ " " + word +" "+ word);
}

newArray;

======================================================================================================
// 6: how could you improve the following code?
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });

  $('.foo #bar').click();
});


+++

$(document).ready(function() {
  var x = $('.foo #bar');
  x.css('color', 'red', 'border', '1px solid blue').text('new text!');
  x.click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });

  x.click();
});
=========================================================================================================
// 7: what issues do you see with the following code? how would you fix it?
(function() {
  var foo;

  dojo.xhrGet({
    url : 'foo.php',
    load : function(resp) {
      foo = resp.foo;
    }
  });

  if (foo) {
    // run this important code
  }
})();
===============================================================================================================
// 8: how could you rewrite the following code to make it shorter?
(function($){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(jQuery);
+++++++++++++++++++
(function($){
  var classId = $(this).attr('class');
  //$(this+classID+"a");
  $('li.'+classID+'a').attr('title', 'i am ' + classId);
})(jQuery);


===========================================================================================================
// 9: how would you improve the following code?
for (i = 0; i <= 100; i++) {
  $('#thinger').append('<p><span class="thinger">i am thinger ' + i + '</span></p>');
  $('#gizmo').append('<p><span class="gizmo">i am gizmo ' + i + '</span></p>');
}

++++++++
for (i = 0; i <= 100; i++) {
  var className = $(this).attr('class')
  className.append("<p><span class="+className+">i am "+className "" + i + "</span></p>");

}
===============================================================================================
// 10: a user enters their desired tip into a text box; the baseTotal, tax,
// and fee values are provided by the application. what are some potential
// issues with the following function for calculating the total?
function calculateTotal(baseTotal, tip, tax, fee) {
  return baseTotal + tip + tax + fee;
}
++++++++++
function calculateTotal(baseTotal, tip, tax, fee) {
    if(tip === undefined || isNaN(tip)){
        tip = 0;
    }

  return baseTotal + tip + tax + fee;
}

calculateTotal(3,undefined, 3,4);

====================================================================================================
// 11: write code such that the following alerts "Hello World"
say('Hello')('World');

String.prototype.say = function () {
  alert(this);
}

var say = function(str1){
    return function (str2){
    alert(str1 +" "+ str2);
    };

};
say ("hello")("world");
