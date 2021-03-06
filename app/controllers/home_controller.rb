# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class HomeController < ApplicationController
  before_action :set_user, except: :front
  respond_to :html, :js

  def index
    #@post = Post.new
    #@friends = @user.all_following.unshift(@user)
    #@activities = PublicActivity::Activity.where(owner_id: @friends).order(created_at: :desc).paginate(page: params[:page], per_page: 10)
    if params[:search]
      @users = User.search(params[:search]).order("created_at DESC")
    else
    	@users = User.order('created_at DESC') #.paginate(page: params[:page], per_page: 30)
		end  
  end

  def front
    @activities = PublicActivity::Activity.joins("INNER JOIN users ON activities.owner_id = users.id").order(created_at: :desc).paginate(page: params[:page], per_page: 10)
  	#render :file => 'public/index.html'
	end
	def landing
	end

  def find_friends
    @friends = @user.all_following
    @users =  User.where.not(id: @friends.unshift(@user)).paginate(page: params[:page])
  end
 
 

  private
  def set_user
    @user = current_user
  end
end
