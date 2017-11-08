import { Injectable } from '@angular/core';

@Injectable()
export class BikesService {

  private bikes:Bike[] = [

    {
      name: "Bike1",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/CX1.jpg",
      aparicion: "1941-11-01",
      price:"USD 200"
    },
    {
      name: "Bike2",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/cx2.jpg",
      aparicion: "1939-05-01",
      price:"USD 200"
    },
    {
      name: "Bike3",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/XC2.jpg",
      aparicion: "1964-01-01",
      price: "USD 200"
    },
    {
      name: "Bike4",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/XC.jpg",
      aparicion: "1962-05-01",
      price:"USD 200"
    },
    {
      name: "Bike5",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/FR1.jpg",
      aparicion: "1940-06-01",
      price: "USD 200"
    },
    {
      name: "Bike6",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/FR2.jpg",
      aparicion: "1962-08-01",
      price: "USD 200"
    },
    {
      name: "Bike7",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/FR3.jpg",
      aparicion: "1974-11-01",
      price: "USD 200"
    }
  ];

  constructor() {
    console.log("Ready to Work")
   }

   getBikes(){
     return this.bikes;
   }

}

export interface Bike{
  name: string;
  bio: string;
  aparicion: string;
  img: string;
  price: string;
}
