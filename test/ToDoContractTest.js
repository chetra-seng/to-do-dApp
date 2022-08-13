const ToDoContract = artifacts.require('ToDoContract');

contract('ToDoContract', (accounts) => {
  before(async () => {
    this.todolist = await ToDoContract.deployed();
  })
  it('Deploy Successful.', async () => {
    const address = this.todolist.address;
    const taskCount = await this.todolist.taskCount();

    assert.notEqual(0x0, address);
    assert.equal(1, taskCount);
  })

  it('Add a new task.', async () => {
    const content = 'New Task';
    const eventName = 'TaskAdded';
    const taskAdded = await this.todolist.addTask(content);

    const taskCount = await this.todolist.taskCount();
    const task = await this.todolist.tasks(taskCount);

    assert.equal(2, taskCount);
    assert.equal(content, task.content);
    assert.equal(content, taskAdded.logs[0].args.content);
    assert.equal(eventName, taskAdded.logs[0].event);
  })
})