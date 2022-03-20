//created a function to create a button
function Roundup() {
  //call the prompt again
let number = prompt ("Choose a decimal");
//log the result to the console 
console.log(Math.round(number));

}


//add the function to the button 
document.getElementById("myBtn").onclick = Roundup;

//code to take log answers to html 
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
      logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();








  

  
  



