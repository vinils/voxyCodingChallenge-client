import React from 'react';
import RX from 'reactxp';

const _styles = {
  main: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }),

  title: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  }),

  label: RX.Styles.createTextStyle({
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  }),

  name: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    color: '#42B74F',
  }),

  links: RX.Styles.createViewStyle({
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  }),

  link: RX.Styles.createLinkStyle({
    textDecorationLine: 'underline',
    paddingRight: 5,
    paddingLeft: 5,
    color: '#0070E0',
  }),
};

interface PageState {
  length: string;
  text: string;
  isSubmitting: boolean;
  error: string;
}



export class App extends RX.Component<null, PageState> {

  private voxyFunctionLocal = (text:string):string => text.length.toString();
  private getVoxyFunctionLocal = () => {
    if(this.state && this.state.text.length > 0)
      this.setState({ length: this.voxyFunctionLocal(this.state.text), isSubmitting: false, error: '' });
  }
  
  private _onPress = () => {
      this.setState({ isSubmitting: true }, );
      this.getVoxyFunctionLocal();
  }

  public render() {
    return (
      <RX.View style={ _styles.main }>
        <RX.View>
          <RX.Text style={ _styles.label }>Digite o texto abaixo</RX.Text>
          <RX.TextInput style={ _styles.label }/>
          <RX.Text style={ _styles.label }>Resultado: { this.state ? this.state.length : ''  }</RX.Text>
          <RX.Text style={ _styles.label }>{ this.state.error }</RX.Text>
          <RX.Button
            onPress={ this._onPress }
            >Enviar</RX.Button>
          </RX.View>
      </RX.View>
    );
  }
}
