class PortfolioController < Sinatra::Application

  get '/' do
    erb :portfolio
  end

  get '/aplo' do
    erb :aplo
  end

  get '/bill' do
    erb :murray
  end

  get '/marvel' do
    erb :marvel
  end

  get '/og6' do
    erb :og6
  end

  get '/restaurant' do
    erb :restaurant
  end

  get '/shake' do
    erb :shake
  end

  get '/style-guide' do
    erb :style_guide
  end

  get '/this-site' do
    erb :this
  end

end
