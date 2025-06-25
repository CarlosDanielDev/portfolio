import type { PrivacyPolicyRepository } from '@domain/repositories/PrivacyPolicyRepository';
import { PrivacyPolicy, PrivacyPolicySection } from '@domain/entities/PrivacyPolicy';
import { privacyPolicyData } from '@infrastructure/data/privacy-policy-data';

class InMemoryPrivacyPolicyRepository implements PrivacyPolicyRepository {
  private privacyPolicy: PrivacyPolicy | null = null;

  async getPrivacyPolicy(): Promise<PrivacyPolicy> {
    if (!this.privacyPolicy) {
      this.privacyPolicy = this.createPrivacyPolicyFromData();
    }
    return this.privacyPolicy;
  }

  async getSectionById(sectionId: string): Promise<string | null> {
    const policy = await this.getPrivacyPolicy();
    const section = policy.getSection(sectionId);
    return section ? section.getContent() : null;
  }

  private createPrivacyPolicyFromData(): PrivacyPolicy {
    const sections = privacyPolicyData.sections.map(
      sectionData => new PrivacyPolicySection(
        sectionData.id,
        sectionData.title,
        sectionData.content,
        sectionData.order
      )
    );

    return new PrivacyPolicy(
      privacyPolicyData.id,
      privacyPolicyData.title,
      sections,
      privacyPolicyData.lastUpdated,
      privacyPolicyData.version
    );
  }
}

export { InMemoryPrivacyPolicyRepository }; 