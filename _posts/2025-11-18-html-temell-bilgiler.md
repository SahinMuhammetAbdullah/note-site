---
layout: post

title: "HTML Temelleri"
subtitle: "Web Projeleri için temel HTML bilgileri."
excerpt: "Bu notta web sayfalarının dizaynı paternleri ele alınmış notlardan oluşmaktadır."
description_preview: Bu format web teknolojilerinden biri olan CSS in temel bilimmesi gereken kavranmlar için hazırlanmış notlardan oluşmaktadır.
date: 2025-11-18 17:00:00 +0300

categories: [Web Teknolojileri, HTML]
tags: [Etikatler, dizayn]
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

## Temel Yapı

| Etiket            | Açıklama                                                  |
| ----------------- | --------------------------------------------------------- |
| `<!DOCTYPE html>` | HTML5 standardını belirtir.                               |
| `<html>`          | HTML belgesini başlatır.                                  |
| `<head>`          | Başlık, meta bilgiler ve stil tanımları içerir.           |
| `<title>`         | Sayfa başlığını belirtir.                                 |
| `<meta>`          | Meta bilgileri sağlar.                                    |
| `<link>`          | Dış stil sayfalarına ve diğer kaynaklara bağlantı sağlar. |
| `<style>`         | İç stil tanımlar.                                         |
| `<script>`        | JavaScript veya diğer betik dillerini belirtir.           |
| `<body>`          | Sayfanın ana içeriğini içerir.                            |

### Metin ve Başlık

| Etiket           | Açıklama                               |
| ---------------- | -------------------------------------- |
| `<h1>` to `<h6>` | Başlık etiketleri.                     |
| `<p>`            | Paragraf oluşturur.                    |
| `<span>`         | Satır içi içerik gruplarını oluşturur. |
| `<br>`           | Satır sonu ekler.                      |
| `<hr>`           | Yatay çizgi ekler.                     |
| `<em>`           | Metni vurgular.                        |
| `<strong>`       | Metni kalın yapar.                     |

### Listeler

| Etiket | Açıklama                                 |
| ------ | ---------------------------------------- |
| `<ul>` | Sırasız liste oluşturur.                 |
| `<ol>` | Sıralı liste oluşturur.                  |
| `<li>` | Liste öğesi belirtir.                    |
| `<dl>` | Tanımlama listesi oluşturur.             |
| `<dt>` | Tanımlama listesi terimi belirtir.       |
| `<dd>` | Tanımlama listesi açıklamasını belirtir. |

### Bağlantılar ve Resimler

| Etiket  | Açıklama            |
| ------- | ------------------- |
| `<a>`   | Bağlantı oluşturur. |
| `<img>` | Resim ekler.        |

### Tablolar

| Etiket                   | Açıklama                                                       |
| ------------------------ | -------------------------------------------------------------- |
| `<table>`                | Tablo oluşturur.                                               |
| `<tr>`                   | Tablo satırı belirtir.                                         |
| `<th>`                   | Başlık hücresi belirtir.                                       |
| `<td>`                   | Tablo hücresi belirtir.                                        |
| `<thead>,<tbody>,<foot>` | Tablo başlığı, gövdesi ve altbilgisi için gruplandırma sağlar. |

### Formlar

| Etiket       | Açıklama                       |
| ------------ | ------------------------------ |
| `<form>`     | Form oluşturur.                |
| `<input>`    | Giriş alanı belirtir.          |
| `<button>`   | Düğme oluşturur.               |
| `<select>`   | Seçim kutusu oluşturur.        |
| `<textarea>` | Metin alanı oluşturur.         |
| `<label>`    | Form öğesi etiketini belirtir. |
| `<fieldset>` | Form öğelerini gruplandırır.   |

### Semantik ve Yapısal Etiketler (HTML5)

| Etiket         | Açıklama                                                                          |
| -------------- | --------------------------------------------------------------------------------- |
| `<article>`    | Bağımsız olarak okunabilen, kendi anlamı olan içerik bloklarını temsil eder.      |
| `<section>`    | Sayfa içindeki konusal veya mantıksal bölümleri ifade eder.                       |
| `<nav>`        | Sayfanın ana veya yardımcı gezinme (navigasyon) bağlantılarını içerir.            |
| `<header>`     | Sayfanın veya bir bölümün üst kısmındaki tanımlayıcı alanı gösterir.              |
| `<footer>`     | Sayfanın veya bir bölümün en altındaki bilgi ve bağlantı alanıdır.                |
| `<main>`       | Sayfadaki en önemli ve merkezi içeriği temsil eder.                               |
| `<aside>`      | Ana içeriğe ek, yan veya tamamlayıcı bilgileri barındırır.                        |
| `<figure>`     | Görseller, diyagramlar veya kod blokları gibi bağımsız medya içeriklerini kapsar. |
| `<figcaption>` | Bir figure içerisindeki içeriğin açıklama veya başlık metnidir.                   |

### Gelişmiş Metin Biçimlendirme

| Etiket   | Açıklama                        |
| -------- | ------------------------------- |
| `<abbr>` | Kısaltmalar için kullanılır.    |
| `<cite>` | Alıntıların başlığını belirtir. |
| `<code>` | Kod örnekleri için kullanılır.  |
| `<mark>` | Vurgulanmış metni belirtir.     |
| `<sub>`  | Alt metni belirtir.             |
| `<sup>`  | Üst metni belirtir.             |

### Görsel ve Medya

| Etiket         | Açıklama                                                         |
| -------------- | ---------------------------------------------------------------- |
| `<figure>`     | Resim, çizim, grafik veya fotoğraf gibi içerikleri gruplandırır. |
| `<figcaption>` | `<figure>` içindeki içeriğin başlığını belirtir.                 |
| `<audio>`      | Ses içeriği ekler.                                               |
| `<video>`      | Video içeriği ekler.                                             |
| `<source>`     | `<audio>` ve `<video>` için medya kaynaklarını belirtir.         |
| `<canvas>`     | JavaScript ile grafik ve çizimler oluşturmak için kullanılır.    |

### Form Elemanları

| Etiket       | Açıklama                                                              |
| ------------ | --------------------------------------------------------------------- |
| `<input>`    | Çeşitli giriş türleri için kullanılır (type özelliği ile belirlenir). |
| `<textarea>` | p Çok satırlı metin girişi sağlar.                                    |
| `<select>`   | Bir liste kutusu oluşturur.                                           |
| `<optgroup>` | `<select>` içindeki seçenek gruplarını belirtir.                      |
| `<option>`   | Bir `<select>` içindeki seçeneği belirtir.                            |
| `<button>`   | Düğme oluşturur.                                                      |
| `<label>`    | Form öğelerinin etiketini belirtir.                                   |
| `<fieldset>` | Form öğelerini gruplandırır.                                          |
| `<legend>`   | `<fieldset>`'ın başlığını belirtir.                                   |

### Çerçeve ve Gömme

| Etiket     | Açıklama                                           |
| ---------- | -------------------------------------------------- |
| `<iframe>` | Dış sayfayı gömme için kullanılır.                 |
| `<object>` | Nesne veya çoklu ortam içeriğini belirtir.         |
| `<embed>`  | Harici içeriği belirtir (örneğin, ses veya video). |

### Semantik ve Yapısal Etiketler (HTML5)

| Etiket      | Açıklama                                                  |
| ----------- | --------------------------------------------------------- |
| `<article>` | Belgedeki bağımsız bir içeriği belirtir.                  |
| `<section>` | Belgenin bir bölümünü belirtir.                           |
| `<nav>`     | Navigasyon menüsünü belirtir.                             |
| `<header>`  | Belgenin veya bir bölümünün başlığını belirtir.           |
| `<footer>`  | Belgenin veya bir bölümünün altındaki bilgileri belirtir. |
| `<main>`    | Belge içeriğinin ana kısmını belirtir.                    |
| `<aside>`   | Yan içeriği belirtir.                                     |
| `<details>` | Detaylı bilgileri içeren bir açılır menü oluşturur.       |
| `<summary>` | `<details>` etiketindeki açılır menünün özetini belirtir. |
| `<time>`    | Belirli bir tarih veya zamanı belirtir.                   |

## main tagının özel açıkaması

`<main>` etiketi, HTML5'te semantik bir etikettir ve sayfanın ana içeriğini belirtmek için kullanılır. Sayfanın geri kalanından bağımsız olarak, sayfanın ana içeriği `<main>` etiketi içine yerleştirilir.
