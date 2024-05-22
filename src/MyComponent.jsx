import React from "react";

const sub = () => {
  console.log(location.href);
};

const MyComponent = () => {
  return (
    <div>
      <button className="btn-sauce" onClick={sub}>
        sauce
      </button>
    </div>
  );
};

export default MyComponent;
