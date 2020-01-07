/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = `mutation CreateTask(
  $input: CreateTaskInput!
  $condition: ModelTaskConditionInput
) {
  createTask(input: $input, condition: $condition) {
    id
    title
    description
    status
  }
}
`;
export const updateTask = `mutation UpdateTask(
  $input: UpdateTaskInput!
  $condition: ModelTaskConditionInput
) {
  updateTask(input: $input, condition: $condition) {
    id
    title
    description
    status
  }
}
`;
export const deleteTask = `mutation DeleteTask(
  $input: DeleteTaskInput!
  $condition: ModelTaskConditionInput
) {
  deleteTask(input: $input, condition: $condition) {
    id
    title
    description
    status
  }
}
`;
export const createPrivateNote = `mutation CreatePrivateNote(
  $input: CreatePrivateNoteInput!
  $condition: ModelPrivateNoteConditionInput
) {
  createPrivateNote(input: $input, condition: $condition) {
    id
    content
    updatedAt
    owner
  }
}
`;
export const updatePrivateNote = `mutation UpdatePrivateNote(
  $input: UpdatePrivateNoteInput!
  $condition: ModelPrivateNoteConditionInput
) {
  updatePrivateNote(input: $input, condition: $condition) {
    id
    content
    updatedAt
    owner
  }
}
`;
export const deletePrivateNote = `mutation DeletePrivateNote(
  $input: DeletePrivateNoteInput!
  $condition: ModelPrivateNoteConditionInput
) {
  deletePrivateNote(input: $input, condition: $condition) {
    id
    content
    updatedAt
    owner
  }
}
`;
