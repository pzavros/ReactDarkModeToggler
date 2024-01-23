// src/components/DarkLightToggle.jsx
const DarkLightToggle = ({ isDarkMode, onToggle }) => {
    return (
      <button onClick={onToggle}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    );
  };
  
  export default DarkLightToggle;
  