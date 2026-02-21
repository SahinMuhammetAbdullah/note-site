---
layout: post

title: "AI Giriş Bölüm 2 | Makine Öğrenmesi"
subtitle: "Yapay Zakaya Giriş Ders Notları"
excerpt: "Bu yazımız BTK Yapay Zeka'ya giriş ders notlarindan oluşmatadır."
description_preview: BTK Akademide yer alan Yapay Zeka'ya Giriş dersi notları.
date: 2025-12-28 23:00:00 +0300

categories: [Yapay Zeka, AI-Giriş]
tags: [AI, Makine Öğrenimi, AI Araçları ]
level: Başlangıç

prev_note: AI Giriş Bölüm 1 | Yapay Zeka'ya Giriş
prev_note_link: /yapay-zeka/ai-giris/yapay-zekaya-giris/
next_note: AI Giriş Bölüm 3 | Derin Öğrenme
next_note_link: /yapay-zeka/ai-giris/derin-ogrenme/
related_posts:
  - title: BTK Yapay Zekaya Giriş Eğitimi
    url: https://www.btkakademi.gov.tr/portal/course/yapay-zekaya-giris-29193
---

## Giriş

Bu bölümde öğrenim nedir, nasıl gerçekleşir, genel kavramlar ve geleneksel programlama arasındaki farklara değinilecek.

## Öğrenme Süreci

Bir makine öğrenimi algoritması, matematiksel işlemlerin parametrelerine bağlı olan ağırlık değerlerinin optimize edilme sürecine bağlı olarak öğrenme gerçekliştirdiği süreçtir. Bu süreçte bazı sabit kat sayılar, öğrenme oranı (Learning rate) vb. pek çok dış parametreye de sahip olabilirler.

Öğrenmenin en önemli ihtiyacı verilerdir. Makine öğrenimi, bu verileri matemateiksel algoritmaları üzerinden işleyerek gerçekleşir. Burada veri analizi, aykırı veri tespiti kısaca veri de öğrenime girmeden bir süreçten geçirilerek işlem görmelidir. 

## Yöntemler 

Makine öğrenimi üç temel başlıkta inceleyebiliriz:

- Gözetimli Öğrenme (Supervised Learning)
- Gözetimsiz Öğrenme (Unupervised Learning)
- Pekiştirmeli Öğrenme (Reingorcement Learning)

Öncelikle bilmemiz gereken bazı kavramlar vardır. Şimdi bunu inceleyelim.

### Kavramlar

#### Model

Gerçek dünya sürecinin matematiksel temsilidir. Model, veriden öğrenme işlemini gerçekleştirecek bir algoritmadır. Örneğin; KNN, GradientDescent, Decision Tree, Random Forest, Linear Regression vb. algoritmaların veri ile işlenmesinden sonra oluşan paremetrelin optimize sonucuna model denir.

#### Öznitelik 

Veri kümesinin ölçilebilir bir özelliği ya da parametresine denir. Örneğin bir market için müşterilerin potansiyel birlikte alabileceği bir raf sistemi kuracaksınız. Burada her bir kasa fişi bizim verilerimiz olmakta. Fişiin içeriğindeki bebek bezi, ekmek, ıslak mendil, süt ve mama alınmı olsun. Burada tüm ürünler bizim **ÖZNİTELİĞİMİZ**dir (Feature). Veri seti alınan ürünleri işaretler. Örenk bir veri seti öznitelik tablosu.

| Öznitelik -> | Bebek bezi | Mama  | Süt   | Yumurta | Ekmek | ... |
| ------------ | ---------- | ----- | ----- | ------- | ----- | --- |
| F1           | **X**      | **X** | **X** | **-**   | **X** | ... |
| F2           | **X**      | **X** | **X** | **X**   | **X** | ... |
| F3           | **-**      | **-** | **X** | **X**   | **-** | ... |
| F4           | **-**      | **X** | **-** | **-**   | **X** | ... |

Burada özniteliklerimiz; Bebek bezi, Mama, Süt, Yumurta, Ekmek... şekilnde oldu. Verilerimiz (Label) ise F1, F2, F3, F4... şeklinde. Veri setimiz ise **X Market Fiş** veri seti oldu. 

#### Hedef
Hedef (Label) ise **X Market Fiş** veri setindeki her bir fişdir (F1, F2, F3, ...). Eğitim bu verileri tahminlemek üzere oluşturulur.

#### Eğitim

Eğitim (Training) ise **X Market Fiş** veri seti üreindeki verileri işleyerek parametrelerin günceleme sürecidir. 

#### Tahmin

Tahmin (Prediction), veri kümesindeki eğitime katılmatan verileri öğrenim sonrasında modele girdi olarak veriliğ doğruluk, keskinlik gibi değerlerin değerllendirildiği işlem sürecidir.


Bu konuları atladıktan sonra şimdi türlerinden bahsedelim.

### Türleri

![Türler](/assets/images/postimages/makine-ogrenmesi-turler.png)
> **CAPTION**  Türler [^1]

Gözetimli Öğrenmede, algoritmaler verideki hedef(label)'lerin doğrultusunda yani, özniteliklere göre ayır edici olan seçeneklere göre eğitilir. 

Gözetimsiz Öğrenme ise, yukarıda verdiğimiz örnekteki gibidir. Belirli bir düzeni işleyen ama o işlemlerin bir bağlayıcısı olmayan durumlarda kullanılır. 

Daha açıklayıcı bir örnek olamsı için;

| Öznitelik -> | Renk      | Ağırlık    | UçarMı    |
| ------------ | --------- | ---------- | --------- |
| Kedi         | **Siyah** | **3 Kg**   | **Hayır** |
| Köpek        | **Siyah** | **8 Kg**   | **Hayır** |
| Kuş          | **Gri**   | **0.2 Kg** | **Evet**  |

Bu veri seti Gözetimli öğrenmeye uygun bir veri kümsi örneği olabilir. Yukardaki fiş örneği ise gözetimsiz öğrenim için daha uygun bir veri kümesidir.

Pekiştirmeli öğrenme ise belirli bir veri setine değil(veri seti kullanılmıyor değil) bir simülasyon ortamına bağlı çalışmakta. Çevreden aldığı bilgileri bir ajan yardımı ile işler.

#### Gözetimli Öğrenme

Eğitim verilerinde girdi ve çıktıyı arasındaki ilikşkiyi öğrenmeye çalışır. Etiketlenmiş bir veri kümesi ile gerçekleştirilen bir yöntemdir. Ana adımları; veri toplama ve hazırlık, model seçimi ve eğitim, model değerlendirmesi, model ayarlanması ve hiperparametre(Learning rate vb. ayarlanabilir parametreleri) optimizasyonu şeklindedir.

Gözetimli öğrenme, sınıflandırma ve regresyon gibi çeşitli problemleri çözmek için kullanılır. Örneğin hastalık teşhisi (sınıflandrıma problemi), müşteri tercihleri tahmin etme, borsa fiyat tahmini (regresyon problemi) gibi problemleri çözer. 

![Gözetimli Öğrenme](/assets/images/postimages/gozetimli-ogrenme.png)
> **CAPTION** Gözetimli Öğrenme [^2]

Görsel de ifade edildiği gibi veri ler etiketleri ile beraber gelir ve seçilen algoritma ile işlenerek modeli oluşturur. Bu model de eğitim verisinde bulunmayan bir test veri kümesinden veriler ile testedilir ve modelin doğruluğu ölçülür.

##### Doğrusal Regresyon (Linear Regression)

Doğrusal regresyon, makine öğrenmesinin sürekli çıktı değerlerini tahmin etmek için kullanılan basit ancak etkili bir algoritmadır.

![Doğrusal Regresyon](/assets/images/postimages/linear-reg.png)
> **CAPTION** Doğrusal Regresyon [^3]

Görselde görünen X dizleminde bir değeri biliyor ve Y düzemindeki karşılığını arıyorsam kullanabileceğim iyi bir algoritmadır. Temel olarak, giriş özellikleri ile hedef değişken arasındaki doğrusal ilişkiyi modellemeye çalışır. Örnek olarak, ev fiyatları tahmin etme vb. şekilde kurgulanan algoritmalarımızdır.

##### Lojistik Regresyon (Logistic Regression)

Sınıflandırma problemlerinin çözümü için kullanılır. Temel olarak, giriş özekkikleri ile birlikte bir veri noktasıının bellirli bir kategoriye ait olma olasılığını tahmin eder. 

![Lojistik Regresyon](/assets/images/postimages/lojistik-reg.png)
> **CAPTION** Lojistik Regresyon [^4]

Bir e postanın spam olup olmadığı tahmit etmekte kullanılabilecek bir algoritmadır.

##### Karar Ağaçları (Decision Tree)

Sınıflandırma ve Regresyon problemlerini çözmekte kullanılan algoritmadır. Veri kümesindeki özelliklerin değerlernine göre bir dizi karar düğümü oluşturulark veriyi sınıflandırır veya regresyon yapar. Çeşitli türleri vardır; rastgele ormanlar (random forests) ve gradient boosting modelleri karar ağaçlarının performansını artırmak için kullanılan popüler yöntemlerdir.

![Karar Ağaçları](/assets/images/postimages/karar-agaclari.png)
> **CAPTION** Karar Ağaçları [^5]

##### Rastgele Orman (Random Forest)

Rastgele ormanlar, bir ensemble learning yöntemi olan karar ağaçlarının bir türüdür. Birden fazla karar ağacını bir araya getirerek daha güçlü ve hassas bir model oluştururlar. Her bir ağaç, rastgele seçilen özelliklerden oluşturulur ve bağımsız olarak eğitilir. Bu, her bir ağacın farklı bir özellik alt kümesine dayalı olarak öğrenme yeteneğine sahip olmasını sağlar.

![Rastgele Orman](/assets/images/postimages/rastgele-orman.png)
> **CAPTION** Rastgele Orman [^6]

##### Destek Vektör Makineleri (Support Vector Machines)

Kısaca SVM, hem sınıflandırma hem de regresyon problemleri için kullanılan güçlü bir makine öğrenme algoritmasıdır. SVM, veri noktalarını sınıflandırma veya regresyon hedeflerini ayırmak için bir hiperdüzlem veya karar sınırı oluşturarak çalışır.

![Destek Vektör Makineleri](/assets/images/postimages/svm.png)
> **CAPTION** Destek Vektör Makineleri [^7]

##### Naive Bayes 

Naive Bayes, sınıflandırma problemleri için kullanılan bir makine öğrenme algoritmasıdır. Bu algoritma, Bayes teoreminin temelini oluşturur ve bağımsızlık varsayımı yaparak basit ve etkili bir şekilde çalışır.

![Naive Bayes](/assets/images/postimages/naive-bayes.png)
> **CAPTION** Naive Bayes [^8]

##### K-En Yakın Komşu (K-Nearest Neighbors)

KNN algoritması sınıflandırma ve regresyon problemlerinde kullanılan bir makine öğrenme algoritmasıdır. Bu algoritma, bir veri noktasını sınıflandırmak veya bir değer tahmin etmek için en yakın komşuların çoğunluğuna dayanır. 

![K-En Yakın Komşu](/assets/images/postimages/knn.png)
> **CAPTION** K-En Yakın Komşu [^9]

##### Gradient Boosting

Gradient Boosting Algoritmaları, karmaşık tahmin modelleri oluşturmak için kullanılan güçlü bir makine öğrenme tekniğidir. Bu algoritmalar, zayıf tahmin modellerini bir araya getirerek güçlü bir tahmin modeli oluştururlar. Gradient boosting, ağırlıklı olarak sınıflandırma ve regresyon problemleri için kullanılır ve genellikle yüksek doğruluk sağlar. Gradient boosting algoritmalarının en yaygın kullanılanları arasında Gradient Boosted Trees (GBT) ve XGBoost bulunur.

![Gradient Boosting](/assets/images/postimages/gradient-boost.png)
> **CAPTION** Gradient Boosting [^10]


#### Gözetimsiz Öğrenme

Etiketlenmemiş veri kümeleri üzerinde yapılan bir makine öğrenimi yaklaşımıdır. Bu yaklaşımda, veri kümesindeki yapıyı anlamak, gizli desenleri keşfetmek ve veri noktaları arasındaki ilişkileri belirlemek amaçlanır. Genellikle veri keşfi ve veri ön işlemede kullanılır. Bu bir kümeleme yöntemi ile, verilerin içsel özelliklerine benzer gruplara ayırmayı içeren bir işlemdir. Ayrıca boyuz azaltma algoritmalarında anlamlı bilgiyi korurken, giriş değişkenlerinin veya özllik sayısını azatmak için kullanılır.

![Gözetimsiz Öğrenme](/assets/images/postimages/gozetimsiz-ogrenme.png)
> **CAPTION** Gözetimsiz Öğrenme [^11]

Burada K-Means, DBSCAN (Görüntülü uygulamalarda), gibi kümeleme yapan ve PCA (Temel Bileşen Analizi), T-SNE gibi de boyult azaltmada kullanılan algoritmalar bulunmaktadır.

#### Pekiştirmeli Öğrenme

Ortamla etkileşime geçerek bellirli bir görevi gerçekleştirmeyi öğrenmesini sağlayan bir öğrenme türüdür. Bir ajan ile ortamda belirli bir hedefi başarmak için ne tür eylemler yapması gerektiği öğretilir. Oyun yapay zekası, robotik, otomasyon gibi karar alma sistemlerinde gözükmektedir.

![Pekiştirmeli Öğrenme](/assets/images/postimages/rf-learning.png)
> **CAPTION** Pekiştirmeli Öğrenme [^12]

Aslında görsel çok iyi bir açıklama sağlamakta. Pekiştirmeli öğrenmeyi bir çocuğun çevresini inceleyerek öğrenmesine bezetebiliriz. 

Alt alanlarında;
- Model Tabanlı PÖ
- Model Tabanlı Olmayan PÖ
- Dğer Tabanlı PÖ
- Politika Tabanlı PÖ

Gibi seçenekler mevcuttur. Ayrıca derin öğrenme tarafında da bulunan farklı alt dalları bulunmaktadır.

## Makine Öğrenmi Süreci

![Makine Öğrenmi Süreci](/assets/images/postimages/makine-ogrenimi-sureci.png)
> **CAPTION** Pekiştirmeli Öğrenme [^13]

Görsel üzerinden gidecek olursak, ilk açalamada veri toplama, dizenleme ve ön işleme süreci vardır. Sonrasında veriler doğrultusnda modelin seçilmesi ve eğitilmesi olacaktır. Sonrasında da sonuçlar değerlendirilir. Farklı bir veri seti ile testedilir ve değerlendirmeler alınır. Başarısız olursa başa dönerek yeniden model seçimi yapılır. Başarılı olursa da kabul edilir.

## Araçlar

- TensorFlow
- Keras
- Scikit-learn
- Caffe2
- Apache Spark MLlib
- OpenNN
- Amazon SageManager

Modeller, algoritmalar, veri önişleme algoritmaları vb. birçok yapıyı barındıran farklı araçları listeledik.


## Model Seçimi

- Problem anlaşılmalı.
- Başarı kriterleri tanımlanmalı.
- Veri gereksinimleri anlama.
- Veri gereksinimleri belirleme.
- Model eğitimi için veri toplama.
- Veri önişleme yapılmalı.
- Modelin özellikleri belirlenir.

Bu adımlar sonrası model eğitilir. 

[^1]: ResearchGate. [Görsel Kaynağı](https://www.researchgate.net/figure/The-main-types-of-machine-learning-Main-approaches-include-classification-and-regression_fig1_354960266)
[^2]: DatabaseTown. [Görsel Kaynağı](https://databasetown.com/supervised-learning-algorithms/)
[^3]: GeeksForGeeks. [Görsel Kaynağı](https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/)
[^4]: Medium. [Görsel Kaynağı](https://mfakca.medium.com/lojistik-regresyon-nedir-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-4e1d2951c5c1)
[^5]: Medium. [Görsel Kaynağı](https://medium.com/@shrutimisra/interpretable-ai-decision-trees-f9698e94ef9b)
[^6]: Medium. [Görsel Kaynağı](https://medium.com/@abhishekjainindore24/everything-about-random-forest-90c106d63989)
[^7]: Medium. [Görsel Kaynağı](https://suleakcaycs.medium.com/destek-vekt%C3%B6r-makineleri-support-vector-machine-svm-5da8fc35b2b6)
[^8]: ML Archive. [Görsel Kaynağı](https://mlarchive.com/machine-learning/the-ultimate-guide-to-naive-bayes/)
[^9]: GeeksForGeeks. [Görsel Kaynağı](https://www.geeksforgeeks.org/machine-learning/how-to-find-the-optimal-value-of-k-in-knn/)
[^10]: GeeksForGeeks. [Görsel Kaynağı](https://www.geeksforgeeks.org/machine-learning/ml-gradient-boosting/)
[^11]: DatabaseTown. [Görsel Kaynağı](https://databasetown.com/unsupervised-learning-types-applications/)
[^12]: DatabaseTown. [Görsel Kaynağı](https://databasetown.com/basics-of-reinforcement-learning/)
[^13]: Spiceworks. [Görsel Kaynağı](https://www.spiceworks.com/soft-tech/what-is-ml/)