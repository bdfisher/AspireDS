'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Aspire Design System');

//Other metadata
fractal.set('project.version', 'v1.0');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, '/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, '/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, '/public'));

//build files destination
fractal.web.set('builder.dest', __dirname + '/build');

fractal.components.set('default.preview', '@preview');

//Custom Status Colors
fractal.components.set('statuses', {
  /* status definitions here */
  prototype: {
    label: 'Prototype',
    description: 'Do not implement.',
    color: '#C41E3D',
  },

  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#FEC10D',
  },

  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#84BD00',
  },
});

fractal.docs.set('statuses', {
  /* status definitions here */
  draft: {
    label: 'Draft',
    description: 'Work in progress.',
    color: '#C41E3D',
  },
  ready: {
    label: 'Ready',
    description: 'Ready for referencing.',
    color: '#84BD00',
  },
});

/*
* Theme
*/
// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  skin: {
    name: 'default',
    accent: '#582c83',
    complement: '#fff',
    links: '#582c83',
  },

  panels: ['html', 'resources', 'notes'],
  favicon:'./favicon.ico',
  
  navigation: ['split'],
  // any other theme configuration values here
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);