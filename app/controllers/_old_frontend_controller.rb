class FrontendController < ApplicationController
  def fetch_all_users
    users = User.all.where(logged_in: false)
    render json: users
  end

  def get_current_user
    user = User.where(logged_in: true)
    render json: user
  end

  def index
    @users = User.all
  end

  def login
  end

  def swiper
  end

  def user_profile
  end

  def match_profile
  end

  def chatroom
  end
end
