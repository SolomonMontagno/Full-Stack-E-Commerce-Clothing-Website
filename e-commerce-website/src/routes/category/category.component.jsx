import './category.styles.scss'
import { useParams, useState, useEffect } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap} = useContext(CategoriesContext)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
    return (
        <div>
            
        </div>
    )
}


export default Category