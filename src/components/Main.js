import React from "react";
import App5 from "../components/state"; 
import Sidebar from "./Sidebar";

const Main = (props) => {
    return (

    <div>

  <div className="article">
    Main Content:
    { props.name }
    <div>
      
      <p>
        <b>Render:</b>Render is a method that tell react what to display.
      </p>
      <p>
        <b>State:</b>State allows to create componennts that are dynamic.
      </p>
      <p>
        <b>Props:</b>Props are used  to pass data from one component to another
      </p>
    </div>
  </div>
    <Sidebar />
    <App5 />
    
    </div>
    
    )
};
 
export default Main;
