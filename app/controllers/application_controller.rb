class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :stat_number, :stat_content

  def stat_number
    @stat_number = rand(1..1000000)
  end 

  def stat_content
    @stat_content = StatContent.all.sample.content_text
  end 
end
