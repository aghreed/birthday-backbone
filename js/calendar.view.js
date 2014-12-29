var app = app || {};

(function ($) {

  app.CalendarView = Backbone.View.extend({

    template: _.template($('#calendar-template').html()),

    events: {

    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      var view = this;

      view.$el.html(view.template(this.model.toJSON()));

      return view;
    }

  });

})(jQuery);
