import { address, city, country, street, zip, } from 'casual';

export const resolvers: any = {
    Query: {
        info: () => ({
           firstname: 'Ugur',
           address: {
               id: 5,
               country,
               city,
               zip,
               street,
               address,
           }
        }),
        address: () => ({
            id: 5,
            country,
            city,
            zip,
            street,
            address,
        })
    },
    Mutation: {
        changeAddress: () => ({
            id: 5,
            country,
            city,
            zip,
            street,
            address,
        })
    }
};
