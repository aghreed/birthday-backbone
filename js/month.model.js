var app = app || {};

(function () {

  app.Month = Backbone.Model.extend({

    defaults: {
      name: '',
      number: 0
    },

    useAsBirthdayMonth: function () {
      // hit api and send 'this' to it
      console.log('Need to set ' + this.name + 'as birthday month');
    }

  });

})();
