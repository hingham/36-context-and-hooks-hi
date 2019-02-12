import React from 'react';

import renderer from 'react-test-renderer';
import App from '../../app.js';
import CountConsumer from '../../components/count-consumer.js';

describe('<Index>', () =>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        // React.render(<App/>, div);
        // React.unmountComponentAtNode(div);
    });

    it('renders a h1', ()=>{
        let component = mount(<App/>);
        expect(component.find('h1').text()).toContain('Hello Title');
    });

    describe('increment', ()=>{
        it('adds one to the counter div', ()=>{
            let component = mount(<App/>);
            
            // let count = component.find('div');
            let increment = component.find('#increment');
            increment.simulate('click');
            expect(component.find('h2').text()).toContain(1);
        });

     
    });

    describe('decrement', ()=>{
        it('subtracts one from the counter div', ()=>{
            let component = mount(<App/>);
            
            // let count = component.find('div');
            let decrement = component.find('#decrement');
            decrement.simulate('click');
            expect(component.find('h2').text()).toContain(-1);
        });

  
    })
    
});