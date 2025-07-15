export const checkValidData = (email , password) => {

    const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordvalid = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if(!isEmailvalid) return "Email is NOT valid"
    if(!isPasswordvalid) return "Password is NOT valid"

    return null;
}