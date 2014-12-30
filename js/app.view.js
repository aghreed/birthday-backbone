var app = app || {};

(function ($) {

  app.AppView = Backbone.View.extend({

    el: '#main',

    events: {
      'click .sort' : 'handleSort'
    },

    initialize: function () {
      console.log('Birthday App initialized!');
    },

    render: function () {
      var view = this,
          calendarView = new app.CalendarView({model: app.year});

      view.$el.append(calendarView.render().el);

      return view;
    },

    handleSort: function (e) {
      var view = this,
          sortEl = $(e.currentTarget),
          sortName = sortEl.attr('data-name');

      // throw event to collection
      app.year.trigger('sortMonths', sortName);
      // update classnames
      $('.sort', view.$el).removeClass('active');
      sortEl.addClass('active');

      return view;
    }

  });

})(jQuery);
