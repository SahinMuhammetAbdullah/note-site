---
layout: post

title: "AI Giriş Bölüm 4 | Doğal Dil İşleme"
subtitle: "Yapay Zakaya Giriş Ders Notları"
excerpt: "Bu yazımız BTK Yapay Zeka'ya giriş ders notlarindan oluşmatadır."
description_preview: BTK Akademide yer alan Yapay Zeka'ya Giriş dersi notları.
date: 2026-02-17 22:30:00 +0300

categories: [Yapay Zeka, AI-Giriş]
tags: [AI, Doğal Dil İşleme, NLP ]
level: Başlangıç

prev_note: AI Giriş Bölüm 3 | Derin Öğrenme
prev_note_link: /yapay-zeka/ai-giris/derin-ogrenme/
next_note: AI Giriş Bölüm 5 | Üretken Yapay Zeka
next_note_link: /yapay-zeka/ai-giris/uretken-yapay-zeka/
related_posts:
  - title: BTK Yapay Zekaya Giriş Eğitimi
    url: https://www.btkakademi.gov.tr/portal/course/yapay-zekaya-giris-29193
---

## Giriş

İnsan dilini veya insan diline beznzer yazılı, sözlü ve düzenlenmiş şekilde işleyebilen makinelerin oluşturulması disiplinidir. Genellikle konuşulan dilin metinler halline getirilmesi ve tersi gibi işlemleri gerçekleştiren bir alandır.

Amazon Alexa ve Apple Siri gibi araçlar bu konuya örnektir. Aynı zamnada metin tabanlı GPT-3 de bir örnektir.

## Kullanım Alanları 

- Duygu Analizi:
  - Metinin duygusal niyetini sınıflanrıdmak üzere kullanılır.
  - Çevrim içi platformarın kullanıcılarının yorum ve incelemelerini sınıflandırmak için kullanılabilir.
- Zehirlilik Sınıflandırma:
  - Düşmanca niyetleri, hakaretleri, müstehcenlik içeren ifadeleri, nefret söylemlerini sınıflandırmak için kullanılabilir.
- Makine Çevirisi:
  - Farklı diller arasındaki çeviride kullanılır.
- Adlandırılmış Varlık Tanıma:
  - Metindeki varlıkları; kişisel isimleri, organizasyonlar, konumlar, tarihler vb. tanımları katagorileştirmek üzere kullanılabilri.
- Spam Tespiti:
  - NLP'de kullanılan yeygın bir ikili sınıflandırma örneğidir. 
- Gramer Hatalarının Düzeltilmesi:
  - Metin içerisindeki hataları bularak, dil bilgisini düzenleyen bir yapıda kullanılabilir.
- Konu Modelleme:
  - Bir belge koleksiyonundaki soyut konuları keşfeder.
  - Avukatların hukuki belgekerde kanıtkları bulmalarına yardımcı olmak için kullanılabilir.
- Metin Oluşturma:
  - İnsan yazısına benzer metinler üretmek için kullanılabilir.
- Otomatik Tamamlama:
  - Bir sonraki kelimenin ne olduğunu tahmin eder. 
  - Mesajlaşma uygulamalarında kullanılır.
- Sohbet Botları:
  - GPT, DeepSeek, Gemini vb.
  - Veri Tabanı Sorgusu:
    - Sorular ve cevapların bulunduğu bir veri tabanından kullanıcının **NLP** kullanarak sorgulamasını yapar.
  - Sohbet Oluşturma:
    - İnsan bir ortakla diyolog simüle edilir.
- Bilgi Alım:
  - Bir soruya en uygun olanını alması.
- Özetleme:
  - Metni kısaltarak en önemli bilgileri vurgulama işlemi.
- Soru Cevaplama

## Çalışma Yapası

Veri ön işleme ile başlar. Bİr metin gelir bu metin sadeleştirilmesi yapılır.
- Veri Ön İşleme:
  - Kök Çıkartma Yöntemi
  - Cümle Bölme Yöntemi
  - Durak Kelimelerin Kaldırılması
  - Belirteçleme Yöntemi
- Özellik Çıkartma:
  - Kelime Çanstası (Bag-of-Words)
  - TF-IDF (Kelime Frekansı)
  - Word2Vec (Kelimeden Vektöre Çevirme)
  - GLoVE (Kelimelerden Anlam Yakalam için Vektör)
- Modelleme:
  - Clasical NLP ([Bkz](#classic-nlp-img))
  - Deep Learning ([Bkz](#classic-nlp-img))

![classic-nlp](/assets/images/postimages/classic-nlp-deep-learning.png){: #classic-nlp-img }
>**CAPTION** Şekil 1 — Klasik NLP ve Deep Learning Şeması [^1]

### Önemli Modeller

- Eliza (1966)
- Tay (2016)
  - Twitter üzerinde çalışmalar yapılıdı ve zarlı içerikler üretmeye başlıyınca durdurukldu.
- BERT (2018, Google)
- GPT-3 (2020, OpenAI)
- LaMDA (2021, Google)

### Önemli Araçlar

- NLTK
- spaCy
- AllenNLP
- StanfordNLP
- IntelNLP (NLP Architect)
- flair
- Gensi

[^1]: ResearchGate [Görsel Kaynağı](https://www.researchgate.net/figure/Superiority-of-Advanced-Neural-Networks-in-Data-Analysis_fig1_382309612)

