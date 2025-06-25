# BlockZero Privacy Policy Information Guide

## 📋 Overview

This document contains comprehensive information about the BlockZero mobile application to assist in creating a compliant privacy policy page. BlockZero is a modern 2048-style puzzle game with multiple game modes, in-app purchases, and advertising integration.

---

## 🎮 App Basic Information

### Application Details
- **App Name**: BlockZero
- **Display Name**: Block Zero
- **Bundle ID**: 
  - iOS: `dev.carlosdaniel.blockzero`
  - Android: `com.bare2xlviii` (package name)
- **Developer**: Carlos Daniel (`carlosdanieldev@gmail.com`)
- **Platforms**: iOS (12.0+) and Android (API 24+)
- **App Category**: Games > Puzzle
- **Target Audience**: All ages (4+)

### Contact Information
- **Developer Email**: `carlosdanieldev@gmail.com`
- **Support Email**: `support@blockzero.com`
- **Website**: `https://carlosdaniel.dev/block-zero`
- **Terms of Service**: `https://carlosdaniel.dev/block-zero-user-privacy-policy`
- **Privacy Policy**: `https://carlosdaniel.dev/block-zero-privacy-policy`

---

## 📊 Data Collection & Storage

### Local Data Storage (AsyncStorage)
BlockZero stores the following data locally on the user's device:

#### Game State Data
- **Current game progress**: Board state, score, current goal
- **Game mode preferences**: Classic, Competitive, Timed
- **Move count and session tracking**: Number of moves per game
- **Undo system data**: Available undos, usage tracking
- **Milestone progression**: Achievement levels and checkpoints
- **Game statistics**: Personal best scores, play time

#### User Preferences
- **Theme selection**: Active visual theme
- **Numbering system preferences**: Display format preferences
- **Privacy settings**: User consent preferences
- **App configuration**: User interface customizations

#### Purchase Data (Encrypted)
- **Purchase history**: In-app purchase records
- **Undo balance**: Available undos from purchases
- **Premium theme ownership**: Purchased theme entitlements
- **Receipt validation data**: Purchase verification records

### Privacy Compliance Implementation
- **GDPR Compliance**: Full GDPR compliance system implemented
- **CCPA Compliance**: California privacy law compliance
- **Data retention period**: 3 years (1095 days)
- **User consent tracking**: Explicit consent recording
- **Data processing logs**: Audit trail of all data operations

---

## 🔐 Permissions & Device Access

### iOS Entitlements
- **In-App Payments**: `com.apple.developer.in-app-payments`
  - Merchant ID: `merchant.dev.carlosdaniel.blockzero`
- **Game Center**: Social gaming integration (optional)

### Android Permissions
- **Internet Access**: `android.permission.INTERNET`
  - Purpose: Advertisement loading, competitive mode features

### iOS Privacy APIs Used
- **System Boot Time**: Performance monitoring (35F9.1)
- **User Defaults**: App preferences storage (CA92.1)
- **Disk Space**: Storage management (E174.1, 85F4.1)
- **File Timestamp**: Game state management (C617.1)

---

## 💰 Monetization & Third-Party Services

### In-App Purchases (Apple Pay Integration)
- **Product Types**: Consumable purchases only
- **Undo Products**:
  - Single Undo: $0.99 USD
  - Undo Pack (5): $2.99 USD
- **Receipt Validation**: Local validation with App Store
- **Purchase Data**: Transaction IDs, receipts, purchase dates
- **Data Retention**: Purchase history for restore functionality

### Google Mobile Ads Integration
- **SDK**: `react-native-google-mobile-ads` version 15.4.0
- **Ad Types**: Banner advertisements only
- **iOS App ID**: `ca-app-pub-8636863724055857~3938317331`
- **Android App ID**: `ca-app-pub-xxxxxxxx~xxxxxxxx` (placeholder)
- **Ad Personalization**: Subject to user privacy settings
- **Data Sharing**: Anonymous gameplay analytics for ad optimization

### Third-Party Dependencies
- **AsyncStorage**: Local data persistence
- **React Native IAP**: In-app purchase processing
- **Google Mobile Ads**: Advertisement serving
- **React Native Keychain**: Secure data storage (iOS)

---

## 🌐 Online Features & Data Transmission

### Competitive Mode Features
- **Online Leaderboards**: Anonymous score submission
- **Global Rankings**: Comparative performance data
- **Achievement System**: Progress tracking and badges

### Network Communications
- **Ad Loading**: Requests to Google Ad servers
- **Purchase Validation**: Communication with App Store/Play Store
- **Analytics**: Anonymous usage statistics (opt-in)

### Data Transmitted
- **Purchase receipts**: For validation purposes only
- **Anonymous game statistics**: Score, level progression
- **Device information**: OS version, app version for compatibility
- **No personal identifiers**: Email addresses, names, or contacts

---

## 👤 User Rights & Data Control

### GDPR Rights Implementation
- **Right to Access**: Export all user data
- **Right to Rectification**: Modify stored preferences
- **Right to Erasure**: Delete all user data
- **Right to Portability**: Export data in JSON format
- **Right to Restrict Processing**: Opt-out of analytics
- **Right to Object**: Disable data collection

### CCPA Rights Implementation
- **Right to Know**: Full disclosure of data collection
- **Right to Delete**: Complete data deletion
- **Right to Opt-Out**: Stop data processing
- **Non-Discrimination**: Full app functionality without data sharing

### User Controls Available
- **Privacy Settings Menu**: In-app privacy control panel
- **Data Export Feature**: Complete user data download
- **Data Deletion**: One-click data removal
- **Consent Management**: Granual permission controls

---

## 🔒 Security & Data Protection

### Data Security Measures
- **Local Encryption**: Sensitive data encrypted at rest
- **Secure Communication**: HTTPS for all network requests
- **Purchase Security**: Receipt validation and fraud prevention
- **Anti-Cheat Systems**: Game integrity protection

### Data Minimization
- **Necessary Data Only**: Only collect essential game data
- **Anonymous Analytics**: No personally identifiable information
- **Temporary Storage**: Cache cleared on app closure
- **Automatic Cleanup**: Old data automatically removed

### Data Breach Response
- **Detection Systems**: Automated security monitoring
- **Response Protocol**: 72-hour notification requirement
- **User Notification**: Direct user communication plan
- **Data Recovery**: Backup and recovery procedures

---

## 🎯 Children's Privacy (COPPA)

### Age-Appropriate Design
- **Age Rating**: 4+ (suitable for all ages)
- **No Personal Data Collection**: No child-specific data gathered
- **Parental Controls**: Game suitable without additional controls
- **Educational Value**: Cognitive puzzle-solving benefits

### COPPA Compliance
- **No Personal Information**: No names, addresses, or contact info
- **No Behavioral Tracking**: No cross-app usage monitoring
- **Safe Gaming Environment**: No social features or chat
- **Transparent Purchases**: Clear in-app purchase information

---

## 📍 Geographic & Legal Considerations

### Data Processing Locations
- **Primary Storage**: User's device (local storage)
- **Cloud Services**: Apple iCloud (iOS), Google Play Services (Android)
- **Ad Servers**: Google Ad network (global CDN)
- **Analytics**: Anonymous data processing (US/EU servers)

### Legal Frameworks
- **GDPR**: European Union data protection
- **CCPA**: California Consumer Privacy Act
- **PIPEDA**: Canadian privacy law
- **App Store Guidelines**: Platform-specific requirements

### International Transfers
- **Minimal Cross-Border Data**: Most data stays on device
- **Standard Contractual Clauses**: For necessary transfers
- **Adequacy Decisions**: Compliance with regional requirements

---

## 🔄 Data Lifecycle Management

### Data Collection
- **Collection Purpose**: Game functionality and user experience
- **Legal Basis**: User consent and legitimate interest
- **Collection Method**: Direct user interaction with app
- **Data Categories**: Game progress, preferences, purchase history

### Data Processing
- **Processing Activities**: Game state management, purchase processing
- **Automated Decision Making**: None implemented
- **Profiling**: No user profiling performed
- **Data Analytics**: Anonymous usage statistics only

### Data Retention
- **Game Data**: Retained while app is installed
- **Purchase Data**: 7 years (tax/accounting requirements)
- **Privacy Logs**: 3 years (compliance audit trail)
- **Temporary Data**: Cleared on app closure/restart

### Data Deletion
- **User-Initiated**: Immediate deletion via settings
- **Automatic Cleanup**: Expired data automatically removed
- **Account Closure**: Complete data removal within 30 days
- **Technical Deletion**: Secure data wiping procedures

---

## 📱 Platform-Specific Considerations

### iOS Privacy Features
- **App Tracking Transparency**: User consent for tracking
- **Privacy Nutrition Labels**: App Store privacy summary
- **Data Privacy Report**: iOS system privacy reporting
- **Limited Ad Tracking**: Respect user LAT settings

### Android Privacy Features
- **Privacy Dashboard**: System-level privacy monitoring
- **Permission Manager**: Granular permission control
- **Data Safety**: Play Store privacy disclosure
- **Privacy Indicators**: Microphone/camera usage indicators

---

## 🎮 Game-Specific Data

### Game Modes
- **Classic Mode**: Offline, personal progress only
- **Competitive Mode**: Anonymous leaderboards, no personal data
- **Timed Mode**: Local scoring, no data transmission

### Milestone System
- **Achievement Tracking**: Local progress milestones
- **Checkpoint System**: Game state snapshots (local storage)
- **Level Progression**: Experience points and level calculation

### Undo System
- **Usage Tracking**: Undo count per game mode
- **Purchase Integration**: Premium undo availability
- **Anti-Cheat Measures**: Session-based undo limitations

---

## 📈 Analytics & Performance

### Performance Monitoring
- **App Performance**: Crash reporting, performance metrics
- **Game Analytics**: Anonymous gameplay statistics
- **User Experience**: Interface interaction patterns
- **Technical Metrics**: Loading times, error rates

### Anonymous Data Collection
- **Device Specifications**: OS version, device model
- **App Usage**: Session length, feature usage
- **Game Performance**: Score distributions, completion rates
- **Error Reporting**: Crash logs and bug reports

---

## 🎨 Customization & Themes

### Visual Themes
- **Theme Selection**: User preference storage
- **Premium Themes**: Purchase-gated visual content
- **Theme Assets**: Locally stored visual resources

### Numbering Systems
- **Display Preferences**: Number format customization
- **Cultural Adaptation**: Multiple numbering system support

---

## 📧 Communication & Updates

### Privacy Policy Updates
- **Notification Method**: In-app notification system
- **Update Frequency**: As needed for feature changes
- **Version Control**: Dated privacy policy versions
- **User Consent**: Re-consent for material changes

### User Communication
- **Support Requests**: Direct email communication
- **Privacy Inquiries**: Dedicated privacy contact
- **Data Requests**: Formal data request processing
- **Incident Notification**: Security breach communication

---

## ⚖️ Legal Compliance Summary

### Required Disclosures
- **Data Collection**: What data is collected and why
- **Data Usage**: How collected data is processed
- **Data Sharing**: Limited third-party sharing (ads only)
- **User Rights**: Complete user control information
- **Contact Information**: Clear privacy contact details

### Regulatory Compliance
- **GDPR Article 13/14**: Information provision requirements
- **CCPA Section 1798.100**: Consumer right to know
- **COPPA Rule**: Children's online privacy protection
- **Platform Guidelines**: Apple App Store and Google Play policies

---

## 🔍 Additional Notes for Privacy Policy Creation

### Key Privacy Principles
1. **Transparency**: Clear, understandable language
2. **User Control**: Comprehensive user choice options
3. **Data Minimization**: Only necessary data collection
4. **Security First**: Robust protection measures
5. **Compliance**: Full regulatory adherence

### Recommended Privacy Policy Sections
1. Information We Collect
2. How We Use Information
3. Information Sharing and Disclosure
4. Data Security
5. Your Privacy Rights
6. Children's Privacy
7. International Transfers
8. Changes to Privacy Policy
9. Contact Information

### Important Legal Disclaimers
- This app is designed with privacy-by-design principles
- Most data processing occurs locally on user devices
- Minimal personal data collection with explicit user consent
- Comprehensive user rights implementation with easy access controls

---

*This document provides comprehensive information for creating a GDPR, CCPA, and COPPA compliant privacy policy for BlockZero. For specific legal advice, consult with a privacy law attorney familiar with mobile app regulations.* 