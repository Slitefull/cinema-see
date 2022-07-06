import { gql } from "@apollo/client";


export const MOVIES_QUERY = gql`
    query Catalog {
        movies {
            id,
            name,
            director,
            description,
            year,
            duration,
            genre,
            thumbnail,
            rating,
            actors,
        }
    }
`;

export const MOVIE_BY_ID_QUERY = gql`
    query Catalog($id: ID!) {
        movie(id: $id) {
            id,
            name,
            director,
            description,
            year,
            duration,
            genre,
            thumbnail,
            rating,
            actors,
        }
    }
`;
