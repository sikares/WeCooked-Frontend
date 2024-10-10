interface Course {
  title: string;
  cuisine: string;
  price: string;
  rating: number;
  chef: string;
  imageSrc: string;
}

const courses: Course[] = [
  {
    title: 'Uma Parlour - Pure Vegetarian',
    cuisine: 'India',
    price: '300 Bath',
    rating: 4.0,
    chef: 'Chef Sieng',
    imageSrc: '/images/ramachandra.png',
  },
  {
    title: 'Uma Parlour - Pure Vegetarian',
    cuisine: 'Thai',
    price: '500 Bath',
    rating: 3.2,
    chef: 'Chef Sieng',
    imageSrc: '/images/uma-parlour.png',
  },
  {
    title: 'Uma Parlour - Pure Vegetarian',
    cuisine: 'Thai',
    price: '500 Bath',
    rating: 3.2,
    chef: 'Chef Sieng',
    imageSrc: '/images/uma-parlour.png',
  },
  {
    title: 'Uma Parlour - Pure Vegetarian',
    cuisine: 'Thai',
    price: '500 Bath',
    rating: 3.2,
    chef: 'Chef Sieng',
    imageSrc: '/images/uma-parlour.png',
  }
];

export default courses;