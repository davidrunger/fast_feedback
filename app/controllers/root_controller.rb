class RootController < ApplicationController
  def root
    render :root, layout: 'application'
  end
end
