class PhotoController < Sinatra::Application

  # FLICKRAW SETUP
  before do
    FlickRaw.api_key = ENV["FLICKR_KEY"]
    FlickRaw.shared_secret = ENV["FLICKR_SECRET"]
  end

  get '/' do
    @photoset = flickr.photosets.getPhotos :photoset_id => ENV["FLICKR_PORTFOLIO"], :user_id => ENV["FLICKR_USER_ID"], :format => 'json'

    @all_photos = @photoset['photo']
    @photos = []
    @all_photos.map { | photo | @photos << photo['id'] }
    puts @photos

    erb :photography
  end

end