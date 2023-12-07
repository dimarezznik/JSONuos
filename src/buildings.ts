import {array, boolean, field, number, string, succeed} from "jsonous";

const row = succeed({})
    .assign('companyName', field('companyName', string))
    .assign('isPreferred', field('isPreferred', boolean))
    .assign('id', field('id', string))
    .assign('name', field('name', string))
    .assign('companyId', field('companyId', string))
    .assign('timeZoneShift', field('timeZoneShift', number))
    .assign('description', field('description', string))
    .assign('path', field('path', string))
    .assign('contacts', field('contacts', string))
    .assign('station', field('station', string))
    .assign('address', field('address', string))
    .assign('city', field('city', string))
    .assign('latitude', field('latitude', number))
    .assign('longitude', field('longitude', number))
    .assign('isFavorite', field('isFavorite', boolean))
    .assign('index', field('index', number))
    .assign('code', field('code', string))
    .assign('whitelistEnabled', field('whitelistEnabled', boolean))

const BuildingDecoder = succeed({})
    .assign('rows', field('rows', array(row)))
    .assign('totalCount', field('totalCount', number))

export const getBuildings = async (): Promise<any> => {
    const response = await window.fetch('../public/buildings.json');
    const data = await response.json()
    return BuildingDecoder.decodeAny(data)
};
