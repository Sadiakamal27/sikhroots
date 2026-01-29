import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const isConfigured = Boolean(spaceId && accessToken);

export const client = isConfigured
  ? createClient({
      space: spaceId!,
      accessToken: accessToken!,
    })
  : null;
