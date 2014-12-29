var birthdayMonthApi = (function () {

  this.currentBirthdayMonth;

  function getMonth() {
    return this.currentBirthdayMonth;
  };

  function setMonth(month) {
    this.currentBirthdayMonth = month;
    console.log('Newly selected birthday month is: ' + this.currentBirthdayMonth.name);
  };

  return {
    getMonth: getMonth,
    setMonth: setMonth
  };

})();
