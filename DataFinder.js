{/** it takes a single argument data, an array of integers

it returns a new function that is called find

it returns a new function that is called find

find takes 3 arguments: minRange(integer), maxRange(integer)
and value(integer). it performs the follwing:

it searches for the value in the data array int he 
inclusive range [minRange - maxRange]
using 0-based indexing. if value is found in the given range, it
returns true. otherwise it returns false


if minRange or maxRange is beyond an end of the array, throws an errorobject
with the message of 'Invalid range'*/}


function dataFinder(data){

  return function find(minRange, maxRange, value){
    if(maxRange > data.length-1 && data.length === 0){
        throw new Error('Invalid Range');
    }

    for(let i= minRange; i<= maxRange; i++){
        if(data[i] === value){
            return true;
        }
    }
    return false;
  };

}


