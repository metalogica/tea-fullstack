Rails.application.routes.draw do
  root to: 'pages#home'
  get "posts", to: "pages#home"
  get "posts/new", to: "pages#home"
  get "posts/:id", to: "pages#home"
  get "posts/chatroom", to: "pages#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # API routes
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts, only: [ :index, :show, :create]
    end
  end
end
