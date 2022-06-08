export class AuthorCommand {

    name: string;
    surname: string;

}

export class AuthorDTO {

    list : List[];

}

export class List {

    id: string;
    name: string;
    surname: string;

}

export class UpdateAutoreCommand{

    id: number;
    name: string;
    surname: string;

}