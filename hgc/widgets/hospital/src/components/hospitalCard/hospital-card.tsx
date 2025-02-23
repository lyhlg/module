import { HospitalImage } from "./repository";
import Image from "next/image";

interface Props {
  images: HospitalImage[];
}

const HospitalCard = ({ images }: Props) => {
  return (
    <div className="flex flex-wrap gap-4 w-full h-100">
      {images.map((image: any) => {
        return (
          <>
            <h3>{image.name}</h3>
            <Image
              objectFit="cover"
              placeholder="blur"
              blurDataURL={image.url}
              width={100}
              height={100}
              key={image.id}
              src={image.url}
              alt="image"
            />
          </>
        );
      })}
    </div>
  )
}

export default HospitalCard;