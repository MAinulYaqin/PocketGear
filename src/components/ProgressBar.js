/* @flow */

import React, { PropTypes, Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    height: 4,
    backgroundColor: 'rgba(0, 0, 0, .06)',
    borderRadius: 2,
  },

  fill: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
});

type Props = {
  ratio: number;
  fillColor?: string;
  style?: any;
}

type DefaultProps = {
  fillColor: string;
}

export default class ProgressBar extends Component<DefaultProps, Props, void> {

  static propTypes = {
    ratio: PropTypes.number.isRequired,
    fillColor: PropTypes.string,
    style: View.propTypes.style,
  };

  static defaultProps = {
    fillColor: '#FB6B6F',
  };

  render() {
    const {
      fillColor,
      ratio,
      style,
    } = this.props;

    return (
      <View style={[ styles.bar, style ]}>
        <View style={[ { flex: ratio, backgroundColor: fillColor }, styles.fill ]} />
        <View style={{ flex: 1 - ratio }} />
      </View>
    );
  }
}
