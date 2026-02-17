---
layout: post

title: "AI Giriş Bölüm 3 | Derin Öğrenme"
subtitle: "Yapay Zakaya Giriş Ders Notları"
excerpt: "Bu yazımız BTK Yapay Zeka'ya giriş ders notlarindan oluşmatadır."
description_preview: BTK Akademide yer alan Yapay Zeka'ya Giriş dersi notları.
date: 2026-02-05 00:00:00 +0300

categories: [Yapay Zeka, AI-Giriş]
tags: [AI, Derin Öğrenme ]
level: Başlangıç

prev_note: AI Giriş Bölüm 2 | Yapay Zeka'ya Giriş
prev_note_link: /yapay-zeka/ai-giris/makine-ogrenimi/
next_note: AI Giriş Bölüm 4 | Doğal Dil İşleme
next_note_link: /yapay-zeka/ai-giris/dogal-dil-isleme/
related_posts:
  - title: BTK Yapay Zekaya Giriş Eğitimi
    url: https://www.btkakademi.gov.tr/portal/course/yapay-zekaya-giris-29193
---

## Giriş

Derin öğrenme yine bir parametre optimazason işlemidir. Bunu yaparken ise nöral ağlar kullanılır. Bu nokta makine öğreniminden ayrıştığı noktadır. Nöral ağlar dediğimiz yapı ise insan beynine benzetilmesidir.

![Derin Öğrenmede Nöron](/assets/images/postimages/deep-learning-neuron.png)
> **CAPTION** Derin Öğrenmede Nöron [^1]

Bu görsel üzerinden bir kıyaslama yapalım:
- Dentirit (Dendrites): **Girdi (Input)**
- Akson (Axon): **Veri İletimi**
- Sinaps (Synapse): **Çıktı (Output)**
- Gövde(Cell Body): **Merkez (Bilginin işlem ördüğü yer)**

![Derin Öğrenmede Sinir Ağı](/assets/images/postimages/deep-learning-noural-network.png)
> **CAPTION** Derin Öğrenmede Sinir Ağı [^2]

Burada yer alan her bir **düğüm** bir nöron ifade etmektedir. Mavi ile gösterilen ilk katman bizim girdi katmanımızdır. Çıktı katmanı ile arasında kalan katmanların her biri ise gizli katman olarak adlandırılır. Burada girdi katmanı veri setindeki özniteliklerin girdi olarak verildiği katmandır. Çıktı katmanı ise etiket bilgisinin hesaplandığı katmandır. Gizli katman ise **verilerin transfer edildiği** ve **öğrenme işleminin** gerçekleştirildiği katmandır. Bu nöronlar insan beyninin tanımlayamadığı farklılıkları da tanımlayabilir. Kısaca karar verme süreci noranların kendi içerisinde gerçekleştirilen optimizasyonlarla gerçekleştirilir. 

![Öğrenme Süreci](/assets/images/postimages/deep-learning-poroses.png)
> **CAPTION** Derin Öğrenmede Öğrenme Süreci [^3]

Burada öğrenme kontrollü bir şekilde gerçekleşir. Örneğin tahmin etmesi gereken sınıf farklı bir sonuç olarak tahmin edildiyse, gerçek değer ve tahmin karşılaştırılarak bir kayıp(loss) fonksiyonuna ataması yaplır. Buradan çıkan kayıp skoru ise geriye doğru optimize edilerek nöronların ağrılıkları bir nevi parametreleri düzenlenir.

## Donaım Gereksinimleri

Derin öğreneme, çok fazla hesaplama gücü gerektiri. Yüksek performansı GPU'lar gerekir. Hesaplamalar bu işekilde daha hızlı bir şekilde gerçekleşmektedir. Bu işlemleri yapmak için fiziksel bir donamın oluşlturmaktansa bulutta derin öğrenme yapabileceğimiz araçlardan faydalanabiliriz. Küçük işletmeler, bireysel çalışmalar için bulutta yapmak daha az maliyetli olacaktır. 

## Makine Öğrenimine Göre Farkları

![Derin Öğrenme ve Makine Öğrenimi Farkı](/assets/images/postimages/deep-learning-vs-machine-learning.png)
> **CAPTION** Derin Öğrenme ve Makine Öğrenimi Farkı [^4]

Görselde de göründüğü üzere burada makine öğreniminde ayrıntılı bir özellik çıkarımı yapılırken, derin öğrenmede nöronlara bu süreç brakılır.

Makine Öğreniminde bir arabaya nasıl araba dediği öznitelikleri araştırılarak anlaşılabilirken, derin öğrenmede (özellikle çok katmanlı olanlarda) anlaşılması çok zordur. Bu yüzden bu sürecine **Kara Kutu** denilebilir.

Derin öğrenme, manuel olarak tanımlanan özelliklere ihtiyaç duymadan veriden otomatik olarak temsil (feature) öğrenebildiği için, klasik makine öğrenmesindeki özellik çıkarma sürecine alternatif bir yaklaşım olarak değerlendirilebilir. Ancak bu süreç, mevcut özellikler arasından seçim yapan feature selection değil; doğrudan veriden yeni ve hiyerarşik temsiller üreten bir *representation learning* yaklaşımıdır.

**Derin Öğrenmenin Avantajları:**
- Yapılandırılmamış verilerin verimli işlenmesi
- Gizli ilişkiler ve düzen keşfi
- Denetimsiz öğrenme

| Makine Öğrenmesi                                                                                           | Derin Öğrenme                                                                                       |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Veri setindeki gizli desenleri ve ilişkileri öğrenmek için **istatistiksel algoritmaları** kullanır.       | Veri setindeki gizli desenleri ve ilişkileri öğrenmek için **yapay sinir ağı mimarisini** kullanır. |
| Daha **küçük veri setlerinde** çalışabilir.                                                                | Makine öğrenmesine göre daha **büyük veri seti** gerektirir.                                        |
| Düşük seviyeli görevler için daha iyidir.                                                                  | Görüntü işleme, doğal dil işleme vb. gibi karmaşık görevler için daha iyidir.                       |
| Modelin eğitimi daha **az zaman** alır.                                                                    | Modelin eğitimi daha **fazla zaman** alır.                                                          |
| Model, görüntülerden nesneleri algılamak için manuel olarak çıkarılan ilgili **özellik**lerle oluşturulur. | İlgili özellikler otomatik olarak görüntülerden çıkarılır. Bu, **uçtan uca** bir öğrenme sürecidir. |
| Daha az karmaşık ve sonuçları **yorumlamak daha kolaydır**.                                                | Daha karmaşık, sonuçların **yorumları siyah kutu gibidir ve kolay değildir**.                       |
| **CPU üzerinde çalışabilir** veya derin öğrenmeye göre daha az hesaplama gücü gerektirir.                  | Yüksek performanslı bir bilgisayara ve **GPU'ya ihtiyaç duyar**.                                    |

## Derin Öğrenmenin Zorlukaları
- Büyük miktarlarda yüksek kaliteli veri
- Büyük işlem gücü
- Yorumlanabilirlik
- Aşırı Öğrenme
- Zaman

## Derin Öğrenme Yöntemleri

### Yapay Sinir Ağları (ANN)
Biyolojik sinir sistemlerinden ilham alınarak tasarlanan ve karmaşık veri desenlerini öğrenmeye odaklanan bir makine öğrenimi modelidir.

#### Kullanım Alanları

- Finansal Terimler
- Görüntü Sınıflandırma
- Dil İşleme
- Oyun Stratejileri

> **BİLGİ!** Örnek bir kullanım için, el yazısı rakamları tanıma uygulaması yapılabilir.



### Evrişimsel Sinir Ağları (CNN)
Özellikle görüntü tanıma görevlerinde etki olan bir modeldir.

#### Kullanım Alanları

- Görüntü ve Video Analizi
- Yüz Tanıma
- Otonom Araçlar
- Tıbbi Görüntüleme
- Görsel Veri Uygulamaları

> **BİLGİ!** Örnek bir kullanım için, kamere tarafından kaydedilen görüntülerdeki nesneleri sınıflandırkmak için bir uygulama yapılabilir.


### Yinelemeli Sinir Ağları (RNN)
Zaman Serisi verileri işlemek ve zamana bağlı ilişkileri modellemek için tasarlanmıştır. Burada *YİNELEMELİ* kavarmı ise noroınun bir de kendine bağlanması ile oluşan yapısından gelir.

#### Kullanım Alanları

- Doğal Dil İşleme
- Metin Üretimi
- Konuşma Tanıma
- Finansal Zaman Serisi Analizi

> **BİLGİ!** Örnek bir kullanım için, bir metin belgesindeki dil bilgisi yapısını anlamak ve ardından benzer bir dilde yeni metinler oluşturmak için uygulma yapılabilir.


### Uzun Kısa Süreli Bellek (LSTM)
RNN'lerin bellek sorununlarını çözmek için geliştirilmiştir. Bir tür yinelemeli sinir ağıdırç

#### Kullanım Alanları

- Dil Modelleri
- Metin Analizi
- Otomatik Metin Tamımlama
- Hisse Fiyatları Tahminleri

> **BİLGİ!** Örnek bir kullanım için, bir makaledeki metini anlamak ve özetini oluşturmak için kullanılabilir.

### Çekişmeli Üretici Ağlar (GANs)
Günümüzde kullanılan üretken yapay zekaların temelini oluştururlar. İki karşıt ağın rakabet içerisinde eğitildiği bir derin öğrenme modelidir.

#### Kullanım Alanları

- Resim Sentezi
- Video Üretimi
- Yaratıcı İçerik Oluşturma
- Veri Artırma

> **BİLGİ!** Örnek bir kullanım için, gerçekçi insan yüzü görüntüleri oluşturmak için kullanılabilir.

### Radyal Temelli Fonksiyon Ağları (RBFNs)
Girdi uzayını çıktı uzayına eşleyen bir sinir ağıdır.

#### Kullanım Alanları

- Tahmin
- Sınıflandırma
- Modelleme
- Veri Sıkıştırma

> **BİLGİ!** Örnek bir kullanım için, bir pazarlama kampanyasının etkinliğini tahmin etmek için kullanılabilir.


### Ön Düzenleyi Ağlar (SOMs)
Veri kümesindeki benzerlikleri ve farklılıkları analiz etmek için kullanılan bir tür yapay sinir ağıdır.

#### Kullanım Alanları

- Veri Görselleştirme
- Veri Analizi
- Desen Tanıma
- Gruplama

> **BİLGİ!** Örnek bir kullanım için, bir müşteri veri setinde benzer özelliklere sahip müşteri gruplarını beklirlemek için kullanılabilir.

### Derin İnanç Ağları (DBNs)
Kısıtlı Boltzmann makinelerinin bir türüne dayalı bir ağdır. Genellikle sınıflandırma veya öznitelik çıkartımı için kullanılan bir tür yapay sinir ağıdır.,

#### KUllanım Alanları

- Ses Tanıma
- Görüntü Tanıma
- Biyomedikal Mühendislik
- Doğal Dil İşleme

> **BİLGİ!** Örnek bir kullanım için, bir tıbbi görünyü veri setindeki lezyonları sınıflandırmak ve tehşis etmek için kullanılabilir.

### Otomatik Kodlayıcılar (Autoencoders)
Gizli bir temsilasyon oluşturmak için bir giriş verisini sıkıştıran ve ardından bu temsili girişe yeniden dönüştüren bir tür yapay sinir ağıdır.

#### Kullanım Alanları

- Otomatik Kodlayıcılar
- Veri SIkıştırma
- Görüntü Restorasyonu
- Boyut Azaltma
- Öznitelik Çıkarımı

> **BİLGİ!** Örnek bir kullanım için, bir görüntüdeki gizli özellikleri çıkarmak ve ardından görüntüyü yeniden oluşturmak için kullanılabilir. 


### Transfer Öğrenimi (Transfer Learning)
Bir görevde öğrenilen bilgilerin ve modellerin başka bir göreve aktarılmasıdır.

> **BİLGİLENDİRME!** Burada bu tranfer işlemi çok iyi bir veri setindeki eğitilmiş bir modeldeki Convolution Layersında (Evrişim Katmanında) bulunan düşük seviyeli özniteliklerini kendi yapacağımız modelde kullanarak yapılan işlemdir.

#### Kullanım Alanları

- Kısıtlı Veri veya Etikletli Veri olmadığında **Görüntü Sınıflandırma**
- Doğal Dil İşleme
- Tıbbi Tehşisler

> **BİLGİ!** Örnek bir kullanım için, bir tür kanser tehşisinde kullanılan bir görüntü sınıflandırma modelinden öğrenilen özellikleri başka kansar türünde kullanmak için kullanılabilir.

### Artık Ağlar (ResNets)
Ağın derinliklerini arttırmak ve eğitim sırasında ortaya çıkan kayıpları azaltmak için önerilen bir tür derin öğrenme modelidir.

#### Kullanım Alanları

- Görüntü Sınıflandırma
- Nesne Tespiti
- Görüntü Segmentasyonu
- Video Analizi

> **BİLGİ!** Örnek bir kullanım için, bir görüntüdeki nesneleri tanımlamak ve sınıflandırmak için kullanılabilir.

### Derin Pekiştirmeli Öğrenme
Çevresel duruma bağlı olarak ajanın eylemlerini optimize etmeyi amaölayan bir öğrenme yaklaşımıdır.

#### Kullanım Alanları

- Oyun Stratejileri
- Robotik Kontrol
- Finansal Ticaret
- Oromatik Araçlar

> **BİLGİ!** Örnek bir kullanım için, bir otonom aracın etrafındaki ortamı algılamak ve güvenli bir şekilde sürmek için kullanılabilir.


### Transformer
Doğal dil işlemede kullanıulan bir dizi derin öğrenme modelini tanımlaytan bir yapıdadır.

#### Kullanım Alanları

- Dil Modellemesi
- Çeviri
- Metin Sınıflandırma
- Konuşma Sentezi

> **BİLGİ!** Örnek bir kullanım için, bir metin belgesindeki anlamsal bağlşamları anlamak ve ardından çeviri yapmak için kullanılabilir.



[^1]: veribilimiokulu. [Görsel Kaynağı](https://www.veribilimiokulu.com/python-ile-makine-ogrenmesi-2-camdan-beyin-yapmak/)
[^2]: RBCS. [Görsel Kaynağı](https://www.go-rbcs.com/columns/deep-learning-to-the-rescue)
[^3]: Medium. [Görsel Kaynağı](https://medium.com/data-science-365/overview-of-a-neural-networks-learning-process-61690a502fa)
[^4]: ResearchGate. [Görsel Kaynağı](https://www.researchgate.net/figure/Monthly-Maximum-Minimum-and-Average-Generation-Values-of-Hydroelectric-Power-Plants-on-a_fig2_385412492)