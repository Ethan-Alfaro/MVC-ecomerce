import React, { useEffect, useState } from "react";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function FetchDB(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    const [userSession, setUserSession] = useState({});
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      checkIfSessionExist();
    }, []);

    function checkIfSessionExist() {
      fetch("/get-user")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setUserSession(data);
          if (data.message !== "You are not logged in") {
            setIsLogged(true);
            if (data.category == "Employee") {
              setIsAdmin(false);
            } else {
              setIsAdmin(true);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return (
      <section className="main_layout">
        <WrappedComponent
          {...props}
          isLogged={isLogged}
          isAdmin={isAdmin}
          userSession={userSession}
        />
      </section>
    );
  }

  return WrapperComponent;
}

export default FetchDB;
