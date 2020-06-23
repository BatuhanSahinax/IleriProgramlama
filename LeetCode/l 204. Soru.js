function bolenler (sayi){

    var bolenlerListe=[];

    for (i=2;i<=sayi;i++) {

        if(sayi%i==0){

            bolenlerListe.push(i);

        }

    }

    return bolenlerListe

}

function countPrimes (sayi){

    var asalListe=[];



    if (sayi<0){

        return console.log("Girdiginiz sayi pozitif bir sayi olmak zorunda!")

    }

    if(sayi==2||sayi==1||sayi==0){

        return console.log("Girdiginiz sayidan kücük asal sayi bulunmamaktadir")

    }

    else{

        for(j=2; j<sayi;j++){

            if(bolenler(j).length==1){

                asalListe.push(j);

            }

        }

        console.log("Input: "+sayi)

        console.log("Output: "+asalListe.length)

        console.log("Explanation: There are "+asalListe.length+" prime numbers less than "+sayi+", they are "+asalListe)

    }

}

console.log(countPrimes(10))