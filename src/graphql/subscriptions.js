/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String!) {
    onCreateTodo(owner: $owner) {
      id
      name
      owner
      date
      description
      completed
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String!) {
    onUpdateTodo(owner: $owner) {
      id
      name
      owner
      date
      description
      completed
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String!) {
    onDeleteTodo(owner: $owner) {
      id
      name
      owner
      date
      description
      completed
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($owner: String) {
    onCreateContent(owner: $owner) {
      id
      type
      url
      metadata
      live
      owner
    }
  }
`;
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($owner: String) {
    onUpdateContent(owner: $owner) {
      id
      type
      url
      metadata
      live
      owner
    }
  }
`;
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($owner: String) {
    onDeleteContent(owner: $owner) {
      id
      type
      url
      metadata
      live
      owner
    }
  }
`;
