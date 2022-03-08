abstract class Tech {
  tech: string;
  subject: string;
  short?: string;
  private _iconify?: string; /*url iconify*/
  private _logoSize: number = 32;

  constructor(tech: string, subject: string, short?: string, iconifyId?: string) {
    this.tech = tech;
    this.subject = subject;
    this.short = short;
    this._iconify = `https://api.iconify.design/logos/${iconifyId}.svg`;
  }

  get logo() {
    return this._iconify + '?width=' + this._logoSize;
  }
  set logosize(size: number) {
    if (size > 8 && size < 64) {
      this._logoSize = size;
    } else {
      throw new Error('size must be between 8 and 64');
    }
  }
}

export enum SkillLevel {
  basic = 1,
  average,
  skilled,
  specialist,
  expert,
}

export class Skill extends Tech {
  level: SkillLevel;
  constructor(
    level: SkillLevel,
    tech: string,
    subject: string,
    short?: string,
    logo?: string
  ) {
    super(tech, subject, short, logo);
    this.level = level;
  }
}

export enum InterestLevel {
  slightly = 1,
  moderate,
  high,
  extreme,
}

export class Interest extends Tech {
  interest: InterestLevel;
  constructor(
    interest: InterestLevel,
    tech: string,
    subject: string,
    short?: string,
    logo?: string
  ) {
    super(tech, subject, short, logo);
    this.interest = interest;
  }
}
