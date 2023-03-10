import './css/main.css';
import GryffindorLogo from './img/Gryffindor-Logo.webp';
import SlytherinLogo from './img/Slytherin-Logo.webp';
import HufflepuffLogo from './img/Hufflepuff-Logo.webp';
import RavenclawLogo from './img/Ravenclaw-Logo.webp';

const images = [
  GryffindorLogo,
  SlytherinLogo,
  HufflepuffLogo,
  RavenclawLogo
];
window.onclick=randomImage;
function randomImage() {
  var ran_index = Math.floor(Math.random() * images.length);
  document.getElementById('image').src=images[ran_index];
}

function Main() {
    return (
      <div className="contents">
        <h1 style={{fontFamily: "HarryPotter-ov4z", color: "silver"}}>Welcome to Harry Potter World!</h1>
        <h2>Click the The Sorting Hat gif below and see which Hogwarts room you belong to!</h2>
        <div className="div1">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" id="image" alt=""/>
        </div>
        <div id="button">
        <button onclick="randomImage();">
          <img src='https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif?1561932267' alt=""/>
        </button>
      </div>
      </div>
    );
  }
  
  export default Main;