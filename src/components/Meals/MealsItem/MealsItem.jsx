import classes from "./MealsItem.module.css";
import MealsForm from "./MealsForm";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={classes.item}>
        <div clasName={classes.meal}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <MealsForm id={props.id} />
      </div>
    </li>
  );
};

export default MealsItem;
