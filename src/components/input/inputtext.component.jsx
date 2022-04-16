import './inputtext.styles.scss'

const InputText = ({val, onChange}) => {
  return (
    <div className="todo-inputcontainer">
      <input className="todo-inputtext" type="text" placeholder="Add Todo" onChange={onChange} value={val}  ></input>
    </div>
  );
};

export default InputText;
