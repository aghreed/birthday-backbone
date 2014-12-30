var app = app || {};

(function () {

  app.Month = Backbone.Model.extend({

    defaults: {
      name: '',
      number: null,
      isBirthday: false
    }

  });

})();
