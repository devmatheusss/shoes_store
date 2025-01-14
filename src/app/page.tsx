import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const shoes = await prisma.shoe.findMany({
    include: {
      brand: true
    }
  })

  return (
    <div>
      <h1>Shoes Store</h1>
      {shoes.map((shoe) => (
        <div key={shoe.id}>
          <span>{shoe.brand.name}</span>
          <h2>{shoe.name}</h2>
          <p>{shoe.description}</p>
          {shoe.images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={shoe.name + index}
              width={256}
              height={256}
            />
          ))}
        </div>
      ))}
    </div>
  )
}