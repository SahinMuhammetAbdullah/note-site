module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      # Etiketleri küçük harfe çevirerek grupluyoruz.
      # post.tags, bir postun front matter'daki etiket dizisidir.
      tag_groups = Hash.new { |hash, key| hash[key] = [] }

      site.posts.docs.each do |post|
        post.data['tags'].each do |tag|
          # Etiket adını küçük harfe çevir
          tag_name_downcased = tag.to_s.downcase
          
          # Aynı küçük harf ismine sahip tüm postları topla
          tag_groups[tag_name_downcased] << post
        end if post.data['tags']
      end

      # Her gruplanmış etiket için bir sayfa oluştur
      tag_groups.each do |tag_name_downcased, posts|
        tag_slug = Jekyll::Utils.slugify(tag_name_downcased)
        
        # Sadece post sayısı 0'dan büyük olan etiketler için sayfa oluştur
        if posts.size > 0
          site.pages << TagPage.new(site, site.source, File.join('etiket', tag_slug), tag_name_downcased, posts)
        end
      end
    end
  end

  # Sanal Sayfa Sınıfı
  class TagPage < Page
    def initialize(site, base, dir, tag_name, posts)
      @site = site
      @base = base
      @dir  = dir
      @name = 'index.html'

      self.process(name)
      
      self.data ||= {}
      self.data['layout'] = 'tag_page' 
      
      # Etiket sayfasında kullanmak üzere verileri ata
      self.data['title'] = tag_name.capitalize # Başlık için ilk harfi büyük yap
      self.data['tag'] = tag_name              # Filtreleme için küçük harfli etiket adı
      self.data['posts'] = posts               # Bu etikete ait tüm postlar
    end
  end
end