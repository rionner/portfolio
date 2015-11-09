class PhotoController < Sinatra::Application

  # FLICKRAW SETUP
  before do
    FlickRaw.api_key = ENV["FLICKR_KEY"]
    FlickRaw.shared_secret = ENV["FLICKR_SECRET"]
  end

  def initialize
    @photos = {}
  end

  def add(photos)
    photos.each do |key, value|

    end
    self
  end

  def to_s
    puts "photo controller - flickr api"
  end

  get '/' do
    @photoset = flickr.photosets.getPhotos :photoset_id => ENV["FLICKR_PORTFOLIO"], :user_id => ENV["FLICKR_USER_ID"], :format => 'json'

    @all_photos = @photoset['photo']


    @all_photos.map { | photo | @photos.add('id' => photo['id'], 'small' => "https://farm#{photo['farm']}.staticflickr.com/#{photo['server']}/#{photo['id']}_#{photo['secret']}_m.jpg", 'large' => "https://farm#{photo['farm']}.staticflickr.com/#{photo['server']}/#{photo['id']}_#{photo['secret']}_h.jpg") }

    erb :photography
  end

end
