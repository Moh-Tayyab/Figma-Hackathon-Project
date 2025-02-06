import { client } from "@/sanity/lib/client";
import RelatedProducts from "@/components/RelatedProduct";
import ProductDetail from "@/components/ProductDetail";
import { Product } from "../../../../interface";

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
        "slug": slug.current,
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
