Rails.application.routes.draw do
  root 'root#root'
  namespace :api do
    resources :surveys
    resources :questions
    resources :answers
    resources :sms_responses, only: [:create]
    resource :current_user, only: [:show]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :web_responses
  end
  get ':id', to: 'questions#vote'
end
