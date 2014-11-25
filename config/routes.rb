Rails.application.routes.draw do
  root 'root#root'
  namespace :api do
    resources :questions do
      resources :answer_choices
    end
  end
end
