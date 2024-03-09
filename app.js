
    import React from "react";
    import ReactDOM from "react-dom/client";

    /**
     * header
     *   -logo
     *   -navbar
     *   -cart
     * body
     *   -searchbar
     *   -restorant container
     *      -restorant carts
     * footer
     *   -copyright
     *   -links
     *   -address
     *   -contact
     */


    const Header = () => {
      return(
        <div className="header">

          <div className="logo-container">
              <img className="logo"src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>

          

              <ul className="navbar">
                  <li className="navbar-item">
                    <a className="navbar-link">Home</a>
                  </li>
                  <li className="navbar-item">
                    <a className="navbar-link">About Us</a>
                  </li>
                  <li className="navbar-item">
                    <a className="navbar-link">Contact Us</a>
                  </li>
                  <li className="navbar-item">
                    <a className="navbar-link">Cart</a>
                  </li>
                     
              </ul>

          

        </div>
      )
    }

    const AppComponent = () => {
      return(
        <div className="app">
           <Header/>
        </div>
      )
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<AppComponent/>);

  
