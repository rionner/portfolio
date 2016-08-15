class PhotoController < Sinatra::Application

  # HELPERS
  helpers Sinatra::PhotosHelper

  # ROUTES
  get '/' do
    get_all_photos
    erb :photography
  end

end
