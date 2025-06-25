import type { PrivacyPolicyRepository } from '@domain/repositories/PrivacyPolicyRepository';

interface PrivacyPolicyOutput {
  title: string;
  version: string;
  lastUpdated: string;
  sections: PrivacyPolicySectionOutput[];
}

interface PrivacyPolicySectionOutput {
  id: string;
  title: string;
  content: string;
  order: number;
}

class GetPrivacyPolicyUseCase {
  constructor(private readonly privacyPolicyRepository: PrivacyPolicyRepository) {}

  async execute(): Promise<PrivacyPolicyOutput> {
    const privacyPolicy = await this.privacyPolicyRepository.getPrivacyPolicy();
    
    return {
      title: privacyPolicy.getTitle(),
      version: privacyPolicy.getVersion(),
      lastUpdated: privacyPolicy.getLastUpdated().toISOString().split('T')[0],
      sections: privacyPolicy.getSections().map(section => ({
        id: section.getId(),
        title: section.getTitle(),
        content: section.getContent(),
        order: section.getOrder()
      }))
    };
  }
}

export { GetPrivacyPolicyUseCase };
export type { PrivacyPolicyOutput, PrivacyPolicySectionOutput }; 