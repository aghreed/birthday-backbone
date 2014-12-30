var BirthdayMonthApi = (function () {

  // default birthday month
  this.currentBirthdayMonth = {
    name: 'January',
    number: 1
  };

  function getMonth() {
    return this.currentBirthdayMonth;
  };

  function setMonth(month) {
    this.currentBirthdayMonth = month;
    console.log('Birthday month is set to: ' + month.name);
  };

  return {
    getMonth: getMonth,
    setMonth: setMonth
  };

})();
