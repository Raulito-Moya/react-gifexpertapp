import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react'
import { useFetchGifts } from '../../hooks/useFetchGifts'
import { renderHook } from '@testing-library/react-hooks' //esta es la libreria

describe('Pruebas en el hook usefetchGifts ', () => {


    test('debe de retornar el estado inicial', async()=>{  //para hacer pruebas en los hooks hace falta una libreria que acabo de instalar


          const { result,waitForNextUpdate } = renderHook( ()=> useFetchGifts( 'One Punch' )) //aqui extraigo el resultado 
          const { data, loading} = result.current; //current seria el valor actual que tenga ese cuustom hook

          await waitForNextUpdate(); //se pone esto aca para que no haga el unmount

        

         console.log(data,loading)

        expect(data).toEqual([]); //pruebo el estado inicial del hook
        expect(loading).toBe(true)
        
    })


    test('debe de retornar un arreglo de imagens y elloading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifts( 'One Punch' )) 
        await waitForNextUpdate();

        const { data, loading} = result.current; 

        
       console.log(data,loading)

      expect(data.length).toBe(10); 
      expect(loading).toBe(false)



    })




})