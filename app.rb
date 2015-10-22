require 'bundler'
Bundler.require()

before do
  FlickRaw.api_key       = ENV['FLICKR_KEY']
  FlickRaw.shared_secret = ENV['FLICKR_SECRET']
end

# ROUTES
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

get '/photography' do

  # id = '136173250@N05'
  photos = flickr.people.getPhotosOf(:user_id => ENV['FLICKR_USER_ID'])

  # photos = flickr.photosets.getPhotos( :photoset_id => '72157659740260342', :user_id => ENV['FLICKR_USER_ID'] )

  erb :photography
end

get '/this-site' do
  erb :this
end


