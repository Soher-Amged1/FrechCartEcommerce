export interface ProdDetails {
    images: string[],
    description:string,
    title:string,
    category?:{name:string},
    price:number,
    ratingsAverage:number,
    _id:string
}
