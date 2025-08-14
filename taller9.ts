interface UserDetail{
name: string;
age: number;
email:string;


}

interface prototype{
clone(): prototype;
getUserDetail(): UserDetail;
}


class ConcreetePrototype implements prototype{
    constructor(private user: UserDetail){}


    public clone (): prototype {

        const clone = Object.create(this)
     clone.user = {...this.user};
     return clone;

    }


    public getUserDetail(): UserDetail {
        return this.user;
    }
}


let user1= new ConcreetePrototype ({
    name: "jhon",
    age: 12,
    email: "jhon@gmail.com"
})

let user2 = user1.clone();


if (user1 === user2){
    console.log("Both instances are the same");
    
}else {
    console.log("clone object are separate instances");
    
}

