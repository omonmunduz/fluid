import React, { useState } from 'react'
import propTypes from "prop-types";
import styles from "./dropdown.module.scss";

const Dropdown = ({options, onSelect}) => {
    const [selectedOption, setSelectedOption] = useState(options);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
      };

  return (
    <div className={styles.dropdown}>
        <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
            {options.map((option) => (
                <option key={option} value={option} className={styles.dropdownOptions}>
                {option}
                </option>
            ))}
        </select>
    </div>
  )
};

Dropdown.propTypes = {
    options: propTypes.array,
    onSelect: propTypes.func,
}

export default Dropdown