# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # TODO: do this better
  skip_before_action :verify_authenticity_token
end
