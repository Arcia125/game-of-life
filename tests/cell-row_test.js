const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');
import CellRow from '../src/app/components/cell-row';

describe('The CellRow component', () => {
  var renderer, component;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <CellRow >
      	<div>
      	</div>
      </CellRow>
      );

    component = renderer.getRenderOutput();
  });

  it('renders', () => {
    expect(component).to.exist;
  });

  it('includes the className cell-row', () => {
  	expect(component.props.className).to.contain('cell-row');
  });

  it('renders its children', () => {
  	expect(component.props.children).to.exist;
  });
});