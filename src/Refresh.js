import React from 'react';

export default ({ correct, reset }) => {
  return (
    <i className={correct ? 'material-icons logo' : 'hidden'} onClick={reset}>
      refresh
    </i>
  );
};
