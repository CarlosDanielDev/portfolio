export const privacyPolicyData = {
  id: 'blockzero-privacy-policy',
  title: 'BlockZero Privacy Policy',
  version: '1.3.7',
  lastUpdated: new Date('2025-06-25'),
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      order: 1,
      content: `
BlockZero is a modern 2048-style puzzle game with multiple game modes, in-app purchases, 
and advertising integration. This privacy policy explains how we collect, use, and protect 
your information when you use our mobile application.

App Details:
• App Name: BlockZero (Block Zero)
• Developer: Carlos Daniel (carlosdanieldev@gmail.com)  
• Platforms: iOS (12.0+) 
• Category: Games > Puzzle
• Target Audience: All ages (4+)
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
• Game mode preferences (Classic, Competitive, Timed)
• Move count and session tracking
• Undo system data and usage tracking
• Milestone progression and achievement levels
• Personal best scores and play time statistics

USER PREFERENCES:
• Theme selection and visual preferences
• Numbering system display format
• Privacy settings and user consent preferences
• App configuration and UI customizations

PURCHASE DATA (Encrypted):
• In-app purchase history and records
• Available undo balance from purchases
• Premium theme ownership and entitlements
• Purchase verification and receipt data
      `.trim()
    },
    {
      id: 'permissions',
      title: 'Permissions & Device Access',
      order: 3,
      content: `
REQUIRED PERMISSIONS:

iOS Entitlements:
• In-App Payments: com.apple.developer.in-app-payments
• Game Center: Social gaming integration (optional)


iOS Privacy APIs Used:
• System Boot Time: Performance monitoring (35F9.1)
• User Defaults: App preferences storage (CA92.1)  
• Disk Space: Storage management (E174.1, 85F4.1)
• File Timestamp: Game state management (C617.1)

All permissions are used solely for app functionality and user experience.
      `.trim()
    },
    {
      id: 'monetization',
      title: 'Monetization & Third-Party Services',
      order: 4,
      content: `
IN-APP PURCHASES (Apple Pay Integration):
• Product Types: Consumable purchases only
• Undo Products: Single Undo ($0.99), Undo Pack 5x ($2.99)
• Receipt Validation: Local validation with App Store
• Purchase Data: Transaction IDs, receipts, purchase dates
• Data Retention: Purchase history for restore functionality

GOOGLE MOBILE ADS INTEGRATION:
• SDK: react-native-google-mobile-ads v15.4.0
• Ad Types: Banner advertisements only
• iOS App ID: ca-app-pub-8636863724055857~3938317331
• Ad Personalization: Subject to user privacy settings
• Data Sharing: Anonymous gameplay analytics for ad optimization

THIRD-PARTY DEPENDENCIES:
• AsyncStorage: Local data persistence
• React Native IAP: In-app purchase processing
• Google Mobile Ads: Advertisement serving
• React Native Keychain: Secure data storage (iOS)
      `.trim()
    },
    {
      id: 'online-features',
      title: 'Online Features & Data Transmission',
      order: 5,
      content: `
COMPETITIVE MODE FEATURES:
• Online Leaderboards: Anonymous score submission
• Global Rankings: Comparative performance data
• Achievement System: Progress tracking and badges

NETWORK COMMUNICATIONS:
• Ad Loading: Requests to Google Ad servers
• Purchase Validation: Communication with App Store/Play Store
• Analytics: Anonymous usage statistics (opt-in)

DATA TRANSMITTED:
• Purchase receipts: For validation purposes only
• Anonymous game statistics: Score and level progression
• Device information: OS version, app version for compatibility
• NO personal identifiers: Email addresses, names, or contacts
      `.trim()
    },
    {
      id: 'user-rights',
      title: 'User Rights & Data Control',
      order: 6,
      content: `
GDPR RIGHTS IMPLEMENTATION:
• Right to Access: Export all your user data
• Right to Rectification: Modify stored preferences
• Right to Erasure: Delete all your user data
• Right to Portability: Export data in JSON format
• Right to Restrict Processing: Opt-out of analytics
• Right to Object: Disable data collection

CCPA RIGHTS IMPLEMENTATION:
• Right to Know: Full disclosure of data collection
• Right to Delete: Complete data deletion
• Right to Opt-Out: Stop data processing
• Non-Discrimination: Full app functionality without data sharing

USER CONTROLS AVAILABLE:
• Privacy Settings Menu: In-app privacy control panel
• Data Export Feature: Complete user data download
• Data Deletion: One-click data removal
• Consent Management: Granular permission controls
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
• Purchase Security: Receipt validation and fraud prevention
• Anti-Cheat Systems: Game integrity protection

DATA MINIMIZATION:
• Necessary Data Only: Only collect essential game data
• Anonymous Analytics: No personally identifiable information
• Temporary Storage: Cache cleared on app closure
• Automatic Cleanup: Old data automatically removed

DATA BREACH RESPONSE:
• Detection Systems: Automated security monitoring
• Response Protocol: 72-hour notification requirement
• User Notification: Direct user communication plan
• Data Recovery: Backup and recovery procedures
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

COPPA COMPLIANCE:
• No Personal Information: No names, addresses, or contact info
• No Behavioral Tracking: No cross-app usage monitoring
• Safe Gaming Environment: No social features or chat
• Transparent Purchases: Clear in-app purchase information

We do not knowingly collect personal information from children under 13.
      `.trim()
    },
    {
      id: 'data-lifecycle',
      title: 'Data Lifecycle Management',
      order: 9,
      content: `
DATA COLLECTION:
• Collection Purpose: Game functionality and user experience
• Legal Basis: User consent and legitimate interest
• Collection Method: Direct user interaction with app
• Data Categories: Game progress, preferences, purchase history

DATA PROCESSING:
• Processing Activities: Game state management, purchase processing
• Automated Decision Making: None implemented
• Profiling: No user profiling performed
• Data Analytics: Anonymous usage statistics only

DATA RETENTION:
• Game Data: Retained while app is installed
• Purchase Data: 7 years (tax/accounting requirements)
• Privacy Logs: 3 years (compliance audit trail)
• Temporary Data: Cleared on app closure/restart

DATA DELETION:
• User-Initiated: Immediate deletion via settings
• Automatic Cleanup: Expired data automatically removed
• Account Closure: Complete data removal within 30 days
• Technical Deletion: Secure data wiping procedures
      `.trim()
    },
    {
      id: 'contact',
      title: 'Contact Information',
      order: 10,
      content: `
For any privacy-related questions or requests, please contact us:

• Developer Email: carlosdanieldev@gmail.com
• Support Email: support@blockzero.com
• Website: https://carlosdaniel.dev/block-zero
• Privacy Policy: https://carlosdaniel.dev/block-zero-privacy-policy
• Terms of Service: https://carlosdaniel.dev/block-zero-user-privacy-policy

PRIVACY REQUESTS:
To exercise your privacy rights, please email us with:
• Your request type (access, deletion, correction)
• Device information (iOS/Android, app version)
• Any relevant details to help us locate your data

We will respond to privacy requests within 30 days.
      `.trim()
    }
  ]
}; 