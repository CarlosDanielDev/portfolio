export const privacyPolicyData = {
  id: 'blockzero-privacy-policy',
  title: 'BlockZero Privacy Policy',
  version: '1.3.15',
  lastUpdated: new Date('2025-07-03'),
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      order: 1,
      content: `
BlockZero is a modern 2048-style puzzle game with subscription-based monetization, multiple game modes, and advertising integration for free users. This privacy policy explains how we collect, use, and protect your information when you use our mobile application.

App Details:
• App Name: BlockZero (Block Zero)
• Bundle ID: iOS - dev.carlosdaniel.blockzero, Android - com.bare2xlviii
• Developer: Carlos Daniel (carlosdanieldev@gmail.com)
• Platforms: iOS (12.0+) and Android (API 24+)
• Category: Games > Puzzle
• Target Audience: All ages (4+)

Contact Information:
• Developer Email: carlosdanieldev@gmail.com
• Support Email: support@blockzero.com
• Website: https://carlosdaniel.dev/blockzero/
• Terms of Service: https://carlosdaniel.dev/block-zero-privacy-policy
• Privacy Policy: https://carlosdaniel.dev/block-zero-privacy-policy
      `.trim()
    },
    {
      id: 'data-collection',
      title: 'Data Collection & Storage',
      order: 2,
      content: `
BlockZero stores the following data locally on your device using AsyncStorage:

GAME STATE DATA:
• Current game progress (board state, score, current goal)
• Game mode preferences (Classic, Challenge, Time Attack, Reverse Mode)
• Move count and session tracking (number of moves per game)
• Undo system data and usage tracking (tier-specific)
• Milestone progression (achievement levels and checkpoints)
• Game statistics (personal best scores, play time, mode-specific stats)

USER PREFERENCES:
• Theme selection (active visual theme, tier-restricted)
• Numbering system preferences (display format preferences)
• Privacy settings (user consent preferences)
• App configuration (user interface customizations)
• Subscription preferences (Pro feature settings)

SUBSCRIPTION DATA (Encrypted):
• Subscription status (active, trial, expired, cancelled)
• Subscription type (Monthly or yearly Pro subscription)
• Subscription metadata (purchase date, expiration date, renewal status)
• Entitlements (feature access permissions)
• RevenueCat customer ID (anonymous user identifier for subscription management)

PRIVACY COMPLIANCE IMPLEMENTATION:
• GDPR Compliance: Full GDPR compliance system implemented
• CCPA Compliance: California privacy law compliance
• Data retention period: 3 years (1095 days)
• User consent tracking: Explicit consent recording
• Data processing logs: Audit trail of all data operations
      `.trim()
    },
    {
      id: 'permissions',
      title: 'Permissions & Device Access',
      order: 3,
      content: `
REQUIRED PERMISSIONS:

iOS Entitlements:
• In-App Purchases: com.apple.developer.in-app-payments
  Purpose: Subscription management (Pro monthly/yearly)
• Game Center: Social gaming integration (optional)

Android Permissions:
• Internet Access: android.permission.INTERNET
  Purpose: Advertisement loading, subscription management, competitive mode features
• Billing: com.android.vending.BILLING
  Purpose: Google Play subscription management

iOS Privacy APIs Used:
• System Boot Time: Performance monitoring (35F9.1)
• User Defaults: App preferences storage (CA92.1)
• Disk Space: Storage management (E174.1, 85F4.1)
• File Timestamp: Game state management (C617.1)

All permissions are used solely for app functionality and user experience.
      `.trim()
    },
    {
      id: 'subscription-monetization',
      title: 'Subscription & Monetization Services',
      order: 4,
      content: `
REVENUECAT INTEGRATION:
• Service Provider: RevenueCat (https://www.revenuecat.com/)
• Purpose: Subscription management and analytics
• Data Shared: Anonymous user identifier, subscription events, platform information
• Privacy Policy: https://www.revenuecat.com/privacy
• Data Processing: RevenueCat processes subscription data on our behalf

SUBSCRIPTION PRODUCTS:
• Monthly Pro Subscription:
  Product ID: dev.carlosdaniel.blockzero.pro.month
  Price: $4.99 USD per month
  Features: No ads, unlimited undos, all game modes, premium themes
  Auto-renewal: Yes, Free trial: 7 days

• Yearly Pro Subscription:
  Product ID: dev.carlosdaniel.blockzero.pro.year
  Price: $39.99 USD per year
  Features: No ads, unlimited undos, all game modes, premium themes
  Auto-renewal: Yes, Free trial: 7 days
  Savings: 33% vs monthly subscription

SUBSCRIPTION DATA PROCESSING:
• Purchase Validation: Secure receipt validation through RevenueCat
• Subscription Status: Real-time subscription status monitoring
• Analytics: Anonymous subscription performance analytics
• Cross-Platform Sync: Subscription access across iOS and Android

GOOGLE MOBILE ADS INTEGRATION (Free Users Only):
• SDK: react-native-google-mobile-ads version 15.4.0
• Ad Types: Banner advertisements, interstitial ads, rewarded video ads
• iOS App ID: ca-app-pub-8636863724055857~3938317331
• Android App ID: ca-app-pub-8636863724055857~3938317332
• Ad Personalization: Subject to user privacy settings
• Data Sharing: Anonymous gameplay analytics for ad optimization
• Pro Users: No advertisements shown for Pro subscribers

THIRD-PARTY DEPENDENCIES:
• AsyncStorage: Local data persistence
• RevenueCat: Subscription management and analytics
• Google Mobile Ads: Advertisement serving (free users only)
• React Native Keychain: Secure data storage (iOS)
      `.trim()
    },
    {
      id: 'online-features',
      title: 'Online Features & Data Transmission',
      order: 5,
      content: `
PRO-ONLY ONLINE FEATURES:
• Challenge Mode: Online leaderboards and global rankings
• Achievement System: Cross-platform achievement tracking
• Subscription Sync: Real-time subscription status across devices

NETWORK COMMUNICATIONS:
• Ad Loading: Requests to Google Ad servers (free users only)
• Subscription Management: Communication with RevenueCat services
• Purchase Validation: Secure validation with App Store/Play Store
• Analytics: Anonymous usage statistics (opt-in)

DATA TRANSMITTED:
• Subscription receipts: For validation purposes only
• Anonymous game statistics: Score, level progression, mode usage
• Device information: OS version, app version for compatibility
• RevenueCat anonymous ID: For subscription management
• NO personal identifiers: Email addresses, names, or contacts

GAME MODE DATA COLLECTION:

Free Tier Data Collection:
• Classic Mode: Game state, scores, preferences
• Usage Analytics: Feature usage, upgrade prompt interactions
• Ad Interaction: Ad impression and click data (anonymous)
• Conversion Tracking: Anonymous funnel analysis for subscription conversion

Pro Tier Data Collection:
• All Game Modes: Enhanced gameplay data for Pro features
• Feature Usage: Premium feature utilization
• Subscription Analytics: Anonymous subscription satisfaction metrics
• No Ad Data: No advertisement interaction data for Pro users

Mode-Specific Data:
• Challenge Mode: Leaderboard scores, rankings (Pro only)
• Time Attack: Best times, speed metrics (Pro only)
• Reverse Mode: Completion rates, unique gameplay patterns (Pro only)
• Theme Usage: Premium theme preferences (Pro only)
      `.trim()
    },
    {
      id: 'user-rights',
      title: 'User Rights & Data Control',
      order: 6,
      content: `
GDPR RIGHTS IMPLEMENTATION:
• Right to Access: Export all user data including subscription information
• Right to Rectification: Modify stored preferences and settings
• Right to Erasure: Delete all user data including subscription history
• Right to Portability: Export data in JSON format
• Right to Restrict Processing: Opt-out of analytics and ad personalization
• Right to Object: Disable data collection while maintaining core functionality

CCPA RIGHTS IMPLEMENTATION:
• Right to Know: Full disclosure of data collection including subscription data
• Right to Delete: Complete data deletion including RevenueCat data
• Right to Opt-Out: Stop non-essential data processing
• Non-Discrimination: Full app functionality without data sharing

USER CONTROLS AVAILABLE:
• Privacy Settings Menu: In-app privacy control panel
• Subscription Management: Easy subscription cancellation and management
• Data Export Feature: Complete user data download
• Data Deletion: One-click data removal
• Consent Management: Granular permission controls
• Ad Personalization: Control over ad targeting (free users)
      `.trim()
    },
    {
      id: 'security',
      title: 'Security & Data Protection',
      order: 7,
      content: `
DATA SECURITY MEASURES:
• Local Encryption: Sensitive data encrypted at rest
• Secure Communication: HTTPS for all network requests
• Subscription Security: Secure receipt validation and fraud prevention
• RevenueCat Security: Industry-standard subscription data protection
• Anti-Cheat Systems: Game integrity protection

DATA MINIMIZATION:
• Necessary Data Only: Only collect essential game and subscription data
• Anonymous Analytics: No personally identifiable information
• Temporary Storage: Cache cleared on app closure
• Automatic Cleanup: Old data automatically removed
• Subscription Data Limits: Only essential subscription information stored

DATA BREACH RESPONSE:
• Detection Systems: Automated security monitoring
• Response Protocol: 72-hour notification requirement
• User Notification: Direct user communication plan
• Data Recovery: Backup and recovery procedures
• RevenueCat Partnership: Coordinated response for subscription data
      `.trim()
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy (COPPA)",
      order: 8,
      content: `
AGE-APPROPRIATE DESIGN:
• Age Rating: 4+ (suitable for all ages)
• No Personal Data Collection: No child-specific data gathered
• Parental Controls: Game suitable without additional controls
• Educational Value: Cognitive puzzle-solving benefits
• Subscription Clarity: Clear subscription information for parents

COPPA COMPLIANCE:
• No Personal Information: No names, addresses, or contact info
• No Behavioral Tracking: No cross-app usage monitoring
• Safe Gaming Environment: No social features or chat
• Transparent Subscriptions: Clear subscription and billing information
• Parental Purchase Controls: Platform-level parental controls supported

We do not knowingly collect personal information from children under 13.
      `.trim()
    },
    {
      id: 'analytics-performance',
      title: 'Analytics & Performance Data',
      order: 9,
      content: `
ANONYMOUS ANALYTICS COLLECTION:
• Game Performance: Frame rates, loading times, crash reports
• Feature Usage: Anonymous usage of game modes and features
• Subscription Funnel: Anonymous conversion tracking
• User Engagement: Session length, retention rates
• Platform Performance: Device compatibility and performance metrics

ANALYTICS PROVIDERS:
• RevenueCat Analytics: Subscription performance and conversion metrics
• Google Analytics: Anonymous app usage analytics (opt-in)
• Custom Analytics: Internal performance monitoring
• Crash Reporting: Anonymous crash and error reporting

DATA USAGE:
• Product Improvement: Feature development and optimization
• Performance Optimization: App speed and stability improvements
• Subscription Optimization: Anonymous A/B testing for subscription flow
• Bug Fixing: Anonymous error tracking and resolution
      `.trim()
    },
    {
      id: 'geographic-legal',
      title: 'Geographic & Legal Considerations',
      order: 10,
      content: `
DATA PROCESSING LOCATIONS:
• Primary Storage: User's device (local storage)
• Cloud Services: Apple iCloud (iOS), Google Play Services (Android)
• RevenueCat: US-based subscription processing with global infrastructure
• Ad Servers: Google Ad network (global CDN) - free users only
• Analytics: Anonymous data processing (US/EU servers)

REGIONAL COMPLIANCE:
• GDPR (EU): Full compliance with European privacy regulations
• CCPA (California): California Consumer Privacy Act compliance
• COPPA (US): Children's Online Privacy Protection Act compliance
• App Store Guidelines: Apple App Store privacy requirements
• Google Play Policy: Google Play privacy and subscription policies

SUBSCRIPTION LEGAL REQUIREMENTS:
• Auto-Renewal Disclosure: Clear auto-renewal terms and conditions
• Cancellation Rights: Easy cancellation process with clear instructions
• Billing Transparency: Clear pricing and billing cycle information
• Regional Pricing: Localized pricing and tax handling
• Refund Policy: Clear refund terms and process
      `.trim()
    },
    {
      id: 'data-retention',
      title: 'Data Retention & Deletion',
      order: 11,
      content: `
DATA RETENTION PERIODS:
• Game Data: 3 years from last app usage
• Subscription Data: 7 years as required by financial regulations
• Analytics Data: 2 years for performance analysis
• Crash Reports: 1 year for stability improvements
• User Preferences: Retained until user deletion request

DATA DELETION PROCESS:
• User-Initiated: Immediate deletion via in-app settings
• Account Deletion: Complete data removal including subscription history
• RevenueCat Coordination: Coordinated deletion with subscription provider
• Backup Removal: Deletion from all backup systems
• Verification: Confirmation of complete data removal

SUBSCRIPTION DATA HANDLING:
• Active Subscriptions: Data retained for service delivery
• Cancelled Subscriptions: Historical data retained for customer support
• Expired Subscriptions: Data archived according to legal requirements
• Refunded Subscriptions: Transaction data retained for financial compliance
      `.trim()
    },
    {
      id: 'platform-specific',
      title: 'Platform-Specific Privacy Information',
      order: 12,
      content: `
iOS PRIVACY REQUIREMENTS:
• App Store Privacy Labels: Accurate data collection disclosure
• ATT (iOS 14.5+): App Tracking Transparency compliance
• Privacy Manifests: Detailed privacy API usage disclosure
• Family Sharing: Subscription sharing privacy considerations

ANDROID PRIVACY REQUIREMENTS:
• Data Safety: Google Play data safety form compliance
• Advertising ID: Proper handling of Android advertising identifier
• Permissions: Minimal permission requests with clear justification
• Data Sharing: Transparent third-party data sharing disclosure
      `.trim()
    },
    {
      id: 'subscription-privacy',
      title: 'Subscription-Specific Privacy Considerations',
      order: 13,
      content: `
SUBSCRIPTION PRIVACY FEATURES:
• Anonymous Subscriptions: No personal information required beyond platform requirements
• Cross-Platform Privacy: Consistent privacy protection across iOS and Android
• Subscription Analytics: Anonymous subscription performance tracking
• Revenue Optimization: Anonymous A/B testing for subscription experience

PRO USER PRIVACY BENEFITS:
• Ad-Free Experience: No advertisement tracking or data collection
• Enhanced Privacy: Reduced data collection compared to free users
• Subscription Security: Industry-standard payment processing security
• Privacy Priority: Premium users receive enhanced privacy protection

FREE USER PRIVACY CONSIDERATIONS:
• Advertisement Data: Anonymous ad interaction tracking
• Conversion Tracking: Anonymous funnel analysis for subscription conversion
• Limited Data Collection: Minimal data collection for essential functionality
• Upgrade Privacy: Clear privacy benefits communicated for Pro subscription
      `.trim()
    },
    {
      id: 'contact',
      title: 'Privacy Contact Information',
      order: 14,
      content: `
DATA PROTECTION OFFICER:
• Contact: privacy@blockzero.com
• Purpose: Privacy inquiries, data requests, compliance questions
• Response Time: 72 hours for initial response
• Languages: English, Spanish, Portuguese

CUSTOMER SUPPORT:
• General Support: support@blockzero.com
• Subscription Support: billing@blockzero.com
• Technical Issues: tech@blockzero.com
• Response Time: 24 hours for customer inquiries

LEGAL AND COMPLIANCE:
• Legal Inquiries: legal@blockzero.com
• Data Breach Reporting: security@blockzero.com
• Regulatory Compliance: compliance@blockzero.com
• Emergency Contact: 24/7 response for critical privacy issues

PRIVACY REQUESTS:
To exercise your privacy rights, please email us with:
• Your request type (access, deletion, correction)
• Device information (iOS/Android, app version)
• Any relevant details to help us locate your data

We will respond to privacy requests within 30 days.

This privacy policy information reflects BlockZero's commitment to user privacy and transparent data practices. Our subscription model is designed to provide enhanced privacy benefits to Pro users while maintaining strict privacy standards for all users.
      `.trim()
    }
  ]
}; 