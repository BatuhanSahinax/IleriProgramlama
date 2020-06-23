function palindromMu (sayi){

    var uzunluk = sayi.length;

    if(uzunluk === 1){

        return true;

    }

    if(sayi[0] === sayi[uzunluk-1]){

        if(uzunluk === 2){

            return true;}



        return palindromMu(sayi.substr(1,uzunluk-2));

    }

    return false;

};



function islem (){

    var enYuksek = 1;

    for(var sayi1 = 100; sayi1 < 1000; sayi1++){

        for(var sayi2 = sayi1; sayi2 < 1000; sayi2++){

            if(sayi1*sayi2 > enYuksek){

                if(palindromMu((sayi1*sayi2).toString())){

                    enYuksek = sayi1*sayi2;

                }

            }

        }

    }

    return enYuksek;



}



console.log(islem())