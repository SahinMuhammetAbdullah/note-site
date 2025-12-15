---
layout: post
isPublish: false

title: "Yapay Zeka ile Çeviri"
subtitle: "Yapay zaka kullanarak çeviri yapma"
excerpt: "Üretken yapay zekalar kullanarak farklı dillerde çeviri uygulamaları."
description_preview: Üretken yapay zekalar kullanarak farklı dillerde çeviri uygulamaları.
date: 2025-12-14 11:00:00 +0300

categories: [Yapay Zeka Kullanımı, Çeviri Aracı]
tags: [Çeviri, AI, ChatGPT, DeepL,]
level: Orta

# prev_note:
# prev_note_link:
# next_note:
# next_note_link:
related_posts:
  - title: Üretken Yapay Zekâ ile Tercüme
    url: https://www.btkakademi.gov.tr/portal/course/uretken-yapay-zeka-ile-tercume-58772
---

## Giriş 

Bu yazı, BTK akademide bulunan **Üretken Yapay Zekâ ile Tercüme** eğitiminden alınan notlardan oluşmaktadır.

## Araçlar
ChatGPT, DeepL, ElevenLabs gibi yapay zeka araçlarını ve kullanım alanlarını inceleyeceğiz.

### ChatGPT

#### Prompt
```markdown
Bu gün hava çok güzel.

İngilizceye çevir.
```
#### Result
```markdown
:> The weather is very nice today
```

Bu şekilde en basit çeviriler yapılabilinmekte. Burada `[Dil]'e çevir` dil alanını değiştirerek istediğin her dile çevirisini gerçekleştirebilirsiniz.

### DeepL

![DeepL.](/assets/images/postimages/deepl.png) 
> **CAPTION** DeepL Kullanımı.

Yeşil alan içerisinden giriş dili seçilir ve kırmızı alan içinden ise çıkış dili seçilir. Bu şekilde basit bir çeviri gerçekleştirilebilir.

![DeepL.](/assets/images/postimages/deepl-write.png) 
> **CAPTION** DeepL Metin Düzenleme.

Yeşil alan içerisindeki yere gidiyoruz ve turuncu alandan bir tarz yada ton seçerek metnimizi yeniden oluşturmasını istiyoruz.


## Kültürel Uygulamalı Çeviri

Örneğin: "Break a leg" -> "Bol şans" burada tam çeviri değil anlamsal çeviri uygulanmıştır.

### ChatGPT

#### Prompt
```markdown
Break a leg

Türkçeye çevir
```
#### Result
```markdown
:> “Break a leg” ifadesinin Türkçe karşılığı:
:> 
:> “Bol şans!”
```

#### Prompt
```markdown
it's raining cats and dogs

Türkçeye çevir
```

#### Result
```markdown
:> “It’s raining cats and dogs” ifadesinin Türkçe karşılığı:
:> 
:> “Bardaktan boşanırcasına yağmur yağıyor.”
:> 
:> Açıklama:
:> 
:> Bu bir idiom (deyim)dir; kelimesi kelimesine çevrilmez.
:> 
:> Çok şiddetli yağmur yağdığını anlatır.
:> 
:> Yakın Türkçe karşılıklar:
:> 
:> “Sağanak yağmur yağıyor”
:> 
:> “Yağmur sel gibi yağıyor”
:> 
:> Örnek:
:> 
:> It’s raining cats and dogs outside.
:> → Dışarıda bardaktan boşanırcasına yağmur yağıyor.
```

### DeepL

![DeepL.](/assets/images/postimages/deepl-bug.png) 
> **CAPTION** DeepL Kültürel Çeviri.

Burada da görüleceği üzerer "bugs" yazılımda hata anlamında kullanıldığı için algılanıp, hata olarak çevirirlirken, bitkiler için ise asıl anlamı olan böcek için çevrilmiştir. 

## Ton Uyarlama ve Konteks Kontrolü

Resmi: **Sayın Müdürüm!**
Samimi: **Merhabalar!**
Teknik: **Sistem Parametreleri.**

Hedef kitle belirlenmeli, bağlam koruması yapılmalı ve kültürel bağlam korunmalı.

Örneğin Mr. Smith -> "Bay Smith" mi yoksa "Sayın Smith" mi şeklinde olmalı

"as soon as posible":"asap" bu resmi bir e postada en kısa sürede şeklinde çevbirlebilir ama daah samimi bir yazışmada hemen halledi ver şeklinde çevrilebilir.

### ChatGPT

#### Prompt
```markdown
Please send to report ASAP. 

Please send to report ASAP.

Biri patronumla, biri arkadaşımla yazışıyormuşum gibi uygun türkçeye çevir 
```

#### Result
```markdown
:> “Lütfen raporu en kısa sürede iletir misiniz?”
:> veya
:> “Raporu acilen göndermenizi rica ederim.”
:> 
:> “Raporu hemen yolla kanka.”
:> veya
:> “Raporu acil atsan süer olur :).”
```

### DeepL

![DeepL.](/assets/images/postimages/deepl-asap.png) 
> **CAPTION** DeepL ile Farklı Tonlarda Çeviri.

Burada akademik ve rahat sitilde ve arkadaşça bir tonda yeiden yazımını gördül.

## Hatalı Çıktıların Düzenlenmesi

Yapay zekalar hallüsünasyon görebilir. Bu hallüsünasyonlar sonucu cümleleri veya kelimeleri yanlış çevirebilir. Bunu farklı kaynaklar teyitlemek gerekir.

### ChatGPT

#### Prompt
```markdown
Let's meet at the bank.

Türkçeye çevir 
```

#### Result
```markdown
:> “Bankada buluşalım.”
```


>**DİKKAT!** Burada biz bir para bankasından bahsetmedik. Yani bank kelimes nehir kenarı anlamına da geldiği için düzeltme istemeliyiz.

#### Prompt
```markdown
bir para bankası değil bu aslında
```

#### Result
```markdown
:> “Nehir kenarında buluşalım.”
:> 
:> “Parktaki bankta buluşalım.”
:> 
:> “Kıyıda buluşalım.”
```
## Konuşma ve Diyolog Tabanlı Çeviri (Transkript Çevirisi)

Öncelikle yapay zekaya `Şimdi sana vereceğim türkçe metinleri ingilizceye, ingilizce metinleri türkçeye çevirmelisin. Diyolog çevirmeni rolünü üstlen.` demeliyiz.

### ChatGPT

- "Hi, uh... do you have, like, vegetarian options? Maybe pasta, or„. I don't know, something light."
- :> “Merhaba, şey… vejetaryen seçenekleriniz var mı? Mesela makarna ya da… bilemiyorum, hafif bir şey.”

  
- "Evet, tabii ki. Vejetaryen makarnamız ve ayrıca sebzeli pizza var. Hangisini tercih edersiniz?"
- :> “Yes, of course. We have vegetarian pasta, and we also have a vegetable pizza. Which one would you prefer?”

  
- "Hmm... pasta sounds good. But can you make it without cheese?"
- :> “Hm… makarna kulağa hoş geliyor. Ama peynirsiz yapabilir misiniz?”

## Video Senaryo Çevirisi

Video senaryo çevirisi yaparken ekranda cümlenin uzunluğu konuşmacının konuştuğu süre sarfı boyunca metin ekranda yer alacağında yan isüre kıusıtları bulunduğunda çok farklı bir bağlamda değerlendirilerek çevrilir.

Konuşmacının cümlerleri "Break a leg" ifadesindeki gibi anlamlar taşıyabilir ve buna dikkat edilmesi gerekmektedir. 

### ChatGPT

- Don't forget to like this video and subscribe to our channel for more content! Bunu türkçeye çevir, türkçe YouTube için bir Call to action - aksiyona çağrı eklemeyi unutma"
- :> Bu videoyu beğenmeyi ve daha fazla içerik için kanalımıza abone olmayı unutmayın! Ayrıca bildirimleri açarak yeni videolardan anında haberdar olabilirsiniz.

- Don't forget to like this video and subscribe to our channel for more content!, bu sefer instegam reals için çevir
- :> Bu videoyu beğenmeyi ve daha fazla içerik için sayfamızı takip etmeyi unutma! Devamı için bizi takipte kal.
  
- #ThrowbackThursday bunu türkçeye lokal trendlere ve kültürel uyuma göre çevir 
- :> #TBT, #AnılaraDönüş, #EskiGünler, #Nostalji, #Maziden

## Çoklu Ortam İçerikleri

Görsel üzerinden metin çevirileri, video ve ses içeriklerinin öevrilmesi ve döküman (pdf, word vb.) üzerinden çevirilerin nasıl gerçekleştirileceği konusuna değinelim. Ayrıca web adresilerinin çevirilmesine de değineceğiz

### Göresl üzerindeki metin çevirimi

OCR: Optical Character Recognition (Optik karakter taram, Örneğin; Google Lens)
OCR ile arkası bulanuk blurlu ve el yazması metinleri çevirmekte zorlanır. Bu sebeten görsel kalitesi yazı tipi ve arka plan önemli faktörlerdir. Seyehatte, iş hayatında en çok da günlük hayatta pratik kullanım sağlar. 

![Google Lens.](https://ares.shiftdelete.net/2019/05/google-ceviri-kamera-ile-kullanilan-dili-algilayacak.jpg) 
> **CAPTION** Google Lens (atf. [shiftdelete.net](https://shiftdelete.net/google-ceviri-kamera-ile-kullanilan-dili-algilayacak)).

Bu anlık çevri yapacağı için doğru çeviriyi vermekte zorlanabilir. Yani bir bağlam kuramayabilir.

### Video ve Ses Kayıtları

ElvenLabs ile profesyonal studiyoların ayarında bir kalite sunabilmekte. YouTube videoları, webinarlar, eğitim içerikleri, sosyal mediya içeriklerinde kolay ve parik çözümler sunmaktadırlar. Çıktıları ise SRT altyazı, metin dosyası, çeviri raporları şekilde olabilmektedir.

[ElevenLabs](https://elevenlabs.io/) adresinde [Speech To Text](https://elevenlabs.io/app/speech-to-text)'e girerek istediğiniz ses veya video yükleyerek istediğimiz bir formatta çıktısını alarak Üretken yapay zekalar ile metnin dil çevirisini gerçekleştirebiri ve yize ElevenLabs e giderek oradan bu metni [Text To Speech](https://elevenlabs.io/app/speech-synthesis/text-to-speech)'e giderek seslendirmesini gerçekleştirebiliriz.

### Dökümanlar

Dökümanları ChatGPT, DeepL kullanarak çevirebiliriz. DeepL Docs belgelere özel daha gelişmiş bir AI'dır. Yine de bölümlere ayırıp çevirmesini istemak daha iyi sonuç almamızı sağlamaktadır. ChatGPT kullanırken dokümandan paragrafları bölerek çevirmesini ve davamında atacağınız her paragraf için hedef dile çevirmesini isteyerek daha verimli çalışabilirsiniz. DeepL Docs ile belgeyi tek seferde çevirebileceğiniz gibi paragraflara bölerek çevirmeniz daha faydalı olabilir.

### Web Sayfaları ve Uygulama İçerikleri

UI & UX gözeterek çevirmek önemlidir. Yani "Login", "Sing Up" örneklerinde direk çevirmek anlış olabilir. Ayrıca çeviri tamamlandıktan sonrada her dilde UI & UX testleri yaparak her şey yolundamı bakmak gerekir. 

Bu süreç sadece bir çeviri değil aynı zamanda bir yereleştirme sürecidir. O dilin hitap ettiği bölgeye özgü UI & UX tasarımlarıda değişebilir.

Örneğin; "Şifremi unuttum" ingilzce genel kullanımda "Forgot password?" şeklindedir. Yani bire bir "I forgot my password." şeklinde kullanılabilir ama genel kullanıma uygun değildir.

## Doğruluk Kontrolü ve Kalite Artırma

Akıcılığı kontrol edilmeli. Bu süreçte farklı AI araçları ile teyitlenmeli. Bunun için insan kontrolüde bu noktada önemlidir. Teknik doğruluk için her türlü imla kuralları doğrulanmalıdır. BLUE skoru, A/B testing yapılabilir. 

### İnce Ayarlar

