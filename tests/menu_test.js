const React = require('react');
const expect = require('chai').expect;
const TestUtils = require('react-addons-test-utils');
import Menu from '../src/app/components/menu';

describe('The Menu component', () => {
    var renderer, menu, component;
    beforeEach(() => {
        renderer = TestUtils.createRenderer();

        renderer.render(
          <Menu className='test' >
            <div >
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
      expect(menu.type).to.equal('div');
    });

    it('includes the className menu', () => {
      expect(menu.props.className).to.include('menu');
    });

    it('does not include the className undefined', () => {
      renderer.render( < Menu / > );
      menu = renderer.getRenderOutput();
      expect(menu.props.className).to.not.include(undefined);
    });

    it('includes classes passed to it as className props', () => {
      expect(menu.props.className).to.include('test');
    });

    it('renders its children', () => {
      expect(menu.props.children).to.exist; 
    });


});
