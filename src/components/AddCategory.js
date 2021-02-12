import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
 
    const [inputValue, setInputvalue] = useState();



    const handleInputChange =( e ) =>{ //da el valor mientras cambie en el form
        console.log(e.target.value)

        setInputvalue(e.target.value)
        
    }

    const handleSubmit = (e) =>{ //hace le submit
           e.preventDefault(); //para prevenir el comportamiento por defecto del Form
         // console.log('Submit hecho')

         if(inputValue.trim().length > 2){

             setCategories(cats => [inputValue, ...cats ]); //le paso a ala lista el valor que haya en el form
             setInputvalue('') //se lo paso a cero otra vez

         }

     

    }



    return (
        
         <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input 
            type="text" 
            value={inputValue}
            onChange={ handleInputChange }
            /> 
        </form>
       
    )
}


AddCategory.propTypes ={
     setCategories: PropTypes.func.isRequired

}