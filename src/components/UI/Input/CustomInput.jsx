export default function CustomInput({
  type,
  value,
  onChange,
  name,
  id,
  placeholder,
  className,
}) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}
