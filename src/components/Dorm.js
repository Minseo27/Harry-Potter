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
                <Card img={gryffindor} alt="gryffin dorm" />
                <p>
                This is the room for gryffindor students.
                </p>
            </div>
            <div className="huff">
                <Card img={Hufflepuff} alt="huff dorm" />
                <p>
                    This is the room for Hufflepuff students.
                </p>
            </div>
            <div className="raven">
                <Card img={Ravenclaw} alt="raven dorm" />
                <p>
                    This is the room for Ravenclaw students.
                </p>
            </div>
            <div className="slyth">
                <Card img={Slytherin} alt="slyth dorm" />
                <p>
                    This is the room for Slytherin students.
                </p>
            </div>
        </div>
    );
}

export default Dorm;