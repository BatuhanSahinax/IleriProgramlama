function taban7(sayi){

    var sonuc=[]

    while(sayi>=7||sayi<=-7){

        sonuc.push(sayi%7)

        sayi=Math.floor(sayi/7)

    }

    sonuc.push(sayi)

    sonuc.reverse()

    var asilsonuc=sonuc.join("")

    return asilsonuc

}



console.log("Input: 100")

console.log("Output: "+taban7(100)+"\n")

console.log("Input: -7")

console.log("Output: "+taban7(-7))