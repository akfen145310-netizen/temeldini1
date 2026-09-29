import { EnrichmentSection } from '../../types';
import { unit1Enrichment } from './unit1Enrichment';
import { unit2Enrichment } from './unit2Enrichment';
import { unit3Enrichment } from './unit3Enrichment';
import { unit4Enrichment } from './unit4Enrichment';

export const allEnrichmentData: Record<string, EnrichmentSection> = {
  ...unit1Enrichment,
  ...unit2Enrichment,
  ...unit3Enrichment,
  ...unit4Enrichment,
};

export function getEnrichmentByTopicId(topicId: string): EnrichmentSection | undefined {
  return allEnrichmentData[topicId];
}
