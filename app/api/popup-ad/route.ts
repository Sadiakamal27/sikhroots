import { NextResponse } from "next/server";
import { getPopupAd } from "@/lib/getPopupAd";

export async function GET() {
  try {
    const adData = await getPopupAd();

    if (!adData) {
      return NextResponse.json(null);
    }

    return NextResponse.json(adData);
  } catch (error) {
    console.error("Error in popup-ad API:", error);
    return NextResponse.json(null);
  }
}
