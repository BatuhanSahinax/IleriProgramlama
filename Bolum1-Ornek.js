var sifre = prompt("Kontrol edilecek sifreyi girin:");
var uzunluk = sifre.length;
function uzunlukKontrol(str)
{
    var sayi= 8
    if(str.length >= sayi)
    {
        return true;
    }
    return false;
}
function kucukHarfKontrol(str)
{
    if(str.toUpperCase() != str)
    {
        return true;
    }
    return false;
}
function buyukHarfKontrol(str)
{
    if(str.toLowerCase() != str)
    {
        return true;
    }
    return false;
}

function sayiKontrol(str)
{
    return /\d/.test(str);
}

//sifre uzunlugu
if (uzunlukKontrol(sifre))
{
    //sifredeki kucuk harf
    if (kucukHarfKontrol(sifre))
    {
        //sifredeki buyuk harf
        if (buyukHarfKontrol(sifre))
        {
            //sifredeki sayi
            if (sayiKontrol(sifre))
            {
                alert("Sifre kullanima uygun.")
            }
        }
    }
}
if (!uzunlukKontrol(sifre))
{
    alert("Sifre 8 karakterden kisa.");
}
if (!buyukHarfKontrol(sifre))
{
    alert("Sifrede buyuk harf yok.");
}
if (!kucukHarfKontrol(sifre))
{
    alert("Sifrede kucuk harf yok.");
}
if (!sayiKontrol(sifre))
{
    alert("Sifrede sayi yok.");
}