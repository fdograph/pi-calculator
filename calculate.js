function calculate(){
    let maxRandom = 100000;
    let coprimes = 0;
    let cofactors = 0;
    let total = 0;


    while( total < 100000 ){
        let a = Math.floor((Math.random() * maxRandom) + 1);
        let b = Math.floor((Math.random() * maxRandom) + 1);

        let i = 2;

        while( true ){
            if( i === a || i === b ) {
                coprimes += 1;
                break;
            }
            else if( a % i === 0 && b % i === 0 ){
                cofactors += 1;
            }

            i++;
        }

        total++;
    }

    let pi = Math.sqrt( 6 / (coprimes/(cofactors + coprimes)) );
    console.log('PI es aproximadamente = ' + pi);

}


calculate();