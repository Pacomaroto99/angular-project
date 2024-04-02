export class Course {
  public title: string | undefined;
  public icon: string | undefined;
  public linkToPage: string | undefined;
  public description: string | undefined;
  public courseStatus: Status | undefined;
}

export enum Status {
  new = 'new',
  started = 'started',
  finished = 'finished',
}
