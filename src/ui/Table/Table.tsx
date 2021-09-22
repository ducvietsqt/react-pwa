import { useStore } from "../../services/store"

export function Table() {
  const stores = useStore()
  console.log(stores)
  return (
    <div>
        TABLE 
    </div>
  )
}
