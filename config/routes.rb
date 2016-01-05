Rails.application.routes.draw do
  get 'game/index'
  get 'game/show'

  get 'users/index'
  get 'shorts/index' => 'shorts#index'
  get 'podcasts/index'
  get 'writings/index'
  get 'welcome/index'

  resources :writings
  resources :podcasts
  resources :shorts
  resources :users

  root 'enter#index'


end
