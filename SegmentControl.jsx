import React from 'react';
import { useEffect, useId, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './SegmentControl.css';

export default function SegmentControl() {
  const items = ['Home', 'Products', 'Gallery'];
  const initialIndex = 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const id = useId();

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Your useEffect logic here
  }, [currentIndex]);

  return (
    <div className="segments">
      <div className="control-container">
        {items.map((item, index) => {
          const isSelected = currentIndex === index;

          return (
            <NavLink
              to={`/${item.toLowerCase()}`}
              activeClassName="active"
              className={`control-item ${isSelected ? 'selected' : ''}`}
              onClick={() => handleItemClick(index)}
              key={index}
            >
              {isSelected && (
                <motion.div layoutId={id} className="control-item-bg"></motion.div>
              )}
              <div className={`control-item-text ${isSelected ? 'selected-text' : ''}`}>
                {item}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
