Rails.application.routes.draw do
  root 'root#root'
  namespace :api do
    resources :questions
    resources :answers
    resources :responses, only: [:create]
    resource :current_user, only: [:show]
  end
  resources :users, only: [:new, :create]
  resources :responses, only: [:create]
  get '/my_polls', to: 'polls#index', as: 'my_polls'
  get '/account', to: 'users#account', as: 'account'
  get '/questions/:id/vote', to: 'questions#vote'
end
