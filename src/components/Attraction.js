import './components/css/Attraction.css';

const styles = {color: "yellow"};
function Attraction() {
    return (
      <div className="content">
        <h1>Hogwarts Quidditch pitch</h1>
        <h2>Welcome to Quidditch Stadium! You can play Quidditch and Triwizard Maze.</h2>
        <table>
          <tr>
            <th>
              <img src="./img/HarryPotterQuidditch.jpeg" alt=""/>
              </th>
              <td>
                <img src="./img/maze.webp" alt=""/>
              </td>
            </tr>
            
            <tr>
            <td> <div style={styles}>Quidditch</div>
                <p>quidditch</p> </td>
            <td> <div style={styles}>Triwizard Maze</div>
                <p>maze</p> </td>
        </tr>
    </table>
      </div>
    );
  }
  
  export default Attraction;
  