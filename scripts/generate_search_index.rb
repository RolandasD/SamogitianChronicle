#!/usr/bin/env ruby
# Generates a simple search index of page titles and URLs
require 'json'
root = File.expand_path('..', __dir__)
output = File.join(root, 'assets', 'js', 'searchIndex.json')

pages = Dir.glob(File.join(root, '*.html')).reject { |f| File.basename(f) == 'nav.html' }

index = pages.map do |file|
  html = File.read(file)
  title = html[/<title>(.*?)<\/title>/m, 1] || File.basename(file, '.html')
  { title: title.strip, url: File.basename(file) }
end

File.write(output, JSON.pretty_generate(index))
puts "Generated #{output} with #{index.length} entries"
