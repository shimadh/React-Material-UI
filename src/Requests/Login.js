import gql from 'graphql-tag';

export const TRY_LOGIN = gql`

  mutation tryLogin($email: String!, $password: String!) {
      signin(email: $email, password: $password) {
          ok,
          token,
          user{
              id,
              full_name,
              email
          }
      }
  }
    
`;