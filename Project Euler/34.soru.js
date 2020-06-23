var faktoriyel = [1,1,2,6,24,120,720,5040,40320,362880];

var toplam = 0;



for(var i = 3; i < 10000000; i++){

    var sayiString = String(i);

    var sayiUzunluk = sayiString.length;

    var araToplam = 0;

    for(var rakam = 0; rakam < sayiUzunluk; rakam++){



        araToplam += faktoriyel[parseInt(sayiString[rakam])];

    }

    if(araToplam == i){

        toplam += araToplam;

    }

}

console.log(toplam);