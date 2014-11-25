Rails.application.routes.draw do
  root 'root#root'
  namespace :api do
    resources :questions
  end
end
