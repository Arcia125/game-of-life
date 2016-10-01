const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');

import App from '../src/app/app';

describe('The App component', () => {
  var renderer, app;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <App />
      );

    app = renderer.getRenderOutput();



  });

  it('renders', () => {
    expect(app).to.exist;
  });

  it('has the className app', () => {
    expect(app.props.className).to.include('app');
  });

});