export function SaveUserNameAction(name) {
    return {
        type: 'save_name',
        payload: {name: name},
    }
}