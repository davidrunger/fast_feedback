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
    resources :web_responses
  end
  get '/questions/:id/vote', to: 'questions#vote'
end
