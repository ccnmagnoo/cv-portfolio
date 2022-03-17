/**
 *@Class Tech
 @function set logoSize number 8 to 64
 @function set logoColor string color 6 or 3 length
 @function get logo return url to iconify
 */

export type TechType =
  | 'developer'
  | 'front-end'
  | 'back-end'
  | 'data-analytics'
  | 'other';
export abstract class Tech {
  tech: string;
  types: TechType; /*variant of skill set, front-end, back-end general , etc*/
  short?: string;
  private _iconify?: string; /*url iconify*/
  private _logoSize: number = 9;
  private _logoColor?: number | string = undefined;

  constructor(
    tech: string,
    types: TechType,
    short?: string,
    iconifyId?: string,
    dateUpdate?: Date
  ) {
    this.tech = tech;
    this.types = types;
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

/**
 * @constructor Skill @extends Tech  representive instance of confidence with certain tech,
 * @param SkillLevel from basic to expert
 * @param tech name of technology,
 * @param types variant fron-end or back-end tech objective
 * @param short, tech acronyms,
 * @param logo, icon address in iconify {folder/name}.svg,
 * @param update {Date} date of skill confidence perception
 */
export class Skill extends Tech {
  level: SkillLevel;
  update?: Date;
  constructor(
    level: SkillLevel,
    tech: string,
    types: TechType,
    short?: string,
    logo?: string,
    update?: Date
  ) {
    super(tech, types, short, logo);
    this.update = update;
    this.level = level;
  }
}

export enum InterestLevel {
  slightly = 1,
  moderate,
  high,
  extreme,
}

/**
 * @class Interest representive instance of tech's interest,
 * @param interest 4 levels from slighly to extreme
 * @param tech name of technology,
 * @param types variant fron-end or back-end tech objective
 * @param short, tech acronyms,
 * @param logo, icon address in iconify {folder/name}.svg,
 */
export class Interest extends Tech {
  interest: InterestLevel;
  constructor(
    interest: InterestLevel,
    tech: string,
    types: TechType,
    short?: string,
    logo?: string
  ) {
    super(tech, types, short, logo);
    this.interest = interest;
  }
}
