import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const serverURL = 'http://localhost:4000/graphql';
const client = new ApolloClient({ uri: serverURL});

export const getReservationsById = async (id: number) => {
    return await client
        .query({
        query: gql `
            {
                resvById(id: ${id}) {
                    name
                    id
                    hotel
                    arrivalDate
                    departureDate
                }
            }
        `
        })
        .then(result => {return result.data});  
};

export const getAllReservationsGraphQl = async () => {
    return await client
        .query({
        query: gql `
            {
                resv {
                    name
                    id
                    hotel
                    arrivalDate
                    departureDate
                }
            }
        `
        })
        .then(result => {return result.data});
    
};

export const createReservation = async (guestName, hotel, arrivalDate, departureDate) => {
    return await client
        .mutate({
        mutation: gql `
            mutation {
                addReservation(name: "${guestName}", hotel: "${hotel}", arrivalDate: "${arrivalDate}", departureDate: "${departureDate}"){
                    id
                    name
                }
            }
        `
        })
        .then(result => {return result.data});  
};
