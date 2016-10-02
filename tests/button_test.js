const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');
import Button from '../src/app/components/button';

describe('The Button component', () => {
  var renderer, button;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();

    renderer.render(
      <Button onClick className='test'>
      test text
      </Button>
      );

    button = renderer.getRenderOutput();
  });

  it('renders', () => {
    expect(button).to.exist;
  });

  it('includes the className button', () => {
    expect(button.props.className).to.include('react-button');
  });

  it('does not include the className undefined', () => {
    expect(button.props.className).to.not.include(undefined);
  });

  it('includes classes passed to it as className props', () => {
    expect(button.props.className).to.include('test');
  });

  it('renders its children', () => {
    expect(button.props.children).to.exist;
  });

  it('includes onClick passed to it', () => {
    expect(button.props.onClick).to.exist;
  });
});