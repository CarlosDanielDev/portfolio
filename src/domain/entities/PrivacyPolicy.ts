class PrivacyPolicy {
  private readonly id: string;
  private readonly title: string;
  private readonly sections: PrivacyPolicySection[];
  private readonly lastUpdated: Date;
  private readonly version: string;

  constructor(
    id: string,
    title: string,
    sections: PrivacyPolicySection[],
    lastUpdated: Date,
    version: string
  ) {
    this.id = id;
    this.title = title;
    this.sections = sections;
    this.lastUpdated = lastUpdated;
    this.version = version;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getSections(): PrivacyPolicySection[] {
    return [...this.sections];
  }

  getSection(sectionId: string): PrivacyPolicySection | null {
    return this.sections.find(section => section.getId() === sectionId) || null;
  }

  getLastUpdated(): Date {
    return this.lastUpdated;
  }

  getVersion(): string {
    return this.version;
  }

  getSectionTitles(): string[] {
    return this.sections.map(section => section.getTitle());
  }
}

class PrivacyPolicySection {
  private readonly id: string;
  private readonly title: string;
  private readonly content: string;
  private readonly order: number;

  constructor(id: string, title: string, content: string, order: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.order = order;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  getOrder(): number {
    return this.order;
  }
}

export { PrivacyPolicy, PrivacyPolicySection }; 