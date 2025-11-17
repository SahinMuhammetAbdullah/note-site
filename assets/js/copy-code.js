document.addEventListener('DOMContentLoaded', () => {
    // 1. Kod Bloklarını Hedefle (Uzun backtick blokları)
    const codeBlocks = document.querySelectorAll('.highlighter-rouge');

    // 2. Metin İçi Kodları Hedefle (Tek tırnak ile yazılan küçük bloklar)
    const inlineCodeElements = document.querySelectorAll('p code, li code, blockquote code');

    // ===============================================
    // A. BÜYÜK KOD BLOKLARI İŞLEVİ (Kopyala Butonu Ekleme)
    // ===============================================
    codeBlocks.forEach(wrapper => {
        // Çift eklemeyi kesinlikle engellemek için kontrol
        if (wrapper.querySelector('.copy-btn')) {
            return;
        }

        // --- Dil Sınıfını Çıkarma ve data-lang Atama ---
        const langClass = wrapper.classList.value.split(' ').find(cls => cls.startsWith('language-'));
        let lang = 'Code';

        if (langClass) {
            lang = langClass.replace('language-', '');
            lang = lang.charAt(0).toUpperCase() + lang.slice(1);
        }

        // CSS için data attribute'üne atama (Başlığı gösterir)
        wrapper.setAttribute('data-lang', lang);

        // --- Kopyalama Butonu Ekleme (Uzun bloklar için) ---
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';

        // Sadece İkon ve "Kopyala" Metni
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Kopyala';

        wrapper.appendChild(copyButton);

        // --- Kopyalama Mantığı (Uzun Bloklar) ---
        copyButton.addEventListener('click', () => {
            const codeElement = wrapper.querySelector('pre code');
            if (!codeElement) return;

            const code = codeElement.textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalHTML = copyButton.innerHTML;
                copyButton.innerHTML = '<i class="fas fa-check"></i> Kopyalandı!';
                copyButton.style.background = '#10b981';
                copyButton.style.borderColor = '#10b981';

                setTimeout(() => {
                    copyButton.innerHTML = originalHTML;
                    copyButton.style.background = 'transparent';
                    copyButton.style.borderColor = 'var(--border)';
                }, 2000);
            });
        });
    });

    // ===============================================
    // B. METİN İÇİ KOD İŞLEVİ (Kopyala Butonu EKLENMEZ)
    // ===============================================
    inlineCodeElements.forEach(codeEl => {
        codeEl.style.cursor = 'copy';
        codeEl.style.position = 'relative'; // Tooltip konumlandırması için gerekli

        codeEl.addEventListener('click', () => {
            const textToCopy = codeEl.textContent.trim();

            navigator.clipboard.writeText(textToCopy).then(() => {

                // --- Kopyalandı! Patlama Efekti (Tooltip) ---
                const tooltip = document.createElement('span');
                tooltip.textContent = 'KOPYALANDI!';
                tooltip.className = 'copy-tooltip'; // CSS ile stil vereceğiz

                // JavaScript ile temel stiller (CSS'e taşınabilir)
                tooltip.style.position = 'absolute';
                tooltip.style.top = '-2.5rem'; // Kelimenin biraz üzerine
                tooltip.style.left = '50%';
                tooltip.style.transform = 'translateX(-50%)';
                tooltip.style.background = '#10b981'; // Yeşil arka plan
                tooltip.style.color = 'white';
                tooltip.style.padding = '0.3rem 0.6rem';
                tooltip.style.borderRadius = '4px';
                tooltip.style.fontSize = '0.8rem';
                tooltip.style.whiteSpace = 'nowrap'; // Metin tek satırda kalır
                tooltip.style.opacity = '0'; // Başlangıçta görünmez
                tooltip.style.transition = 'top 0.4s ease-out, opacity 0.4s ease-out';
                tooltip.style.zIndex = '1000'; // Diğer elementlerin üzerinde

                codeEl.appendChild(tooltip);

                // CSS geçişini tetikle
                setTimeout(() => {
                    tooltip.style.opacity = '1';
                    tooltip.style.top = '-3.5rem'; // Yukarı doğru hareket
                }, 10); // Küçük bir gecikme

                // Tooltip'i 1 saniye sonra kaldır
                setTimeout(() => {
                    tooltip.style.opacity = '0'; // Görünmez yap
                    tooltip.style.top = '-4.5rem'; // Daha da yukarı kaydır
                    setTimeout(() => {
                        tooltip.remove(); // DOM'dan tamamen kaldır
                    }, 400); // Geçiş süresi kadar bekle
                }, 1000); // 1 saniye sonra kaybolmaya başla
            });
        });
    });
    injectAdmonitionIcons();
});

/* --- ADMONITION İKON YÖNETİMİ --- */
function injectAdmonitionIcons() {
    // Tüm blockquote elementlerini hedefle
    const admonitionBlocks = document.querySelectorAll('.note-content blockquote');

    const iconMap = {
        'DİKKAT!': { icon: 'fas fa-exclamation-triangle', type: 'warning' },
        'UYARI!': { icon: 'fas fa-exclamation-triangle', type: 'warning' },
        'İPUCU!': { icon: 'fas fa-lightbulb', type: 'tip' },
        'BİLGİ!': { icon: 'fas fa-info-circle', type: 'bilgi' },
        'ÖNEMLİ!': { icon: 'fas fa-star', type: 'onemli' },
        'BİLGİLENDİRME!': { icon: 'fas fa-info-circle', type: 'bilgi' },
        'ALINTI': { icon: 'fas fa-quote-left', type: 'data-quote' }
        
    };

    admonitionBlocks.forEach(block => {
        const strongElement = block.querySelector('strong:first-child');
        if (strongElement) {
            const text = strongElement.textContent.trim().toUpperCase();
            const config = iconMap[text];

            if (config) {
                // 1. Orijinal başlık metnini kaldır
                strongElement.textContent = '';
                
                // 2. İkon elementini oluştur
                const iconElement = document.createElement('i');
                iconElement.className = config.icon;
                
                // 3. Başlığın yanına 'Kutu Adını' yeniden ekle (isteğe bağlı)
                strongElement.appendChild(iconElement);
                strongElement.appendChild(document.createTextNode(` ${text.replace('!', '')}`));

                // 4. Ana kutuya tip sınıfı ekle (görsel ayrım için)
                block.classList.add(`admonition-${config.type}`);
            }
        }
    });
}
// DOMContentLoaded'in en sonunda çağırın