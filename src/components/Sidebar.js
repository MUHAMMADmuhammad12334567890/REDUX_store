
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  // вывод списка категорий
  const category = useSelector((state) => state.categories)
 
 return (
  <div>{category.map(category => {
    return(
      <div> <Link  to={`/category/${category.id}`}>{category.name}</Link></div>
    )
  })}</div>
 )
}

export default Sidebar;
