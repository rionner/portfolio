require './app'
require 'tilt/erb'
require 'dotenv'
require 'sass/plugin/rack'
require 'flickraw'

Dotenv.load

Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

run Sinatra::Application
