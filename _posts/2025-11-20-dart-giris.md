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

Bu noktada bir **Hello, World** uygulaması başlatalım:

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

Dart bu noktada *type-safe* (Tip Güvenliği) sağlamaktadır. **var** anahtar kelimemiz oluşturulduğu anda **dynamic** olarak oluşur. Atama gerçekleştiğinde ise tip ataması gerçekleşir.

Bununla beraber tanımlama yapılabilecek anahtar kelimlelerimiz vardır.

| Anahtar Kelime | Açıklama                                           |
| -------------- | -------------------------------------------------- |
| int age        | Tam sayı değeri tutmamızı sağlar                   |
| String name    | Karakter disizi değerliği tutmamızı sağlar         |
| double num     | Ondalıklı değeri tutmamızı sağlar                  |
| bool isValid   | İlkili (Doğru, Yanlış) değer tutmamızı sağlar      |
| Object list    | Bu genellikle bir adresten veri alırken kullanılır |

Farklı veri tiplerimiz de var ama daha sonra deyineceğiz.

### Null-Safety

Bu noktadan sonra şunu incelemek lazım Dart'ta *Null Safety* yani boş değer güvenliği. Dart bu konuda çok hassastır. Eğer bir değerin asla **null** yani boş olmayacağından eminseniz değişken tanımlarken anahtar kelimeye `?` burakmanız gerekir.


```dart
var? name;
name = 'Dart';

print(name);
```

>**DİKKAT!** Bura `?` ile bu değere boş da olabilir demek istedik. Bu işlemi yaparrken çok dikkatli olmalıyız.

Null-Safety kapsamında bakılabilecek bir anahtar kelimemiz daha bulunmakta **late**. Bu anahtar değişkenin şimdi boş olsada sonradan kesinlikle bir değer alacağını belirtmiş oluruz.

```dart
late String name;

void main () {
    name = 'Abdullah';
    print(name);
}
```

>**ÖNEMLİ!** Eğer bu noktada ``late`` ile bir değişkene atama başlatamazsak çalışma zamanında hata alırız.

### Const ve Final

``const`` ve ``final`` anahtar kelimeleri bir değerin değişmez olduğunu ifade etmekte kullanılır. Aralarındaki en önemli dark ise biri çalışma zamanında oluşturulurken biri derleme zamanında oluşmasıdır.

**`const`**: Bu anahtar kelime derleme zamanında değer alır ve değiştirilemez. En önemli diğer özelliği ise bu değişken ile bellek üzerinde tek bir örnek yaratılır.

**`final`**: Bu anahrat kelime ise çalışma zamanında değer alır ve değiştirilemez.

```dart
final list1 = [1, 2, 3];
const list2 = [1, 2, 3];

list1.add(4);  // final objeyi değil referansı kilitler
list2.add(4);  // const objeye ekleme yapılamaz
```

![Const ve Final](/assets/images/postimages/const-final.png)
> **CAPTION** Const ve Final.

Buradaki görselde kısaca şunun çıkarımını yapmalıyız ``const`` ile oluşturulan değişkenler eğer aynı değere sahipse bellekte aynı adresi göstermekte. Bu durumda bize bellek tüketimini azaltığı görülmektedir. Bu kullanım flutter ile daha efektif anlaşılmaktadır. Gerçekleştirilen uygulamalarda statik ve aynı değerlilikte olan değişkenler const anahtarkelimesi vermek bellek yönetimi verimliliğini sağlamaktadır.

>**DİKKAT!** ``const`` derleme zamanındında sabitlendiği için ``DateTime.now();`` vb. yapılar çalışma zamanında değer alacağı için atama gerçekleştiremez ve hata oluşturur. Bu tarz yapılar `final` ile oluşturulması en uygun çözümdür.

>**BİLGİ!** Örnek kodlarda gördüğümüz list1 listesine ekleme yapıldığında bellekteki son durumu değişir. Örneğin çalışma zamanında atanan [1, 2, 3] değerleri 1001 de iken ekleme işlemi sonrası [1, 2, 3, 4] listesi ise 1002 numarlı bellekte tululuyor olabilir. Yani son liste oluştuğunda list1'in işaretlediği bellek adresi değişir ve değiştirilemez yapı o andan sonra kurulur. Bu noktada akıllara şu soru gelebilir 'Peki ya 1001 numaralı bellek içeriğine ne oldu?'. Bu kısımda Dart'da bulunan ``garbage collector`` yapısı devreye girer ve o belleği serbest bırakır. Bu şekilde verimli bellek yönetimi yapılmış olur.

### Joker Değişken ( _ )

Bu değişken var olduğu diğer programlama dilleri gibi Dart'ta da kullanıldığı zaman, 'Bu değeğişkeni kullanmayacağım, önemsemiyorum!' anlamı taşır.

```dart
int _ = 10;

// burada bir hata alırız
print(_); // _ hiç var olmadı ile eş değer

// liste bitene kadar dön demeye benzer
for (var _ in [1, 2, 3]) {
    print("Hello");
}
```
>**BİLGİ!** Kısaca, 'Bu alana bir şey gelmesi gerekiyor ama bana lazım değil.' diyouz.

## Operatörler

Dart'ta kullanabileceğimiz pek çok operatör bulunmaktadır. Bu operatörleri 10 başlık altında inceleyyeceğiz.

### Aritmatik Operatörler

Burada matematiksel operatörlere değineceğiz.

| Operatör | Açıklama             |
| -------- | -------------------- |
| +        | Toplama              |
| -        | Çıkarma              |
| -a       | Negatif              |
| *        | Çarpma               |
| /        | Bölme                |
| ~/       | Tam sayı bölme       |
| %        | Mod (Bölümden kalan) |

```dart
int num1 = 8;
int num2 = 3;

int addResult = num1 + num2;       // 11
int subResult = num1 - num2;       // 5
int negResult = -num1;             // -8
int mulResult = num1 * num2;       // 24
double divResult = num1 / num2;    // 6.66
int intDivResult = num1 ~/ num2;   // 6
int modResult = num1 % num2;       // 2

// divResult değişkenini int olarak tanımlamamızın nedeni,
// bölme işlemi ondalıklı değer oluşturabileceği içindir.
// (oluşturmayacak olsa bile öyle kabul edilir).
```

Bunların yanı sıra postfix ve prefix aritmatik operatörlerimiz vardır.

| Operatör | Açıklama             |
| -------- | -------------------- |
| ++num    | Sayıyı arttır ve yaz |
| num++    | Sayıyı yaz ve arttır |
| --num    | Sayıyı azalt ve yaz  |
| num--    | Sayıyı yaz ve azalt  |

Anlaşılması adına bir örnek verelim.

```dart
int num = 8;

int addPreResult = ++num; // res 9 num 9
print("addPreResult: " + addPreResult.toString() + " num: " + num.toString());
int addPostResult = num++; // res 9 num 10
print("addPostResult: " + addPostResult.toString() + " num: " + num.toString());
int subPreResult = --num; // res 9 num 9
print("subPreResult: " + subPreResult.toString() + " num: " + num.toString());
int subPostResult = num--; // res 9 num 8
print("subPostResult: " + subPostResult.toString() + " num: " + num.toString());

```

```bash
# addPreResult:  9      num: 9
# addPostResult: 9      num: 10
# subPreResult:  9      num: 9
# subPostResult: 9      num: 8
```

Bu çıktılar sonucunda durum daha net anlaşılabilir.

### Eşitlik ve İlişkisel Operatörler


| Operatör | Açıklama      |
| -------- | ------------- |
| ==       | Eşit mi       |
| !=       | Eşit değil mi |
| >        | Büyük mü      |
| <        | Küçük mü      |
| <=       | Büyük eşit mi |
| >=       | Küçük Eşit mi |

```dart 
int num1 = 2;
int num2 = 4;

bool isEql = num1 == num2;   // false
bool isEql = num1 != num2;   // true
bool isEql = num1 > num2;    // false
bool isEql = num1 < num2;    // true
bool isEql = num1 >= num2;   // false
bool isEql = num1 <= num2;   // true
```

Kisacasi bu şekil dedir.

### Tip Kontrol Operatörleri

| Operatör | Açıklama          |
| -------- | ----------------- |
| as       | Tip dönüşümü      |
| is       | Tip kontrolü      |
| is!      | Ters tip kontrolü |

```dart
Object num1 = 3;

// Objeyi int kabül et
int num2 = num1 as int;


// ogr1 Ogrenciler sınıfına ait ise isim ata
if (ogr1 is Ogrenciler) {
    ogr1.name = 'Abdullah'
}

// ogr1 Ogrenciler sınıfına ait değil ise
if (ogr1 is! Ogrenciler) {
    print('ogr1, Ogrenciler sınıdına ait değil');
}
```

### Atama Operatörleri

| Onluk Tabanda | Açıklama | Bit Bazlı | Açıklama                   | Boş değer | Açıklama                     |
| ------------- | -------- | --------- | -------------------------- | --------- | ---------------------------- |
| x += 3        | x = x +3 | <<=       | Bitsel sola kaydır ve ata. | b ??= a   | b boşsa a'daki değer atansın |
| x -= 3        | x = x +3 | >>=       | Bitsel sağa kaydır ve ata  | --------- | ---------------------------- |
| x *= 3        | x = x +3 | >>>=      | Unsigned sağ kaydır        | --------- | ---------------------------- |
| x /= 3        | x = x +3 | &=        | Bitsel AND yap ve ata      | --------- | ---------------------------- |
| x ~/= 3       | x = x +3 | \|=       | Bitsel OR yap ve ata       | --------- | ---------------------------- |
| x %= 3        | x = x +3 | ^=        | Bitsel XOR yap ve ata      | --------- | ---------------------------- |

