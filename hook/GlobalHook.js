import React, { useState } from "react";
export const GlobalContext = React.createContext("GlobalContext");

const Store = props => {

    const [getglobalUser, setglobalUser] = useState({})
    const [getglobalToken, setglobalToken] = useState()
    const[getproductName,setproductName] =useState();
    const[getglobalCart,setglobalCart] =useState();
    const[getcount,setcount]=useState(0);
    const [getglobalNowLession, setglobalNowLession] = useState();
    const [getgloblaisLoading,setgloblaisLoading] =useState(false)

    const GlobalHook = {
        "setproductName":setproductName,
        "getproductName":getproductName,
        "setcount"      :setcount,
        "getcount"      :getcount,
        "getglobalUser":getglobalUser,
        "setglobalUser":setglobalUser,
        "getglobalToken":getglobalToken,
        "setglobalToken":setglobalToken,
        "getglobalNowLession":getglobalNowLession,
        "setglobalNowLession":setglobalNowLession,
        "getgloblaisLoading":getgloblaisLoading,
        "setgloblaisLoading":setgloblaisLoading,
        "getglobalCart":getglobalCart,
        "setglobalCart":setglobalCart

    

        }
return (
   
    <GlobalContext.Provider value={GlobalHook}>
      {props.children}
    </GlobalContext.Provider>

  );
};

export default Store;