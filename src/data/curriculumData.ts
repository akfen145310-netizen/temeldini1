import { Unit, SubTopic } from '../types';
import { unit1 } from './units/unit1';
import { unit2 } from './units/unit2';
import { unit3 } from './units/unit3';
import { unit4 } from './units/unit4';
import { allEnrichmentData } from './enrichment';
import { extraContentByTopicId } from './extraDialoguesAndTf';

function hydrateTopic(topic: SubTopic): SubTopic {
  const extra = extraContentByTopicId[topic.id];
  const enrichment = allEnrichmentData[topic.id];

  // Merge extra dialogues up to 10
  let dialogues = [...topic.section2.dialogues];
  if (extra && extra.dialogues) {
    const existingIds = new Set(dialogues.map((d) => d.id));
    for (const d of extra.dialogues) {
      if (!existingIds.has(d.id)) {
        dialogues.push(d);
        existingIds.add(d.id);
      }
    }
  }

  // Merge extra true/false questions up to 10
  let tfQuestions = [...topic.section3.questions];
  if (extra && extra.tfQuestions) {
    const existingIds = new Set(tfQuestions.map((q) => q.id));
    for (const q of extra.tfQuestions) {
      if (!existingIds.has(q.id)) {
        tfQuestions.push(q);
        existingIds.add(q.id);
      }
    }
  }

  return {
    ...topic,
    enrichment: enrichment || topic.enrichment,
    section2: {
      ...topic.section2,
      dialogues,
    },
    section3: {
      ...topic.section3,
      questions: tfQuestions,
    },
  };
}

const rawUnits: Unit[] = [unit1, unit2, unit3, unit4];

export const allUnits: Unit[] = rawUnits.map((u) => ({
  ...u,
  subTopics: u.subTopics.map(hydrateTopic),
}));

export function getAllSubTopics(): SubTopic[] {
  return allUnits.flatMap((u) => u.subTopics);
}

export function getSubTopicById(id: string): SubTopic | undefined {
  return getAllSubTopics().find((t) => t.id === id);
}

export function getUnitBySubTopicId(subTopicId: string): Unit | undefined {
  return allUnits.find((u) => u.subTopics.some((t) => t.id === subTopicId));
}

