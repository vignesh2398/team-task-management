import request from 'supertest';
import app from '../index';
import { tasks } from '../src/data/tasks';
import type { Task } from '../src/types/task.types';

const initialTasks = JSON.parse(JSON.stringify(tasks)) as Task[];

beforeEach(() => {
  tasks.splice(0, tasks.length, ...JSON.parse(JSON.stringify(initialTasks)));
});

describe('Tasks API endpoints', () => {
  test('GET /tasks returns a list of tasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.status).toBe(200);
    expect(response.body.tasks).toHaveLength(initialTasks.length);
    expect(response.body.tasks[0]).toMatchObject(initialTasks[0]);
  });

  test('GET /tasks/:id returns a single task', async () => {
    const response = await request(app).get('/tasks/1');

    expect(response.status).toBe(200);
    expect(response.body.task).toMatchObject(initialTasks[0]);
  });

  test('POST /tasks creates a task', async () => {
    const newTask = {
      title: 'Endpoint test task',
      description: 'Test creating a task via endpoint',
      priority: 'low',
      status: 'todo',
    };

    const response = await request(app).post('/tasks').send(newTask);

    expect(response.status).toBe(201);
    expect(response.body.task).toMatchObject(newTask);
    expect(response.body.task.id).toBeDefined();
  });

  test('POST /tasks returns 400 when request body fails Zod validation', async () => {
    const invalidTask = {
      title: 'Invalid Zod task',
      priority: 'super-high',
      status: 'todo',
    };

    const response = await request(app).post('/tasks').send(invalidTask);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Validation failed');
    expect(response.body.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ field: 'description' }),
        expect.objectContaining({ field: 'priority' }),
      ])
    );
  });

  test('PUT /tasks/:id updates a task', async () => {
    const updateData = {
      title: initialTasks[0].title,
      description: initialTasks[0].description ?? '',
      priority: initialTasks[0].priority,
      status: 'done',
    };

    const response = await request(app).put('/tasks/1').send(updateData);

    expect(response.status).toBe(200);
    expect(response.body.task.status).toBe('done');
    expect(response.body.task.id).toBe('1');
  });

  test('DELETE /tasks/:id removes a task with proper header', async () => {
    const response = await request(app)
      .delete('/tasks/2')
      .set('x-delete-task-auth', 'task-delete-secret');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Deleted task 2');
    expect(tasks.find((task) => task.id === '2')).toBeUndefined();
  });

  test('DELETE /tasks/:id without auth header returns 403', async () => {
    const response = await request(app).delete('/tasks/2');

    expect(response.status).toBe(403);
    expect(response.body.error).toContain('Forbidden');
  });
});
