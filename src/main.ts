
import {getFullInfo} from "./full-info.ts";
import {getReservation} from "./reservation.ts";
import {getBuildings} from "./buildings.ts";



async function gets(func: () => void) {
    const data = await func()
    console.log(data)
}

gets(getFullInfo)
gets(getBuildings);
gets(getReservation);

