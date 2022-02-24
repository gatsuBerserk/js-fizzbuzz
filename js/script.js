// Let's take the container present in HTML by id 
const boxNumber= document.getElementById("wrapper");

// For loop
for (i = 0; i <=100; i++) {
    // Condition One
    if ((i % 3 === 0) && (i % 5 === 0)){ 
        // Let's create a new div
        let newDiv = document.createElement("div");
        
        // Let's add the class ("box" we have previously created it in the css file)
        newDiv.classList.add("box", "m-2","d-flex","align-items-center","justify-content-center", ); 
        
        // In the created div we will add the information
        newDiv.innerHTML="FrizBuzz"; 
        
        //We take our constant, created at the beginning of the document, and insert the new div that will be inserted in the wrapper in HTML
        boxNumber.append(newDiv);
        console.log(i + " è multiplo di 3 e 5");
    
    // Condition Two
    }else if (!(i % 3 === 0) && !(i % 5 === 0)){ 
        
        //We repeat as we did for condition one  
        let newDiv = document.createElement("div");
        newDiv.classList.add("box", "m-2","d-flex","align-items-center","justify-content-center", ); 
        newDiv.innerHTML= i; 
        boxNumber.append(newDiv);
        console.log( i + " Non è multiplo ne di 3 ne di 5")
    } else if (i % 3 === 0){
        let newDiv = document.createElement("div");
        newDiv.classList.add("box", "m-2","d-flex","align-items-center","justify-content-center", ); 
        newDiv.innerHTML= "Friz"; 
        boxNumber.append(newDiv);
        console.log( i + " è multiplo di 3");
    } else{
        let newDiv = document.createElement("div");
        newDiv.classList.add("box", "m-2","d-flex","align-items-center","justify-content-center", ); 
        newDiv.innerHTML= "Buzz"; 
        boxNumber.append(newDiv);
        console.log( i + " è multiplo di 5");
    }
};