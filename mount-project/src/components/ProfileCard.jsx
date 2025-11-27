function ProfileCard({ name, age, isOnline }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "8px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <h2>{name}</h2>
      <p>나이: {age}</p>
       <p>
        상태:{" "}
        <span
          style={{
            marginRight: "6px",
          }}
        >
          {isOnline ? "🟢" : "🔴"}
        </span>
        <span
          style={{
            color: isOnline ? "lightgreen" : "red",
            fontWeight: "bold",
          }}
        >
          {isOnline ? "온라인" : "오프라인"}
        </span>
      </p>
    </div>
  );
}

export default ProfileCard;
