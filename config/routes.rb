Rails.application.routes.draw do
  root 'root#root'
  namespace :api do
    resources :questions
    resources :answers
  end
  get '/questions/:id/vote', to: 'questions#vote'
end
