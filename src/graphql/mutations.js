/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPhotoshoot = /* GraphQL */ `
  mutation CreatePhotoshoot(
    $input: CreatePhotoshootInput!
    $condition: ModelPhotoshootConditionInput
  ) {
    createPhotoshoot(input: $input, condition: $condition) {
      id
      name
      description
      image
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePhotoshoot = /* GraphQL */ `
  mutation UpdatePhotoshoot(
    $input: UpdatePhotoshootInput!
    $condition: ModelPhotoshootConditionInput
  ) {
    updatePhotoshoot(input: $input, condition: $condition) {
      id
      name
      description
      image
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePhotoshoot = /* GraphQL */ `
  mutation DeletePhotoshoot(
    $input: DeletePhotoshootInput!
    $condition: ModelPhotoshootConditionInput
  ) {
    deletePhotoshoot(input: $input, condition: $condition) {
      id
      name
      description
      image
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
