/*global define*/
define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var Todo = Backbone.Model.extend({
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
      title: '',
      completed: false,
      priority: 5,
    },

    prioritize: function () {
      this.save({
        priority: 0
      })
    },

    // Toggle the `completed` state of this todo item.
    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
  });

  return Todo;
});
