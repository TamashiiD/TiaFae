import { v4 as uuidv4 } from 'uuid';

export function userID(user) {
    const userId = user
    let cut = userId.indexOf("@")
    let replacethis = userId.slice(cut)
    let updatedID = userId.replace(replacethis, "")
    return updatedID
}

