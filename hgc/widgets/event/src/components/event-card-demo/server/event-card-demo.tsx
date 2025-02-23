import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EventCardDemo = ({ children }:Props) => {
  return (
    <div>
      <h1>EventCardDemo Component</h1>
      {children}
    </div>
  );
};

export default EventCardDemo;