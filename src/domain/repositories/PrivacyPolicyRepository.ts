import type { PrivacyPolicy } from '@domain/entities/PrivacyPolicy';

interface PrivacyPolicyRepository {
  getPrivacyPolicy(): Promise<PrivacyPolicy>;
  getSectionById(sectionId: string): Promise<string | null>;
}

export type { PrivacyPolicyRepository }; 