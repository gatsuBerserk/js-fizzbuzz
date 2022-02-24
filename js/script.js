// For loop
for (i = 0; i <=100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(i + " è multiplo di 3 e 5");
    }else if (!(i % 3 === 0) && !(i % 5 === 0)){
        console.log( i + " Non è multiplo ne di 3 ne di 5")
    } else if (i % 3 === 0){
        console.log( i + " è multiplo di 3");
    } else{
        console.log( i + " è multiplo di 5");
    }
};