import React  from 'react'

import { Table } from "../ui/Table"

interface State {
  title?: string;
}

export default class Home extends React.Component<State> {
  state: State = {
    title: "",
  }
  render(): JSX.Element{
    return <div>
      <Table />
    </div>
  }
}

