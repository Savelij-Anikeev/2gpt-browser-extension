export function validatePassword(password: string): boolean {
    if (password.length < 8){
        return false;
    }
    return true;
}

export function validateEmail(email: string): boolean {
    // if (email == '') return false;
    const re = /\S+@\S+\.\S+/;

    return re.test(email);
}
