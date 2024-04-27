import {robots} from './robots.js';

const getRobotById = (id="000") => {
    return robots.find((robot) => {
        return robot.id === id;
    })
    
}
console.log(getRobotById("013"));

