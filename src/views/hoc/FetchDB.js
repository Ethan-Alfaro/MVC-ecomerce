import React, { useEffect, useState } from "react";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function FetchDB(WrappedComponent) {
  WrappedComponent.displayName = `CheckUserDB(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    const [userSession, setUserSession] = useState({});
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
      checkIfSessionExist();
    }, [isLoading]);

    function checkIfSessionExist() {
      fetch("/get-user")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUserSession(data);
          setIsloading(false);
          if (data.message !== "You are not logged in") {
            setIsLogged(true);
            setIsloading(false);
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
          isLoading={isLoading}
        />
      </section>
    );
  }

  return WrapperComponent;
}

export default FetchDB;
