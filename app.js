
    import React from "react";
    import ReactDOM from "react-dom/client";

//
      const title  =  (
          <h1 className="head" tabIndex="5">
            This is the one more component.
            </h1>
            );



//this react component

      const HeadingComponent = ()=> (
        <div className="constainer"> 

            {title}
          <h1>
            Namastey React function Componenet
          </h1>
        </div>
      );
        
       
      

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<HeadingComponent/>);

  
