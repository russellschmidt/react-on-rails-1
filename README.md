# React on Rails 1  

Well hello, gentle stranger. Welcome to me.

I am a react on rails app. 

* ruby 2.5.0
* rails 5.2.1
* react 16
* Foreman
* pg 0.18

### Start me
We use foreman in this here town
`$ foreman start -f Procfile.dev -p 3000`


### Tutorials used
[Grillwork had an excellent one](https://blog.grillwork.io/create-a-ruby-on-rails-5-1-application-with-webpack-react-16-and-react-router-e2c16d267f73)

#### Config decisions in this tutorial
1. delete `coffee-rails` gem
2. delete `turbolinks` gem
3. remove `require turbolinks` from app>assets>javascripts>application.js
4. downgrade webpack-dev-server to 2.11.1 per [this error](https://github.com/rails/webpacker/issues/1303)