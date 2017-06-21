import { latitude, longitude } from 'casual';

export const resolvers: any = {
    Query: {
        location: () => ({
            latitude,
            longitude
        })
    }
};
