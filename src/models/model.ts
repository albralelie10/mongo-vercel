const mongoose = require('mongoose');

const { Schema } = mongoose;

// Enumeración Role
const RoleEnum = ['REGISTER_USER', 'ADMIN'];

// Enumeración Theme
const ThemeEnum = ['DARK', 'WHITE'];

// Modelo UserConfig
const UserConfigSchema = new Schema({
  id: { type: String, unique: true},
  emailUpdates: { type: Boolean, default: false },
  theme: { type: String, enum: ThemeEnum, default: 'WHITE' },
  user_config: { type: String, ref: 'User' },
});

export const UserConfig = mongoose.model('UserConfig', UserConfigSchema);

// Modelo User
const UserSchema = new Schema({
  id: { type: String, unique: true},
  nombre: { type: String },
  email: { type: String, unique: true },
  age: { type: Number },
  password: { type: String },
  role: { type: String, enum: RoleEnum, default: 'REGISTER_USER' },
  post: [{ type: String, ref: 'Post' }],
  user_config: { type: String, ref: 'UserConfig' },
  user_configId: { type: String, unique: true },
});

export const User = mongoose.model('User', UserSchema);

// Modelo Post
const PostSchema = new Schema({
  id: { type: String, unique: true },
  title: { type: String },
  content: { type: String, maxlength: 2000 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  user_author: { type: String, ref: 'User' },
  user_authorId: { type: String },
  post_category: [{ type: String, ref: 'Category' }],
});

export const Post = mongoose.model('Post', PostSchema);

// Modelo Category
const CategorySchema = new Schema({
  id: { type: String, unique: true },
  category_name: { type: String },
  post_category: [{ type: String, ref: 'Post' }],
});

export const Category = mongoose.model('Category', CategorySchema);

