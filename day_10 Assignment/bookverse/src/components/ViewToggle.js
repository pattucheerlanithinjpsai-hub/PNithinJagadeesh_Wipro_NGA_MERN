import React from 'react';

const ViewToggle = ({ currentView, onToggle }) => {
  return (
    <div className="view-toggle">
      <button
        className={currentView === 'grid' ? 'active' : ''}
        onClick={() => onToggle('grid')}
      >
        Grid View
      </button>
      <button
        className={currentView === 'list' ? 'active' : ''}
        onClick={() => onToggle('list')}
      >
        List View
      </button>
    </div>
  );
};

export default ViewToggle;
