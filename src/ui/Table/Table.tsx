import { useStore } from "../../services/store"
import { Row, Column } from "../../types/table"

export function Table() {
  const { rows, columns } = useStore()
  return (
    <div>
      <div className="tableTripe">
        <div className="header">
          {columns.map((column: Column) => (
            <div key={column.id}>
              { column.name }
            </div>
          ))}
        </div>
        <div className="rows">
          {rows.map((row: Row) => (
            <div key={row.id}>
              { JSON.stringify(row) }
            </div>
          ))}
        </div>
      </div> 
    </div>
  )
}
