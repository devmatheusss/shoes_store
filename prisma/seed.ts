import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const imagesEndpoint = "https://pub-8f0ceda61e564d0986d83107698d1087.r2.dev"

async function main() {
  console.log("[seed] starting...")

  const brand = await prisma.brand.create({
    data: {
      name: "Nike",
      image: `${imagesEndpoint}/nike_logo.jpg`
    }
  })

  console.log("[seed] brand created...")

  await prisma.shoe.create({
    data: {
      name: "Nike Air Max Impact 4",
      description: "Cool shoe",
      category: "Male",
      price: "10000",
      brand: {
        connect: {
          id: brand.id
        }
      },
      sizes: [40, 41, 42, 43, 44, 45],
      images: [
        `${imagesEndpoint}/impact_4_01.png`,
        `${imagesEndpoint}/impact_4_02.png`,
        `${imagesEndpoint}/impact_4_03.png`,
        `${imagesEndpoint}/impact_4_04.png`,
      ],
    }
  })

  console.log("[seed] success.")
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })