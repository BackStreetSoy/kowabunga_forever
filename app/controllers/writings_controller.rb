class WritingsController < ApplicationController
  def index
    @writings = Writing.all
  end

  def show
    @writing = Writing.find(params[:id])
    if request.xhr?
        render :json => @writing
    end 
  end 



private 

  def writing_params
    params.require(:writing).permit(:title, :content, :image)
  end
end
