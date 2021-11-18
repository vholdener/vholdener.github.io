const COSMO_DATA = [
  { id: 1, temperatur: 18, sonne:2, niederschlag: 5, tag: 'montag' },
  { id: 2, temperatur: 16, sonne:4, niederschlag: 5, tag: 'dienstag' },
  { id: 3, temperatur: 10, sonne:8, niederschlag: 6, tag: 'mittwoch' },
  { id: 4, temperatur: 18, sonne:9, niederschlag: 10, tag: 'donnerstag' },
]

const container = d3.select('div')
  .classed('container', true)
  .style('border', '1px solid black');

const bars = container
  .selectAll('.bar')
  .data(COSMO_DATA)
  .enter()
  .append('div')
  .classed('bar', true)
  .style('width', '50px')
  .style('height', '150px');

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
