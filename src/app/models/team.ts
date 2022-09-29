export class Team {
    _id: number;
    name: string;
    thumbnail:string;
    players:string[];

    constructor(id: number,name: string,thumbnail: string,players: string[] 
    ) {
        this._id=id;
        this.name=name;
        this.thumbnail=thumbnail;
        this.players= players
    }
}