"use client";

import { fetchHospitalImages, HospitalImage } from "./repository";
import HospitalCard from "./hospital-card";
import { Suspense, useEffect, useState } from "react";

const ClientComponent = async ({
  customImages = []
}: { customImages?: HospitalImage[] }) => {
  const [images, setImages] = useState<HospitalImage[]>([]);

  useEffect(() => {
    try {
      if (customImages.length > 0) {
        setImages(customImages);
      } else {
        fetchHospitalImages().then(setImages);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Suspense fallback={<div>Test</div>}>
      <HospitalCard images={images} />
    </Suspense>
  )
};

export default ClientComponent;
