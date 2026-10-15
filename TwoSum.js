let numbers = [2,7,8,5];

let target = 9;

//let result = new Array(2); 

for(let index = 0; index < numbers.length; index++){

    for(let counter = index + 1; counter < numbers.length; counter++){

        if(numbers[index] + numbers[counter] == target){
//
//            result[0] = number[index];
//
//            result[1] = number[counter];

        console.log(index, counter);

        break;

    }

}



}
