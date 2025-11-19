---
layout: post

title: "Dart Bölüm: 1 | Dart'a Giriş"
subtitle: "Temel Dart yapıları"
excerpt: "Dart hakkında temel yapılar."
description_preview: Dart diline giriş ve temel yapılar.
date: 2025-11-18 17:00:00 +0300

categories: [Programlama Dilleri, Dart]
tags: [mobil programala, flutter, diller]
level: Başlangıç

# prev_note:
# prev_note_link:
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

## Giriş

Dart programlama dili Google tarafdında inşa edilmiş Flutter ile mobil programlama yapabilmek adına bir programlama dilidir.

Bu noktada bir **Hello, World** uygulaması başlatalım

```dart
void main () {
    print('Hello, Woeld!');
}
```

Dart bir `main` bloğu üzerinde işlevlerini yerine getirir. **main** bizim ana programımızı oluşturur ve bütün yapılar burada çalışmaktadır.

>**BİLGİ!** `void` anahtar kelimesi bu metodun değer dönmeyeceği anlamına gelmektedir. Ana program ise herhangi bir dönğş değeri (int, String... vb.) içermediğinden void ile belirtilmelidir.

## Değişkenler

Dart'ta değişken tanımlamak için en temel anahtar kelimemiz `var`'dır. Bu anahtar kelime atanan değere bağlı tipini oluştururu.

```dart
var isim = 'Abdullah Şahin'                  // var burada ^String^ değer atranmıştır 
var yil = 2025                               // var burada ^int^ tam sayı değer atranmıştır 
var pi = 3.14                                // var burada ^double^ ondalıklı değer atranmıştır 
var iller = ['Ankara', 'İstanbul', 'Samsun'] // var burada ^Liste^ değer atranmıştır 
var iller = {
    06: 'Ankara',                            // var burada ^Map^ değer atranmıştır
    34: 'İstanbul',                          // Map buurada key int, value String şeklindedir
    55: 'Samsun',
}           
```

Dart bu noktada *type-safe*(Tip Güvenliği) sağlamaktadır. **var** anahtar kelimemiz oluşturulduğu anda **dynamic** olarak oluşur. Atama gerçekleştiğinde ise tip ataması gerçekleşir.

Bununla beraber tanımlama yapılabilecek anahtar kelimlelerimiz vardır.

| Anahtar Kelime | Açıklama                                           |
| -------------- | -------------------------------------------------- |
| int age        | Tam sayı değeri tutmamızı sağlar                   |
| String name    | Karakter disizi değerliği tutmamızı sağlar         |
| double num     | Ondalıklı değeri tutmamızı sağlar                  |
| bool isValid   | İlkili (Doğru, Yanlış) değer tutmamızı sağlar      |
| Object list    | Bu genellikle bir adresten veri alırken kullanılır |

Farklı veri tiplerimiz de var ama daha sonra deyineceğiz.

Bu noktadan sonra şunu incelemek lazım Dart'ta *Null Safety* yani boş değer güvenliği. Dart bu konuda çok hassastır. Eğer bir değerin asla **null** yani boş olmayacağından eminseniz değişken tanımlarken anahtar kelimeeye `?` burakmanız gerekir.


```dart
var? name;
name = 'Dart';

print(name);
```

>**DİKKAT!** Bura `?` ile bu değere boş da olabilir demek istedik. Bu işlemi yaparrken çok dikkatli olmalıyız.

