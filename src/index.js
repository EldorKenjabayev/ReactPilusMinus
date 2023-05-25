import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class CountCopy extends React.Component {
  state = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  }
  minusBtnHead = () => {
    let ason = this.state.a;
    ason--
    let bson = this.state.b;
    bson--
    let cson = this.state.c;
    cson--
    let dson = this.state.d;
    dson--
    this.setState({
      a: ason,
      b: bson,
      c: cson,
      d: dson
    });

  }

  PilusBtnHead = () => {
    let ason = this.state.a;
    ason++
    let bson = this.state.b;
    bson++
    let cson = this.state.c;
    cson++
    let dson = this.state.d;
    dson++
    this.setState({
      a: ason,
      b: bson,
      c: cson,
      d: dson
    });

  }

  PilusBtn1 = () =>{
    let son1 = this.state.a;
    son1++
    this.setState({
      a: son1,
    })
  }
  MinusBtn1 = () =>{
    let son1 = this.state.a;
    son1--
    this.setState({
      a: son1,
    })
  }

  PilusBtn2 = () =>{
    let son1 = this.state.b;
    son1++
    this.setState({
      b: son1,
    })
  }
  MinusBtn2 = () =>{
    let son1 = this.state.b;
    son1--
    this.setState({
      b: son1,
    })
  }

  PilusBtn3 = () =>{
    let son1 = this.state.c;
    son1++
    this.setState({
      c: son1,
    })
  }

  MinusBtn3 = () =>{
    let son1 = this.state.c;
    son1--
    this.setState({
      c: son1,
    })
  }
  PilusBtn4 = () =>{
    let son1 = this.state.d;
    son1++
    this.setState({
      d: son1,
    })
  }
  MinusBtn4 = () =>{
    let son1 = this.state.d;
    son1--
    this.setState({
      d: son1,
    })
  }

  render() {
    return (
      <div style={{ border: '1px solid #000', width: '100%', paddingBottom: '7vh', marginTop: '4vh', borderRadius: '15px', padding: '5px 3vh', backgroundColor: '#F55229' }}>
         <div className="divbtn" style={{ position: 'absolute', top: '15px', left: '42%' }}>
            <button style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }} onClick={this.minusBtnHead} >-</button>
            <button style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} onClick={this.PilusBtnHead} >+</button>
          </div >
          <div style={{width:'100%' , display:'flex', justifyContent:'space-between', gap:'5vw'  }}>
        <div className="component" style={{ paddingBottom: '2vh', width:'40%' }}>
          <p>1-Component</p>
          <div className="divACom" style={{ display: 'flex', justifyContent: 'space-evenly', gap: '4vw', alignItems: 'center', border: '1px solid #000', borderRadius: '15px', padding: '1.5vh 0' }}>
            <div>
              <p>A Com</p>
              <button style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }} onClick={this.MinusBtn1}>-</button>
              <button style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}  onClick={this.PilusBtn1}>+</button>
            </div>
            <div>
              <h2>{this.state.a}</h2>
            </div>
          </div> <br />
          <div className="divACom" style={{ display: 'flex', justifyContent: 'space-evenly', gap: '4vw', alignItems: 'center', border: '1px solid #000', borderRadius: '15px', padding: '1.5vh 0' }}>
            <div>
              <p>B Com</p>
              <button style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }} onClick={this.MinusBtn2} >-</button>
              <button style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} onClick={this.PilusBtn2}>+</button>
            </div>
            <div>
              <h2>{this.state.b}</h2>
            </div>
          </div>
        </div>
        <div className="component" style={{ paddingBottom: '2vh', width:'40%' }}>
          <p>2-Component</p>
          <div className="divACom" style={{ display: 'flex', justifyContent: 'space-evenly', gap: '4vw', alignItems: 'center', border: '1px solid #000', borderRadius: '15px', padding: '1.5vh 0' }}>
            <div>
              <p>C Com</p>
              <button style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px'}} onClick={this.MinusBtn3}>-</button>
              <button style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} onClick={this.PilusBtn3}>+</button>
            </div>
            <div>
              <h2>{this.state.c}</h2>
            </div>
          </div> <br />
          <div className="divACom" style={{ display: 'flex', justifyContent: 'space-evenly', gap: '4vw', alignItems: 'center', border: '1px solid #000', borderRadius: '15px', padding: '1.5vh 0' }}>
            <div>
              <p>D Com</p>
              <button style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }} onClick={this.MinusBtn4}>-</button>
              <button style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}onClick={this.PilusBtn4}>+</button>
            </div>
            <div>
              <h2>{this.state.d}</h2>
            </div>
          </div>
        </div>
          </div>
          
      </div>
    )
  }
}
// class CountCopy2 extends React.Component {
//   state = {
//     c: 0,
//     d: 0,
//   }
//   render() {
//     return (
//       <div style={{ border: '1px solid #000', width: '40%', paddingBottom: '7vh', marginTop: '4vh', borderRadius: '15px', padding: '5px 3vh', backgroundColor: '#F55229' }}>
//         <div className="component">
//           <p>2-Component</p>
//           <div className="divACom" style={{ display: 'flex', justifyContent: 'space-evenly', gap: '4vw', alignItems: 'center', border: '1px solid #000', borderRadius: '15px', padding: '1.5vh 0' }}>
//             <div>
//               <p>C Com</p>
//               <button style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}>-</button>
//               <button style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}>+</button>
//             </div>
//             <div>
//               <h2>{this.state.c}</h2>
//             </div>
//           </div> <br />
//           <div className="divACom" style={{ display: 'flex', justifyContent: 'space-evenly', gap: '4vw', alignItems: 'center', border: '1px solid #000', borderRadius: '15px', padding: '1.5vh 0' }}>
//             <div>
//               <p>D Com</p>
//               <button style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}>-</button>
//               <button style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}>+</button>
//             </div>
//             <div>
//               <h2>{this.state.d}</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="conteiner" style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#04C9F5' }}>
    <div style={{ width: '45%', border: '1px solid #000', display:'flex', padding: '2%', paddingTop: '4%', paddingBottom: '3%', position: 'relative', borderRadius: '17px', backgroundColor: '#F4CB00 ' }}>
      <CountCopy />
      {/* <CountCopy /> */}
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
