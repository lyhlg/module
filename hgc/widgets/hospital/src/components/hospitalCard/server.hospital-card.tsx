import { fetchHospitalImages, HospitalImage } from "./repository";
import HospitalCard from "./hospital-card";

const ServerComponent = async ({
  customImages = []
}: { customImages?: HospitalImage[] }) => {
  const images = customImages?.length > 0 ? customImages : await fetchHospitalImages();

	return <HospitalCard images={images} />
};

export default ServerComponent;
