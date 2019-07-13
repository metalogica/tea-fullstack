class PagesController < ApplicationController
  def home
    @posts = Post.all
    @users = User.all
    @conversations = User.all.where(matched: true)
  end
end
