export const images = [
  {
    id: '01',
    src: 'https://github.com/philManWithBeard/courserio/blob/main/public/pablo-1030.png?raw=true',
    alt: 'Awesome watch',
  },
  {
    id: '02',
    src: 'https://github.com/philManWithBeard/courserio/blob/main/public/pablo-962.png?raw=true',
    alt: 'Awesome watch',
  },
  {
    id: '03',
    src: 'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    alt: 'Awesome watch',
  },
  {
    id: '04',
    src: 'https://github.com/philManWithBeard/courserio/blob/main/public/pablo-page-under-construction.png?raw=true',
    alt: 'Awesome watch',
  },
]

export const courses = [
  {
    id: '1',
    name: 'Typescripted and Unit Tested React Bootstrap',
    currency: 'GBP',
    price: 99,
    flag: 'new',
    imageUrl:
    'https://github.com/philManWithBeard/courserio/blob/main/public/pablo-1030.png?raw=true',
    rating: 4,
    ratingCount: "hard",
    description:
      'Learn how to increase the reliability of your front end development whilst using one of the most popular React UI frameworks',
    images,
  },
  {
    id: '2',
    name: 'Typescripted and Unit Tested Next.js Chakra UI',
    currency: 'GBP',
    price: 99,
    salePrice: 79.99,
    flag: 'on-sale',
    imageUrl:
      'https://github.com/philManWithBeard/courserio/blob/main/public/pablo-962.png?raw=true',
    rating: 3,
    ratingCount: "hard",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '3',
    name: 'Design Basic UX in Figma and Convert it to HTML and CSS',
    currency: 'GBP',
    price: 99,
    imageUrl:
      'https://github.com/philManWithBeard/courserio/blob/main/public/pablo-done-1.png?raw=true',
    rating: 1,
    ratingCount: "beginner",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '4',
    name: 'Full Stack. Figma MongoDB Express React Node. Typescripted and Tested.',
    currency: 'GBP',
    price: 199,
    imageUrl:
      'https://github.com/philManWithBeard/courserio/blob/main/public/pablo-page-under-construction.png?raw=true',
    rating: 5,
    ratingCount: "Advanced",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Course = ElementType<typeof courses>
export type CourseImage = ElementType<typeof images>