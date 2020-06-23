function islem(sayi) {

    if(sayi % 2 == 0) {

        return sayi / 2;

    }

    else {

        return (sayi * 3) + 1;

    }

}



function sayac(sayi) {

    var sayac = 1;

    while(sayi != 1) {

        sayi = islem(sayi);

        sayac++;

    }

    return sayac;

}



function cevap(sayi) {

    var max_terim = 0;

    var max_sayi;



    for(var i=1; i<sayi; i++) {

        var terimSayisi = sayac(i);

        if(terimSayisi > max_terim) {

            max_terim = terimSayisi;

            max_sayi = i;

        }

    }

    return max_sayi;

}



console.log(cevap(1000000))