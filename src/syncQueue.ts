export interface SyncItem {
  id: string;
  action: 'CREATE' | 'UPDATE' | 'DELETE';
  payload: any;
  createdAt: number;
}

export class OfflineSyncQueue {
  private queue: SyncItem[] = [];

  public enqueue(action: 'CREATE' | 'UPDATE' | 'DELETE', payload: any): SyncItem {
    const item: SyncItem = {
      id: Math.random().toString(36).substring(2, 9),
      action,
      payload,
      createdAt: Date.now()
    };
    this.queue.push(item);
    return item;
  }

  public size(): number {
    return this.queue.length;
  }

  public drain(): SyncItem[] {
    const items = [...this.queue];
    this.queue = [];
    return items;
  }
}
