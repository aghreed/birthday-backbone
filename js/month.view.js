var app = app || {};

(function ($) {

  app.MonthView = Backbone.View.extend({

    template: _.template($('#month-template').html()),

    className: 'card month',

    events: {
      'click .button' : 'setBirthdayMonth'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      var view = this;

      view.$el.html(view.template(view.model.toJSON()));

      view.checkForBirthday();

      return view;
    },

    setBirthdayMonth: function () {
      app.year.trigger('set-new-birthday', this.model.toJSON());
    },

    checkForBirthday: function () {
      var view = this;
      // add birthday class if is birthday
      if (view.model.get('isBirthday')) {
        view.$el.addClass('birthday');
      }
      else {
        view.$el.removeClass('birthday');
      }

      return view;
    }

  });

})(jQuery);
