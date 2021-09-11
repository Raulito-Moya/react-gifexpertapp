import React from 'react'
import { GiftApp } from '../GiftApp'

import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en GiftExpertApp', () => {

    test('Debe mostrar el <GiftExpertApp/>', () => {

        const wrapper = shallow(<GiftApp/>)

        expect(wrapper).toMatchSnapshot()

    })


     test('Debe mostrar una lista de categorias', () => {

       const categories = [];
       const wrapper = shallow(<GiftApp defaultCategories={categories}/>)
      
       expect(wrapper).toMatchSnapshot()
       expect( wrapper.find('GiftGrid').length ).toBe( categories.length )
 
     })


})

