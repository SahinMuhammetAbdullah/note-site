---
layout: post

title: "AI Giriş Bölüm 6 | Yapay Zeka Geliştirme Araçları ve Süreçleri"
subtitle: "Yapay Zakaya Giriş Ders Notları"
excerpt: "Bu yazımız BTK Yapay Zeka'ya giriş ders notlarindan oluşmatadır."
description_preview: BTK Akademide yer alan Yapay Zeka'ya Giriş dersi notları.
date: 2026-02-22 01:57:00 +0300

categories: [Yapay Zeka, AI-Giriş]
tags: [AI, AI Araçları, AI Süreçler]
level: Başlangıç

prev_note: AI Giriş Bölüm 5 | Üretken Yapay Zeka
prev_note_link: /yapay-zeka/ai-giris/uretken-yapay-zeka/
# next_note:
# next_note_link: 
related_posts:
  - title: BTK Yapay Zekaya Giriş Eğitimi
    url: https://www.btkakademi.gov.tr/portal/course/yapay-zekaya-giris-29193
---

## Programlama Dilleri ve Kütüphaneler

- Python
  - NumPy
    - Doğrudan AI kullanılmaz. 
    - Bilimsel hesaplamalar için kullanılan bir kütüphanedir.
    - Çok boyutlu diziler ve matematiksel fonksiyonlar sağlar.
    - AI uygulamalarında çok sayıda matris hesaplamaları kullanıldığı için bir AI modelini sıfırdan implemente etmek için kullanılır.
  - Pandas
    - Veri analizi ve işleme için kullanılan bir kütüphanedir.
    - Veri çerçevelerini (data frame) manipüle etmek için kullanılır.
    - Veri ön işleme adımında AI projelerinde sıklıkla tercih edilir.
  - SciPy
    - Bilimsel ve teknik hesaplamalar için kullanılır.
    - Optimizasyon, lineer cebir, istatistik ve sinyal işleme fonksiyonları içerir.
    - NumPy üzerine inşa edilmiştir.
  - TensorFlow/Keras
    - Derin öğrenmede kullanılan en popüler kütüphanelerdir.
      - **TensorFlow**, Google tarafından geliştirilmiştir. Derin öğrenme modelleri oluşturmak için açık kaynak bir kütüphanedir.
      - **Keras** ise TensorFlow üzerinde koşan yüksek seviyeli bir API'dır.
    - Derin öğrenme modellerini hızlı ve kolay bir şekilde oluşturmayı amaçlar.
    - Yeni başlayanlar için Keras ile başlamak tavsiye edilir.
  - PyTorch
    - Bir derin öğrenme kütüphanesidir.
    - Meta tarafından geliştirilmiştir.
    - Dinamik hesaplama grafiklerine bağlıdır (dynamic computation graph).
    - Esneklik ve hız açısından popülerdir.
    - Araştırma odaklı projelerde sıklıkla kullanılır.
  - JAX
    - Google tarafından geliştirilen yüksek performanslı sayısal hesaplama kütüphanesidir.
    - Otomatik türev (automatic differentiation) desteği sunar.
    - TPU ve GPU üzerinde yüksek performans sağlar.
  - Scikit-learn
    - Makine öğrenmesi algoritmalarını ve araçlarını içeren bir kütüphanedir.
    - Neredeyse tüm klasik makine öğrenmesi modelleri için metot ve fonksiyonları vardır.
    - İçerisinde farklı veri setleri de barındırır.
  - XGBoost
    - Gradient Boosting algoritmasını optimize edilmiş şekilde sunar.
    - Tabular veri problemlerinde yüksek performans sağlar.
  - LightGBM
    - Microsoft tarafından geliştirilmiştir.
    - Büyük veri setlerinde hızlı ve hafif bir gradient boosting çözümüdür.
  - CatBoost
    - Özellikle kategorik verilerde başarılıdır.
    - Gradient boosting tabanlıdır.
  - Hugging Face Transformers
    - NLP ve LLM modellerini kullanmak için popüler bir kütüphanedir.
    - BERT, GPT, T5 gibi hazır modeller sunar.
  - CNTK (Microsoft Cognitive Toolkit)
    - Microsoft tarafından geliştirilen açık kaynaklı bir derin öğrenme kütüphanesidir.
    - Yüksek performanslı GPU hesaplaması ve dağıtılmış eğitim desteği sunar.
  - MXNet
    - Apache MXNet, çoklu dilleri ve çoklu cihazları destekleyen bir derin öğrenme kütüphanesidir.
  - Matplotlib
    - Verileri, model değerlendirmelerini, eğitim sırasında oluşan loss vb. değerleri görselleştirmemizi sağlar.
  - Seaborn
    - İstatistiksel veri görselleştirme için kullanılır.
    - Matplotlib üzerine inşa edilmiştir.
  - Plotly
    - İnteraktif görselleştirme sağlar.
    - Dashboard geliştirmede kullanılır.
  - OpenCV
    - Bilgisayarlı görü uygulamalarında kullanılır.
    - Görüntü işleme, nesne tanıma, yüz tanıma gibi işlemleri içerir.
  - NLTK
    - Doğal Dil İşleme (NLP) için kullanılan temel bir kütüphanedir.
  - SpaCy
    - Endüstriyel seviyede NLP işlemleri için optimize edilmiştir.
  - FastAPI
    - AI modellerini REST API olarak servis etmek için kullanılır.
  - Flask
    - Hafif bir web framework’tür.
    - Model deployment için kullanılır.
  - Streamlit
    - AI projeleri için hızlı arayüz geliştirmeye olanak sağlar.
  - Gradio
    - Makine öğrenmesi modelleri için hızlı demo arayüzü oluşturmayı sağlar.

- R
  - Caret (Classification and Regression Training)
    - Makine öğrenmesi modellerini üretmek ve değerlendirmek için kullanılır.
  - Dplyr
    - Veri manipülasyonu ve işlemesinde kullanılır.
    - Pandas kütüphanesinin **R** dilindeki karşılığı olarak düşünülebilir.
  - ggplot2
    - Görselleştirme için yaygın olarak kullanılan bir kütüphanedir.
    - Matplotlib’in **R** dilindeki karşılığı olarak düşünülebilir.
  - Shiny
    - Web tabanlı veri uygulamaları geliştirmek için kullanılır.
  - randomForest
    - Random Forest algoritmasının R implementasyonudur.
  - xgboost
    - Gradient boosting algoritmasını R ortamında kullanmayı sağlar.

- Julia
  - Flux.jl
    - Derin öğrenme modelleri oluşturmak için kullanılan bir kütüphanedir.
    - Hızlı ve esnektir.
  - MLJ.jl
    - Makine öğrenmesi algoritmalarını bir araya getiren bir framework’tür.

- Java
  - Weka
    - Makine öğrenmesi ve veri madenciliği kütüphanesidir.
    - Açık kaynaklıdır.
  - Deeplearning4j
    - JVM tabanlı derin öğrenme kütüphanesidir.
    - Enterprise projelerde kullanılır.

- JavaScript
  - TensorFlow.js
    - Tarayıcı tabanlı yapay zeka uygulamaları geliştirmek için kullanılır.
  - Brain.js
    - JavaScript tabanlı neural network kütüphanesidir.
  - ONNX Runtime Web
    - ONNX formatındaki modelleri tarayıcıda çalıştırmayı sağlar.

- C++
  - OpenCV
    - Açık kaynaklı bilgisayarlı görü ve makine öğrenimi kütüphanesidir.
  - dlib
    - Yüz tanıma, nesne tanıma ve yüz ifadesi analizi gibi işlemleri destekler.

- C#
  - ML.NET
    - Microsoft tarafından geliştirilen açık kaynaklı bir makine öğrenimi kütüphanesidir.
  - Accord.NET
    - Makine öğrenmesi, istatistik ve sinyal işleme araçları içerir.

## Geliştirme Ortamları

- **Entegre Geliştirme Ortamları (IDEs)**
  - PyCharm
    - JetBrains tarafından geliştirilen ve Python geliştirme için popüler bir IDE'dir. Yapay zeka projelerinde TensorFIow, PyTorch gibi kütüphaneleri kullanmak için tercih edilir.
  - Jupyter Notebook/JupyterLab
    - Veri analizi, görselleştirme ve yapay zeka modeli prototipleme için yaygın olarak kullanılan bir araçtır. Hem kodu hem de açıklamaları içeren belgeler oluşturmak için kullanılır.
    - İnteraktif bir döküman belgesine benzemektedir.
  - Visual Studio Code (VSCode)
    - Microsoft tarafından geliştirilen ve Python, JavaScript, C++ gibi birçok dili destekleyen bir IDE'dir. Derin öğrenme projeleri için eklentilerle genişletilebilir.
  - Spyder
    - Python bilimsel hesaplamaları için tasarlanmış bir IDEldir. NumPy, SciPy, Pandas gibi kütüphaneleri kullanarak yapay zeka projeleri geliştirmek için uygun bir ortamdır.
- **Bulut Tabanlı Geliştirme Ortamları**
  - Google Colab 
    - Google'ın ücretsiz bulut tabanlı Jupyter Notebook hizmetidir. GPU ve TPU desteği sunar ve TensorFIow, PyTorch gibi kütüphaneleri kullanmak için uygun bir ortam sağlar.
  - Microsoft Azure Notebooks
    - Microsoft'un bulut tabanlı Jupyter Notebook hizmetidir. Python, R ve F# dillerini destekler ve yapay zeka projelerini geliştirmek için kullanılabilir.
  - Amazon SageMaker
    - Amazon Web Services (AWS) tarafından sağlanan bir hizmettir. Makine öğrenimi modellerini eğitmek, dağıtmak ve yönetmek için kullanılan bir bulut tabanlı platformdur. TensorFlow, PyTorch, MXNet gibi çeşitli derin öğrenme çerçevelerini destekler.
  - IBM Watson Studio
    - IBM tarafın n sağlanan bir platformdur. Veri bilimi ve yapay zeka projeleri için kullanılan bir bulut tabanlı çözümdür. Python, R ve Scala gibi dilleri destekler ve derin öğrenme kütüphanelerini kullanmak için uygun bir ortam sağlar.

## Süreçleri

### DevOps (Development Operations)

- Yazılım geliştirme ve bilgi teknolojileri operasyonları arasındaki işbirliğini ve iletişimi artırmayı amaçlayan bir kültür, hareket ve uygulama yaklaşımıdır.
- Yazılım geliştirme süreçlerini ve operasyonel süreçleri entegre ederek, yazılım yayınlama süreçlerini hızlandırır, hata oranlarını azaltır ve yazılımın kalitesini artırır.

![devops](/assets/images/postimages/devops.png)
> **CAPTION** DevOps Süreci[^1]

### DataOps (Data Operations)

- Veri yönetimi ve veri mühendisliği süreçlerini geliştirmeyi ve otomatize etmeyi amaçlayan bir metodoloji ve kültürdür.
- Veri işleme, veri kalitesi, veri entegrasyonu ve veri analitiği gibi veri odaklı süreçlerin verimlılıgıni artırır ve işbirliğini teşvik eder.

![dataops](/assets/images/postimages/dataops.png)
> **CAPTION** DataOps Süreci[^2]

### MLOps (Machine Learning Operations)

- Makine öğrenimi projeleri için geliştirilen uygulama ve operasyonel pratikler bütünüdür.
- Makine öğrenimi modellerini geliştirme, eğitme, dağıtma ve sürdürme süreçlerini otomatize ederek, makine öğrenimi projelerinin verimliliğini ve güvenilirliğini artırır.

![mlops](/assets/images/postimages/mlops.png)
> **CAPTION** MLOps Süreci[^3]


### AIOps (Artifical Intelligence Operations)

- Bilgisayar sistemlerinin ve ağların performansını, güvenliğini ve durumunu izlemek ve yönetmek için yapay zeka ve makine öğrenimi tekniklerini kullanan bir yaklaşımdır.
- Büyük miktarda veriyi analiz ederek, anormal durumları tespit eder, sorunları tahmin eder ve operasyonel verimlılıgı artırır.

![aiops](/assets/images/postimages/aiops.png)
> **CAPTION** AIOps Süreci[^4]


### LLMOps (Large Language Model Operations)

- Büyük dil modelleri (LLM'ler) gibi büyük ölçekli dil modellerini geliştirme, dağıtma ve sürdürme süreçlerini yönetmek için kullanılan operasyonel ve yönetim pratiklerini kapsar.
- Yüksek hesaplama kaynaklarına ve veriye dayalı olarak LLM'Ieri egı me ve etkin bir şekilde kullanmak için gereken altyapıyı sağlar.

![llmops](/assets/images/postimages/llmops.png)
> **CAPTION** LLMOps Süreçleri[^5]


[^1]: TrustBT [Görsel Kaynağı](https://trustbt.com/en/devops/)
[^2]: TheDataOps [Görsel Kaynağı](https://www.thedataops.org/what-is-dataops/)
[^3]: VeriBilimiOkulu [Gösel Kaynağı](https://www.veribilimiokulu.com/mlops-nedir/)
[^4]: XongoLab [Gösel Kaynağı](https://www.xongolab.com/blog/unleashing-the-potential-of-artificial-intelligence-based-operations/)
[^5]: Medium [Görsel Kaynağı](https://medium.com/aimonks/interview-ready-key-llmops-and-mlops-topics-you-need-to-know-f938f49f0d1f)