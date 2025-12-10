import {faker} from '@faker-js/faker'
class Creds {

  auth = {
    username: "guest",
    password: "welcome2qauto"
  };

    login = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({
              length: 15,
              memorable: false,
              pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
    }),

    emptyName: '',
    shortName: "ab",
    longName: faker.lorem.word(20),
    invalidName: faker.internet.password(),
    nameWithSpaces: `   ${faker.person.firstName()}   `,

    emptyLastName: '',
    shortLastName: faker.lorem.word(2),
    longLastName: faker.lorem.word(20),
    invalidLastName: faker.internet.password(),
    nameWithSpaces: `   ${faker.person.firstName()}   `,

    emptyEmail: '',
    invalidEmail: faker.lorem.word(5), 
    emailWithSpaces: `   ${faker.internet.email()}   `,

    emptyPassword: '',
    shortPassword: faker.internet.password({
              length: 7,
              memorable: false,
              pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
    }),

    longPassword: faker.internet.password({
              length: 21,
              memorable: false,
              pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
    }),

    passwordWithSmallLetters: faker.internet.password({
              length: 18,
              memorable: false,
              pattern: /[a-z0-9!@#$%^&*()_+=-]/,
    }),

    passwordWithBigLetters: faker.internet.password({
              length: 18,
              memorable: false,
              pattern: /[A-Z0-9!@#$%^&*()_+=-]/,
    }),

    passwordWithoutNumbers: faker.internet.password({
              length: 18,
              memorable: false,
              pattern: /[A-Za-z!@#$%^&*()_+=-]/,
    }),

    passwordWithSpaces: ` ${faker.internet.password({
              length: 16,
              memorable: false,
              pattern: /[A-Za-z0-9!@#$%^&*()_+=-\s]/, 
    })} `,

    emptySecondPassword: '',

    differenSecondPassword: faker.internet.password({
              length: 15,
              memorable: false,
              pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
    }),


  
    



  };


  
}

export default new Creds();
