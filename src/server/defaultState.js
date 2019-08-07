import md5 from "md5";

export const defaultState = {
  users: [
    {
      id: "u1",
      name: "dev",
      password: md5("abcde")
    }
  ],
  groups: [
    {
      name: "To DO",
      id: "g1",
      owner: "u1"
    }
  ],
  tasks: [
    {
      name: "Do Tests",
      id: "t1",
      group: "g1",
      owner: "u1",
      isComplete: false
    }
  ],
  comments: [
    {
      owner: "u1",
      id: "c1",
      task: "t1",
      content: "Great works"
    }
  ]
};
