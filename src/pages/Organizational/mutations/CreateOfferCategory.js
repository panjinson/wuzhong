import graphql from 'babel-plugin-relay/macro';
import {
  commitMutation
} from 'react-relay';

const mutation = graphql`
  mutation CreateOfferCategoryMutation(
        $name: String!,
        $remark: String!
        ) {
    createOfferCategory(
        name: $name,
        remark: $remark
    ) {
        id
        name
    }
  }
`;

function commit(
  environment,
  name,
  remark,
  onCompleted,
  onError
) {
  return commitMutation(environment, {
    mutation,
    variables: {
        name: name,
        remark: remark
      },
      onCompleted: onCompleted,
      onError: onError
  });
}

export default { commit };