import Initiative from './Initiative.interface';

export default interface Job {
  dates: { start: Date; end?: Date };
  company: string;
  link: string;
  sector: string;
  abstract: string;
  detail: string;
  initiatives: Initiative[];
}
