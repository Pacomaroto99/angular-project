export class Course {
    public title: string | undefined;
    public icon: string | undefined;
    public linkToPage: string | undefined;
    public description: string | undefined;
    public courseStatus: Status | undefined
}

export enum Status {
    NotTouched = 'notTouched',
    Started = 'started',
    Finished = 'finished'
  }