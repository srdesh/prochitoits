window.onload = function onLoad() {
    // enterprise development
    var ed = new ProgressBar.Line('#ed', {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#fff',
      trailColor: '#d35400',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });

    ed.animate(0.8);

    // e-commerce
    var ec = new ProgressBar.Line('#ec', {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#fff',
      trailColor: '#d35400',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });

    ec.animate(0.9);

    // erp diagram
    var erp = new ProgressBar.Line('#erpd', {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#fff',
      trailColor: '#d35400',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });

    erp.animate(0.85);

    // software quality testing
    var sqt = new ProgressBar.Line('#sqt', {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#fff',
      trailColor: '#d35400',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });

    sqt.animate(0.87);

    // mobile application
    var ma = new ProgressBar.Line('#ma', {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#fff',
      trailColor: '#d35400',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });

    ma.animate(0.91);

    // ui-ux designing
    var uiux = new ProgressBar.Line('#uiux', {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#fff',
      trailColor: '#d35400',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });

    uiux.animate(0.9);
};
