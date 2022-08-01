import React, { useState } from "react";
//stateless functional component: component nhung khong su dung state

const Toggle = () => {
  return <div className="container-fluid toggle">
    asd
  </div>;
};
//stateful functional component: component co su dung state
const Toggle2 = () => {
    const array = useState(false);

    console.log(array);
    
    return <div className="toggle2">
        
    </div>

}



export default Toggle2;
