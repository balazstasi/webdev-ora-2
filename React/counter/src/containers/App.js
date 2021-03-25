import React from "react";
import Counter from "../components/Counter";

/*

  1. Csinalj 1-2 gombot, ami kivon a Counterbol (+pont, ha dinamikusan oldod meg)
     - csinalni kell egy masik fuggvenyt, ami kivon
  2. Csinald meg, hogy ne lehessen 0-nal kevesebb a counter valueja 
    + pont, irjon ki egy uzenetet valahova a kijelzore, ha 0-nal lejjebb akarjuk vinni a szamlalot
    ++ pont, hogy tunjon el a felirat, ha elkezdunk +olni, tehat, ha mar nem 0 a szamlalo
    vagy ha 0, de nem nyomjuk meg a minuszt
  
  + Csinald meg azt, hogy egyetlen fuggvennyel lehessen kivonni es hozzaadni is,
  es azt is meg lehessen mondani, hogy mennyit adjunk/vonjunk a counterhoz/counterbol.
  tehat: ne legyen az 1-es feladahtoz hasonloan egy
    sub() meg egy add() fuggveny, csak egy darab fg, ami tud kivonni is meg hozzaadni is,
    es ezt hivja meg a + meg - gomb is 


  4. Csinald meg azt, hogyha a szamlalora magara kattintunk, akkor 0-zza le azt
*/

export default class App extends React.Component {
  static defaultProps = {
    buttonNumber: 10,
    buttonNumbers: [0, 1, 2, 3, 4, 5, 6],
  };

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
    // bindoljuk a Counter this objektumat az add fuggvenyhez, mivel maskent onmagaban keresne a `this.setStatet`
    // ez mindig szukseges, amikor a this kulcssszot hasznaljuk a fuggvenyben, kiveve ha valtozokent hozzuk letre, aminek anonim fuggvenyt adunk ertekul
    // this.add = this.add.bind(this);
  }

  add = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  changeStartCounter = (number) => {
    this.setState({
      value: number,
    });
    console.log(this.state.value);
  };

  render() {
    console.log(this.state.value);
    return (
      <div>
        {[...Array(10).keys()].map((btnNumber) => (
          <div>
            <button onClick={() => this.changeStartCounter(btnNumber * 100)}>
              {btnNumber * 100}
            </button>
            {/* <br /> */}
          </div>
        ))}

        <hr />

        {this.props.buttonNumbers.map((num) => (
          <button onClick={() => this.changeStartCounter(num)}>{num}</button>
        ))}

        <Counter
          value={this.state.value}
          kiskutya={"Csopi"}
          add={() => this.add()}
        />
      </div>
    );
  }
}
