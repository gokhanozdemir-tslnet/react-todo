import "./button.styles.scss";

const Button = (props) => {
  const { customClass, customValue } = props;

  return (
    <button className={`${customClass ? customClass : "addButton"}`}>
      <span className="material-icons">{customValue}</span>
    </button>
  );
};
export default Button;
