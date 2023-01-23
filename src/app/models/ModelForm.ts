export class ModelForm{
    id?:string;
    name:string;
    email:string;
    phone:string;
    message:string;
    date: any; 
    
    constructor(name:string, email:string, phone:string, message:string ){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;
        this.date = new Date();
    }
}
