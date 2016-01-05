class PodcastsController < ApplicationController
  def index
    @podcasts = Podcast.all
  end

  def show 
    @podcast = Podcast.find(params[:id])
     if request.xhr?
        render :json => @podcast
    end 
  end 


  private 

  def podcast_params
    params.require(:podcast).permit(:title, :data_content, :image)
  end
end
