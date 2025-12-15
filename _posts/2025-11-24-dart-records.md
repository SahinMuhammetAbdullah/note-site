---
layout: post
isPublish: false

title: "Dart Bölüm: 3 | Yerleşik Tipler: Records"
subtitle: "Dart Records"
excerpt: "Dart'ta bulunan records incelemesi."
description_preview: Dart'ta records yapısı üzerine yapılan çalışmamın notları.
date: 2025-11-21 21:00:00 +0300

categories: [Programlama Dilleri, Dart]
tags: [mobil programala, flutter, diller, types, records]
level: Orta

prev_note: "Dart Bölüm: 2 | Yerleşik Tipler"
prev_note_link: /programlama-dilleri/dart/dart-types/
# next_note:
# next_note_link:
related_posts:
  - title: BTK Dart Eğitimi
    url: https://www.btkakademi.gov.tr/portal/course/dart-programlama-dili-29014
  - title: Dart Records
    url: https://dart.dev/language/records
---

## Giriş

Records, anonim, değiştirilemez ve toplu bir yapıdır. Colepsiyon tiplerinde de oluğu gibi bir çok yapıyı bir araya getirmemizi sağlar. Koleksiyonlardan farklı olark sabit boyutlu ve hetorejen yapıdadırlar.

### Söz Dizimi

```dart
var records = ('Adem', a: 2, b: false, 'Ahmet');
// # (Adem, Ahmet, a: 2, b: false)

(int, int) swap((int, int) record) {
  var (a, b) = record;
  return (b, a);
}

// Record type annotation in a variable declaration:
(String, int) record;

// Initialize it with a record expression:
record = ('A string', 123);

// Record type annotation in a variable declaration:
({int a, bool b}) record;

// Initialize it with a record expression:
record = (a: 123, b: true);

({int a, int b}) recordAB = (a: 1, b: 2);
({int x, int y}) recordXY = (x: 3, y: 4);

// Compile error! These records don't have the same type.
// recordAB = recordXY;

(int a, int b) recordAB = (1, 2);
(int x, int y) recordXY = (3, 4);

recordAB = recordXY; // OK.
```



