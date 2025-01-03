import { client } from '@/sanity/lib/client';
import { Image  as IImage } from 'sanity';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';



interface IProduct {
    image: IImage;
    title: string;
    price: number;
    description: string;
    category: {
      name: string;
    }
  }
  export default async function studioData() {
    const response: IProduct[] = await client.fetch(`*[_type=="Product"]{
    image,
    title,
    price,
    description,
    category -> {
      name
    }
  }`)
  console.log(response)
  return(
    <>
    {response.map((item, index) => (
      <div key={index}>
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <p>{item.description}</p>
      <Image  
      src={urlFor(item.image).url()}
        alt={item.title}
        width={300}
        height={300}
      />
  
      </div>
    ))}
    </>
  )
  }