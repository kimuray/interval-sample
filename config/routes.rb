Rails.application.routes.draw do
  root 'users#show'

  resource :user, only: :show

  namespace :api, { format: 'json' } do
    resources :users, only: :index
  end
end
