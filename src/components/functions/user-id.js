import { v4 as uuidv4 } from 'uuid';

export function userID(user) {
    const userId = user
    let cut = userId.indexOf("@")
    let replacethis = userId.slice(cut)
    let id = userId.replace(replacethis, "")
    let updatedID = id.replace(/[^a-zA-Z0-9]/g, '')
    return updatedID
}

