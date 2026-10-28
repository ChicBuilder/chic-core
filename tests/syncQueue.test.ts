import { describe, expect, it } from 'bun:test';
import { OfflineSyncQueue } from '../src/syncQueue';

describe('OfflineSyncQueue', () => {
  it('enqueues actions and drains cleanly', () => {
    const q = new OfflineSyncQueue();
    q.enqueue('CREATE', { workoutId: 'w1' });
    q.enqueue('UPDATE', { workoutId: 'w1', completed: true });
    expect(q.size()).toBe(2);
    const items = q.drain();
    expect(items.length).toBe(2);
    expect(q.size()).toBe(0);
  });
});
