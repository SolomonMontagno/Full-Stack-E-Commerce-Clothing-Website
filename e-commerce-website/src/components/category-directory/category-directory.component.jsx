import './category-directory.styles.scss'
import CategoryItem from '../category-item/category-item.component';

const CategoryDirectory = (props) => {
     

return (
  <div className="categories-container">
    {props.categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);
}

export default CategoryDirectory