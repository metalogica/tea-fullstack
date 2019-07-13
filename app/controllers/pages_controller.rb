class PagesController < ApplicationController
  def home
    @posts = Post.all
    @users = User.all
    @conversations = Message.all
  end
end
