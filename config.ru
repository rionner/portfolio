require './app'
require 'tilt/erb'
require 'sass/plugin/rack'

Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

run Sinatra::Application
