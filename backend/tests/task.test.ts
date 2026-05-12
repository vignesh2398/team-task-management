import { tasks } from '../src/data/tasks';
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../src/task management/controller/task.controller';
import type { Task } from '../src/types/task.types';

const initialTasks = JSON.parse(JSON.stringify(tasks)) as Task[];

beforeEach(() => {
  tasks.splice(0, tasks.length, ...JSON.parse(JSON.stringify(initialTasks)));
});

describe('task.controller', () => {
  test('getAllTasks returns task list', () => {
    expect(getAllTasks()).toEqual(initialTasks);
  });

  test('getTaskById returns a task by id', () => {
    expect(getTaskById('1')).toEqual(initialTasks[0]);
  });

  test('getTaskById throws when task is not found', () => {
    expect(() => getTaskById('invalid')).toThrow('Failed to get task by id');
  });

  test('createTask creates and returns a new task', () => {
    const newTaskData = {
      title: 'New controller task',
      description: 'Test createTask',
      priority: 'medium' as const,
      status: 'todo' as const,
    };

    const createdTask = createTask(newTaskData);

    expect(createdTask).toMatchObject(newTaskData);
    expect(createdTask.id).toBeDefined();
    expect(tasks).toContainEqual(createdTask);
  });

  test('updateTask updates an existing task', () => {
    const updatedTask = updateTask('1', { status: 'done' });

    expect(updatedTask.status).toBe('done');
    expect(tasks.find((task) => task.id === '1')?.status).toBe('done');
  });

  test('deleteTask removes a task and returns it', () => {
    const deletedTask = deleteTask('2');

    expect(deletedTask.id).toBe('2');
    expect(tasks.find((task) => task.id === '2')).toBeUndefined();
  });
});
