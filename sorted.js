let a = [14, 41, 32, 11, 64 ,22, 8, 39];
{/**function Sort(){
    for(let i =0; i < a.length; i++){
        for(let j =0; j < a.length -i -1; j++){
            if(a[j] > a[j+1]){
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp;
            }
        }
     
    }
}


let b = [11 ,5 ,21, 42, 6, 10, 33, 37, 52, 19, 38, 41];

function ShellSort(){
    let n = b.length;
    for( let gap = Math.floor(n/2); gap >0; gap = Math.floor(gap/2)){
        for(let i = gap; i< n; i++){
            let temp = b[i];
            let j;

            for( j = i; j >= gap && b[j- gap] > temp; j -= gap){
                b[j] = b[j-gap];

               
            }
            b[j] = temp;
        }
    }
}


Sort(a);

ShellSort(b);
console.log("this is bubble sort ", a);

console.log("this is shell sort ", b);
 */}
//bubble sort


var fizz = [];
var count = 1;
function fizzBuzz(){
  
   
if(count % 3 === 0){
    fizz.push("Fizz");
} else if(count % 5 === 0){
    fizz.push('Buzz')
}else if(count%3 === 0 && count%5 ===0){
    fizz.push('FizzBuzz')
}else{
fizz.push(count);
}
count++;
  
console.log(fizz);


}

fizzBuzz()
