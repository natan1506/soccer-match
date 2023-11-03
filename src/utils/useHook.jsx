/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useMemo } from 'react';

const CustomizationContext = createContext();

// eslint-disable-next-line react/prop-types
export function CustomizationProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    return data
  };

  const saveData = async (submitData) => {

    let newArr = [...data]
    newArr.push(submitData)
    setData(newArr)

    return { message: 'success' }
  }

  const value = useMemo(
    () => ({
      getData,
      saveData,
      data,
    }),
    [data]
  );


  return (
    <CustomizationContext.Provider
      value={value}
    >
      {children}
    </CustomizationContext.Provider>
  );
}


export function useCustomizationHook() {
  const context = useContext(CustomizationContext);
  return context;
}