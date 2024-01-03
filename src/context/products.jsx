import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import { useSearch } from "../hooks/useSearch";
import { useCategories } from "../hooks/useCategories";

export const ProductsContext = createContext();

export function ProductsProvider({children}){
    // se llama a la api solo una vez y se guardan todos los productos dentro de la variable getAPI
    const { getAPI } = useProducts();
    // products es un customHook para poder mostrar los productos encontrados. 
    const { products , setProducts } = useSearch({getAPI})
    // arreglo donde guarda todas las categorias.
    const { categories } = useCategories({getAPI})

    function filterCategory({category,minPrice,maxPrice}){
        let result = getAPI.filter( product => ( 
            (product.price >= minPrice && product.price <= maxPrice && category==null)
            || (product.price >= minPrice && product.price <= maxPrice && product.category === category)
            )
        );
        setProducts(result)
    }

    return (
        <ProductsContext.Provider value={{products,categories,filterCategory}}>
            {children}
        </ProductsContext.Provider>
    )
}