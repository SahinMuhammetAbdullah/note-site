---
layout: post
title: Python Temelleri ve Değişkenler
subtitle: ""
date: 2024-11-17 10:00:00 +0300
categories: [Programlama Dilleri, Python]
tags: [başlangıç, temel, değişkenler, f-string, input,diller]
level: Başlangıç
description_preview: Bugün Python öğrenmeye başladım. Değişken tanımlama ve temel veri tipleri üzerinde çalıştım. Print fonksiyonu ile konsola çıktı almayı, string ve integer veri tiplerini öğrendim. Özellikle f-string formatlaması çok işime yaradı...
excerpt: ""
prev_note: JavaScript DOM Manipülasyonu
prev_note_link: /javascript/dom-manipulasyonu/ # Önceki not linki
next_note: Python Kontrol Yapıları
next_note_link: /python/kontrol-yapilari/ # Sonraki not linki
related_posts:
  - title: Python Listeleri ve Tuple
    url: /python/listeler-ve-tuple/
  - title: Python Döngüler (for, while)
    url: /python/donguler/
  - title: Python Fonksiyonlar
    url: /python/fonksiyonlar/
  - title: Python Sözlükler (Dict)
    url: /python/sozlukler/
  - title: Python Hata Yönetimi
    url: /python/hata-yonetimi/

image: 
  path: /assets/img/my-featured-image.jpg  # Ana görselin dosya yolu
  alt: Python kod örneği görseli
---

## Giriş {#giris}
**Python** [programlama diline](/kategori/programlama-dilleri) giriş yapıyorum. Bu dil, sözdizimi açısından oldukça sade ve öğrenmesi kolay bir dildir. Guido van Rossum tarafından 1991 yılında geliştirilmeye başlanan Python, bugün en popüler programlama dillerinden biri haline gelmiştir.

Bu notumda Python'ın temellerini, değişken tanımlama yöntemlerini ve veri tiplerini detaylıca inceleyeceğim. Ayrıca pratik örneklerle konuyu pekiştireceğim.

> **ALINTI** "Basit, karmaşıktan daha iyidir. Karmaşık, içice geçmişten daha iyidir." - Python Zen'i

## Python Neden Popüler? {#populer}
Python'ın bu kadar yaygın kullanılmasının birçok nedeni var:

* **Kolay Sözdizimi:** İngilizce'ye benzer yapısı sayesinde öğrenmesi kolay
* **Geniş Kütüphane Desteği:** Her iş için hazır kütüphaneler mevcut
* **Platform Bağımsız:** Windows, Mac, Linux'ta çalışır
* **Çok Yönlü:** Web, veri bilimi, AI, otomasyon gibi birçok alanda kullanılabilir
* **Büyük Topluluk:** Her sorunun cevabını bulabileceğiniz büyük bir topluluk

## Değişken Tanımlama {#degisken}
Python'da değişken tanımlamak oldukça basittir. Tip belirtmeye gerek yoktur, Python otomatik olarak tipi algılar. Bu özelliğe **dinamik tipleme** denir.

```python
# Değişken tanımlama örnekleri
isim = "Ahmet Yılmaz"
yas = 25
boy = 1.75
ogrenci_mi = True

# Ekrana yazdırma
print("Merhaba, benim adım", isim)
print(f"Ben {yas} yaşındayım")
print(f"Boyum {boy} metre")

# Tip kontrolü
print(type(isim))    # <class 'str'>
print(type(yas))     # <class 'int'>
print(type(boy))     # <class 'float'>
print(type(ogrenci_mi))  # <class 'bool'>
```

<div class="tip-block">
    <i class="fas fa-lightbulb"></i>
    <div class="content">
        <strong>İpucu:</strong>
        <p>Python'da değişken isimleri küçük harfle başlamalı ve kelimeler arasında alt çizgi (_) kullanılmalıdır. Bu yaklaşıma "snake_case" denir. Örnek: ogrenci_numarasi, toplam_fiyat</p>
    </div>
</div>


### Veri Tipleri
Python'da en çok kullanılan temel veri tipleri şunlardır:

```python
# String (Metin)
mesaj = "Merhaba Dünya"
isim = 'Python'  # Tek tırnak da kullanılabilir

# Integer (Tam Sayı)
sayi1 = 42
sayi2 = -15
buyuk_sayi = 1_000_000  # Okunabilirlik için alt çizgi

# Float (Ondalıklı Sayı)
pi = 3.14159
sicaklik = -5.5

# Boolean (Mantıksal)
dogru = True
yanlis = False

# None (Boş Değer)
bos_deger = None

# Tip dönüşümü
x = "123"
y = int(x)      # String'i integer'a çevir
z = float(x)    # String'i float'a çevir
print(y, z)     # 123 123.0
```

## String İşlemleri {#string}
String'ler (metinler) Python'da en çok kullanılan veri tipidir. String'ler üzerinde birçok işlem yapabiliriz:

### String Birleştirme
```python
# Farklı birleştirme yöntemleri
ad = "Ahmet"
soyad = "Yılmaz"

# Yöntem 1: + operatörü
tam_ad = ad + " " + soyad
print(tam_ad)  # Ahmet Yılmaz

# Yöntem 2: .format() metodu
mesaj = "Benim adım {} {}".format(ad, soyad)
print(mesaj)

# Yöntem 3: f-string (en modern ve önerilen)
mesaj = f"Benim adım {ad} {soyad}"
print(mesaj)
```

### String Metodları
Python'da string'ler için birçok hazır metod bulunur. İşte en sık kullanılanlar:

```python
metin = "python programlama dili"

# Büyük/küçük harf dönüşümleri
print(metin.upper())        # PYTHON PROGRAMLAMA DILI
print(metin.lower())        # python programlama dili
print(metin.capitalize())   # Python programlama dili
print(metin.title())        # Python Programlama Dili

# Arama ve kontrol
print(metin.startswith("py"))   # True
print(metin.endswith("dili"))   # True
print("prog" in metin)          # True
print(metin.count("a"))         # 5

# Bölme ve birleştirme
kelimeler = metin.split()   # ['python', 'programlama', 'dili']
print(kelimeler)
yeni_metin = "-".join(kelimeler)  # python-programlama-dili
print(yeni_metin)

# Temizleme
bosluklu = "   Python   "
print(bosluklu.strip())      # "Python" (boşlukları temizler)
```


>**BİLGİ!**Python'da string metodları orijinal string'i değiştirmez, yeni bir string döndürür. Bu yüzden sonucu bir değişkene atamanız gerekir.

### String Slicing (Dilimleme)
String'lerin belirli bölümlerini almak için slicing kullanırız:

```python
kelime = "Python"

# İndexleme (0'dan başlar)
print(kelime[0])     # P (ilk karakter)
print(kelime[-1])    # n (son karakter)
print(kelime[-2])    # o (sondan ikinci)

# Slicing [başlangıç:bitiş:adım]
print(kelime[0:3])   # Pyt (0,1,2 indexleri)
print(kelime[:3])    # Pyt (baştan 3. indexe kadar)
print(kelime[3:])    # hon (3. indexten sona kadar)
print(kelime[:])     # Python (tüm string)

# Negatif indexler
print(kelime[-3:])   # hon (sondan 3 karakter)

# Adımlama
print(kelime[::2])   # Pto (her 2 karakterden biri)
print(kelime[::-1])  # nohtyP (ters çevirme)
```

>**DİKKAT!**Python'da string'ler immutable'dır (değiştirilemez). Bir string karakterini doğrudan değiştiremezsiniz. Örneğin `kelime[0] = "J"` hata verir. Yeni bir string oluşturmanız gerekir.

## F-String ile Gelişmiş Formatlaşdırma {#fstring}
Python 3.6 ile gelen f-string özelliği, string formatlama için en modern ve okunabilir yöntemdir. Sadece değişken yerleştirmekle kalmaz, ifadeler de çalıştırabilirsiniz:

```python
isim = "Mehmet"
yas = 30
maas = 15000.5
from datetime import datetime # Tarih formatlama için
simdi = datetime.now() 

# Basit kullanım
print(f"Merhaba {isim}")

# İfade çalıştırma
print(f"{isim} 10 yıl sonra {yas + 10} yaşında olacak")
print(f"2 x 3 = {2 * 3}")

# Formatlama
print(f"Maaş: {maas:.2f} TL")      # 15000.50 TL (2 ondalık)
print(f"Maaş: {maas:,.2f} TL")      # 15,000.50 TL (binlik ayraç)

# Hizalama ve padding
print(f"{isim:>20}")     # Sağa hizala (20 karakter)
print(f"{isim:<20}")     # Sola hizala
print(f"{isim:^20}")     # Ortala
print(f"{isim:*^20}")    # Ortala ve * ile doldur

# Tarih formatlama
print(f"Tarih: {simdi:%d.%m.%Y}")           # 17.11.2024
print(f"Saat: {simdi:%H:%M:%S}")            # 14:30:45

# Sayı sistemleri
sayi = 42
print(f"Binary: {sayi:b}")      # 101010
print(f"Hex: {sayi:x}")         # 2a
print(f"Octal: {sayi:o}")       # 52
```

>**İPUCU!**F-string içinde debug yapmak için `={{'='}}` operatörünü kullanabilirsiniz: `print(f"{isim=}")` çıktısı `isim='Mehmet'` olur. Bu özellik Python 3.8'den itibaren vardır.

## Kullanıcıdan Giriş Alma {#input}
Python'da kullanıcıdan veri almak için `input()` fonksiyonunu kullanırız:

```python
# Basit input
isim = input("Adınız nedir? ")
print(f"Merhaba {isim}!")

# input() her zaman string döndürür
yas_str = input("Yaşınız: ")
yas = int(yas_str)  # String'i integer'a çevir

# Tek satırda dönüşüm
yas = int(input("Yaşınız: "))
boy = float(input("Boyunuz (m): "))

# Hesaplama örneği
sayi1 = int(input("Birinci sayı: "))
sayi2 = int(input("İkinci sayı: "))
toplam = sayi1 + sayi2
print(f"{sayi1} + {sayi2} = {toplam}")

# Hata kontrolü ile (gelişmiş)
try:
    yas = int(input("Yaşınız: "))
    print(f"Yaşınız: {yas}")
except ValueError:
    print("Lütfen geçerli bir sayı girin!")
```
## Pratik Örnekler {#ornekler}
Şimdi öğrendiklerimizi birleştirerek birkaç pratik örnek yapalım:

### Örnek 1: Kişisel Bilgi Kartı
```python
# Kullanıcıdan bilgi al
ad = input("Adınız: ")
soyad = input("Soyadınız: ")
yas = int(input("Yaşınız: "))
sehir = input("Şehir: ")
meslek = input("Meslek: ")

# Bilgi kartı oluştur
print("\n" + "="*40)
print("KİŞİSEL BİLGİ KARTI".center(40))
print("="*40)
print(f"Ad Soyad    : {ad.upper()} {soyad.upper()}")
print(f"Yaş         : {yas}")
print(f"Şehir       : {sehir.title()}")
print(f"Meslek      : {meslek.title()}")
print(f"Doğum Yılı  : {2024 - yas}")
print("="*40)
```

### Örnek 2: Basit Hesap Makinesi
```python
print("BASIT HESAP MAKİNESİ")
print("-" * 30)

sayi1 = float(input("Birinci sayı: "))
sayi2 = float(input("İkinci sayı: "))

print(f"\nSonuçlar:")
print(f"{sayi1} + {sayi2} = {sayi1 + sayi2}")
print(f"{sayi1} - {sayi2} = {sayi1 - sayi2}")
print(f"{sayi1} × {sayi2} = {sayi1 * sayi2}")
print(f"{sayi1} ÷ {sayi2} = {sayi1 / sayi2:.2f}")
```

### Örnek 3: Metin Analizi
```python
metin = input("Bir metin girin: ")

# Analizler
karakter_sayisi = len(metin)
kelime_sayisi = len(metin.split())
bosluksuz = len(metin.replace(" ", ""))
buyuk_harf = sum(1 for c in metin if c.isupper())
kucuk_harf = sum(1 for c in metin if c.islower())
rakam = sum(1 for c in metin if c.isdigit())

# Sonuçları göster
print("\nMETİN ANALİZİ")
print("="*50)
print(f"Toplam karakter   : {karakter_sayisi}")
print(f"Kelime sayısı     : {kelime_sayisi}")
print(f"Boşluksuz         : {bosluksuz}")
print(f"Büyük harf        : {buyuk_harf}")
print(f"Küçük harf        : {kucuk_harf}")
print(f"Rakam             : {rakam}")
print(f"Ters hali         : {metin[::-1]}")
print("="*50)
```

## Sık Yapılan Hatalar {#hatalar}
Python öğrenirken dikkat edilmesi gereken yaygın hatalar:

1.  **String ve sayıyı birleştirmeye çalışmak:**
    ```python
    # YANLIŞ
    yas = 25
    print("Yaşım " + yas)  # TypeError!

    # DOĞRU
    print("Yaşım " + str(yas))  # Stringe çevir
    print(f"Yaşım {yas}")      # veya f-string kullan
    ```
2.  **input() değerini dönüştürmeyi unutmak:**
    ```python
    # YANLIŞ
    yas = input("Yaşınız: ")
    print(yas + 5)  # String + int olmaz!

    # DOĞRU
    yas = int(input("Yaşınız: "))
    print(yas + 5)  # Şimdi çalışır
    ```
3.  **Index hatasına dikkat:**
    ```python
    kelime = "Python"
    # YANLIŞ
    print(kelime[6])  # IndexError! (0-5 arası geçerli)

    # DOĞRU
    print(kelime[5])  # Son karakter
    print(kelime[-1]) # veya negatif index kullan
    ```


## Özet ve Sonuç {#ozet}
Bu notumda Python'ın temellerini ve değişken kullanımını öğrendim. İşte önemli noktaların özeti:

> **BİLGİLENDİRME!**
> ✓ Python'da değişken tanımlama (dinamik tipleme)<br>
> ✓ Temel veri tipleri (str, int, float, bool)<br>
> ✓ String işlemleri ve metodları<br>
> ✓ String slicing teknikleri<br>
> ✓ F-string ile modern formatlaşdırma<br>
> ✓ Kullanıcıdan input alma<br>
> ✓ Pratik örnekler ve yaygın hatalar

### Sıradaki Adımlar
Bir sonraki derste şunları öğreneceğim:
* Kontrol yapıları (if, elif, else)
* Mantıksal operatörler (and, or, not)
* Karşılaştırma operatörleri
* Koşullu ifadeler ile karar mekanizmaları

Python öğrenme serüvenim devam ediyor! Bu temelleri sağlam öğrenmek, ileride daha karmaşık programlar yazmamı kolaylaştıracak. 🚀
