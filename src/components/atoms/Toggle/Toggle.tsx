interface ToggleProps {
  onToggle: () => void;
  isActive: boolean;
}

const Toggle = ({ onToggle, isActive }: ToggleProps) => {
  return (
    <div
      onClick={onToggle}
      style={{
        width: "50px",
        height: "24px",
        borderRadius: "12px",
        backgroundColor: isActive ? "#4CAF50" : "#ccc",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          position: "absolute",
          top: "1px",
          left: isActive ? "26px" : "2px",
          transition: "left 0.3s",
        }}
      />
    </div>
  );
};

export default Toggle;
