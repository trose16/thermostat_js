ENV["RACK_ENV"] ||= "development"


require 'sinatra/base'
require_relative './data_mapper_setup.rb'
require_relative './models/thermostat'
require 'json'

class Api < Sinatra::Base
  get '/' do
    'Hello Thermostat!'
  end

get '/thermostat/data' do
  headers['Access-Control-Allow-Origin'] = '*'
  @thermostat = Thermostat.get(1)
  content_type :json
  {:temperature => @thermostat.temperature}.to_json
end

post '/thermostat/data' do
  headers['Access-Control-Allow-Origin'] = '*'
   thermostat = ThermostatData.get(1)
   thermostat.temperature = params[:temperature]
   thermostat.city = params[:city]
   thermostat.save
end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
