
    export const getGifts = async( category)=>{

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)  }&api_key=I8JARghROVZYV6qomX3KRJ6JbLveIr2h&limit=10` //encoide uri es para que la categoria elimine los espacios y ponga +
        const resp = await fetch(url);
        const { data } = await resp.json()

       const gifs = data.map( img =>{ //de cada elemento estraigo los siguientes eleemetnos en un array
              return {
                   id: img.id,
                   title: img.title,
                   url: img.images?.downsized_medium.url //el signo de ? es para ver si vienen las imagenes entonces que lo utilize
              }
         })
       
        
        return gifs

     }