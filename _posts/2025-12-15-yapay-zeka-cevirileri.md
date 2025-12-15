---
layout: post

title: "Yapay Zeka ile Çeviri"
subtitle: "Yapay zaka kullanarak çeviri yapma"
excerpt: "Üretken yapay zekalar kullanarak farklı dillerde çeviri uygulamaları."
description_preview: Üretken yapay zekalar kullanarak farklı dillerde çeviri uygulamaları.
date: 2025-12-15 17:00:00 +0300

categories: [Yapay Zeka, Çeviri Aracı]
tags: [Çeviri, AI, ChatGPT, DeepL, ElevenLabs]
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

Türkçe'ye çevir
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

Türkçe'ye çevir
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

Biri patronumla, biri arkadaşımla yazışıyormuşum gibi uygun Türkçe'ye çevir 
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

Türkçe'ye çevir 
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

Öncelikle yapay zekaya `Şimdi sana vereceğim Türkçe metinleri İngilizce'ye, İngilizce metinleri Türkçe'ye çevirmelisin. Diyolog çevirmeni rolünü üstlen.` demeliyiz.

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

- Don't forget to like this video and subscribe to our channel for more content! Bunu Türkçe'ye çevir, Türkçe YouTube için bir Call to action - aksiyona çağrı eklemeyi unutma"
- :> Bu videoyu beğenmeyi ve daha fazla içerik için kanalımıza abone olmayı unutmayın! Ayrıca bildirimleri açarak yeni videolardan anında haberdar olabilirsiniz.

- Don't forget to like this video and subscribe to our channel for more content!, bu sefer instegam reals için çevir
- :> Bu videoyu beğenmeyi ve daha fazla içerik için sayfamızı takip etmeyi unutma! Devamı için bizi takipte kal.
  
- #ThrowbackThursday bunu Türkçe'ye lokal trendlere ve kültürel uyuma göre çevir 
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

Ham çeviriler dilin yapısına göre düzenlenmeli, kelime sıralamalı dilin düzenine uymalı, özellekle bağlaçlar optimize edilmeli ve doğallığı arttırılmalı robot çeviri hissini ortadan kaldırmalıyız. Örneğin bağlama göre "ethical considerations", "etik düşünceler" gibi değil de "etik sorumluluklar" olarak düzenlenmeli.

### AI + İnsan Hibrit Çeviri

Yapay zeka ile çeviri yapıldıktan sonra tekrardan bir aktif/pasif yani insanın tekrar elinden geçmesi ile çeviri daha kaliteli bir hal alır. insan dokunuşu kütürel uyarlama ve yaratıcılık daha iyi bir hale getirmekte.

## Pazarlama Metinleri

Bref analizi yapılır ve amaç belirlenir. Çeviri yaptırılır ve ton uyarlaması, sitil varyantları düzenlerir. karşılaştırmalar yapılır ve kalite değerlendirmesi gerçekleştirilir. Teslim formatı hazırlanmıştır. 

### Bref Analizi

Kime hitab edillmekte, hangi mecra için çevriliyor, mesajın amacı satış mı, bilgilendirme mi, yoksa farkındalık mı bunlar belirlenir. Seçilen mecra ve mesaj türünü hedef kitleye en uygun şekilde uyarlanmalıdır.

Bize verilen kampanya metnini önce başlıklar çevrilerek hedef kitle belirlenmeli. 

### Türkçe'ye Çeviri

Önce ham çeviri alınır. İnsan editörler elden geçirir ve kültürel uyarlama yaparlar. Yani bu aşamada hibrit çeviri yapılır. Değişiklikler belgelenir.

### Geri Çeviri

Değişiklikleri belgelediksen sonra geri çevrilir. bu yöntemle anlam kayması olmuşmu gizli hatalar oluşmuş mu kontrol edilir. Elbette bazı değişiklikler ile karşılaşılabilir ama geri çeviri sonrası tamamen bir anlam değişmesi varsa bunlar düzenlenmelidir. Bura bu kontrol edilir. Burada bire bir geriye dönüş beklenmemelidir.

### Ton Uyarlaması ve Stil Varyantları

Bu naktada resmi, samimi ya da yaratıcı bir dil mi kullanmalıyız onu belirleyerek devam etmeliyiz.

### Karşılaştırma ve Kalite Kontrolü

Bu noktada farklı yapay zeka araçları arasında çeviri yaparak karşılaştırma yapılmalıdır. (Örneğin Gemini vb.)

### Teslim Formatı

Burada anadili ve hedef dilinde raporlanmalıdır. formatlar ise yapılan işe göre değişmektedir. Akademik metin, kampanya dökümanları; PDF, WORD, PowerPoint gibi olmalı. Video içerikler için ise SRT(Alt Yazı) gibi formatlarda hazırlanmalıdır. Terim listesi ve stil rehberi bulunmalı. Versiyonlama yapılmalıdır. Orijan metin üzerinden çevirisinde yapılan değişikliklere yorun eklenebilir. Bu şekilde teslim formatımız da hazır olur.

## Akademik Çeviriler

Bu tarz çeviriler ytapılırken dile genel çerçevede hakim olmak da gerekmektedir. Çevrilecek makale öncelikle özet ile başlanmalı. Yapay zekaya makalenin konu çerçevesi ve genel bilgileri söylenerek çeviriyi en uygun şekilde çevirmesini beklemeliyiz.

### Terim Hazırlığı ve Ön Okuma

Çok tekrar eden ve anatar kelimeler önceden çıkarılmalıdır.

Örneğin;

| terim                            | kısa açıklama                  |
| -------------------------------- | ------------------------------ |
| Digital Marketing                | Dijital ortamda ürün ve hizmet |
| Search Engine Optimization (SEO) | Arama motoru optimizasyonu     |
| Scarch Engim Marketing (SEM)     | Arama motoru pazarlaması       |
| Content Marketing                | İçerik pazarlaması             |


| Kavram                                           | Bağlamsal Önemi                     |
| ------------------------------------------------ | ----------------------------------- |
| Traditional Marketing —> Digital Marketing Shift | Pazarlamamn dijital dâhiişüm süreci |
| Technological Advancement in Marketing           | Pazarlama teknolojilerinin gelişimi |
| Customer-Centric Approach                        | Müşteri miaklı pazılama adayışı     |
| Online Consumer Behavior                         | Çevrimiçi tüketici davrunşlan       |

Bunlar çıkarıldıktan sonra çevirilere başlamak her zaman için daha iyidir. Kavram karmaşası ve anlam kaymnası açısından daha iyi sonuçlar alınacaktır.

#### ChatGPT

Yeni bir poje başlatıp bu terim ve kavram ların yer aldığı dosya ve çevirisi yapılacak akademik metnin dosyasını vererek çalışmaya başlanılabilir. Bu şekilde yapay zeka çeviri yaparken terim ve kavram listemizi kontrol ederek daha uygun çevirileri verecektir. 

> **BİLGİLENDİRME!** ChatGPT ücretsiz versiyonunda günde 3 belge yükleme limiti vardır.

### Üslup ve Akıcılık Kontrolü

Bu tarz çevirilerde Türkçe'de edilgin dil kullanılmaktadır. Bu çevirileri gözden geçirmek ve dili edilgen hale getirmek gerekmektedir.

### Kaynak ve Biçim Uyumu

Bu noktada atıflar doğru yerlere referans gösterilmeli ve kaynakça kısmında uygun formata dönüştürülmelidir.

### Final ve Teslim

Son kez kotrolden geçirilir, gerekli notlar alınır, ve uygun formata çevrilkir. Teslim formatımız artık hazır.

Kapsamlı ve geniş içerikleri, projeler altında yapmak daha iyi olur.

## Sesli Çevir Projesi

### Amaç 

Türkçe ve İngilizce konuşanan iki kişinin GPT sesli sohet aracı ile anlık doğal çeviri örneklenecektir.

### Araçlar

ChatGPT'nin sesli sohbet özelli kullanılarak uygulanacaktır.

#### Prompt
```markdown
(Sesli İletişimde Kullanıcı): 
"""Sana söylenen Türkçe cümleleri anlık olarak İngilizce'ye, 
İngilizce söylenen cümleri anlık Türkçe'ye çevirmeni istiyorum."""
```
Bu şekilde söylendiğinde sizin için bir anlık çevermen olarak çalışmaya başlayacaktır.

GPT bu konmuşmaların transkriprii de çıkartığı için geriye dönük takip yapılabilir ve dil öğrenimi süreçlerinde etkili kullanılabliir.

## Kapanış

Daha ayrıntılı bilgiler ve uygulamalı öğrenim için **İlgili Notlarda** bulunan bağlantıdan asıl içeriği takip ediniz.