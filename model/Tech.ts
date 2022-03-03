import { JSXElementConstructor } from 'react';

abstract class Tech {
  tech: string;
  desription: string;
  short?: string;
  logo?: string; /*url iconify*/

  constructor(tech: string, desription: string, short?: string, logo?: string) {
    this.tech = tech;
    this.desription = desription;
    this.short = short;
    this.logo = logo;
  }

  myFunction() {
    return this.tech;
  }
}

export enum SkillLevel {
  trainee = 1,
  novice,
  proefficient,
  superior,
  expert,
}

export class Skill extends Tech {
  level: SkillLevel;
  constructor(
    level: SkillLevel,
    tech: string,
    desription: string,
    short?: string,
    logo?: string
  ) {
    super(tech, desription, short, logo);
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
    desription: string,
    short?: string,
    logo?: string
  ) {
    super(tech, desription, short, logo);
    this.interest = interest;
  }
}
