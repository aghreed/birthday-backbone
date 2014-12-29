var app = app || {};

(function ($) {

  app.MonthView = Backbone.View.extend({

    template: _.template($('#month-template').html()),

    events: {

    },

    initialize: function () {

    },

    render: function () {
      var view = this;

      view.$el.html(view.template(view.model.toJSON()));

      return view;
    }

  });

})(jQuery);
