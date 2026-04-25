const FeatureItem = ({ title, text }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon-container">
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-text">{text}</p>
    </div>
  );
};

export default FeatureItem;