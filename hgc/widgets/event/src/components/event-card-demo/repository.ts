// fetch("https://jsonplaceholder.typicode.com/photos?_limit=5");
// api 르ㄹ class 로 만들어서 사용

export interface HospitalImage {
  id: number;
  name: string;
  description: string;
  url: string;
  sizes: Record<'xs' | 's' | 'm' | 'l' | 'xl', string>;
}

interface EventCard {
  fetchEventCards: () => Promise<HospitalImage[]>;
}

class EventCardRepository implements EventCard {
  private readonly baseUrl = "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json";

  async fetchEventCards(): Promise<HospitalImage[]> {
    const response = await fetch(this.baseUrl);
    const { data } = await response.json();
    return data;
  }
}

export default EventCardRepository;