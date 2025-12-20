# _plugins/lightbox_filter.rb
require 'nokogiri'

module Jekyll
  module LightboxFilter
    def self.process_images(document)
      if document.output_ext == '.html'
        doc = Nokogiri::HTML(document.output)
        
        # Makale içindeki tüm img etiketlerini bul
        doc.css('.note-article img').each do |img|
          # Eğer resim zaten bir link içindeyse dokunma
          next if img.parent.name == 'a'

          # Lightbox yapısını oluştur
          # 'data-lightbox' değeri aynı olan resimler arasında galeride geçiş yapılabilir
          wrapper = doc.create_element('a', 
            :href => img['src'], 
            'data-lightbox' => "post-gallery", 
            'data-title' => img['alt']
          )
          
          img.replace(wrapper)
          wrapper.add_child(img)
        end
        
        document.output = doc.to_html
      end
    end
  end

  # Postlar işlendikten sonra çalıştır
  Jekyll::Hooks.register :posts, :post_render do |post|
    LightboxFilter.process_images(post)
  end
  
  # Sayfalar işlendikten sonra çalıştır
  Jekyll::Hooks.register :pages, :post_render do |page|
    LightboxFilter.process_images(page)
  end
end