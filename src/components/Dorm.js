import './css/Dorm.css';
import gryffindor from './img/room.jpeg';
import Hufflepuff from './img/Hufflepuff_common_room_HL.jpeg';
import Ravenclaw from './img/Ravenclaw_common_room_HL.jpeg';
import Slytherin from './img/Slytherin_common_room_HL.jpeg';
import Card from './Card';

function Dorm() {
    return ( 
        <div className='main'>
            <div className='header'>
                <h1>Hogwarts School of Witchcraft and Wizardry</h1>
                <h3>You can explore dormitory rooms of Hogwarts</h3>
            </div>
            <div className="gry">
                <Card img={gryffindor} id="gryffin dorm" />
                <p>
                This is the room for gryffindor students. Gryffindor is one of the four houses at Hogwarts School of Witchcraft and Wizardry in the Harry Potter series.
                Students who are sorted into Gryffindor are known for their bravery, chivalry, and daring nature.
                This room is located in Gryffindor Tower, which is a tall, circular tower with a winding staircase that leads up to the dormitory.
                </p>
            </div>
            <div className="huff">
                <Card img={Hufflepuff} id="huff dorm" />
                <p>
                    This is the room for Hufflepuff students. Students who are sorted into Hufflepuff are known for their loyalty, patience, hard work, and dedication.
                    The Hufflepuff dorm is located in the Hufflepuff basement, one of the four houses at Hogwarts School of Witchcraft and Wizardry.
                    The Hufflepuff dorm is known for its warm and welcoming atmosphere.
                </p>
            </div>
            <div className="raven">
                <Card img={Ravenclaw} id="raven dorm" />
                <p>
                    This is the room for Ravenclaw students. Students who are sorted into Ravenclaw are known for their intelligence, wit, creativity, and love of learning.
                    The room of Ravenclaw is located in Ravenclaw Tower. You can feel the Intellectual Atmosphere in this room.
                </p>
            </div>
            <div className="slyth">
                <Card img={Slytherin} id="slyth dorm" />
                <p>
                    This is the room for Slytherin students. Students who are sorted into Slytherin are known for their ambition, cunning, resourcefulness, and self-preservation.
                    The Slytherin dorm is located in the Slytherin Dungeon. It is ambitious but has a very dark atmosphere.
                </p>
            </div>
        </div>
    );
}

export default Dorm;