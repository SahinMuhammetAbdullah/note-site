module Jekyll
  Jekyll::Hooks.register :posts, :pre_render do |post, payload|
    original_categories = post.data['categories']

    # Eğer kategori yoksa veya array değilse devam etme
    next unless original_categories.is_a?(Array)

    # Görünür kategori isimleri olduğu gibi korunur
    # Sadece URL için ayrı slug dizisi üret
    slugified_categories = original_categories.map do |category|
      Jekyll::Utils.slugify(category.to_s, mode: 'latin')
    end

    # Kategori slug'larını URL için birleştir
    categories_path = slugified_categories.join('/')

    # Başlığı slugify et
    raw_filename = post.basename_without_ext
    title_slug = raw_filename.sub(/^\d{4}-\d{2}-\d{2}-/, "")




    # Yeni permalink'i sadece URL için ata (görünür alan etkilenmez)
    post.data['permalink'] = "/#{categories_path}/#{title_slug}/"

    # İstersen görünür kategorilerle slug kategorileri aynı anda taşımak için:
    post.data['category_slugs'] = slugified_categories
  end
end
