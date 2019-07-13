class PagesController < ApplicationController
  def home
    @posts = Post.all
    @users = User.all
  end
end
