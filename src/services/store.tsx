import React, { useContext } from "react"
import { rows, columns } from "./fakeData"

const Context = React.createContext<any>({})

export const useStore = () => useContext(Context)

export const Provider: React.FC = ({ children }) => {
  const value = {
    rows, columns,
  }
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}
