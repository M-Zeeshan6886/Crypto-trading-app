import React from 'react'
import './Dashb1mainbody.scss';
import arrowdown from '../../assets/assets/arrowdown.png';
import Graph from '../../assets/assets/login/graph.png';


const Dashb1middle = () => {
  return (
    <>
    <div className='dashb1-container'>
        <p>Welcome back</p>
        <h1>M Zeeshan</h1>
        <div className='dashb1-container-btns'>
            <button className="btn-first">Home</button>
            <button className="btn-second">Transactions</button>
        </div>
        <div className="dashb1-container-content">
            <div className="dashb1-container-content-first">
                <div className="dashb1-container-content-first-left">
                   <div className="dashb1-container-content-first-left-row1">
                    <h1> Balance</h1>
                    <div className="dashb1-container-content-first-left-row1-usd">
                        <img src={arrowdown} alt="arrowdown" />
                        <p>USD</p>
                    </div>
                    </div>
                    <div className='dashb1-container-content-first-left-row2'>
                        <h1>$ 30,654.00</h1>
                    </div>
                </div>
                <div className="dashb1-container-content-first-right">
                    <img src={Graph} alt='graph' />
                </div>
            </div>
            <div className="dashb1-container-content-second">
                <table >
                    <thead>
                        <tr>
                            <th id="th" >Date</th>
                            <th id="th" >Cash IN/OUT</th>
                            <th id="text">Amount</th>
                            <th id="text">Balance</th>
                            <th id="th" >Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="th">15/08/2022</td>
                            <td id="th" style={{color:"#00FF47"}}>Cash IN</td>
                            <td id="text" style={{color:"#00FF47"}}>$ 517</td>
                            <td id="text">$ 30,137</td>
                            <td id="th">Lorem Ipsum dolor sit amet ...</td>
                        </tr>

                        <tr>
                            <td id="th">15/08/2022</td>
                            <td id="th" style={{color:"#00FF47"}}>Cash IN</td>
                            <td id="text" style={{color:"#00FF47"}}>$ 517</td>
                            <td id="text">$ 30,137</td>
                            <td id="th">Lorem Ipsum dolor sit amet ...</td>
                        </tr>

                        <tr>
                            <td id="th">15/08/2022</td>
                            <td id="th" style={{color:"#00FF47"}}>Cash IN</td>
                            <td id="text" style={{color:"#00FF47"}}>$ 517</td>
                            <td id="text">$ 30,137</td>
                            <td id="th">Lorem Ipsum dolor sit amet ...</td>
                        </tr>

                        <tr>
                            <td id="th">15/08/2022</td>
                            <td id="th" style={{color:"#FF0000"}}>Cash OUT</td>
                            <td id="text" style={{color:"red"}}>$ 517</td>
                            <td id="text">$ 30,137</td>
                            <td id="th">Lorem Ipsum dolor sit amet ...</td>
                        </tr>

                        <tr>
                            <td id="th">15/08/2022</td>
                            <td id="th" style={{color:"#00FF47"}}>Cash IN</td>
                            <td id="text" style={{color:"#00FF47"}}>$ 517</td>
                            <td id="text">$ 30,137</td>
                            <td id="th">Lorem Ipsum dolor sit amet ...</td>
                        </tr>

                        <tr>
                            <td id="th">15/08/2022</td>
                            <td id="th" style={{color:"#FF0000"}}>Cash OUT</td>
                            <td id="text" style={{color:"red"}}>$ 517</td>
                            <td id="text">$ 30,137</td>
                            <td id="th">Lorem Ipsum dolor sit amet ...</td>
                        </tr>

                        <tr>
                            <td id="th">15/08/2022</td>
                            <td id="th" style={{color:"#FF0000"}}>Cash OUT</td>
                            <td id="text" style={{color:"red"}}>$ 517</td>
                            <td id="text">$ 30,137</td>
                            <td id="th">Lorem Ipsum dolor sit amet ...</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Dashb1middle;