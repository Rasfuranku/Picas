var generateRandomNumber = function(){
    var posibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9];
    var theNumber = [];
    var round = 10;
    
    var i = 0;
    while(i < 4){
        var index = Math.floor(Math.random() * (round - 0)) + 0;
        var digit = posibleNumbers[index];

        theNumber.push(digit);
        posibleNumbers.splice(index, 1);

        round--;
        i++
    }

    return theNumber;
}

var baseAttempts = function(){
    var attemp = hits= 0;
    var numberToGuest = generateRandomNumber();
    var baseAtt = []; // 3 positions
    console.log('numberToGuest: '+ numberToGuest);

    while(attemp < 3){
        baseAtt.push(generateRandomNumber());
        console.log(baseAtt);
        for(var i=0; i<baseAtt.length; i++){
            var picas = fijas = 0;
            for(var j=0; j<baseAtt[i].length; j++){
                if(numberToGuest.indexOf(baseAtt[i][j]) == -1){
                    console.log('0 picas, 0 fijas');
                    picas = fijas = 0;
                    hits += picas + fijas;
                }else if(numberToGuest.indexOf(baseAtt[i][j]) == j){
                    fijas++;
                    hits += picas + fijas;
                }else{
                    picas++;
                    hits += picas + fijas;
                }
                console.log("Picas:"+picas);
                console.log("Fijas:"+fijas);
            }
        }
        console.log('hits: '+hits);
        if(hits == 4){
            attemp = hits;
        }if(hits == 0){
            console.log("números eliminados");
            console.log(baseAtt[i])
            attemp++;
        }else{
            attemp++;
        }
    }
}

var checkPositions = function(){

}