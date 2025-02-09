import { shipEngine } from "@/lib/helper/shipEngine";
import { NextRequest } from "next/server";

export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello, ShipEngine!",
    })
  );
}
export async function POST(request: NextRequest) {
  const { shipToAddress, packages } = await request.json();

  try {
    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "Amanda Miller",
          phone: "555-555-5555",
          addressLine1: "525 S Winchester Blvd",
          addressLine2: "Suite 205",
          cityLocality: "San Jose",
          stateProvince: "CA",
          postalCode: "95128",
          countryCode: "US",
          addressResidentialIndicator: "no"
        },
        packages: packages
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "",
          process.env.SHIPENGINE_SECOND_COURIER || "",
          process.env.SHIPENGINE_THIRD_COURIER || "",
          process.env.SHIPENG_FOURTH_COURIER || ""
          // "ups",
          // "fedex",
          // "usps"
        ].filter(Boolean)
      }
    });
    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error as string }));
  }
}