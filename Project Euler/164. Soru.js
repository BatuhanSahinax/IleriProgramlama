function siraliToplam9danKucuk(){



    var min = Math.pow(10,19);

    var max = Math.pow(10,20);

    var sayac=0;



    Dongu1:

        for( var i=min; i<max ; i++ ){

            var tempSayac=0;

            var minString = i.toString();



            Dongu2:

                for(var j=0;j<18;j++){



                    if(parseInt(minString[j])+parseInt(minString[j+1])+parseInt(minString[j+2])>=9){

                        break Dongu2;

                    }

                    else tempSayac++



                }

            if(tempSayac==18){

                sayac++

            }



        }

    return sayac;

}

console.log(siraliToplam9danKucuk());