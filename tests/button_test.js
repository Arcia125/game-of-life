const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');
import Button from '../src/app/components/button';

describe('The Button component', () => {
  var renderer, button;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <Button />
      );

    button = renderer.getRenderOutput();
  });

  it('renders', () => {
    expect(button).to.exist;
  });

  it('has the className button', () => {
    expect(button.props.className).to.include('react-button');
  });

});