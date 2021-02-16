import { shallow } from 'enzyme'

import React from 'react'
import { GiftGridItem } from '../../components/GiftGridItem'
import '@testing-library/jest-dom';

describe('Probando GiftGridItem', ()=>{

const title= 'un titulo'
const url='https://localhost/algo.jpg';
const wrapper =shallow(<GiftGridItem title={title} url={url}/>);
  
 
    test('debe de mostrarse el componente correctamente' ,()=>{

    expect(wrapper).toMatchSnapshot()

    });


    test('debe tener el valor de un parrafo',()=>{

    const p  = wrapper.find('p');

    expect( p.text().trim() ).toBe( title );

    });
  

    test('debe tener la imagen igual al url ya igaul a los props', ()=>{

     const img =wrapper.find('img')
     console.log(img.props())
     
    const div =wrapper.find('div')
 const className = div.props().className
 
     expect(img.props().src).toBe(url)
     expect(img.props().alt).toBe(title)

     expect(className.includes('animate__fadeInDownBig')).toBe(true) //para evaluar la clase del div

    })

    
})
