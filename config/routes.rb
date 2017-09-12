Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
     resources :dogs do
        resources :foods, only: [:index, :show]
     end
  end
end
