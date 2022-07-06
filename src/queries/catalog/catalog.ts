import { gql } from "@apollo/client";


export const MOVIES_QUERY = gql`
    query Catalog {
        movies {
            id
            album
            thumbnail
            author
            name
            year
            duration
            genre
            videoURL
            lyrics
        }
    }
`;

export const MOVIE_BY_ID_QUERY = gql`
    query Catalog($id: ID!) {
        movie(id: $id) {
            id
            album
            thumbnail
            author
            name
            year
            duration
            genre
            videoURL
            lyrics
        }
    }
`;
