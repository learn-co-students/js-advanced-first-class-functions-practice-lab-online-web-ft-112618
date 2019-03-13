// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, hometown) {
  const filteredDrivers = drivers.filter(function (driver) {
    return driver.hometown === hometown;
  });
  logDriverNames(filteredDrivers);
};

function driversByRevenue(drivers) {
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  return [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function (memo, driver) {
    return driver.revenue + memo;
  }, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
