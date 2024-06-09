export default function CustomButton({ type, text, icon, onSubmit }) {
  return (
    <button type={type} className="button body-standard" onClick={onSubmit}>
      {text}
      {icon}
    </button>
  );
}
