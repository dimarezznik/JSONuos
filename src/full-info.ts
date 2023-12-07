import {array, boolean, field, maybe, number, string, succeed} from "jsonous";

const FullInfoDecoder = succeed({})
    .assign("id", field("id", string))
    .assign("shortName", field("shortName", string))
    .assign("lastName", field("lastName", string))
    .assign("firstName", field("firstName", string))
    .assign("patronymic", field("patronymic", string))
    .assign("permissionsIds", field("permissionsIds", array(string)))
    .assign("roleId", field("roleId", string))
    .assign("roleName", field("roleName", string))
    .assign("copyMessagesToEmail", field("copyMessagesToEmail", boolean))
    .assign("copyNotificationsToEmail", field("copyNotificationsToEmail", boolean))
    .assign("companyId", field("companyId", string))
    .assign("departmentId", field("departmentId", maybe(string) ))
    .assign("companyName", field("companyName", string))
    .assign("departmentName", field("departmentName", string))
    .assign("phone", field("phone", string))
    .assign("phoneCountryCode", field("phoneCountryCode", string))
    .assign("email", field("email", string))
    .assign("position", field("position", maybe(string)))
    .assign("isAdmin", field("isAdmin", boolean))
    .assign("avatar", field("avatar", string))
    .assign("preferredLanguage", field("preferredLanguage", number))

export const getFullInfo = async (): Promise<any> => {
    const response = await window.fetch('../public/full-info.json');
    const data = await response.json()
    return FullInfoDecoder.decodeAny(data)
};
