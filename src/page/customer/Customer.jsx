import React from "react";

export default function Customer(props) {
  const { children } = props;
  return (
    <div>
      <span>Customer Page</span>

      {
        React.Children.map(children, item => item)
      }
    </div>

  );
}
