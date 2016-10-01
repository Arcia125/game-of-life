const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');
import Menu from '../src/app/components/menu';

describe('The Menu component', () => {
  var renderer, menu;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <Menu className='test'>
      <div>
      </div>
      </Menu>
      );

    menu = renderer.getRenderOutput();
  });

  afterEach(() => {
    renderer = '';
    menu = '';
  });

  it('renders', () => {
    expect(menu).to.exist;
  });

  it('has the className menu', () => {
    expect(menu.props.className).to.include('menu');
  });

  it('should not have the className undefined', () => {
    renderer.render(
      <Menu/>);
    menu = renderer.getRenderOutput();
    expect(menu.props.className).to.not.include(undefined);
  });

  it('should include classes passed to parent', () => {
    expect(menu.props.className).to.include('test');
  });


});