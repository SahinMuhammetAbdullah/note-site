---
layout: post

title: "CSS Temelleri"
subtitle: "Web Projeleri için temel CSS bilgileri."
excerpt: "Bu notta web sayfalarının dizaynı açısından ele alınmış notlardan oluşmaktadır."
description_preview: Bu format web teknolojilerinden biri olan CSS in temel bilimmesi gereken kavranmlar için hazırlanmış notlardan oluşmaktadır.
date: 2025-11-18 13:00:00 +0300

categories: [Web Teknolojileri, CSS]
tags: [Seçiciler, dizayn]
level: Başlangıç

prev_note: HTML Temelleri
prev_note_link: web teknolojileri/html/html-temell-bilgiler/
# next_note:
# next_note_link:
# related_posts:
#   - title:
#     url:
#   - title:
#     url:
#   - title:
#     url:
#   - title:
#     url:
#   - title:
#     url:

# image: 
#   path: /assets/img/my-featured-image.jpg
#   alt: Python kod örneği görseli
---

## Seçici Türleri

| Seçici Türü     | İşlevi                                                       |
| --------------- | ------------------------------------------------------------ |
| Komut           | Tek bir HTML komutunu seçer.                                 |
| Grup            | Birden fazla HTML komutunu seçer.                            |
| *               | Tüm HTML komutlarini seçer.                                  |
| #id             | Belli bir #id değerine sahip komutu seçer.                   |
| .class          | Belli bir .class değerine sahip komutlari seçer .            |
| Komut.class     | Belli bir .class degerine sahip belli bir Komut’u seçer.     |
| Pseudo-class    | Belli bir duruma sahip HTML komutunu seçer.                  |
| Pseudo-elements | Bir elemanin belli bir kismini secmeye yarayan seçiçilerdir. |
| Özellik         | Belli bir özellige sahip HTML komutunu seçer.                |

### Temel Seçici Ornekleri

| Seçici            | Açiklama                                                  |
| ----------------- | --------------------------------------------------------- |
| *                 | Her şey seçilecek.                                        |
| p                 | p tagi seçilecek.                                         |
| #ilk              | id degeri #ilk olan seçilecek.                            |
| .son              | class degeri .son olan secilecek.                         |
| h1.egik           | class degeri .egik olan h1 etiketleri secilecek.          |
| p strong          | p tag igindeki tüm strong taglari secilecek.              |
| nav #buton        | nav tagi içinde id degeri #buton tüm elemanlar seçilecek. |
| h1,h2,h3,h4,h5,h6 | h1-h6 arasi tüm taglar secilecek.                         |

### Karmasik Secici Ornekleri

| Seçici                 | Açiklama                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `.banner p`            | class degeri banner olan eleman icindeki p tagi secilcek.                           |
| `div > p`              | ebeveyni div olan tüm p taglari secilecek.                                          |
| `menu ul li`           | class degeri menu olan eleman içinde bulunan ul taginin içindeki li tagını seçer    |
| `nav.menu li`          | nav tag icinde bulunan ve class degeri menu olan eleman igindeki li tagi secilecek. |
| `body > p:first-child` | body tag icindeki ilk paragraf (ilk cocuk eleman).                                  |
| `body > p:last-child`  | body tagı icindeki son paragraf (son gocuk eleman).                                 |
| `:active`              | Aktif elemani sec                                                                   |
| `:after`               | Sonraki elemani seç                                                                 |

### Link ve Ozellik Seciciler

| Seçici                | Açiklama                                             |
| --------------------- | ---------------------------------------------------- |
| `a:link`              | henüz ziyaret edilmemis linkleri seçer.              |
| `a:visited`           | ziyaret edilmis linkleri secger.                     |
| `a:focus`             | klavye ile etkinlestirilmis linkleri seçer.          |
| `a:hover`             | uzerinde fare olan linkleri seçer.                   |
| `input[type]`         | `<input>` içinde type özelligine sahip olanlari seç. |
| `input[type=“text”]`  | `<input>` icinde type özelligi text olanlari seç.    |
| `img [title~=“kedi”]` | <img> tagindaki title özelligi kedi olanlari seç.    |

### Kısmi Seciciler

| Seçici         | Açiklama            | Örnek Kod                                                 |
| -------------- | ------------------- | --------------------------------------------------------- |
| ::first-line   | ilk satir.          | `p::first-line {color: red}`                              |
| ::first-letter | ilk harf.           | `p::first-letter {color: #ff0000; font-size: xx-large; }` |
| ::before       | Onceki              | `h1::before { content: url(smiley.gif); } `               |
| ::after        | Sonraki             | `h2::after { content: url(smiley.gif); }`                 |
| ::marker       | Liste madde imi     | `::marker { color: red; font-size: 23px; }`               |
| ::selection    | Secilen nesne rengi | `::selection { color: red; background: yellow; }`         |

### Paragraf İşlemleri

| Özellikler      | Alabilecegi Degerler                          | Açıklama                                                          |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| Font-family     | Times, Courier, Verdana,                      | Yazitipi                                                          |
| color           | renkadi, #rrggbb, rgb(rrr,ggg,bbb)            | Metin boyutunu degistirir. 1 em=16 px                             |
| font-size,      | smaller, small, medium, large, larger, px, em | Metinlerin daha ince, normal ya da kalin gésterir.                |
| font-weight     | lighter, normal, bold, bolder                 | Metinlerin normal ya da egik gériinmesini saglar.                 |
| font-style      | normal, italic                                | Metinlerin kiigiik harf boyutlarinda ama biiyiik harf             |
| font-variant    | normal, smal-caps                             | karakterleri ile goriinmesini saglar.                             |
| text-transform  | none, lowercase, uppercase,capitalize         | Metinleri biiyiik harfe veya kücük harfe cevirmeye yarar.         |
| text-decoration | none, underline, overline, line-through       | Metinlerin altini, istiiniéi veya Gzerini gizmek igin kullanilir. |
| letter-spacing  | normal, em                                    | Harfler arasindaki mesafe                                         |
| word-spacing    | normal, em                                    | Kelimeler arasindaki mesafe                                       |

### Metin İşlemleri

| Ozellik         | Alabilecegi Degerler         | Açıklama                                                              |
| --------------- | ---------------------------- | --------------------------------------------------------------------- |
| text-indent     | em, px                       | Paragrafin ilk satirdaki girintisini ayarlar.                         |
| ateqer-1 (1-40) | left, right, center, justify | Paragrafin sola, saga ortaya veya her iki kenara yaslanmasini saglar. |
| line-height     | em, px                       | Paragraftaki satirlar arasindaki mesafeyi ayarlar.                    |

### Listeleme İşlemleri

* none (madde imi yok)
* disk (daire)
* circle (ember)
* square (kare)
* decimal (numara)
* lower-alpha (kiigiik harf , a,b,c)
* lower-greek (yunanca kiiciik harf)
* lower-latin (latince kiigtk harf,a,b,c,)
* lower-roman (kiigiik roma rakami,i,ii,iii,iv)
* upper-alpha (biiyiik harf,A,B,C)
* upper-greek (yunanca biiyiik harf)
* upper-latin (latince biiyuk harf,A,B,C)
* upper-roman (büyük roma rakami,I, II, II,IV)
* url(“resim”) (madde imi yerine resim goriintilenir)

### Kutu Kenarları

| Ozellik      | Alabilecegi Degerler                                              | Açıklama                    |
| ------------ | ----------------------------------------------------------------- | --------------------------- |
| border-style | none, solid, dotted, dashed, double, groove, ridge, inset, outset | Kenar cizgi tipini belirler |
| border-width | px, thin, medium, thick                                           | Cizgi kalinligint ayarlar.  |
| border-color | renk_adi, #rrggbb, rgb(rrr,ggg,bbb)                               | Kenarlik rengini belirler.  |

### Kutular İçin Düzen Tablosu

![Bu bir kutu diyagramı gösteriyor.](/assets/images/postimages/kutular.png) 
> **CAPTION** Bu bir kutu diyagramı gösteriyor.

### Kutunun Sayfaya Konumlandirilmasi

| Ozellik ve Değer   | Açiklama                                                                                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position:static;   | Her kutunun varsayilan degeridir. Static degere sahip kutular HTML komutu nereye konulduysa orada bulunur.                                                                    |
| position:relative; | Kutunun bulundugu konumuna gore tasinmasini saglar.                                                                                                                           |
| position:fixed;    | Kutunun sayfa kenarlarina gre konumlanmasini saglar.                                                                                                                          |
| position:absolute; | Baska kutu iginde bulunan kutulari kontrol etmek icin kullanilir. iginde bulundugu kutuya gore Ustten, sagdan, alttan ve soldan mesafeler verilerek kutunun konumu ayarlanir. |

### Kutudan Tasan Iceriginin Ayarlanmas!

| Ozellik ve Değer  | Açiklama                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| overflow:visible; | Varsayilan olarak bu deger kullanilir. Eger igerik kutu igine sigmazsa tasan kisim alttan devam eder ve ziyaretciye gésterilir.      |
| overflow:hidden;  | icerik kutu icine sigmazsa tasan kisim ziyaretciye gosterilmez.                                                                      |
| overflow:scroll;  | içerik kutu igine sigmazsa tasan kisim ziyaretciye gésterilmez ama bir kaydirma cubugu ile tasan igerigin goriintiilenmesi saglanir. |
| overflow:auto;    | Eger taşma olursa kaydirma cubugu güsterilir ve tasan içerik kaydirma cubugu ile görüntilenebilir.                                   |

### Kutularda Golge Olusturma

| Değer    | Açiklama                                        |
| -------- | ----------------------------------------------- |
| none     | Varsayilan degerdir. Gölge olmaz.               |
| h-shadow | Gélgenin yatay boyutu.                          |
| v-shadow | Gélgenin dikey boyutu.                          |
| blur     | Gélgenin kenarini belirlenen boyutta yumusatir. |
| color    | Gélge rengi.                                    |
| inset    | Gélgeyi nesnenin i¢ tarafina yapar.             |

### Temel Renk Komutları

* `red`, `black`, `blue`
* `rgb(0,0,0)`
* `Opacity` (saydamlık)

---

## Semantik Sayfa Duzeni Etiketleri


| Değer       | Açıklama                                                                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<article>` | Yorum, haber, forum gönderisi, blog gönderisi, müzik veya video gibi içerikleri kapsar.                                                                   |
| `<section>` | Genellikle benzer konuya sahip birden fazla `<article>` etiketini barındırır.                                                                             |
| `<header>`  | Bir sayfanın, makalenin veya bölümün başlık bilgisini kapsar.                                                                                             |
| `<nav>`     | Sayfa içine veya sayfa dışına link vermek için oluşturulan menüleri kapsar.                                                                               |
| `<aside>`   | Sayfaların sol ya da sağ kenarında bulunan menü v.b. içeriği barındıran bölümdür.                                                                         |
| `<footer>`  | Herhangi bir sayfanın, makalenin, bölümün veya menünün en altında bulunur ve genellikle en yakın içeriğin iletişim ve telif hakkı bilgilerini barındırır. |
| `<figure>`  | Fotoğraf, şekil, illüstrasyon gibi içerikleri ve bu içeriklerle ilgili başlık bilgisini barındırır.                                                       |

---
 
#### .HTML

```html
<body>
    <div id="container">
        <header id="logo">
            <!-- Buraya başlık bilgileri gelecek -->
        </header>
        <nav id="anamenu">
            <!-- Buraya ana menü gelecek -->
        </nav>
        <section id="icerik">
            <article>
                <!-- Buraya içerik 1 gelecek -->
            </article>
            <article>
                <!-- Buraya içerik 2 gelecek -->
            </article>
        </section>
        <aside id="yanmenu">
            <!-- Buraya yan menü gelecek -->
        </aside>
        <footer id="altmenu">
            <!-- Buraya telif bilgileri gelecek -->
        </footer>
    </div>
</body>
```
#### .CSS

```css
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}
#container{
    border: deeppink solid 3px;
    width: 90%;
    margin: auto;
}
#logo{
    border: green dashed 1px;
    width: 90%;
    height: 50px;
}
#anamenu{
    border: black dashed 1px;
    width: 90%;
    height: 50px;
}
#icerik{
    border: yellow dotted 1px;
    width: 70%;
    min-height: 500px;
    becround-color: gray;
}
#yanmenu{
    border: blue solid 1px;
    width: 30%;
    min-height: 500px;
    becround-color: white;
    float: left;
}
#altmenu{
    border: yellow dashed 1px;
    width: 100%;
    min-height: 50px;
    becround-color: gray;
    float: left;
}
```
---

### Tepkisel Web sayfası oluşturma
1. Adım `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
2. Ölçü birimleri (sık kullanılanlar)
    * Absulude
        * px: (piksel)
        * pt: (punto)
    * Relative
        * % : (yüzde)
        * em: (oran)
3. Nesne sığdırma
   * object-fit:
        * none        : Bovut degistirmez.
        * fill        : Varsayilan deger.
        * contain     : En-boy orant korunarak iginde bulundugu nesneye gore boyut degistirir.
        * cover       : En-boy orant korunarak i¢inde bulundugu nesneye gore boyut degistirir, kutu içine sigmak icin resim kirpilir.


### Izgara Tabanli Sayfa Tasarim! (Grid View)

![Izgara Tabanli Sayfa Tasarim](/assets/images/postimages/izgara.png)
> **CAPTION** Izgara Tabanli Sayfa Tasarim.

### CSS Kod Sorgusu (Media Query)
```css
@media only screen and (max-width: 400px) {
    body {
        background-color: yellow;
    }
}
```
### Tepkisel Sayfa Oluşturma Adımları
1.  HTML Sayfasinin Kodlanması
    ```html 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
2. Kutu Genisliginin Sabitlenmesi
    ```css
        *{
            box-sizing: border-box;
            padding: 0px;
            margin: 0px;
        }
    ```
3. Sütun CSS Kodlarinin Yazilmasi
    ```css
    /* (100/12)=8.33 ==> bir sütun genisligi */
    /* sütun sayisi ve sayfa genisligi yüzdesi */
    .Col-1 {width: 8.33%; }
    .col-2 {width: 16.66%; }
    .col-3 {width: 25%;}
    .Col-4 {width: 33.33%; }
    .col-5 {width: 41.66%; }
    .col-6 {width: 50%;}
    .Col-7 {width: 58.33%; }
    .Col-8 {width: 66.66%; }
    .col-9 {width: 75%; }
    .Col-10 {width: 83.33%; }
    .Col-11 {width: 91.66%; }
    .col-12 {width: 100%; }
    ```
4. Sütunlarin Sola Yaslandirilmasi
    ```css
        /* “col-" ile basglayan tim siniflara uygulansin */
        [class*="col-"] {
            float: left;
            padding: 15px;
            border: 1px solid red;
        }
    ```
5. Satirlarin Temizlenmesi
    ```css
    /*Yan yana satır gelmesin diye yazılıyor*/
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
    ```
6. Küçük Ekranlarla Uyum
    ```css
    /* Cep telefonlarinda her kutu %100 genislikte olsun */
    @media only screen and (max-width: 768px) {
        [class*="col-"] { width: 100%; }
    }
    ```
7. Tepkisel Resim
    ```css
    img{
        width: 100%;
        height: auto;
    }

    ```
8. Satir ve Kutularin Olusturulması
    ```html
    <div id="row1" class="row">
        <div class="col-2">
            LOGO
        </div>
        <div class="col-10">
            MENU
        </div>
    </div>
    ```

