/* eslint-disable react/prop-types */
function SwitchRenderer({ value, ...renders }) {
  const valueFix = value === undefined ? Object.keys(renders)[0] : value;
  return (
    <>
      {Object.keys(renders).map((key) => {
        if (key.toLowerCase() === valueFix.toLowerCase()) {
          return <span key={key}>{renders[key]}</span>;
        }
      })}
    </>
  );
}
export default SwitchRenderer;
