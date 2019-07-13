Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  # Boilerplate
  get "posts", to: "pages#home"
  get "posts/new", to: "pages#home"
  get "posts/:id", to: "pages#home"

  # Thé App
  get "swiper", to: "pages#home"
  get "match_profile/:id", to: "pages#home"
  get "user_profile", to: "pages#home"
  get "chatroom", to: "pages#home"

  # API routes
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts, only: [ :index, :show, :create]
      get 'frontend/fetch_all_users', to: 'frontend#fetch_all_users'
      post 'frontend/mark_user_as_seen', to: 'frontend#mark_user_as_seen'
    end
  end

end
