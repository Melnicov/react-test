export function SaveUserEmailAction(email) {
    return {
        type: 'save_email',
        payload: {email: email},
    }
}