# _plugins/post_filter.rb

module Jekyll
  
  # Hooks.register ile Jekyll'in dahili işlemlerine müdahale ediyoruz.
  # :site, :post_render hook'u, postlar derlenmeden hemen önce çalışır.
  Jekyll::Hooks.register :site, :post_read do |site|
    
    # site.posts içindeki postları filtrele
    site.posts.docs.reject! do |post|
      
      # Jekyll'in varsayılan yayınlama mantığına ek olarak kontrol yap
      
      # 1. Postun ön kısmındaki 'isPublish' değerini al.
      #    Eğer hiç tanımlanmamışsa, nil döner.
      isPublish_value = post.data['isPublish']
      
      # 2. isPublish açıkça 'false' olarak ayarlanmışsa
      #    VEYA post.data'da 'isPublish' hiç yoksa (nil) ve biz bunun true olmasını istiyorsak...
      #    ANCAK: _config.yml'deki varsayılan true olarak ayarlandığı için, 
      #           burada sadece 'false' olup olmadığını kontrol etmemiz yeterli.
      
      # 'isPublish' değeri false ise, bu postu listeden reddet (reject!)
      isPublish_value == false
      
    end
  end
end