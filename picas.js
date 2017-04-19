var getNumber = function(){

}
var generateRandomNumber = function(){
    var posibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9];
    var theNumber = [];
    var round = 9;
    var digit;
    
    // for(var i=0; i<4; i++){
        var i = 0;
    while(i < 4){
        digit = Math.floor(Math.random() * (round - 0)) + 0;
        var index = posibleNumbers.indexOf(digit);

        if(index > -1){
            theNumber.push(digit);
            posibleNumbers.splice(index, 1);
            i++;
        }else{
            digit = Math.floor(Math.random() * (round - 0)) + 0;
        }
        round--;
    }

    console.log(theNumber);
    return theNumber;
}