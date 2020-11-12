var temperature = 60;

if( temperature < 0) {

    console.log("Stay inside");

} else if(temperature < 30) {
    console.log("Wear a coat and a hat");

} else if( temperature < 50){
    console.log("Wear a coat");
}

else if (temperature > 50 && temperature === 55){

        console.log("It's very hot");

    }

else if (temperature > 50 || temperature === 55 ) {

    console.log("It's extremely hot, looks like someone is going to get burnt");


} else {
    console.log("Just pants and vest");

}

//locigal operators && (AND) || (OR) ! (NOT)