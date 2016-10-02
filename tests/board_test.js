const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');
import Board from '../src/app/components/board';

describe('The Board component', () => {
  var renderer, component;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <Board >
      </Board>
      );

    component = renderer.getRenderOutput();
  });

  it('renders', () => {
    expect(component).to.exist;
  });

  it('includes the className board', () => {
  	expect(component.props.className).to.contain('board');
  });

  // describe('Board.makeBoard()', () => {
  //   it('exists', () => {
  //     console.log(component.instance());
  //   });
  // });

});