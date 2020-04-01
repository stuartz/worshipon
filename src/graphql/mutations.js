/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      owner
      date
      description
      completed
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      owner
      date
      description
      completed
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      owner
      date
      description
      completed
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      email
      artist
      likes {
        items {
          id
          type
          url
          metadata
          live
          owner
        }
        nextToken
      }
      uploads {
        items {
          id
          type
          url
          metadata
          live
          owner
        }
        nextToken
      }
      termsCond
      dcma
      owner
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      email
      artist
      likes {
        items {
          id
          type
          url
          metadata
          live
          owner
        }
        nextToken
      }
      uploads {
        items {
          id
          type
          url
          metadata
          live
          owner
        }
        nextToken
      }
      termsCond
      dcma
      owner
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      name
      email
      artist
      likes {
        items {
          id
          type
          url
          metadata
          live
          owner
        }
        nextToken
      }
      uploads {
        items {
          id
          type
          url
          metadata
          live
          owner
        }
        nextToken
      }
      termsCond
      dcma
      owner
    }
  }
`;
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      type
      url
      metadata
      live
      owner
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      type
      url
      metadata
      live
      owner
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      type
      url
      metadata
      live
      owner
    }
  }
`;
