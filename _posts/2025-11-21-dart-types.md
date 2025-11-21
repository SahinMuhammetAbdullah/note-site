---
layout: post

title: "Dart Bölüm: 2 | Yerleşik Tipler"
subtitle: "Dart Genel Yerleşik Tipler"
excerpt: "Dart'ta bulunan tip yapılarını üzerine inceleme."
description_preview: Dart'ta bulunan tipler üzerine yapılan çalışmamın notları.
date: 2025-11-21 21:00:00 +0300

categories: [Programlama Dilleri, Dart]
tags: [mobil programala, flutter, diller, types]
level: Orta

prev_note: "Dart Bölüm: 1 | Dart'a Giriş"
prev_note_link: /programlama-dilleri/dart/dart-giris/
# next_note:
# next_note_link:
related_posts:
  - title: BTK Dart Eğitimi
    url: https://www.btkakademi.gov.tr/portal/course/dart-programlama-dili-29014
  - title: Dart Değişkenler
    url: https://dart.dev/language/built-in-types
---

## Giriş

Bu yazımızda Dart programlama dilinde bulunan yerleşik tipleri inceleyeceğiz.

## Sayılar
Dart'da sayılar farklı uzaylarda değer alabilmekte. Binary $$(1010)_2$$, octal $$(23)_8$$, decimal $$(21)_{10}$$ ve hexadecimal $$(A8)_{16}$$ çoğunlukla kullanılan sayı uzaylarıdır.

```dart
int hexValue = 0xA8; // A8 (Hex) = 168 (Decimal)

String binaryString = '1010'; // 1010 (Binary) = 10 (Decimal)
int decimalFromBinary = int.parse(binaryString, radix: 2);

String octalString = '23'; // 23 (Octal) = 19 (Decimal)  
int decimalFromOctal = int.parse(octalString, radix: 8);

int decimalValue = 21;
print('Decimal: $decimalValue'); // Çıktı: 21

/// int.toRadixString(radix) 
/// (radix: 2 için Binary, 8 için Octal, 16 için Hex)
```

### int
Intager, yani tam sayılar Dart'ta 64 bittir. Yani bu da, bu uzayda $$-(2)^{63}$$ ve $$(2)^{63}-1$$'e kadar olan tam sayıları tutabileceğimiz anlamı taşır. Örneğin: `int num = 10;`

### double
Double, yani kesirli sayı uzayında ise yine 64 birlik bir alana kayan nokta alanına sahibiz. Örenğin: `double pi = 3.14`

### Sayısal İşlemler

Hem int, hem de double sayılar ile yapabileceğimiz pek çok işlem bulumakta. Tabi temel aritmatik işlemler dışında; örneğin `String num = '2';` olarak tanımlanan bir ifadeyi int bir değere dönüştürmek için `num2 = int.parse(num);` ifadesi kullanulmaktadır. Aynı zamanda `double.parse('3.14')` ifadeside double sayılar için geçerlidir. Tabi bunu tam terside bulunmaktadır. Bir sayısal ifadeyi karakder dizisine çevirmek için `num2.toStirnig();` kullanılır. double ifadeler için ise `3.14159.toStringAsFixed(2);` bu şekilde bir basamk düzenlemesi gerekebilir.

## Karakter Dizisi (String)
Dart'ta karakter dizileri UTF-16 karakter kodlarından oluşturur. String'ler `'` ve `"` noktalam işaretleri ile kurulur.

```dart
var s1 = 'Bu bir tek tırnaklı yapıdır.';
var s2 = "Bu çift tırnaklı yapıdır.";
var s3 = 'Bu\'da tek tırnak içinde tek tırnak kullanma örneği.';
var s4 = "Bu'da çift tırnakta tek tırnak kullanım örneği.";
```
### Dışarıdan Bilgi Ekleme

Aytıca dışardan alınacak değerleri `$` işareti ile metinsel blokarımız alrasına yerleştirebiliriz.

```dart
var s1 = 'metin.';
var s2 = "Bu $s1 bir içeriktir.";
var s3 = "Bu ${s1.toUpperCase()}'i içerde işlem uygulamak için bir yapı.";
```

Yani eğer içeri alınacak ifadeye işlem uygulanackas `${}` bloğu arasına alınır.

### Çoklu Satırda String

Eğer çok satırda bu ifade kurulmak istenirse ise.

```dart
var s = ''' Çok satırda 
tek tırnak ile 
metinsel ifade kurma
''';
var s = """ Çok satırda 
çift tırnak ile 
metinsel ifade kurma
""";
```

## Booleans

Doğru ve yanlış bilgilerini tutmak için kullanılan bir tiptir

```dart
// Boş karakter dizisi kontrolü.
var fullName = '';
print(fullName.isEmpty); // true

//  Sıfır kontrolü.
var hitPoints = 0;
print(hitPoints == 0); // true

// Boş kontrolü.
var unicorn = null;
print(unicorn == null); // true

// NaN kontrolü.
var iMeantToDoThis = 0 / 0;
print(iMeantToDoThis.isNaN); // true
```