export class FumettiDto {


    id: string;
    name: string;
    description: string;
    type: string;
    author: AuthorList;
    category: CategoriaList;
    photo: null;
   
}
    
export class ListaFumettiDto {

    list?: FumettiDto[] = [];
    
}

export class AuthorList {

    id: number;
    name: string;
    surname: string;

}

export class CategoriaList {

    id: number;
    name: string;
    description: string;

}

