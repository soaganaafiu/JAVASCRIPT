console.log("\t \t \t Multiplication Table", end = "   ");

console.log(" ");
console.log(" ");

multiple = 1;


    for(let counter = 1; counter <= 10; counter += 1){

        console.log(counter, end="\t");

    }


console.log("");
console.log("_"* 38);
console.log(" ");




for(let count = 1; count <= 10; count += 1){

    console.log(count, end="|\t");

        for(let number = 1; number <= 10; number++){

            multiple = count * number;

            console.log(multiple, end="\t");

        }

    console.log("");

}


