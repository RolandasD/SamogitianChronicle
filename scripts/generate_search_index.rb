#!/usr/bin/env ruby
require 'json'
require 'yaml'

root = File.expand_path('..', __dir__)
output = File.join(root, 'assets', 'js', 'searchIndex.json')

pages = Dir.glob(File.join(root, '*.html')).reject { |f| File.basename(f) == 'nav.html' }

index = pages.map do |file|
  html = File.read(file)

  front = {}
  body = html
  if html =~ /\A---\s*\n(.*?)\n---\s*\n/m
    front = YAML.safe_load($1) || {}
    body = html.sub(/\A---\s*\n.*?\n---\s*\n/m, '')
  end

  title = front['title'] || body[/<title>(.*?)<\/title>/m, 1] || File.basename(file, '.html')
  description = front['description'] ||
                body[/<meta name=["']description["'] content=["'](.*?)["']/m, 1] ||
                body[/<h1[^>]*>(.*?)<\/h1>/m, 1] || ''

  { title: title.strip, url: File.basename(file), description: description.strip }
end

File.write(output, JSON.pretty_generate(index))
puts "Generated #{output} with #{index.length} entries"
