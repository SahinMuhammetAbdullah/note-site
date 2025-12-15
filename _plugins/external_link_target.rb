# _plugins/external_link_target.rb

require 'nokogiri'

module Jekyll
  
  # Yeni bir modül tanımlıyoruz ki, process_links metoduna erişim sağlayabilelim.
  module ExternalLinkTarget
    
    # site nesnesini depolamak için
    @@site = nil 

    # Yardımcı fonksiyon: HTML içeriğini alıp linkleri düzenler.
    def self.process_links(document)
      
      # Sadece HTML çıktısını işle
      if document.output_ext == '.html'

        # Nokogiri kullanarak HTML'i ayrıştır
        doc = Nokogiri::HTML(document.output)
        
        site_url = @@site.config['url'] || @@site.config['baseurl'] || ''
        
        # Tüm <a> (link) etiketlerini bul
        doc.css('a').each do |link|
          href = link['href']
          
          # Harici linkleri kontrol et
          if href && href.start_with?('http') && !href.include?(site_url)
            
            # 1. target="_blank" ekle
            link['target'] = '_blank'
            
            # 2. Güvenlik için rel="noopener noreferrer" ekle
            rel_value = link['rel'] ? link['rel'] + ' noopener noreferrer' : 'noopener noreferrer'
            link['rel'] = rel_value.strip
          end
        end
        
        # Değiştirilmiş HTML'i döküman çıktısına geri ata
        document.output = doc.to_html
      end
    end
  end

  # Sitenin ilk kurulduğu anda site nesnesini kaydet
  Jekyll::Hooks.register :site, :after_init do |site|
    ExternalLinkTarget.send(:class_variable_set, :@@site, site)
  end

  # Hook'u Sayfalar için kaydet
  Jekyll::Hooks.register :pages, :post_render do |page|
    ExternalLinkTarget.process_links(page)
  end
  
  # Hook'u Postlar için kaydet
  Jekyll::Hooks.register :posts, :post_render do |post|
    ExternalLinkTarget.process_links(post)
  end
end