class RootController < ApplicationController
  def root
    render :text => "", layout: 'application'
  end
end
