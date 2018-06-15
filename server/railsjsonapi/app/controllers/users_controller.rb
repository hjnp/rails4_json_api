class UsersController < ApplicationController
  
    #before_action :authenticate_user!, except: [:index]

    def index
      @users = User.all.order(:name)
      respond_to do |format|
        format.json { render json: @users.to_json }
      end
    end

    def show
      @user = User.find(params[:id])
      respond_to do |format|
        format.json { render json: @user.to_json }
      end
    end


end