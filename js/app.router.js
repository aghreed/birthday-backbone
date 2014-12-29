var app = app || {};

(function () {

  var AppRouter = Backbone.Router.extend({

    routes: {

    }

  });

  app.appRouter = new AppRouter();

  Backbone.history.start({silent: true});

})();
