import "./infobox.css";

const InfoBox = ({ name, number }) => {
  return (
    <div className="val-box">
      <div>
        <span>{name.toUpperCase()}</span>
        <h3>{number}</h3>
        <div className="gradient"></div>
      </div>
    </div>
  );
};

export default InfoBox;
