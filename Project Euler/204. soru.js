function bolenler (sayi){



    var bolenlerListe=[];



    for (i=2;i<=sayi;i++) {



        if(sayi%i==0){



            bolenlerListe.push(i);



        }



    }



    return bolenlerListe



}



function countPrimes (sayi) {



    var asalListe = [];





    if (sayi < 0) {



        return console.log("Girdiginiz sayi pozitif bir sayi olmak zorunda!")



    }



    if (sayi == 2 || sayi == 1 || sayi == 0) {



        return console.log("Girdiginiz sayidan kücük asal sayi bulunmamaktadir")



    }



    else {



        for (j = 2; j < sayi; j++) {



            if (bolenler(j).length == 1) {



                asalListe.push(j);



            }





        }

    }

    return asalListe;

}



var asallar100=countPrimes(100);



function hammingSayilari100(baslangic, kacinci, max) {



    if(baslangic > max) {

        return 0;

    }



    if(kacinci >= asallar100.length) {

        return 1;

    }



    var sayac = 0;

    while(baslangic <= max) {

        sayac += hammingSayilari100(baslangic, kacinci+1, max);

        baslangic *= asallar100[kacinci];

    }

    return sayac;

};



console.log(hammingSayilari100(1,0,Math.pow(10,9)))