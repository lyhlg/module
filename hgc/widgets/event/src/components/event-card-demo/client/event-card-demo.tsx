'use client'
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import EventCardRepository, { type HospitalImage as ImageType } from "../repository";

interface Props {
  children: ReactNode;
}

const EventCardDemo = ({ children }: Props) => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchImages = async () => {
    try {
      const images = await new EventCardRepository().fetchEventCards();
      setImages(images);
    } catch (error) {
      setError(error as Error);
    }
  }
  useEffect(() => {
    fetchImages();
  }, [])

  return (
    <div>
      <h1>EventCardDemo Component</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && !error && images.map((image) => (
        <div key={image.id}>
          <h2>{image.name}</h2>
          <Image
            objectFit="cover"
            width={100}
            placeholder="blur"
            blurDataURL={image.url}
            height={100}
            key={image.id}
            src={image.url}
            alt="image"
          />
        </div>
      ))}
    </div>
  );
};

export default EventCardDemo;