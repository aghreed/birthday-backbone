var app = app || {};

(function () {

  var Year = Backbone.Collection.extend({
      model: app.Month,

      initialize: function () {
        this.on('set-new-birthday', this.updateBirthday);
      },

      updateBirthday: function (month) {
        BirthdayMonthApi.setMonth(month);
        this.setBirthday();
      },

      setBirthday: function () {
         var currentMonth = this.findWhere({isBirthday: true}),
             newMonthName = BirthdayMonthApi.getMonth().name,
             newMonth = this.findWhere({name: newMonthName});

         currentMonth.set('isBirthday', false);
         newMonth.set('isBirthday', true);
      }
  });

  app.defaultNewYear = [
    { "name": "January",    "number": 1,  "isBirthday": true },
    { "name": "February",   "number": 2,  "isBirthday": false },
    { "name": "March",      "number": 3,  "isBirthday": false },
    { "name": "April",      "number": 4,  "isBirthday": false },
    { "name": "May",        "number": 5,  "isBirthday": false },
    { "name": "June",       "number": 6,  "isBirthday": false },
    { "name": "July",       "number": 7,  "isBirthday": false },
    { "name": "August",     "number": 8,  "isBirthday": false },
    { "name": "September",  "number": 9,  "isBirthday": false },
    { "name": "October",    "number": 10, "isBirthday": false },
    { "name": "November",   "number": 11, "isBirthday": false },
    { "name": "December",   "number": 12, "isBirthday": false }
  ];

  app.year = new Year(app.defaultNewYear);

})();
