/*
 * main entry point for the app
 * see: http://blog.differential.com/sharing-code-between-android-and-ios-in-react-native/
 * @providesModule ChoosyApp
*/

'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var StyleSheet = require('StyleSheet');
var Platform = require('Platform');
var Tabs = require('react-native-tabs');

var { connect } = require('react-redux');

var ChoosyApp = React.createClass({
  render: function() {

  const { page } = "first";
  const tabbarStyles = [styles.tabbar];
  if (Platform.OS === 'android')
      tabbarStyles.push(styles.androidTabbar);
    //if (!this.props.isLoggedIn) {
    //  return <LoginScreen />;
    //}
    return (

      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabbar}
          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}
        >
            <Text name="first">First</Text>
            <Text name="second">Second</Text>
            <Text name="third">Third</Text>
        </Tabs>

        <Text>{page}</Text>
      </View>


    );
  },

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
});


function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin,
  };
}

//module.exports = connect(select)(ChoosyApp);
module.exports = ChoosyApp;


