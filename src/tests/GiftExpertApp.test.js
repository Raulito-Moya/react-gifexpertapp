import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react'
import { GiftExpertApp } from '../GiftExpertApp'

describe('Pruebas en GiftExpertApp', () => {

    test('Debe mostrar el <GiftExpertApp/>', () => {

        const wrapper = shallow(<GiftExpertApp/>)

        expect(wrapper).toMatchSnapshot()

    })


     test('Debe mostrar una lista de categorias', () => {

       const categories = [];
       const wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>)
      
       expect(wrapper).toMatchSnapshot()
       expect( wrapper.find('GiftGrid').length ).toBe( categories.length )
 
     })


})

