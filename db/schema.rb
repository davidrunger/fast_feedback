# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141205191923) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: true do |t|
    t.integer  "question_id", null: false
    t.text     "text",        null: false
    t.string   "pic_url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "ord",         null: false
  end

  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree

  create_table "questions", force: true do |t|
    t.integer  "user_id"
    t.integer  "survey_id"
    t.string   "chart_type"
    t.string   "pic_url"
    t.text     "title",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "ord"
  end

  add_index "questions", ["survey_id"], name: "index_questions_on_survey_id", using: :btree
  add_index "questions", ["user_id"], name: "index_questions_on_user_id", using: :btree

  create_table "responses", force: true do |t|
    t.integer  "answer_id",   null: false
    t.string   "answerer_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "responses", ["answer_id"], name: "index_responses_on_answer_id", using: :btree

  create_table "surveys", force: true do |t|
    t.integer  "user_id",                           null: false
    t.string   "title",                             null: false
    t.integer  "default_num_questions", default: 2
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "surveys", ["user_id"], name: "index_surveys_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
