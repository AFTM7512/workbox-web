import React, { Component } from "react";
import IfWrap from '../if-wrap/IfWrap.jsx';

export default function asyncComponent(importComponent) {
 class AsyncComponent extends Component {
   constructor(props) {
     super(props);

     this.state = {
       component: null
     };
   }

   async componentDidMount() {
     const { default: component } = await importComponent();

     this.setState({
       component: component
     });
   }

   render() {
     const C = this.state.component;

    return (
      <IfWrap when={ C  }>
        <C {...this.props} />
      </IfWrap>
    );
   }
 }

 return AsyncComponent;
}
