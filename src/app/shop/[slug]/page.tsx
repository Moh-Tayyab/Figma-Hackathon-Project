import { client } from "@/sanity/lib/client";
import RelatedProducts from "@/components/RelatedProduct";
import ProductDetail from "@/components/ProductDetail";
interface Product {
  title: string;
  imageUrl: string;
  price: number;
  slug: string;
  description: string;
  dicountPercentage: number;
  new: boolean;
  productImage: string;
}
interface Props {
  params: {
    slug: string;
  };
}

const page = async (props: Props) => {
  const uniqueId: string = props.params.slug;

  const qurry: string = `*[_type=="product" && slug.current == '${uniqueId}'][0]{
    title,
    "slug":slug.current,
    "imageUrl" : productImage.asset -> url, 
    price,
    tags,
    dicountPercentage,
    description,
  }`;
  const product: Product = await client.fetch(qurry);

  return (
    <div>
      <ProductDetail product={product} />

      <RelatedProducts />
    </div>
  );
};

export default page;
