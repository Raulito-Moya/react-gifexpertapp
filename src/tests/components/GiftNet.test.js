import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import React from 'react'
import { GiftNet } from '../../components/GiftNet'
import { useFetchGifts} from '../../hooks/useFetchGifts'
jest.mock('../../hooks/useFetchGifts'); //se finja cualquier llamada a ese archivo y suponer y controlar la informacion


describe('Pruebas en <GiftGrid />', ()=>{

    const category = 'One Punch'

   


  test('debe mostrar el componente' ,()=>{

      useFetchGifts.mockReturnValue({ //simula lo que devuelve el hook
        data:[],
        loading:true
    })
   
      const wrapper = shallow( <Giftgrid category={category}/>)
      expect(wrapper).toMatchSnapshot()

  })


  test('debe de mostar items cuando se cargan imagenes useFetchGifs', ()=>{

      const gifs = [{
       id:'ABC',
       url:'https://localhost/cualquier/cosa.jpg',
       title:'Cualquier Cosa'

     }]

      useFetchGifts.mockReturnValue({ //simula lo que devuelve el hook
        data:gifs,
        loading:false
     })
                                                                                   
     const wrapper = shallow( <GiftNet  category={category}/>)

     expect( wrapper ).toMatchSnapshot()
     expect( wrapper.find('p').exists() ).toBe(false);
     expect( wrapper.find('GiftGridItem').length ).toBe( gifs.length )

 })


})