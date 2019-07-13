class FrontendController < ApplicationController
  def fetch_all_users
    users = User.all
    render json: users
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
