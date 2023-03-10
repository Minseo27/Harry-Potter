import './css/Cafeteria.css';

const myStyle = {color: "white"};
function Cafeteria() {
  return (
    <div className="myGrid">
      <h1>Hogwarts Cafeteria</h1>
      <div></div>
      <h2 style={myStyle}>Menu</h2>
      <div className="container">
        <div className="item1">
        Put the cursor on each menu. You could see the picture of items.
        </div>
        <div className="item">Chocolate Cake from Hagrid</div>
        <div className="item">Corned Beef Sandwich</div>
        <div className="item">knickerbocker Glory</div>
        <div className="item">Roast Chicken</div>
        <div className="item">Butter Beer</div>
        <div className="item">sherbet lemons</div>
        <div className="item">Aunt Petunia's Cake</div>
        <div className="item">Jelly Beans</div>
      </div>
    </div>
  );
}

export default Cafeteria;