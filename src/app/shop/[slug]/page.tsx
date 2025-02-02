import { client } from "@/sanity/lib/client";
import RelatedProducts from "@/components/RelatedProduct";
import ProductDetail from "@/components/ProductDetail";
interface Product {
  imageUrl: string;
  rating: {
    count: number;
    rate: number;
  };
  tags: string[];
  price: number;
  discount: number;
  originalPrice: number;
  slug: string;
  categoryName: string;
  name: string;
  stock: number;
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  id: number;
  description: string;
  Quantity: number;
  Finalprice: number;
  }
 
interface Props {
  params: {
    slug: string;
  };
}

const page = async (props: Props) => {
  const uniqueId: string = props.params.slug;

  const qurry: string = `*[_type=="myproduct" && slug.current == '${uniqueId}'][0]{
        name,
        tags,
        price,
        stock,
        dimensions,
        id,
        description,
        discount,
        originalPrice,
        "categoryName": category->name,
        "slug":slug.current,
        "imageUrl": image.asset->url,
        rating
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
