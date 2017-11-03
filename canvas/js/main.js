var _DATA = [];
var result = [
  {
    key: 'section1',
    stadium_code: 'stadium1',
    path: 'M1142.79,362.38c44.55,7,86.32,15.83,123.51,26.18l-23.66,11.85q-28.58,0-57.48.26Z'
  },
  {
    key: 'section2',
    stadium_code: 'stadium2',
    path: 'M1142.79,362.38c44.55,7,86.32,15.83,123.51,26.18l-23.66,11.85q-28.58,0-57.48.26Z'
  }
];
$(function(){

  var paths = $($('#tmpPaths').html().trim()).find('path');

  paths.each(function(i, e) {
    var tmp = e.getAttribute('d');
    _DATA.push({
      key: 'section_' + i,
      stadium_code: 'stadium_' + i,
      path: tmp
    });
  });

  console.log(JSON.stringify(_DATA));


  canvas = new fabric.Canvas('stadium', { selection: false });

  _DATA.forEach((e, i) => {
    console.log();
      var coordinates = new fabric.Path(e);
      var scale = 100 / coordinates.width;
      if (i > 2 && i < 9)
        coordinates.set({ fill: '#00B2EA' });
      else if (i > 45 && i < 58) 
        coordinates.set({ fill: '#e6577d' });
      else
        coordinates.set({ fill: '#CBCBCD' });
      canvas.add(coordinates);
      canvas.renderAll();
  });
})
