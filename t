[1mdiff --git a/Gemfile b/Gemfile[m
[1mindex e0dc345..27c6cac 100644[m
[1m--- a/Gemfile[m
[1m+++ b/Gemfile[m
[36m@@ -17,7 +17,6 @@[m [mgem 'bootstrap-sass', '~> 3.3.1'[m
 gem 'sass-rails', '>= 3.2'[m
 gem 'autoprefixer-rails'[m
 gem 'backbone-on-rails'[m
[31m-gem 'jbuilder'[m
 [m
 group :development do[m
   gem 'better_errors'[m
[1mdiff --git a/config/routes.rb b/config/routes.rb[m
[1mindex d4a9398..f5802d4 100644[m
[1m--- a/config/routes.rb[m
[1m+++ b/config/routes.rb[m
[36m@@ -4,4 +4,5 @@[m [mRails.application.routes.draw do[m
     resources :questions[m
     resources :answers[m
   end[m
[32m+[m[32m  get '/questions/:id/vote', to: 'questions#vote'[m
 end[m
[1mdiff --git a/db/schema.rb b/db/schema.rb[m
[1mindex df5e9e5..df6bac8 100644[m
[1m--- a/db/schema.rb[m
[1m+++ b/db/schema.rb[m
[36m@@ -11,7 +11,7 @@[m
 #[m
 # It's strongly recommended that you check this file into your version control system.[m
 [m
[31m-ActiveRecord::Schema.define(version: 20141125234636) do[m
[32m+[m[32mActiveRecord::Schema.define(version: 20141126233908) do[m
 [m
   # These are extensions that must be enabled in order to support this database[m
   enable_extension "plpgsql"[m
[36m@@ -42,4 +42,14 @@[m [mActiveRecord::Schema.define(version: 20141125234636) do[m
   add_index "questions", ["survey_id"], name: "index_questions_on_survey_id", using: :btree[m
   add_index "questions", ["user_id"], name: "index_questions_on_user_id", using: :btree[m
 [m
[32m+[m[32m  create_table "responses", force: true do |t|[m
[32m+[m[32m    t.integer  "answer_choice_id", null: false[m
[32m+[m[32m    t.string   "answerer_id",      null: false[m
[32m+[m[32m    t.datetime "created_at"[m
[32m+[m[32m    t.datetime "updated_at"[m
[32m+[m[32m  end[m
[32m+[m
[32m+[m[32m  add_index "responses", ["answer_choice_id"], name: "index_responses_on_answer_choice_id", using: :btree[m
[32m+[m[32m  add_index "responses", ["answerer_id"], name: "index_responses_on_answerer_id", using: :btree[m
[32m+[m
 end[m
