const COSMO_DATA = [
  { id: 1, temperatur: 18, sonne:2, niederschlag: 5, tag: 'montag' },
  { id: 2, temperatur: 16, sonne:4, niederschlag: 5, tag: 'dienstag' },
  { id: 3, temperatur: 10, sonne:8, niederschlag: 6, tag: 'mittwoch' },
  { id: 4, temperatur: 18, sonne:9, niederschlag: 10, tag: 'donnerstag' },
  { id: 5, temperatur: 20, sonne:1, niederschlag: 5, tag: 'freitag' }
]

d3.select('div')
  .selectAll('p')
  .data(COSMO_DATA)
  .enter()
  .append('p')
  .text(dta  => dta.tag);

// d3.select('div')
//   .selectAll('p')
//   .data([1, 2, 3])
//   .enter()
//   .append('p')
//   .text(dta  => dta);
