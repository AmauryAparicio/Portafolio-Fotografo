"use strict";function getUsers(){return users}Object.defineProperty(exports,"__esModule",{value:!0});var User=function(){function e(e,r){this._username=e,this._password=r}return Object.defineProperty(e.prototype,"username",{get:function(){return this._username},set:function(e){this._username=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"password",{get:function(){return this._password},set:function(e){this._password=e},enumerable:!0,configurable:!0}),e}();exports.User=User;var users=[],user1=new User("amaury","contraseña");users.push(user1),exports.getUsers=getUsers;