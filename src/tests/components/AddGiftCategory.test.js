import { shallow } from 'enzyme'
import React from 'react'
import '@testing-library/jest-dom';
import {AddGiftCategory} from '../../components/AddGiftCategory'



describe('Pruebas en <AddCategory/>',()=>{

     const setCategories = jest.fn() //esto lo ponga para que jest me mande la funcionalidad de la funcion o sea como se hizo y demas
     let wrapper = shallow( <AddGiftCategory setCategories={setCategories}/>)

     beforeEach( ()=> { //este es como el siglo de vida de la funcioan es para que se renicialize cada cosa antes de entrar a cada prueba
        jest.clearAllMocks();  //esto se hace si estamos creando funciones en jest
        wrapper = shallow( <AddGiftCategory setCategories={setCategories}/>)

     })




     test('debe de mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot()
     })


     test('debe de cambiar la caja de texto', ()=>{

       const input = wrapper.find('input');
       const value = 'Hola Mundo';

       input.simulate('change',{ target: {value} });   //para que me simule el change le debo pasar el evento y se lo paso en los {} yle simulo un value
                                                      //le simulo el e.terget.value

       expect(wrapper.find('p').text().trim()).toBe( value ); //compruebo que esta el valor ahi
    
    
     })


     test('No debe de postear la info con submit', ()=>{

        wrapper.find('form').simulate('submit', { preventDefault: ()=>{}})

        expect(setCategories).not.toHaveBeenCalled()    //que la funciona haya no hay sido llamada

     })


     test('debe de llamar el setCategories y limpiar la caja de texto',()=>{

       

        const input = wrapper.find('input');
        let  value = 'Hola Mundo';
 
        input.simulate('change',{ target: {value} });
      
        
       wrapper.find('form').simulate('submit', { preventDefault: ()=>{}})


        expect(setCategories).toHaveBeenCalled()

        //el valor del input debe de estar vacio
        expect( wrapper.find('input').prop('value')).toBe('')
      
     

     })
})
