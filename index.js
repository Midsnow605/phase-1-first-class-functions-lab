const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0, -2);
}
function returnLastTwoDrivers (drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(){
    return function(x){return (x * x)};
}
function fareDoubler(x){
    return x * 2;
}
function fareTripler(x){
    return x * 3;
}
function selectDifferentDrivers(drivers, selectingDrivers) {
    let result;
    if (selectingDrivers === returnFirstTwoDrivers) {
      result = drivers.slice(0, 2);
    } else if (selectingDrivers === returnLastTwoDrivers) {
      result = drivers.slice(-2);
    }
    return result;
  }