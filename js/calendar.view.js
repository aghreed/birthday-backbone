var app = app || {};

(function ($) {

  app.CalendarView = Backbone.View.extend({

    className: 'calendar',

    template: _.template($('#calendar-template').html()),

    initialize: function () {
      this.listenTo(this.model, 'filter', this.render);
    },

    render: function () {
      var view = this,
          calendar;

      view.$el.html(view.template());

      calendar = $('.cards', view.$el);

      _.each(view.model.models, function (month) {
        calendar.append(new app.MonthView({model: month}).render().el);
      });

      return view;
    }

  });

})(jQuery);
