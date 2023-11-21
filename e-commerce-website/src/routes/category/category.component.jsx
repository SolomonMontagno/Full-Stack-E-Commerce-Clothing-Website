import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'

const Category = () => {
    { category } = useParams()
}


export default Category