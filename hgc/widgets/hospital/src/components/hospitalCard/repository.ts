export interface HospitalImage {
  id: number;
  name: string;
  description: string;
  url: string;
  sizes: Record<'xs' | 's' | 'm' | 'l' | 'xl', string>;
}

const baseUrl = "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json";

export async function fetchHospitalImages(): Promise<HospitalImage[]> {
  const response = await fetch(baseUrl);
  const { data } = await response.json();
  return data;
}