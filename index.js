
                        /*   statement  */

// const temparatureToday = 86;

// if (temparatureToday === 86){
//     console.log("cool")
// }else {
//  console.log("yahh!!!")
// }


                           /*  for loop  */

// const character = "a";
// const times = 50;
// let answer ="";

// for (i=0; i<= times; i++){
//  answer += character;
// }
// console.log(answer.length);


                          /*   function  declaration  */


// function addTwo(number){
//     return number +2 ;
// }

// const finalAnswer = addTwo(4);
// console.log(finalAnswer);



                          /*  arrow function    */


//  addTwo = number =>{ return number +2 ;}

// const finalAnswer = addTwo(4);
// console.log(finalAnswer);


            /* object*/ 

//  const person = {
//      name:"yasmeen",
//      place:"bangaloru",
//      age: 21,
//  }          
//  console.log(person.place) 



 /*
 <style>
  .color-box {
    background-color: limegreen;
    width: 100px;
    height: 100px;
  }
</style>
<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!" />
<script>
  const input = document.querySelector('.color-input');
  const paragraph = document.querySelector('.color-box');

  input.addEventListener("change", function() {
    paragraph.style.backgroundColor  = input.value;
  });
</script>
 
 */

                         /*destructuring of object */
      //  const data ={
      //    name:"yasmeen",
      //    age:'21'
      //  }
      //  const myName = data.name;
      //  const age = data.age;
      //  console.log(myName,age)

                        /* this will writen like this in ES6*/

      // const data ={
      //    name:"yasmeen",
      //    age:'21'
      //  }
      //  const {name,age}=data;
      //  console.log(name,age)


                         /*Hoisting */

      //  function hoisting
      // calculatedAge(1999);

      // function calculatedAge(year) {
      //   console.log(2021 - year);
      // }


      // variable hoisting
      // console.log("hmmm", ages);
      //  var ages = 23;

                          /*switch statement */

        //     let dice = 8;
        //  switch (dice){
        //    case 1:
        //      console.log("you got a one dice");
        //      break;
        //      case 2:
        //        console.log("you got two");
        //        break;
        //        default:
        //          console.log("noting");
        //  }
        
                           /*spread operator */

        // const first =[1,2,3];           
        // const second =[4,5,6];
        // const combine = [...first, 'a', ...second]
        // console.log(combine);

                              /*  filtering of an arry */


            // const first =[1,2,3,-1,-6]; 
            // const filtering = first.filter(value => value >= 0
            // );
                       
            
                            /*  mapping the above array  */

            // const items = filtering.map(value => "<li>" + value + "</li>")
            // console.log(items);