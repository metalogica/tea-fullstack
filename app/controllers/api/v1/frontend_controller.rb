class Api::V1::FrontendController < ApplicationController
  def fetch_all_users
    users = User.all
    render json: users
  end
end
