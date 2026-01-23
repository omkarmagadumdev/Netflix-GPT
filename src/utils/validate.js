export const checkValidData = (email,password)=>{
        const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const passwordValidate = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

        if(!emailValidate) return "invalid Email";
        if(!passwordValidate) return "invalid password ";

        return null
}