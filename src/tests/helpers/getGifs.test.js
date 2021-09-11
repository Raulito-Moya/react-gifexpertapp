//import {shallow} from 'enzime'
import React from 'react'
import {getGiftsForGiftAPI} from '../../helpers/getGifsForGiftAPI'

import '@testing-library/jest-dom';


describe('Pruebas con getGifs fetch',()=>{

    test('debe de traer 10 elementos ', async ()=>{


     const gifts = await getGiftsForGiftAPI('One Punch')

      expect(gifts.length).toBe(10);

    })
 
  


})