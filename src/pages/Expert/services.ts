export interface Service {
  id: number;
  type: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  availability: string;
  verified: boolean;
}

export interface PackagePlan {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    type: "doctor",
    name: "Dr. Anjali Mehta",
    specialty: "Obstetrician & Gynecologist",
    experience: "15 years",
    rating: 4.9,
    reviews: 456,
    price: 1500,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    availability: "Available Today",
    verified: true
  },
  {
    id: 2,
    type: "counsellor",
    name: "Priya Sharma",
    specialty: "Pregnancy Counsellor",
    experience: "10 years",
    rating: 4.8,
    reviews: 324,
    price: 800,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    availability: "Available Tomorrow",
    verified: true
  },
  {
    id: 3,
    type: "nutritionist",
    name: "Dr. Kavita Rao",
    specialty: "Prenatal Nutritionist",
    experience: "12 years",
    rating: 4.7,
    reviews: 289,
    price: 1000,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400",
    availability: "Available Today",
    verified: true
  },
  {
    id: 4,
    type: "physiotherapist",
    name: "Rahul Kumar",
    specialty: "Pregnancy Physiotherapist",
    experience: "8 years",
    rating: 4.6,
    reviews: 178,
    price: 900,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    availability: "Available Today",
    verified: true
  },
  {
    id: 5,
    type: "therapist",
    name: "Dr. Meera Patel",
    specialty: "Postpartum Therapist",
    experience: "11 years",
    rating: 4.9,
    reviews: 412,
    price: 1200,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    availability: "Available Tomorrow",
    verified: true
  },
  {
    id: 6,
    type: "nanny",
    name: "Sunita Devi",
    specialty: "Experienced Maa-help & Nanny",
    experience: "20 years",
    rating: 4.8,
    reviews: 567,
    price: 15000,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
    availability: "Available Next Week",
    verified: true
  }
];

export const packages: PackagePlan[] = [
  {
    id: 1,
    name: "Complete Pregnancy Care",
    description: "Full pregnancy support with doctor consultations, nutrition planning, and counselling",
    price: 25000,
    duration: "9 months",
    features: [
      "Monthly doctor consultations",
      "Weekly nutrition guidance",
      "24/7 emergency support",
      "Pregnancy yoga sessions",
      "Postpartum care planning"
    ]
  },
  {
    id: 2,
    name: "Postpartum Wellness",
    description: "Complete support for mother and baby after delivery",
    price: 18000,
    duration: "3 months",
    features: [
      "Postpartum check-ups",
      "Lactation support",
      "Mental health counselling",
      "Baby care guidance",
      "Recovery exercises"
    ]
  },
  {
    id: 3,
    name: "Premium Care Package",
    description: "Comprehensive care from pregnancy to first year",
    price: 45000,
    duration: "21 months",
    features: [
      "All pregnancy consultations",
      "Delivery support",
      "Postpartum care",
      "First year pediatric visits",
      "Dedicated care coordinator"
    ]
  }
];
