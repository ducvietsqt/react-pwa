import React from 'react'

type Column = {
    id: Number,
    name: String,
}
type Row = {
    id: Number,
    name: String,
}
interface State {
    title?: String
}
interface Props {
    columns: Column[],
    rows: Row[],
}
export default class Table extends React.Component<Props, State> {
    state: State = {
        title: 'Base index view'
    }
    render(): JSX.Element {
        return <div>
            TABLE { this.state.title }
        </div>
    }
}
