import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class HomeScreen11 extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 300,
            height: 300,
            backgroundColor: 'black',
          }}
          source={require('./assets/tick.json')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
