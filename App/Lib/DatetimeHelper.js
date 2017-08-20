import moment from 'moment';

/** Get an array of moment date object of inputted month and year */
export const getDatesOfMonth = (month, year) => {
  const daysInMonth = moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
  const days = [];
  for (let i = 0; i < daysInMonth; i++) {
    days.push(i + 1);
  }
  const dayObjs = days.map(day => moment(`${day}-${month}-${year}`, 'DD-MM-YYYY'));
  return dayObjs;
};

/** Segment array of moment date object of inputted month and year into weeks */
export const segmentDatesOfMonth = (month, year) => {
  const datesObjOfMonth = getDatesOfMonth(month, year);
  const res = [];
  let tempObj = [];
  datesObjOfMonth.forEach((dateObj) => {
    tempObj.push(dateObj);
    if (dateObj.day() === 6) {
      res.push(tempObj);
      tempObj = [];
    }
  });
  if (tempObj.length !== 7) {
    res.push(tempObj);
  }
  return res;
};
