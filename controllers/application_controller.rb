class ApplicationController < Sinatra::Application

  set :views, File.expand_path('../../views', __FILE__)

  # GENERAL SITE ROUTES
  get '/' do
    erb :index
  end

  get '/aplo' do
    erb :aplo
  end

  get '/resume' do
    erb :resume
  end

  get '/og6' do
    erb :og6
  end

  get '/marvel' do
    erb :marvel
  end

  get '/restaurant' do
    erb :restaurant
  end

  get '/bill' do
    erb :murray
  end

  get '/shake' do
    erb :shake
  end

  get '/this-site' do
    erb :this
  end

end


