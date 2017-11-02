var _DATA = [];

$(function(){

  var paths = $($('#tmpPaths').html().trim()).find('path');

  paths.each(function(i, e) {
    var tmp = e.getAttribute('d');
    _DATA.push(tmp);
  });
  console.log(_DATA);


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
