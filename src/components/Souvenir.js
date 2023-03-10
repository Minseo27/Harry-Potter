import './css/Souvenir.css';
import { useState } from "react";

const i1 = "https://t4.ftcdn.net/jpg/03/15/21/23/360_F_315212386_0d6tLTU3dzclZSIXyfc1s8i09hP3df5U.jpg";
const i2 = "https://media.harrypotterfanzone.com/wingardium-leviosa.gif";
const a1 = "https://static.wixstatic.com/media/7eaf3f_0644cb532f3c49f794e874e3b5ad3f7f~mv2.jpg/v1/fill/w_640,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7eaf3f_0644cb532f3c49f794e874e3b5ad3f7f~mv2.jpg"
const a2 = "https://1.bp.blogspot.com/-yB833xvUvQo/Xw_sj8anHHI/AAAAAAAAWYQ/ykDiNrvPIkUsECg5d0C5EZn-G2pFMJYjgCLcBGAsYHQ/d/Ron.gif"
const b1 = "https://media.vanityfair.com/photos/56017b47accf6caa52fb9882/master/pass/harry-potter-invisbility-cloak.jpg";
const b2 = "https://media.vanityfair.com/photos/560178403a02e0b16051f6c5/master/w_1600%2Cc_limit/harrypotterinvisible.gif"
const change1 = {i1, i2}
const change2= {a1,a2}
const change3={b1,b2}

function Souvenir() {
    const [style, setStyle] = useState(change1.i1);
    const [style2, setStyle2] = useState(change2.a1);
    const [style3, setStyle3] = useState(change3.b1);
    return (
        <div className="shop">
          <h1>Harry Potter Souvenir</h1>
          <h2>Shopping Items</h2>
          <table>
            <tr>
              <td>
                <img src={style} alt='change1'/>
                <div></div>
                <button onClick={() => setStyle(change1.i2)}>gif</button>
                <button onClick={() => setStyle(change1.i1)}>pic</button>
                </td>
                <td>
                  <img src={style2} alt='change2' />
                  <div></div>
                  <button onClick={() => setStyle2(change2.a2)}>gif</button>
                <button onClick={() => setStyle2(change2.a1)}>pic</button>
                </td>
                <td>
                  <img src={style3} alt='change3' />
                  <div></div>
                  <button onClick={() => setStyle3(change3.b2)}>gif</button>
                <button onClick={() => setStyle3(change3.b1)}>pic</button>
                </td>
              </tr>

              <tr>
              <td> <div >Wands</div>
                  <div1>This is a magic wand. Say "wingardium leviosa" to use spell with this wand!</div1> </td>
              <td> <div >Mandrake</div>
                  <div1>Mandrake is a magical and sentient plant which had a root that looked like a human.</div1> </td>
                  <td> <div >Cloak of Invisibility</div>
                  <div1>The Cloak of Invisibility is a magical artefact used to render the wearer invisible.</div1> </td>
          </tr>
      </table>
        </div>
      );
  }

  export default Souvenir;