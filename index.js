// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  filtered = drivers.filter(driver => driver.hometown == hometown)
  filtered.forEach(driver => console.log(driver.name))
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
