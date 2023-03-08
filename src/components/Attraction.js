import './css/Attraction.css';
import quidditch from './img/quidditch.gif'
import maze from './img/maze.webp'
const styles = {color: "gold"};

function Attraction() {
    return (
      <div className="content">
        <h1>Hogwarts Quidditch pitch</h1>
        <h2>Welcome to Quidditch Stadium! You can watch Quidditch and Triwizard Maze game.</h2>
        <table>
          <tr>
            <td>
              <img src={quidditch} alt="" />
              </td>
              <td>
                <img src={maze} alt="" />
              </td>
            </tr>
            
            <tr>
            <td> <div style={styles}>Quidditch</div>
                <div1>Quidditch is a wizarding sport played on flying broomsticks. It's most popular game
                  among wizards. The game was played by two teams with seven members each.
                  The object of the game was to score more points than the opposing team.</div1> </td>
            <td> <div style={styles}>Triwizard Maze</div>
                <div1>Triwizard Maze is the third task of Hogwarts Quidditch pitch. The first Champion to successfully navigate the maze
                  and reach the Cup would be declared the winner.</div1> </td>
        </tr>
    </table>
      </div>
    );
  }
  
  export default Attraction;
  