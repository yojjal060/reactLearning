
import React, { useContext, useEffect, useState } from 'react';
import DarkModeContext from './DarkModeContext';
import './switch.css'

export default function Switch() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [checked, setChecked] = useState(isDarkMode);

  useEffect(() => {
    setChecked(isDarkMode);
  }, [isDarkMode]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="input__check"
        checked={checked}
        onChange={toggleDarkMode}
      />
      <span className="slider"></span>
    </label>
  );
}
