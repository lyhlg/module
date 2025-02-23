import ClientComponent from "@/components/hospitalCard/client.hospital-card";
import ServerComponent from "@/components/hospitalCard/server.hospital-card";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h2 className="text-2xl font-bold">Server Component</h2>
        <Suspense fallback={<div>[Server]Domain Skeleton Loading Component ...</div>}>
          <ServerComponent
            customImages={[{
              id: 1,
              name: "Test",
              description: "Test",
              url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-xl.jpg",
              sizes: {
                xs: "100px",
                s: "200px",
                m: "300px",
                l: "400px",
                xl: "500px",
              },
            }]}
          />
        </Suspense>
      </div>
      <div className="w-full h-[100px] bg-red-100 my-10" />
      <div>
        <h2 className="text-2xl font-bold">Client Component</h2>
        <Suspense fallback={<div>[Client]Domain Skeleton Loading Component ...</div>}>
          <ClientComponent
            // customImages={[{
            //   id: 1,
            //   name: "Test",
            //   description: "Test",
            //   url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-xl.jpg",
            //   sizes: {
            //     xs: "100px",
            //     s: "200px",
            //     m: "300px",
            //     l: "400px",
            //     xl: "500px",
            //   },
            // }]}
          />
        </Suspense>
      </div>
    </div>
  );
}
