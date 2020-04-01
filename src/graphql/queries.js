/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      owner
      date
      description
      completed
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        date
        description
        completed
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        artist
        likes {
          nextToken
        }
        uploads {
          nextToken
        }
        termsCond
        dcma
        owner
      }
      nextToken
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      type
      url
      metadata
      live
      owner
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const searchTodos = /* GraphQL */ `
  query SearchTodos(
    $filter: SearchableTodoFilterInput
    $sort: SearchableTodoSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTodos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        date
        description
        completed
      }
      nextToken
      total
    }
  }
`;
export const searchProfiles = /* GraphQL */ `
  query SearchProfiles(
    $filter: SearchableProfileFilterInput
    $sort: SearchableProfileSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchProfiles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        artist
        likes {
          nextToken
        }
        uploads {
          nextToken
        }
        termsCond
        dcma
        owner
      }
      nextToken
      total
    }
  }
`;
export const searchContents = /* GraphQL */ `
  query SearchContents(
    $filter: SearchableContentFilterInput
    $sort: SearchableContentSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchContents(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        url
        metadata
        live
        owner
      }
      nextToken
      total
    }
  }
`;
