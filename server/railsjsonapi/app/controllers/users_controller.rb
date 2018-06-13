class UsersController < ApplicationController

    def index
      @users = User.all.order(:name)
      respond_to do |format|
        format.json { render json: @users.to_json }
      end
    end
end