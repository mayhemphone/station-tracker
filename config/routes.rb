Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :animals
    end
  end

  get '*path', to: 'home#index'
  root to: 'home#index'
end
