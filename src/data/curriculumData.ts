import { Unit, SubTopic } from '../types';
import { unit1 } from './units/unit1';
import { unit2 } from './units/unit2';
import { unit3 } from './units/unit3';
import { unit4 } from './units/unit4';

export const allUnits: Unit[] = [unit1, unit2, unit3, unit4];

export function getAllSubTopics(): SubTopic[] {
  return allUnits.flatMap((u) => u.subTopics);
}

export function getSubTopicById(id: string): SubTopic | undefined {
  return getAllSubTopics().find((t) => t.id === id);
}

export function getUnitBySubTopicId(subTopicId: string): Unit | undefined {
  return allUnits.find((u) => u.subTopics.some((t) => t.id === subTopicId));
}
