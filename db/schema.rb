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

ActiveRecord::Schema.define(version: 20141125234636) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: true do |t|
    t.integer  "question_id", null: false
    t.text     "text",        null: false
    t.integer  "sms_code",    null: false
    t.string   "pic_url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "ord",         null: false
  end

  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree
  add_index "answers", ["sms_code"], name: "index_answers_on_sms_code", unique: true, using: :btree

  create_table "questions", force: true do |t|
    t.integer  "user_id"
    t.integer  "survey_id"
    t.string   "chart_type"
    t.string   "pic_url"
    t.text     "title",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "questions", ["survey_id"], name: "index_questions_on_survey_id", using: :btree
  add_index "questions", ["user_id"], name: "index_questions_on_user_id", using: :btree

end
