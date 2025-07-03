# BlockZero Privacy Policy Information Guide

## 📋 Overview

This document contains comprehensive information about the BlockZero mobile application to assist in creating a compliant privacy policy page. BlockZero is a modern 2048-style puzzle game with subscription-based monetization, multiple game modes, and advertising integration for free users.

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
- **Game mode preferences**: Classic, Challenge, Time Attack, Reverse Mode
- **Move count and session tracking**: Number of moves per game
- **Undo system data**: Available undos, usage tracking (tier-specific)
- **Milestone progression**: Achievement levels and checkpoints
- **Game statistics**: Personal best scores, play time, mode-specific stats

#### User Preferences
- **Theme selection**: Active visual theme (tier-restricted)
- **Numbering system preferences**: Display format preferences
- **Privacy settings**: User consent preferences
- **App configuration**: User interface customizations
- **Subscription preferences**: Pro feature settings

#### Subscription Data (Encrypted)
- **Subscription status**: Active, trial, expired, cancelled
- **Subscription type**: Monthly or yearly Pro subscription
- **Subscription metadata**: Purchase date, expiration date, renewal status
- **Entitlements**: Feature access permissions
- **RevenueCat customer ID**: Anonymous user identifier for subscription management

### Privacy Compliance Implementation
- **GDPR Compliance**: Full GDPR compliance system implemented
- **CCPA Compliance**: California privacy law compliance
- **Data retention period**: 3 years (1095 days)
- **User consent tracking**: Explicit consent recording
- **Data processing logs**: Audit trail of all data operations

---

## 🔐 Permissions & Device Access

### iOS Entitlements
- **In-App Purchases**: `com.apple.developer.in-app-payments`
  - Purpose: Subscription management (Pro monthly/yearly)
- **Game Center**: Social gaming integration (optional)

### Android Permissions
- **Internet Access**: `android.permission.INTERNET`
  - Purpose: Advertisement loading, subscription management, competitive mode features
- **Billing**: `com.android.vending.BILLING`
  - Purpose: Google Play subscription management

### iOS Privacy APIs Used
- **System Boot Time**: Performance monitoring (35F9.1)
- **User Defaults**: App preferences storage (CA92.1)
- **Disk Space**: Storage management (E174.1, 85F4.1)
- **File Timestamp**: Game state management (C617.1)

---

## 💰 Subscription & Monetization Services

### RevenueCat Integration
- **Service Provider**: RevenueCat (https://www.revenuecat.com/)
- **Purpose**: Subscription management and analytics
- **Data Shared**: Anonymous user identifier, subscription events, platform information
- **Privacy Policy**: https://www.revenuecat.com/privacy
- **Data Processing**: RevenueCat processes subscription data on our behalf

### Subscription Products
- **Monthly Pro Subscription**: 
  - Product ID: `dev.carlosdaniel.blockzero.pro.month`
  - Price: $4.99 USD per month
  - Features: No ads, unlimited undos, all game modes, premium themes
  - Auto-renewal: Yes
  - Free trial: 7 days

- **Yearly Pro Subscription**: 
  - Product ID: `dev.carlosdaniel.blockzero.pro.year`
  - Price: $39.99 USD per year
  - Features: No ads, unlimited undos, all game modes, premium themes
  - Auto-renewal: Yes
  - Free trial: 7 days
  - Savings: 33% vs monthly subscription

### Subscription Data Processing
- **Purchase Validation**: Secure receipt validation through RevenueCat
- **Subscription Status**: Real-time subscription status monitoring
- **Analytics**: Anonymous subscription performance analytics
- **Cross-Platform Sync**: Subscription access across iOS and Android

### Google Mobile Ads Integration (Free Users Only)
- **SDK**: `react-native-google-mobile-ads` version 15.4.0
- **Ad Types**: Banner advertisements, interstitial ads, rewarded video ads
- **iOS App ID**: `ca-app-pub-8636863724055857~3938317331`
- **Android App ID**: `ca-app-pub-8636863724055857~3938317332`
- **Ad Personalization**: Subject to user privacy settings
- **Data Sharing**: Anonymous gameplay analytics for ad optimization
- **Pro Users**: No advertisements shown for Pro subscribers

### Third-Party Dependencies
- **AsyncStorage**: Local data persistence
- **RevenueCat**: Subscription management and analytics
- **Google Mobile Ads**: Advertisement serving (free users only)
- **React Native Keychain**: Secure data storage (iOS)

---

## 🌐 Online Features & Data Transmission

### Pro-Only Online Features
- **Challenge Mode**: Online leaderboards and global rankings
- **Achievement System**: Cross-platform achievement tracking
- **Subscription Sync**: Real-time subscription status across devices

### Network Communications
- **Ad Loading**: Requests to Google Ad servers (free users only)
- **Subscription Management**: Communication with RevenueCat services
- **Purchase Validation**: Secure validation with App Store/Play Store
- **Analytics**: Anonymous usage statistics (opt-in)

### Data Transmitted
- **Subscription receipts**: For validation purposes only
- **Anonymous game statistics**: Score, level progression, mode usage
- **Device information**: OS version, app version for compatibility
- **RevenueCat anonymous ID**: For subscription management
- **No personal identifiers**: Email addresses, names, or contacts

---

## 🎮 Game Mode Data Collection

### Free Tier Data Collection
- **Classic Mode**: Game state, scores, preferences
- **Usage Analytics**: Feature usage, upgrade prompt interactions
- **Ad Interaction**: Ad impression and click data (anonymous)
- **Conversion Tracking**: Anonymous funnel analysis for subscription conversion

### Pro Tier Data Collection
- **All Game Modes**: Enhanced gameplay data for Pro features
- **Feature Usage**: Premium feature utilization
- **Subscription Analytics**: Anonymous subscription satisfaction metrics
- **No Ad Data**: No advertisement interaction data for Pro users

### Mode-Specific Data
- **Challenge Mode**: Leaderboard scores, rankings (Pro only)
- **Time Attack**: Best times, speed metrics (Pro only)
- **Reverse Mode**: Completion rates, unique gameplay patterns (Pro only)
- **Theme Usage**: Premium theme preferences (Pro only)

---

## 👤 User Rights & Data Control

### GDPR Rights Implementation
- **Right to Access**: Export all user data including subscription information
- **Right to Rectification**: Modify stored preferences and settings
- **Right to Erasure**: Delete all user data including subscription history
- **Right to Portability**: Export data in JSON format
- **Right to Restrict Processing**: Opt-out of analytics and ad personalization
- **Right to Object**: Disable data collection while maintaining core functionality

### CCPA Rights Implementation
- **Right to Know**: Full disclosure of data collection including subscription data
- **Right to Delete**: Complete data deletion including RevenueCat data
- **Right to Opt-Out**: Stop non-essential data processing
- **Non-Discrimination**: Full app functionality without data sharing

### User Controls Available
- **Privacy Settings Menu**: In-app privacy control panel
- **Subscription Management**: Easy subscription cancellation and management
- **Data Export Feature**: Complete user data download
- **Data Deletion**: One-click data removal
- **Consent Management**: Granular permission controls
- **Ad Personalization**: Control over ad targeting (free users)

---

## 🔒 Security & Data Protection

### Data Security Measures
- **Local Encryption**: Sensitive data encrypted at rest
- **Secure Communication**: HTTPS for all network requests
- **Subscription Security**: Secure receipt validation and fraud prevention
- **RevenueCat Security**: Industry-standard subscription data protection
- **Anti-Cheat Systems**: Game integrity protection

### Data Minimization
- **Necessary Data Only**: Only collect essential game and subscription data
- **Anonymous Analytics**: No personally identifiable information
- **Temporary Storage**: Cache cleared on app closure
- **Automatic Cleanup**: Old data automatically removed
- **Subscription Data Limits**: Only essential subscription information stored

### Data Breach Response
- **Detection Systems**: Automated security monitoring
- **Response Protocol**: 72-hour notification requirement
- **User Notification**: Direct user communication plan
- **Data Recovery**: Backup and recovery procedures
- **RevenueCat Partnership**: Coordinated response for subscription data

---

## 🎯 Children's Privacy (COPPA)

### Age-Appropriate Design
- **Age Rating**: 4+ (suitable for all ages)
- **No Personal Data Collection**: No child-specific data gathered
- **Parental Controls**: Game suitable without additional controls
- **Educational Value**: Cognitive puzzle-solving benefits
- **Subscription Clarity**: Clear subscription information for parents

### COPPA Compliance
- **No Personal Information**: No names, addresses, or contact info
- **No Behavioral Tracking**: No cross-app usage monitoring
- **Safe Gaming Environment**: No social features or chat
- **Transparent Subscriptions**: Clear subscription and billing information
- **Parental Purchase Controls**: Platform-level parental controls supported

---

## 📊 Analytics & Performance Data

### Anonymous Analytics Collection
- **Game Performance**: Frame rates, loading times, crash reports
- **Feature Usage**: Anonymous usage of game modes and features
- **Subscription Funnel**: Anonymous conversion tracking
- **User Engagement**: Session length, retention rates
- **Platform Performance**: Device compatibility and performance metrics

### Analytics Providers
- **RevenueCat Analytics**: Subscription performance and conversion metrics
- **Google Analytics**: Anonymous app usage analytics (opt-in)
- **Custom Analytics**: Internal performance monitoring
- **Crash Reporting**: Anonymous crash and error reporting

### Data Usage
- **Product Improvement**: Feature development and optimization
- **Performance Optimization**: App speed and stability improvements
- **Subscription Optimization**: Anonymous A/B testing for subscription flow
- **Bug Fixing**: Anonymous error tracking and resolution

---

## 📍 Geographic & Legal Considerations

### Data Processing Locations
- **Primary Storage**: User's device (local storage)
- **Cloud Services**: Apple iCloud (iOS), Google Play Services (Android)
- **RevenueCat**: US-based subscription processing with global infrastructure
- **Ad Servers**: Google Ad network (global CDN) - free users only
- **Analytics**: Anonymous data processing (US/EU servers)

### Regional Compliance
- **GDPR (EU)**: Full compliance with European privacy regulations
- **CCPA (California)**: California Consumer Privacy Act compliance
- **COPPA (US)**: Children's Online Privacy Protection Act compliance
- **App Store Guidelines**: Apple App Store privacy requirements
- **Google Play Policy**: Google Play privacy and subscription policies

### Subscription Legal Requirements
- **Auto-Renewal Disclosure**: Clear auto-renewal terms and conditions
- **Cancellation Rights**: Easy cancellation process with clear instructions
- **Billing Transparency**: Clear pricing and billing cycle information
- **Regional Pricing**: Localized pricing and tax handling
- **Refund Policy**: Clear refund terms and process

---

## 🔄 Data Retention & Deletion

### Data Retention Periods
- **Game Data**: 3 years from last app usage
- **Subscription Data**: 7 years as required by financial regulations
- **Analytics Data**: 2 years for performance analysis
- **Crash Reports**: 1 year for stability improvements
- **User Preferences**: Retained until user deletion request

### Data Deletion Process
- **User-Initiated**: Immediate deletion via in-app settings
- **Account Deletion**: Complete data removal including subscription history
- **RevenueCat Coordination**: Coordinated deletion with subscription provider
- **Backup Removal**: Deletion from all backup systems
- **Verification**: Confirmation of complete data removal

### Subscription Data Handling
- **Active Subscriptions**: Data retained for service delivery
- **Cancelled Subscriptions**: Historical data retained for customer support
- **Expired Subscriptions**: Data archived according to legal requirements
- **Refunded Subscriptions**: Transaction data retained for financial compliance

---

## 📱 Platform-Specific Privacy Information

### iOS Privacy Requirements
- **App Store Privacy Labels**: Accurate data collection disclosure
- **ATT (iOS 14.5+)**: App Tracking Transparency compliance
- **Privacy Manifests**: Detailed privacy API usage disclosure
- **Family Sharing**: Subscription sharing privacy considerations

### Android Privacy Requirements
- **Data Safety**: Google Play data safety form compliance
- **Advertising ID**: Proper handling of Android advertising identifier
- **Permissions**: Minimal permission requests with clear justification
- **Data Sharing**: Transparent third-party data sharing disclosure

---

## 🎯 Subscription-Specific Privacy Considerations

### Subscription Privacy Features
- **Anonymous Subscriptions**: No personal information required beyond platform requirements
- **Cross-Platform Privacy**: Consistent privacy protection across iOS and Android
- **Subscription Analytics**: Anonymous subscription performance tracking
- **Revenue Optimization**: Anonymous A/B testing for subscription experience

### Pro User Privacy Benefits
- **Ad-Free Experience**: No advertisement tracking or data collection
- **Enhanced Privacy**: Reduced data collection compared to free users
- **Subscription Security**: Industry-standard payment processing security
- **Privacy Priority**: Premium users receive enhanced privacy protection

### Free User Privacy Considerations
- **Advertisement Data**: Anonymous ad interaction tracking
- **Conversion Tracking**: Anonymous funnel analysis for subscription conversion
- **Limited Data Collection**: Minimal data collection for essential functionality
- **Upgrade Privacy**: Clear privacy benefits communicated for Pro subscription

---

## 📧 Privacy Contact Information

### Data Protection Officer
- **Contact**: `privacy@blockzero.com`
- **Purpose**: Privacy inquiries, data requests, compliance questions
- **Response Time**: 72 hours for initial response
- **Languages**: English, Spanish, Portuguese

### Customer Support
- **General Support**: `support@blockzero.com`
- **Subscription Support**: `billing@blockzero.com`
- **Technical Issues**: `tech@blockzero.com`
- **Response Time**: 24 hours for customer inquiries

### Legal and Compliance
- **Legal Inquiries**: `legal@blockzero.com`
- **Data Breach Reporting**: `security@blockzero.com`
- **Regulatory Compliance**: `compliance@blockzero.com`
- **Emergency Contact**: 24/7 response for critical privacy issues

---

**IMPORTANT**: This privacy policy information reflects BlockZero's commitment to user privacy and transparent data practices. Our subscription model is designed to provide enhanced privacy benefits to Pro users while maintaining strict privacy standards for all users. 