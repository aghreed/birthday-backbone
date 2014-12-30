var app = app || {};

(function ($) {

  app.AppView = Backbone.View.extend({

    el: '#main',

    events: {
      'click .filter' : 'handleFilter'
    },

    initialize: function () {
      console.log('Birthday App running!');
    },

    render: function () {
      var view = this,
          calendarView = new app.CalendarView({model: app.year});

      view.$el.append(calendarView.render().el);

      return view;
    }

  });

})(jQuery);
