import React from 'react';
import withCounter from './HOC/withCounter';

const ClickCounter = ({count, handleClick}) => {
    return (
      <div>
        <button type="button" onClick={handleClick}>
          Click - <span className="text-red-400">{count}</span>
        </button>
      </div>
    );
};


export default withCounter(ClickCounter);