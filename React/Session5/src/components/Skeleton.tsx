export default function SkeletonCard() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
    
      <div
        style={{
          width: "100%",
          height: "200px",
          background: "#e0e0e0",
          borderRadius: "8px",
          animation: "pulse 1.5s infinite",
        }}
      />

 
      <div
        style={{
          height: "20px",
          background: "#e0e0e0",
          margin: "10px 0",
          borderRadius: "4px",
          animation: "pulse 1.5s infinite",
        }}
      />

      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            height: "14px",
            background: "#e0e0e0",
            margin: "6px 0",
            borderRadius: "4px",
            width: i === 3 ? "60%" : "100%",
            animation: "pulse 1.5s infinite",
          }}
        />
      ))}
    </div>
  );
}
