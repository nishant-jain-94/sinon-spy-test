const DataManipulation = () => {
    let d = "2013/12/24";
    let inputDate = new Date(d);
    let outputDay,outputNextYearDay,outputMonth;
    this.dayCal(inputDate);
    this.monthCal(inputDate);
    this.nextYearDayCal(inputDate);
    return someString();
  }

  const nextYearDayCal = (inputDate) => {
    let bufferDate = new Date((inputDate.getFullYear()+1),inputDate.getMonth(),inputDate.getDate());
    return dayCal(bufferDate);
  }

  const dayCal = (inputDate) => {
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[inputDate.getDay()];
  }

  const monthCal = (inputDate) => {
    var monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
  return monthNames[inputDate.getMonth()];
  }
  
  module.exports.DataManipulation = DataManipulation;
  module.exports.nextYearDayCal = nextYearDayCal;
  module.exports.dayCal = dayCal;
  module.exports.monthCal = monthCal;
