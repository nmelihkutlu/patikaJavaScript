# SQL - patika.dev - Soru ve Cevapları
>**[patika.dev](https://app.patika.dev/courses/javascripthtml) platformu HTML öğrenme amaçlı soruların cevaplanması projesidir.** \
> **Profil için tıklayınız: [app.patika.dev/nmelihkutlu](https://app.patika.dev/nmelihkutlu)**


![](https://github.com/nmelihkutlu/patikaJavaScript/blob/main/patikaJavaScript.png)



[Ödev1](#ödev-1)

## Ödev 1

### Soru
Javascript Saat ve Karşılama
Eveet geldik JavaScript'in ilk ödevine, öyle heyecanlıyız ki çocuklar gibi şen ve neşeli, gözlerimizi dört açtık içimizde kelebekler ben annemi çok seviyorum yaşasın 23 Nisan! Neyse bu kadar pıtırcıklık yeter, hadi işe koyulalım. Sizlerden aşağıda gösterdiğimiz gibi bir ekran yapmanızı istiyoruz. Proje dosyalarına erişmek için [buraya](https://drive.google.com/drive/folders/1lghWp2-iPxySOsYxTYoE-mIvvC2waI3g?usp=sharing) tıklayınız.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/odev1/figures/clock.gif)

Basitçe sizden girişte isminizi isteyip sonra bu ismi karşılama ekranına yerleştirerek o anki saati ve günü gösteren bir ekran. Yapması oldukça kolay ve zevkli!

Burada bizim verdiğimiz ile sınırlı kalmak zorunda değilsiniz, hatta hayal gücünüzü çalıştırarak yeni şeyler üretirseniz daha mutlu oluruz!

Hepinize başarılar ve kolay gelsin.



### Cevap
**Dosya için tıklayınız (odev1/js/clock.js): [index.html](https://github.com/nmelihkutlu/patikaJavaScript/blob/main/odev1/index.html)**

clock.js dosyası:
```html
let isim = prompt("Adınızı yazınız:")
document.querySelector("#myName").innerHTML = isim

function showTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.querySelector("#myClock").innerHTML = dateTime;
}

setInterval(() => {showTime();}, 1000);

```


