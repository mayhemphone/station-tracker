# frozen_string_literal: true

class Animal
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :motto, type: String

  validates :name, presence: true, uniqueness: true
  validates :motto, presence: true
end
