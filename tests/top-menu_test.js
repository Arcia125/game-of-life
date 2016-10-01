const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');

import TopMenu from '../src/app/top-menu';

describe('The TopMenu component', () => {
  var renderer, topMenu;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <TopMenu />
      );

    topMenu = renderer.getRenderOutput();
  });

  it('renders', () => {
    expect(topMenu).to.exist;
  });

  it('has the className top-menu', () => {
    expect(topMenu.props.className).to.include('top-menu');
  });
});