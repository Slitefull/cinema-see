import { gql } from "@apollo/client";


export const songsQuery = gql`
    query Catalog {
        songs {
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

export const songByIdQuery = gql`
    query Catalog($id: ID!) {
        song(id: $id) {
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
