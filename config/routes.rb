Rails.application.routes.draw do
  root 'root#root'
  namespace :api do
    resources :surveys
    resources :questions
    resources :answers
    resources :responses, only: [:create]
    resource :current_user, only: [:show]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
  resources :responses, only: [:create]
  get '/my_polls', to: 'polls#index', as: 'my_polls'
  get '/account', to: 'users#account', as: 'account'
  get '/questions/:id/vote', to: 'questions#vote'
end
