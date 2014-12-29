var app = app || {};

(function ($) {

  app.AppView = Backbone.View.extend({

    el: '#main',

    events: {
      //'click .filter' : 'handleFilter'
    },

    initialize: function () {
      console.log('Birthday App running!');
    },

    render: function () {
      console.log('render function hit');
    }

  });

})(jQuery);
