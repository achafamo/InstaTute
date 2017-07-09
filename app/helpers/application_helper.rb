# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module ApplicationHelper
  def belongs_to_user?(resource)
    resource.user == current_user
  end

  def activity_resources_exist?(activity)
    activity && activity.trackable && activity.owner
  end
  
	def page_header(text)
    content_for(:page_header) { text.to_s }
  end
  
	def gravatar_for(user, size = 30, title = user.name)
	  image_tag gravatar_image_url(user.email, size: size), title: title, class: 'img-rounded'
	end


end
