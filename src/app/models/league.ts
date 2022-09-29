export class League {
    _id: number;
    name: string;
    sport:string;
    teams:string[];

    constructor(id: number,name: string,sport: string,teams: string[] 
    ) {
        this._id=id;
        this.name=name;
        this.sport=sport;
        this.teams= teams
    }
}