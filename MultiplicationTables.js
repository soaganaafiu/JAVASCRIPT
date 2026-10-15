const prompt = require("prompt-sync")();

    let continues = true;

    while (continues){

        let number = Number(prompt("Enter a number:  "));

	        if (Number.isNaN(number)){

          		console.log("Enter a valid Number"); 
	
          			continues = true;
          					
          	} 

            else{

     	        for(let count = 1; count <= 12; count++){

          			let multiplication = number * count;

          				console.log(number + " x " + count + " = " + multiplication);

          				continues = false;
                }

     	break;
     
        }	
     			
    }



//if(Number.isNaN(number)){
//
//    console.log("Enter a valid number: ");
//
//}
//
//else{
//
//    for(let index = 1; index <= 12; index++){
//
//        let multiple = number * index;
//
//        console.log(number + " X " + index + " = " + multiple);
//    }
//
//}

