var app = app || {};

(function () {

  var Year = Backbone.Collection.extend({
      model: app.Month,
      url: '../json/months.json'
  });

  app.year = new Year();

})();
