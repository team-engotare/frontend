const FeatureGrid = ({ features }) => {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
        {features.map((feature, index) => (
          <div key={index} style={{ textAlign: "center", border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <img src={feature.path} alt={feature.label} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
            <p>{feature.label}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeatureGrid;