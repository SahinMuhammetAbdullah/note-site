module Jekyll
  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      # 1. Tüm benzersiz ana kategori isimlerini topla
      primary_categories = site.posts.docs.flat_map { |post| post.data['categories'][0] if post.data['categories'] && post.data['categories'].any? }.compact.uniq

      # 2. Her benzersiz kategori için bir sayfa oluştur
      primary_categories.each do |category|
        category_slug = Jekyll::Utils.slugify(category)
        
        # Sayfanın URL'sini ve içeriğini tanımla
        site.pages << CategoryPage.new(site, site.source, File.join('kategori', category_slug), category)
      end
    end
  end

  # Sanal Sayfa Sınıfı
  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir  = dir
      @name = 'index.html' # Klasör adında index.html oluşturur

      self.process(name)
      
      # _layouts/category_page.html dosyasını kullan
      self.data ||= {}
      self.data['layout'] = 'category_page' 
      
      # Liquid içinde kullanmak üzere kategori bilgisini ata
      self.data['title'] = category
      self.data['category'] = category
    end
  end
end