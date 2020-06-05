var listLunch = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    
var z = listLunch.length
console.log(z)

var a = z +1

console.log(a)

var number = Math.floor(Math.random() * z ); 

console.log(number)

// var number = Math.floor(Math.random() * a +1); 

 

 var names = listLunch[number]

 var final = names + " is going to buy lunch today"


 // bmiCalculator



 
 function bmiCalculator (weight, height) {
    
    var x = weight / (height * height);
   
   
  if ( x < 18.5 ){
      var interpretation = "Your BMI is " + x + ", so you are underweight"
  }
  if ( x > 18.5 && x < 24.9 ){
      var interpretation = "Your BMI is " + x + ", so you have normal weight"
  } 
  if ( x > 24.9 ){
      var interpretation = "Your BMI is " + x + ", so you are overweight"
  }
   return interpretation;
}



  var bmi = bmiCalculator(0, 2); 
   console.log(bmi)


   //Fibonacci

   function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
      
        
       var output = []
       if (n === 1){
         output = [0]
       } else if (n === 2){
         output = [0,1]
       } else {
         output = [0,1]
         for ( var i = 2; i< n; i++){
           output.push(output[output.length -2] + output[output.length -1] )
         }
       }
        
        
        
        
        return output
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
        
    console.log(fibonacciGenerator(10))