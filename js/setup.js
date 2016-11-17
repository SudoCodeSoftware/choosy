/*
 * load configuration things and launch main screen
 */

'use strict';

var ChoosyApp = require('ChoosyApp');
var React = require('React');
var { Provider } = require('react-redux');

function setup(): ReactClass<{}> {

  class Root extends React.Component {
    state: {
      isLoading: boolean;
      store: any;
    };
    constructor() {
      super();
      this.state = {
        isLoading: true,
        //store: configureStore(() => this.setState({isLoading: false})),
      };
    }
    render() {
      //if (this.state.isLoading) {
      //  return null;
      //}
      return (
        <Provider store={this.state.store}>
          <ChoosyApp />
        </Provider>
      );
    }
  }

  return Root;
}
module.exports = setup;

