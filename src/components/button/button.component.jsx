import "./button.styles.scss";

const Button = ({customClass,customValue, ...otherProps}) => {
 

  return (
    <button
      className={`${customClass ? customClass : "addButton"}`}
      {...otherProps}
    >
      <span className="material-icons">{customValue}</span>
    </button>
  );
};
export default Button;

//buradaki ...otherProps butonun tanımlandığın yerde çağırılmalı