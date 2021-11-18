const COSMO_DATA = [
  { id: 1, temperatur: 18, sonne:2, niederschlag: 5, tag: 'montag' },
  { id: 2, temperatur: 16, sonne:4, niederschlag: 5, tag: 'dienstag' },
  { id: 3, temperatur: 10, sonne:8, niederschlag: 6, tag: 'mittwoch' },
  { id: 4, temperatur: 18, sonne:9, niederschlag: 10, tag: 'donnerstag' },
]

const xScale = d3
  .scaleBand()
  .domain(COSMO_DATA.map((datapoint) => datapoint.id))
  .rangeRound([0, 250])
  .padding(0.1);

const yScale = d3
  .scaleLinear()
  .domain([0, 25])
  .range([250, 0]);

const container = d3.select('svg')
  .classed('container', true);

const bars = container
  .selectAll('.bar')
  .data(COSMO_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwith())
  .attr('height', data => 250 - yScale(data.temperatur))
  .attr('x', data => xScale(data.id))
  .attr('y', data => yScale(data.temperatur);

//d3.select('div')
//  .selectAll('p')
//  .data(COSMO_DATA)
//  .enter()
//  .append('p')
//  .text(dta  => dta.tag);

// d3.select('div')
//   .selectAll('p')
//   .data([1, 2, 3])
//   .enter()
//   .append('p')
//   .text(dta  => dta);
