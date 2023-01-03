import './Styles/Categories.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStates } from '../redux/categories/categories';

const Catagory = () => {
  const categ = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStates());
  };

  return (
    <div className="main-category">
      <div className="center">
        <button className="btn" type="button" onClick={handleClick}>Check status</button>
        <p>{categ}</p>
      </div>
    </div>
  );
};
export default Catagory;
