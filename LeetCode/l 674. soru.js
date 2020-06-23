function countSegments(s) {



    var sayac =1;



    if (s==" "){

        return 0;

    }



    for(var i=0; i<s.length; i++){

        if(s[i]==" "){

            sayac++;

        }

    }





    return sayac;

};



console.log(countSegments("Hello, my name is John"));