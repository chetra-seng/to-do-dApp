// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract ToDoContract {
  constructor() {
    addTask("Deployed Smart Contract");
  }

  uint public taskCount = 0;

  struct Task {
    uint id;
    string content;
    bool completed;
  }

  event TaskAdded(
    uint id,
    string content,
    bool completed
  );

  mapping(uint => Task) public tasks;

  function addTask(string memory _content) public {
    taskCount++;
    tasks[taskCount] = Task(taskCount, _content, false);
    emit TaskAdded(taskCount, _content, false);
  }

  function updateTask(uint _id) public {
    Task memory _task = tasks[_id];
    _task.completed = !_task.completed;
    tasks[_id] = _task;
  }
}
