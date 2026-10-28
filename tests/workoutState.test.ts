import { describe, expect, it } from 'bun:test';
import { WorkoutStateMachine } from '../src/workoutState';

describe('WorkoutStateMachine', () => {
  it('transitions cleanly through lifecycle', () => {
    const sm = new WorkoutStateMachine();
    expect(sm.getStage()).toBe('IDLE');
    sm.startWorkout();
    expect(sm.getStage()).toBe('WARMUP');
    sm.beginSet();
    expect(sm.getStage()).toBe('IN_SET');
    sm.completeSet();
    expect(sm.getStage()).toBe('RESTING');
    sm.finishWorkout();
    expect(sm.getStage()).toBe('COMPLETED');
  });
});
