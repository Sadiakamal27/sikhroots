import { client } from "./contentful";
import { PopupAdEntry } from "./contentful-types";

export async function getPopupAd() {
  if (!client) {
    console.log(
      "[Contentful] Client not initialized. Please verify CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local",
    );
    return null;
  }

  try {
    // Attempt to fetch from 'popupAd' (default)
    let response = await client
      .getEntries<PopupAdEntry>({
        content_type: "popupAd",
        limit: 1,
        order: ["-sys.createdAt" as any],
      })
      .catch(() => null);

    // Fallback to 'popup_ad' if first attempt fails or returns nothing
    if (!response || response.items.length === 0) {
      const fallbackResponse = await client
        .getEntries<PopupAdEntry>({
          content_type: "popup_ad",
          limit: 1,
          order: ["-sys.createdAt" as any],
        })
        .catch(() => null);
      if (fallbackResponse && fallbackResponse.items.length > 0) {
        response = fallbackResponse;
      }
    }

    if (!response || response.items.length === 0) {
      console.log(
        "[Contentful] No popup ad entries found. Make sure the Content Type ID is 'popupAd' and you have at least one PUBLISHED entry.",
      );
      return null;
    }

    const item = response.items[0];
    const fields = item.fields as any;

    // Flexible field detection to match what was shown in the screenshot
    const isActive =
      fields.isActive !== undefined
        ? fields.isActive
        : fields.is_active !== undefined
          ? fields.is_active
          : fields.active !== undefined
            ? fields.active
            : true;

    const title =
      fields.title || fields.Title || fields.name || "Advertisement";
    const imageAsset =
      fields.image || fields.Image || fields.adImage || fields.popupImage;
    const link = fields.link || fields.Link || fields.url;

    console.log(
      `[Contentful] Ad Found: "${title}" | Active: ${isActive} | Image: ${!!imageAsset}`,
    );

    if (isActive === false) {
      console.log("[Contentful] Ad exists but is set to inactive.");
      return null;
    }

    let imageUrl = imageAsset?.fields?.file?.url;

    if (!imageUrl) {
      console.log(
        "[Contentful] Entry found but image asset is missing or not published. Fields found:",
        Object.keys(fields),
      );
      return null;
    }

    if (imageUrl.startsWith("//")) {
      imageUrl = `https:${imageUrl}`;
    }

    return {
      title: title as string,
      imageUrl: imageUrl,
      link: link ? (link as string) : null,
    };
  } catch (error) {
    console.error("[Contentful] Error in getPopupAd:", error);
    return null;
  }
}
