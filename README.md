# README

This is a WIP Template for creating Rails / Mongoid / React / Typescript mono repos.

# After cloning:

##### Prerequisite:

`brew install mongodb-community nodenv rbenv`
`rbenv init` follow directions
`rbenv install 3.0.3 ; rbenv rehash; ruby -v`
`nodenv init` follow directions
`nodenv install 14.18.2 ; nodenv rehash; node -v`

##### Terminal:

`gem i rubocop foreman`
`bundle`
`yarn`
`yarn run prepare && yarn run create-hook`
`rails db:seed`
`foreman start`
