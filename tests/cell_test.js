const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');
import Cell from '../src/app/components/cell';

describe('The Cell component', () => {
  var renderer, component;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <Cell className='test'>
      </Cell>
      );

    component = renderer.getRenderOutput();
  });

  it('renders', () => {
    expect(component).to.exist;
  });

  it('includes the className cell', () => {
  	expect(component.props.className).to.contain('cell');
  });

  it('does not include an undefined className', () => {
    expect(component.props.className).to.not.contain('undefined');
  });

  it('includes the cellName passed to it', () => {
    expect(component.props.className).to.contain('test');
  });

});