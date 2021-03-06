Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  
  authenticated :user do
    root to: "dashboard#index", as: :authenticated_root
  end

  root to: "pages#home"
end
