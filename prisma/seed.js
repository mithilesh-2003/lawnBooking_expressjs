const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
async function main() {
  await prisma.emploies.upsert({
    where: { email: 'a@a.com' },
    update: {},
    create: {
      email: 'a@a.com',
      name: 'Apple Admin',
      password: '$2b$10$.aBsZTHr4DKRzGZBQbUCDeI3pvaOudKiI/PSmhXm.0oNVH7dkVGzq', // Apple@123
      phone: '9656254658',
      alt_phone: '9656254659',
      address: 'khamaria',
      role: 'admin'
    }
  })
  await prisma.emploies.upsert({
    where: { email: 'm@m.com' },
    update: {},
    create: {
      email: 'm@m.com',
      name: 'Mango Manager',
      password: '$2b$10$.aBsZTHr4DKRzGZBQbUCDeI3pvaOudKiI/PSmhXm.0oNVH7dkVGzq', // Apple@123
      phone: '9656254666',
      alt_phone: '9656254667',
      address: 'khamaria',
      role: 'manager'
    }
  })
  await prisma.emploies.upsert({
    where: { email: 'w@w.com' },
    update: {},
    create: {
      email: 'w@w.com',
      name: 'Watermelon Worker',
      password: '$2b$10$.aBsZTHr4DKRzGZBQbUCDeI3pvaOudKiI/PSmhXm.0oNVH7dkVGzq', // Apple@123
      phone: '9656254677',
      alt_phone: '9656254678',
      address: 'khamaria',
      role: 'worker'
    }
  })
  await prisma.users.upsert({
    where: { email: 'u@u.com' },
    update: {},
    create: {
      email: 'u@u.com',
      name: 'Unique User',
      password: '$2b$10$.aBsZTHr4DKRzGZBQbUCDeI3pvaOudKiI/PSmhXm.0oNVH7dkVGzq', // Apple@123
      phone: '9656254699',
      alt_phone: '9656254100',
      address: 'khamaria'
    }
  })
  const decoration = await prisma.categories.upsert({
    where: { name: 'decoration' },
    update: {},
    create: {
      name: 'decoration',
    }
  })
  const room = await prisma.categories.upsert({
    where: { name: 'room' },
    update: {},
    create: {
      name: 'room',
    }
  })
  const meal = await prisma.categories.upsert({
    where: { name: 'meal' },
    update: {},
    create: {
      name: 'meal',
    }
  })
  const acRoom = await prisma.categories.upsert({
    where: { name: 'ac room' },
    update: {},
    create: {
      name: 'ac room',
      cid: room.id
    }
  })
  const nonAcRoom = await prisma.categories.upsert({
    where: { name: 'non ac room' },
    update: {},
    create: {
      name: 'non ac room',
      cid: room.id
    }
  })
  const starter = await prisma.categories.upsert({
    where: { name: 'starter' },
    update: {},
    create: {
      name: 'starter',
      cid: meal.id
    }
  })
  const dinner = await prisma.categories.upsert({
    where: { name: 'dinner' },
    update: {},
    create: {
      name: 'dinner',
      cid: meal.id
    }
  })
  const desert = await prisma.categories.upsert({
    where: { name: 'desert' },
    update: {},
    create: {
      name: 'desert',
      cid: meal.id
    }
  })
  const beverage = await prisma.categories.upsert({
    where: { name: 'beverage' },
    update: {},
    create: {
      name: 'beverage',
      cid: meal.id
    }
  })
  const sabji = await prisma.categories.upsert({
    where: { name: 'sabji' },
    update: {},
    create: {
      name: 'sabji',
      cid: dinner.id
    }
  })
  const chawal = await prisma.categories.upsert({
    where: { name: 'chawal' },
    update: {},
    create: {
      name: 'chawal',
      cid: dinner.id
    }
  })
  const roti = await prisma.categories.upsert({
    where: { name: 'roti' },
    update: {},
    create: {
      name: 'roti',
      cid: dinner.id
    }
  })
  const daal = await prisma.categories.upsert({
    where: { name: 'daal' },
    update: {},
    create: {
      name: 'daal',
      cid: dinner.id
    }
  })
  const bartan = await prisma.categories.upsert({
    where: { name: 'bartan' },
    update: {},
    create: {
      name: 'bartan',
      cid: meal.id
    }
  })
  const serving = await prisma.categories.upsert({
    where: { name: 'serving' },
    update: {},
    create: {
      name: 'serving',
      cid: meal.id
    }
  })
  await prisma.assets.upsert({
    where: { name: 'gold' },
    update: {},
    create: {
      name: 'gold',
      cid: decoration.id,
      price: 10000,
      description: "this is gold decoration package",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'platinum' },
    update: {},
    create: {
      name: 'platinum',
      cid: decoration.id,
      price: 15000,
      description: "this is platinum decoration package",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'gold' },
    update: {},
    create: {
      name: 'gold',
      cid: decoration.id,
      price: 10000,
      description: "this is gold decoration package",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'ac room 1' },
    update: {},
    create: {
      name: 'ac room 1',
      cid: acRoom.id,
      price: 1500,
      description: "this is ac room 1",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'ac room 2' },
    update: {},
    create: {
      name: 'ac room 2',
      cid: acRoom.id,
      price: 1500,
      description: "this is ac room 2",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'non ac room 1' },
    update: {},
    create: {
      name: 'non ac room 1',
      cid: nonAcRoom.id,
      price: 1000,
      description: "this is non ac room 1",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'non ac room 2' },
    update: {},
    create: {
      name: 'non ac room 2',
      cid: nonAcRoom.id,
      price: 1000,
      description: "this is non ac room 2",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'pkoda' },
    update: {},
    create: {
      name: 'pkoda',
      cid: starter.id,
      price: 20,
      description: "this is pkoda",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'fulki' },
    update: {},
    create: {
      name: 'fulki',
      cid: starter.id,
      price: 30,
      description: "this is fulki",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'chaat' },
    update: {},
    create: {
      name: 'chaat',
      cid: starter.id,
      price: 20,
      description: "this is chaat",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'shahi paneer' },
    update: {},
    create: {
      name: 'shahi paneer',
      cid: sabji.id,
      price: 50,
      description: "this is shahi paneer",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'kadai paneer' },
    update: {},
    create: {
      name: 'kadai paneer',
      cid: sabji.id,
      price: 40,
      description: "this is kadai paneer",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'krela kalogi' },
    update: {},
    create: {
      name: 'krela kalogi',
      cid: sabji.id,
      price: 15,
      description: "this is krela kalogi",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'bangan kalogi' },
    update: {},
    create: {
      name: 'bangan kalogi',
      cid: sabji.id,
      price: 20,
      description: "this is bangan kalogi",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'bangan chokha' },
    update: {},
    create: {
      name: 'bangan chokha',
      cid: sabji.id,
      price: 10,
      description: "this is bangan chokha",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'jeera rice' },
    update: {},
    create: {
      name: 'jeera rice',
      cid: chawal.id,
      price: 20,
      description: "this is jeera rice",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'polaw' },
    update: {},
    create: {
      name: 'polaw',
      cid: chawal.id,
      price: 15,
      description: "this is polaw",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'bati' },
    update: {},
    create: {
      name: 'bati',
      cid: roti.id,
      price: 20,
      description: "this is bati",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'tawa roti' },
    update: {},
    create: {
      name: 'tawa roti',
      cid: roti.id,
      price: 15,
      description: "this is tawa roti",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'non roti' },
    update: {},
    create: {
      name: 'non roti',
      cid: roti.id,
      price: 30,
      description: "this is non roti",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'tadka daal' },
    update: {},
    create: {
      name: 'tadka daal',
      cid: daal.id,
      price: 25,
      description: "this is tadka daal",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'daal makhani' },
    update: {},
    create: {
      name: 'daal makhani',
      cid: daal.id,
      price: 35,
      description: "this is daal makhani",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'dahibada' },
    update: {},
    create: {
      name: 'dahibada',
      cid: desert.id,
      price: 20,
      description: "this is dahibada",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'rajbhog' },
    update: {},
    create: {
      name: 'rajbhog',
      cid: desert.id,
      price: 25,
      description: "this is rajbhog",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'rasgulla' },
    update: {},
    create: {
      name: 'rasgulla',
      cid: desert.id,
      price: 15,
      description: "this is rasgulla",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'chocolate icecream' },
    update: {},
    create: {
      name: 'chocolate icecream',
      cid: desert.id,
      price: 40,
      description: "this is chocolate icecream",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'butter scotach icecream' },
    update: {},
    create: {
      name: 'butter scotach icecream',
      cid: desert.id,
      price: 35,
      description: "this is butter scotach icecream",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'chai' },
    update: {},
    create: {
      name: 'chai',
      cid: beverage.id,
      price: 5,
      description: "this is chai",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'coffee' },
    update: {},
    create: {
      name: 'coffee',
      cid: beverage.id,
      price: 6,
      description: "this is coffee",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'coldring' },
    update: {},
    create: {
      name: 'coldring',
      cid: beverage.id,
      price: 10,
      description: "this is coldring",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'bada bhagona' },
    update: {},
    create: {
      name: 'bada bhagona',
      cid: bartan.id,
      price: 10,
      description: "this is bada bhagona",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'chhota bhagona' },
    update: {},
    create: {
      name: 'chhota bhagona',
      cid: bartan.id,
      price: 8,
      description: "this is chhota bhagona",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'kalchhul' },
    update: {},
    create: {
      name: 'kalchhul',
      cid: bartan.id,
      price: 5,
      description: "this is kalchhul",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'palta' },
    update: {},
    create: {
      name: 'palta',
      cid: bartan.id,
      price: 6,
      description: "this is palta",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'donga' },
    update: {},
    create: {
      name: 'donga',
      cid: bartan.id,
      price: 12,
      description: "this is donga",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'chhota kadai' },
    update: {},
    create: {
      name: 'chhota kadai',
      cid: bartan.id,
      price: 15,
      description: "this is chhota kadai",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'bada kadai' },
    update: {},
    create: {
      name: 'bada kadai',
      cid: bartan.id,
      price: 20,
      description: "this is bada kadai",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'fiber plate' },
    update: {},
    create: {
      name: 'fiber plate',
      cid: serving.id,
      price: 2,
      description: "this is fiber plate",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'bone chini plate' },
    update: {},
    create: {
      name: 'bone chini plate',
      cid: serving.id,
      price: 40,
      description: "this is bone chini plate",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'plastic chammach' },
    update: {},
    create: {
      name: 'plastic chammach',
      cid: serving.id,
      price: 1,
      description: "this is plastic chammach",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'lakdi chammach' },
    update: {},
    create: {
      name: 'lakdi chammach',
      cid: serving.id,
      price: 2,
      description: "this is lakdi chammach",
    }
  })
  await prisma.assets.upsert({
    where: { name: 'tissue papaer' },
    update: {},
    create: {
      name: 'tissue papaer',
      cid: serving.id,
      price: 0.3,
      description: "this is tissue papaer",
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })