var app = app || {};

(function ($) {

  app.CalendarView = Backbone.View.extend({

    className: 'calendar',

    template: _.template($('#calendar-template').html()),

    initialize: function () {
      this.listenTo(app.year, 'sortMonths', this.sortMonths);
    },

    render: function (months) {
      var view = this,
          calendar = months || view.model.models,
          calendarEl;

      view.$el.html(view.template());

      calendarEl = $('.cards', view.$el),

      _.each(calendar, function (month) {
        calendarEl.append(new app.MonthView({model: month}).render().el);
      });

      return view;
    },

    sortMonths: function (sort) {
      var view = this,
          sorted;

      sorted = view.model.sortBy(function (month) {
        return month.get(sort);
      });

      view.render(sorted);

      return view;
    }

  });

})(jQuery);
