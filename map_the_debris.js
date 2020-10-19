function orbitalPeriod(arr) {
  let hold = [];

  const orbitalPeriodConverter = (props) => {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return 2*Math.PI*Math.sqrt(Math.pow(earthRadius + props,3)/GM)
  }
  arr.forEach(element => {
    const orbitalPeriod = Math.round(orbitalPeriodConverter(element['avgAlt']))
    const name = element['name']
    hold.push({ name:name, orbitalPeriod:orbitalPeriod })
  });

  return hold
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
