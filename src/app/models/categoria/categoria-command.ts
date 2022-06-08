export class CategoriaCommand {

    name: string;
    description: string;

}

export class CategoriaDTO {

    list : List[];

}

export class List {

    id: string;
    name: string;
    description: string;

}

export class UpdateCategoriaCommand{

    id: number;
    name: string;
    description: string;

}