import { faker }  from '@faker-js/faker/locale/pt_BR';
import lodash from 'lodash';
import fs from 'fs';

const profissionais = lodash.times(50, function(n){
    const firtName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        id: n+1,
        firtName: firtName,
        lastName: lastName,
        avatar: faker.image.avatar(),
        profissao: faker.person.jobTitle(),
        address: faker.location.streetAddress(),
        email: faker.internet.email({ firstName: firtName.toLowerCase, lastName: lastName.toLowerCase }),   
    }
});

const usuarios = lodash.times(50, function(n){
    const firtName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        id: n+1000,
        firtName: firtName,
        lastName: lastName,
        avatar: faker.image.avatar(),
        address: faker.location.streetAddress(),
        //deficiencia: faker.,
        email: faker.internet.email({ firstName: firtName.toLowerCase, lastName: lastName.toLowerCase }),   
    }
});

const data = {};
data.profissionais = profissionais;
data.usuarios = usuarios;
fs.writeFile('db.json', JSON.stringify(data), (err) => {
    if(err) throw err;
    console.log('Finalizado...');
});