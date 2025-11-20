---
layout: post

title: "Dart Bölüm: 1 | Dart'a Giriş"
subtitle: "Temel Dart yapıları"
excerpt: "Dart hakkında temel yapılar."
description_preview: Dart diline giriş ve temel yapılar.
date: 2025-11-20 17:00:00 +0300

categories: [Programlama Dilleri, Dart]
tags: [mobil programala, flutter, diller]
level: Başlangıç

# prev_note:
# prev_note_link:
# next_note:
# next_note_link:
related_posts:
  - title: BTK Dart Eğitimi
    url: https://www.btkakademi.gov.tr/portal/course/dart-programlama-dili-29014
  - title: Dart Değişkenler
    url: https://dart.dev/language/variables
  - title: Dart Operatörler
    url: https://dart.dev/language/operators
  - title: Dart Yorum Satırları 
    url: https://dart.dev/language/comments
#   - title:
#     url:

# image: /assets/img/my-featured-image.jpg
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
> **CAPTION** Const ve Final Bellek Görünümü.

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

Kısacası bu şekil dedir.

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
| x += 3        | x = x +3 | \<\<=     | Bitsel sola kaydır ve ata. | b ??= a   | b boşsa a'daki değer atansın |
| x -= 3        | x = x +3 | \>\>=     | Bitsel sağa kaydır ve ata  | --------- | ---------------------------- |
| x *= 3        | x = x +3 | \>\>\>=   | Unsigned sağ kaydır        | --------- | ---------------------------- |
| x /= 3        | x = x +3 | &=        | Bitsel AND yap ve ata      | --------- | ---------------------------- |
| x ~/= 3       | x = x +3 | \|=       | Bitsel OR yap ve ata       | --------- | ---------------------------- |
| x %= 3        | x = x +3 | ^=        | Bitsel XOR yap ve ata      | --------- | ---------------------------- |

### Mantıksal Operatörler

| Onluk Tabanda | Açıklama |
| ------------- | -------- |
| !expr         | NOT      |
| &&            | AND      |
| \|\|          | OR       |

### Bitsel ve Kayırma Operatörleri

| Bitsel İşlemler | Açıklama                                                      |
| --------------- | ------------------------------------------------------------- |
| &               | AND                                                           |
| \|              | OR                                                            |
| ^               | XOR                                                           |
| ~expr           | Ters işater (0000 1111 --> 1111 0000)                         |
| \<<             | Sola kaydırma                                                 |
| \>>             | Sağa kaydırma                                                 |
| \>>>            | İşaretsiz Sağa kaydırma(Negatif sayıytı pozitif gibi düşünür) |

```dart
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // AND
assert((value & ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR

assert((value << 4) == 0x220); // sola kaydırma
assert((value >> 4) == 0x02); // sağa kaydırma

assert((-value >> 4) == -0x03);

assert((value >>> 4) == 0x02); // işaret bitsiz sağa kaydırma
assert((-value >>> 4) > 0); // işaret bitsiz sağa kaydırma
```

### Koşul İfadeleri

Dart'ta kısa if blokları diye oluşturabileceğimiz bir takım yapılardır. `?`, `??` ve `:` işaretleri ile kullanılmaktadır.

```dart
var num1;
var num2 = 2;
if (num2 == 2) {
    prtint('if çalıştır!');
} else {
    prtint('else çalıştır!');
}

// bu yukarda görünen blokla aynı işlevi yerine getirmektedir
(num2 == 2) ? prtint('if çalıştır!') : prtint('else çalıştır!')

num1 ??= num2;
print(num1); // # 2

num1 = 4;
num1 ??= num2;
print(num1); // # 4

// name null ise 'isimsiz' değerini dönür
String? name;
print(name ?? 'isimsiz');

int puan = 82;

String durum = (puan >= 90)
    ? "AA"
    : (puan >= 80)
        ? "BA"
        : (puan >= 70)
            ? "BB"
            : "CC";

print(durum); // BA

```

### Cascade Operatörü

Cascade operatörü bir sınıfın verilerini tanımlarken işimizi kolaylaştırmaya ve kod okunabilirliği ve takranından kaçınarak üretmemizi sağlar.

```dart
// Bir Personal() sınıfımız olsun
var personal1 = Personal();
personal1.name = 'Abdullah';
personal1.salary = 22000;

// Birde şu şekilde yapılır
var personal2 = Personal()
    ..name = 'Can'
    ..salary = 22400;
// bu iki işlemde de doğrudur.
// buna ek olarak name String ve 
// salary int olarak tanımlandı ve 
// nullable tanımlandıysa bu kontrolde

var personal3 = Personal()
    ?..name = 'Can'
    ..salary = 22400;
// bu şekilde atama başarılı bir şekilde
// gerçekleştirilmiş olur
// bu işlemler personal1 içinde 
// personal1?.name = 'Abdullah';
// şeklinde tanımlanabilir.
```

### Spread Operatörü

Bu operatör ise bir listeyilist, set veya map yapısındaki verileri başka bir koleksiyona açarak atamasını yapar.

```dart
var baseList = [1, 2, 3];
var newList = [
0,
...baseList,
4
];
// baseList parçalanır ve tek tek newList'e eklenir
print(newList); // [0, 1, 2, 3, 4]

List<int>? nums = null;

var result = [
1,
...?nums,  // nums null → yok sayılır
2
];
// ...? ile hatadan kaçınmış oluruz
// eğer ? olamsaydı hata alacak ve 
// komutlar çalışmayacaktı bu şekilde
// boş listeyi yok sayatak devam edebildik
print(result); // [1, 2]
```

### Diğer operatörler


| Operator | Name                   | Meaning                                                 |
| -------- | ---------------------- | ------------------------------------------------------- |
| ()       | Fonksiyon çağrısı      | Fonksiyonu çalıştırır                                   |
| []       | Liste/harita erişimi   | İndex ile elemana erişir                                |
| ?[]      | Koşullu erişim         | Nulldeğilse elemana erişir, null ise null döner         |
| .        | Üye erişimi            | Nesnenin özelliğine erişir                              |
| ?.       | Koşullu üye erişimi    | Null değilse özelliğe erişir, null ise null döner       |
| !        | Null değil doğrulaması | Null olamayacağını garanti eder, null ise hata fırlatır |

## Yorum Satırları

Dart'ta 3 tip yorum satırı vardır.

```dart
// Bu tek satırda bir yorum satırı örneği

/*
    * Bu ise 
    çok satırda
    yorum satırı
    örneği
*/

/// Burada üç tane '/'
/// ifadesi ise
/// dökümantasyonların
/// açıklamalarında 
/// kullanılan yorum
/// satırı örneğidir
```