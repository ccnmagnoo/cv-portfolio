/**
 *@Class Tech
 @function set logoSize number 8 to 64
 @function set logoColor string color 6 or 3 length
 @function get logo return url to iconify
 */
export abstract class Tech {
  tech: string;
  subject: string;
  short?: string;
  private _iconify?: string; /*url iconify*/
  private _logoSize: number = 32;
  private _logoColor?: number | string = undefined;

  constructor(tech: string, subject: string, short?: string, iconifyId?: string) {
    this.tech = tech;
    this.subject = subject;
    this.short = short;
    this._iconify = `https://api.iconify.design/${iconifyId}.svg`;
  }

  get logo() {
    const color = () => {
      if (this._logoColor) {
        return `&color=%23${this._logoColor}`;
      } else {
        return undefined;
      }
    };
    return this._iconify + '?width=' + this._logoSize + color();
  }

  set logoSize(size: number) {
    if (size > 8 && size < 64) {
      this._logoSize = size;
    } else {
      throw new Error('size must be between 8 and 64');
    }
  }
  set logoColor(color: string | number) {
    if (color.toString().length === 6 || color.toString().length === 3) {
      this._logoColor = color;
    } else {
      throw new Error('invalid color');
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
