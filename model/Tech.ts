import { error } from 'console';
import React from 'react';
import { JSXElementConstructor } from 'react';

abstract class Tech {
  tech: string;
  subject: string;
  short?: string;
  private _logo?: string; /*url iconify*/
  private _logoSize: number = 32;

  constructor(tech: string, subject: string, short?: string, iconifyId?: string) {
    this.tech = tech;
    this.subject = subject;
    this.short = short;
    this._logo = `https://api.iconify.design/logos/${iconifyId}.svg`;
  }

  get logo() {
    return this._logo + '?width=' + this._logoSize;
  }
  set logosize(size: number) {
    if (size > 8 && size < 64) {
      this._logoSize = size;
    } else {
      throw error('size allowed between 8 and 64');
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
  low = 1,
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
