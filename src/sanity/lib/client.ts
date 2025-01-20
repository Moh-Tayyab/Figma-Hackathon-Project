import { createClient} from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    studioUrl: process.env.VERCEL_URL
    ?`https://${process.env.VERCEL_URL}/studio`
    : `http://${process.env.NEXT_PUBLIC_BASE_URL}/studio`
  },
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

// import { client } from "@/sanity/lib/client";
// import ImageUrlBuilder from "@sanity/image-url";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// const builder = ImageUrlBuilder(client)

// export const urlFor = (source: SanityImageSource) => builder.image(source)

// is sy apki sanity ki images work sahi krain gi ap is tarha pass krna

// <Image src = {urlFor(sanityProduct.image.asset._ref).url()} your styles/>
