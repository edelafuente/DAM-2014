this.addEventListener('message', function(e) {
    var data = e.data;
    var num = data.number;
    var primos = [];

    var isPrime = function (numb) {
        if(numb < 2) return false;
        for (var i = 2; i < numb; i++) {
            if(numb%i===0)
                return false;
        }
        return true;
    };

    for(var j = 0; j <= num; j++){
        if(isPrime(j)){
            primos.push(j+' ');
        }
    }
    this.postMessage(primos);

}, false);