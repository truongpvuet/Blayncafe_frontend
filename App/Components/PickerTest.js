import React, { Component } from 'react';
import { View, Picker } from 'react-native';

export default class PickerPlaceholderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue) => this.setState({ language: itemValue })}
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}
