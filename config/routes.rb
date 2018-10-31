Rails.application.routes.draw do
  root to: "pages#root"
  get '*path' => redirect('/')
end
