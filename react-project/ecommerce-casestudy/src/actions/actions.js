import Axios from "axios";
import * as actionTypes from './types'



export const getProducts = (getproducts) =>{   //thunk middleware
    return {
        type:actionTypes.FETCH_ALL_DATA ,
        value:getproducts  //payload
    };

}

export const Display =(category)=>{
    return{
        type:actionTypes.DISPLAY,
        category:category
    };
    
}
export  const fetchProducts = () =>{
    return dispatch=>{
        let getproducts=null
        Axios.get('http://localhost:3000/api/products')
        .then(response =>{
            getproducts=response.data
            dispatch(getProducts(getproducts))
            //dispatch(getFilterProducts(getfilterproducts))
        });
    };
}

