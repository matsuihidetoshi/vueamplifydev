/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    title
    description
    status
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    title
    description
    status
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    title
    description
    status
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote($owner: String!) {
  onCreatePrivateNote(owner: $owner) {
    id
    content
    updatedAt
    owner
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote($owner: String!) {
  onUpdatePrivateNote(owner: $owner) {
    id
    content
    updatedAt
    owner
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote($owner: String!) {
  onDeletePrivateNote(owner: $owner) {
    id
    content
    updatedAt
    owner
  }
}
`;
