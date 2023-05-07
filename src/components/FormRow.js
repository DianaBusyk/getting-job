const FormRow = ({ type, name, value, handleChange, labelText }) => {
  console.log(name, labelText)
 const  nameText = name == "password" ? "пароль" : name == "email" ? "електронна адреса" : name == 'name' ? "ім'я" : name
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || nameText}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};
export default FormRow;
