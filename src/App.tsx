import React from 'react';
import RX from 'reactxp';
import VoxyFunction from './VoxyFunction';

const _styles = {
  main: RX.Styles.createViewStyle({
  }),
  title: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 15,
  }),
  text: RX.Styles.createTextInputStyle({
    borderWidth: 1,
  }),
  label: RX.Styles.createTextStyle({
    fontSize: 16,
  }),
  result: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 14,
    color: '#42B74F',
  }),
  error: RX.Styles.createTextStyle({
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF0000',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  }),
  button: RX.Styles.createViewStyle({
    // borderWidth: 1,
    // // alignSelf: 'stretch',
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'darkgray',
  })
};

interface PageState {
  length: string;
  text: string;
  error: string;
}

export class App extends RX.Component<{}, PageState> {
  private _onPress = () => {
    let setState = (length?: string, error?: string) => this.setState({length: length ? length : this.state.length, error: error != null ? error : this.state.error});
    let hasText = this.state && this.state.text && this.state.text.length > 0;

    if(hasText)
      VoxyFunction(this.state.text).then(res => setState(res, ''));
    else
      setState('0', 'text required');
  }

  private _onChangeText = (newValue: string) => {
    this.setState({ text: newValue });
  }

  public render() {
    return (
      <RX.View style={ _styles.main }>
        <RX.View>
          <RX.Text style={ _styles.title }>Type the text below</RX.Text>
          <RX.TextInput
            style={ _styles.text } 
            onChangeText={this._onChangeText}
            onKeyPress={e=>{e.keyCode == 13 ? this._onPress(): true}}
            />
          <RX.Text style={ _styles.result }>Result: { this.state ? this.state.length : ''  }</RX.Text>
          <RX.Text style={ _styles.error }>{ this.state ? this.state.error : '' }</RX.Text>
          <RX.Button
            style={ _styles.button }
            onPressOut={ this._onPress }
          >Enviar</RX.Button>
          </RX.View>
      </RX.View>
    );
  }
}
