import React  from 'react'
interface State {
  title?: string;
}

export default class Home extends React.Component<State> {
  state: State = {
    title: "",
  }
  render(): JSX.Element{
    return <div>
      Hello World { this.state.title }
    </div>
  }
}

