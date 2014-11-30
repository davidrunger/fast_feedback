Rails.application.routes.draw do
  root 'root#root'
  namespace :api do
    resources :questions
    resources :answers
    resources :responses, only: [:create]
  end
  resource :responses, only: [:create]
  get '/questions/:id/vote', to: 'questions#vote'
end
