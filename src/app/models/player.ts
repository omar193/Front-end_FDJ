export class Player {
    _id: number;
    name: string;
    position:string;
    thumbnail:string;
    signin:Object;
    born:  Date

    constructor(id: number,name: string,position:string, thumbnail: string,signin: Object,born:Date
    ) {
        this._id=id;
        this.name=name;
        this.position=position
        this.thumbnail=thumbnail;
        this.signin= signin;
        this.born=born;
    }
}