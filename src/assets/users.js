import img_one from './profile_2020.jpeg'
import img_two from './marcus_img.png'
import img_three from './alicia_img.jpg'
import img_four from './curt_boston_img_1.jpeg'
import img_five from './colden_cooper_img.jpeg'
import img_six from './porsche.jpeg'
import img_seven from './justin_img.png'

export const users = [
    {
      "id": 1,
      "username": "edwardzzz",
      "firstName": "Zach",
      "lastName": "Edwards",
      "email": "edwardz8@yahoo.com",
      "img_header": img_six,
      "img": img_one,
      "isAdmin": true,
      "pins": [
        { "id": 1, "content": "PinFan is Awesome!" },
        { "id": 2, "content": "Don't forget to follow us on twitter" }
      ]
    },
    {
      "id": 2,
      "username": "jhill",
      "firstName": "Justin",
      "lastName": "Hill",
      "email": null,
      "img_header": img_six,
      "img": img_seven,
      "isAdmin": false,
      "pins": [
        { "id": 1, "content": "PinFan is Awesome!" },
        { "id": 2, "content": "This is a new pin" }
      ]
    },
    {
      "id": 3,
      "username": "jellocat",
      "firstName": "Alicia",
      "lastName": "Edwards",
      "email": null,
      "img_header": img_six,
      "img": img_three,
      "isAdmin": false,
      "pins": []
    },
    {
      "id": 4,
      "username": "iamelectricman20",
      "firstName": "Marcus",
      "lastName": "Whitaker",
      "email": null,
      "img_header": img_six,
      "img": img_two,
      "isAdmin": false,
      "pins": []
    },
    {
      "id": 5,
      "username": "bostonsox",
      "firstName": "Curt",
      "lastName": "Boston",
      "email": null,
      "img_header": img_six,
      "img": img_four,
      "isAdmin": false,
      "pins": []
    },
    {
      "id": 6,
      "username": "coop",
      "firstName": "Colden",
      "lastName": "Cooper",
      "email": null,
      "img_header": img_six,
      "img": img_five,
      "isAdmin": false,
      "pins": []
    },
  ];