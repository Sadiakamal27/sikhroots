"use client";

import { useEffect, useState } from "react";
import PopupAd from "./PopupAd";

interface PopupAdData {
  title: string;
  imageUrl: string | null;
  link: string | null;
}

const PopupAdWrapper = () => {
  const [adData, setAdData] = useState<PopupAdData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAd() {
      try {
        const response = await fetch("/api/popup-ad");
        if (response.ok) {
          const data = await response.json();
          setAdData(data);
        }
      } catch (error) {
        console.error("Error fetching popup ad:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAd();
  }, []);

  if (isLoading) {
    return null;
  }

  return <PopupAd adData={adData} />;
};

export default PopupAdWrapper;
