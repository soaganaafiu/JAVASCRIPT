const prompt = require("prompt-sync")();

while(true){

    let number = Number(prompt("Enter a number between 1 - 20:  "));


        if (Number.isNaN(number)){

          		console.log("Enter a valid Value"); 
	
          			continues = true;

        }


        else if (number > 20){

                console.log("Enter a Valid Range Of Number: ");

                true;

        }


            else{

                for(let index = 1; index <= number; index++){

                    if(index % 2 == 0){

                        console.log("#   #   #   #");

                    }

                        else{

                            console.log("  #   #   #   #");

                        }

                        false;
                }

        break;

      }

}
