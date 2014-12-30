var app = app || {};

(function () {

  var AppRouter = Backbone.Router.extend({

    routes: {
      // no routes needed thus far
    }

  });

  app.appRouter = new AppRouter();

  Backbone.history.start();

})();
