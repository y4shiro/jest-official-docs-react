import React, { useState } from 'react';

const CheckboxWithLabel = ({ labelOn, labelOff }) => {
  const [isChechked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChechked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChechked} onChange={onChange} />
      {isChechked ? labelOn : labelOff}
    </label>
  );
};

export default CheckboxWithLabel;
