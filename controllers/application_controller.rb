class ApplicationController < Sinatra::Application

  set :views, File.expand_path('../../views', __FILE__)

  # HELPERS
  helpers Sinatra::PhotosHelper

  # GENERAL SITE ROUTES
  get '/' do
    get_large_photos
    erb :index
  end

  get '/resume' do
    erb :resume
  end

end


