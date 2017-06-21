import {
    country,
    city,
    zip,
    street,
    address,
} from 'casual';

export const resolvers: any = {
    Query: {
        address: () => ({
            country,
            city,
            zip,
            street,
            address,
        })
    }
};
