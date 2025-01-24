// app/api/search/route.js
import { NextRequest, NextResponse } from 'next/server';
import { createClient, QueryParams } from '@sanity/client';

// Sanity Client Initialization
const client = createClient({
  projectId: '63kj3oiu', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // Latest API version
  useCdn: true, // Cache for better performance
  token: `skJ2STFkNLZpvXX7Pk2CwrbCpQIGmjUtLwGbLGBMHrQeXxBPcF04z4zzL0EGS8LA5GfnglSST8K3QI8AEovSCYVYOuICMFF0E9hHzCwfVjhTzWb9jz0JPIbj0w1BViHS7Wu7cEGkmkEo0D0i9eXpDtk1RSioypFkRhnxcfqKNKoq9maIzdCM`
});

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const query = searchParams.get('q'); // User's search query

//   if (!query) {
//     return NextResponse.json({ results: [] });
//   }

//   try {
//     // Sanity GROQ Query
//     const results = await client.fetch(
//       `*[_type == "product" && title match $query] {
//         "slug": slug.current,
//         productImage,
//         title,
//         price,
//         description,
//         discountPercentage
//       }`,
//       { query } // Dynamic value for $query
//     );

//     return NextResponse.json({ results });
//   } catch (error) {
//     console.error('Sanity Search Error:', error);
//     return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
//   }
// }

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || ""; // Defaults to an empty string

  const results = await client.fetch(
    `*[_type == "product" && title match $query] {
      "slug": slug.current,
      productImage,
      title,
      price,
      description,
      discountPercentage
    }`,
    { query: `${query}*` } as unknown as QueryParams // Properly typed parameter
  );

  return NextResponse.json({ results });
}
