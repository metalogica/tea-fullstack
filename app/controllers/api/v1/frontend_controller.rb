class Api::V1::FrontendController < ApplicationController

  def fetch_all_users
    users = User.all
    render json: users
  end

  def mark_user_as_seen
    user_id = params["user_id"]
    accepted = params["accepted"]
    user = User.find(user_id)
    user.new = false
    accepted == true ? user.matched = true : user.matched = false
    user.save!
  end

end
