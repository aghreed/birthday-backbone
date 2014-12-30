var app = app || {};

(function () {

  var AppRouter = Backbone.Router.extend({

    routes: {
      // no routes needed
    }

  });

  app.appRouter = new AppRouter();

  Backbone.history.start();

})();
