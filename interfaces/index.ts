export type Product = {
  id: number
  name: string,
  category: string,
  price: number,
  currency: string,
  bestseller: boolean,
  details?:{
    dimensions:{width:number,height:number},
    size:number,
    description:string,
    recommendations:Product[]
  },

  image: { src: string, alt: string }
}

export type Cart = {
  id: number
  name: string,
  category: string,
  price: number,
  currency: string,
  image: { src: string, alt: string },
  productId: number,
  quantity?: number
}


export type Filter = { label: string, value: any }

