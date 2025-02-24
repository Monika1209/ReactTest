const ToggleButton = ({ isRunning, onToggle }) => {
    return <button onClick={onToggle}>{isRunning ? "Stop" : "Start"}</button>;
  };
  
  export default ToggleButton;