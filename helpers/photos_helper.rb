module Sinatra
  module PhotosHelper

    def get_all_photos

      FlickRaw.api_key = ENV["FLICKR_KEY"]
      FlickRaw.shared_secret = ENV["FLICKR_SECRET"]

      photoset = flickr.photosets.getPhotos :photoset_id => ENV["FLICKR_PORTFOLIO"], :user_id => ENV["FLICKR_USER_ID"], :format => 'json'

      @all_photos = photoset['photo']

      @photos = []

      @all_photos.map { | photo | @photos << ( ['small' => "https://farm#{photo['farm']}.staticflickr.com/#{photo['server']}/#{photo['id']}_#{photo['secret']}_q.jpg", 'large' => "https://farm#{photo['farm']}.staticflickr.com/#{photo['server']}/#{photo['id']}_#{photo['secret']}_c.jpg"] ) }

      @photos

    end

    def get_large_photos

      FlickRaw.api_key = ENV["FLICKR_KEY"]
      FlickRaw.shared_secret = ENV["FLICKR_SECRET"]

      photoset = flickr.photosets.getPhotos :photoset_id => ENV["FLICKR_PORTFOLIO"], :user_id => ENV["FLICKR_USER_ID"], :format => 'json'

      @all_photos = photoset['photo']

      @large_photos = []

      @all_photos.map { | photo | @large_photos << ( "https://farm#{photo['farm']}.staticflickr.com/#{photo['server']}/#{photo['id']}_#{photo['secret']}_b.jpg") }

      @large_photos

    end

  end # module PhotosHelper

end # module Sinatra
