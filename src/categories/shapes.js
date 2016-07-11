import pluralize from '../helpers/pluralize';

let words = [
  'acute triangle',
  'annulus',
  'arc',
  'asymmetry',
  'bipyramid',
  'cardioid',
  'circle',
  'concave polygon',
  'cone',
  'convex polygon',
  'crescent',
  'cube',
  'cuboid',
  'curve',
  'cylinder',
  'decagon',
  'disc',
  'dodecahedron',
  'dot',
  'ellipse',
  'ellipsoid',
  'equilateral triangle',
  'gnomon',
  'heart',
  'helix',
  'heptagon',
  'hexaflexagon',
  'hexagon',
  'hexagonal prism',
  'hexahedron',
  'hyperboloid',
  'hypersphere',
  'icosahedron',
  'interval',
  'isosceles triangle',
  'kite',
  'Klein bottle',
  'line',
  'line segment',
  'lozenge',
  'möbius strip',
  'nonagon',
  'obtuse triangle',
  'octagon',
  'octahedron',
  'orb',
  'oval',
  'paraboloid',
  'parallelepiped',
  'parallelogram',
  'pentagon',
  'plane',
  'Platonic solid',
  'point',
  'polygon',
  'polyhedra',
  'prism',
  'pyramid',
  'quadrilateral',
  'ray',
  'rectangle',
  'regular polygon',
  'regular polyhedra',
  'rhombus',
  'right triangle',
  'round',
  'scalene triangle',
  'sector',
  'semicircle',
  'shape',
  'shapeless',
  'sphere',
  'spheroid',
  'square',
  'star',
  'symmetry',
  'tetrahedron',
  'tesseract',
  'torus',
  'trapezium',
  'trapezoid',
  'triangle',
  'wedge'
];

export default (data) => {
  return pluralize(words);
}