class PortfolioController < Sinatra::Application

  get '/' do
    erb :portfolio
  end

end
