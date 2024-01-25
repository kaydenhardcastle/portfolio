import React, { useState } from 'react';

import './Tabs.scss';

export const TabPane = ({ children }) => {
  return <div>{children}</div>;
};

export const Tabs = ({ defaultActiveKey, children }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey);

  return (
    <div className='tabs'>
      <div className="tab-titles">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {child.props.tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child, index) =>
          index === activeTab ? child : undefined,
        )}
      </div>
    </div>
  );
};
