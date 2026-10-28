export type WorkoutStage = 'IDLE' | 'WARMUP' | 'IN_SET' | 'RESTING' | 'COMPLETED';

export class WorkoutStateMachine {
  private stage: WorkoutStage = 'IDLE';

  public getStage(): WorkoutStage {
    return this.stage;
  }

  public startWorkout(): void {
    if (this.stage === 'IDLE') this.stage = 'WARMUP';
  }

  public beginSet(): void {
    this.stage = 'IN_SET';
  }

  public completeSet(): void {
    this.stage = 'RESTING';
  }

  public finishWorkout(): void {
    this.stage = 'COMPLETED';
  }
}
