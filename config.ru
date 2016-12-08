# require './app'
require 'tilt/erb'
# require 'dotenv'
require 'sass/plugin/rack'
# require 'flickraw'


require 'bundler'
Bundler.require()

Dotenv.load

# SASS COMPILER
Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

# REQUIRE HELPERS
Dir.glob('./helpers/*.rb').each { |file| require file }

# REQUIRE CONTROLLERS
Dir.glob('./{controllers}/*.rb').each { |file| require file }

# MAP CONTROLLERS
map('/') { run ApplicationController }
map('/portfolio') { run PortfolioController}
map('/photography') { run PhotoController}

run Sinatra::Application
