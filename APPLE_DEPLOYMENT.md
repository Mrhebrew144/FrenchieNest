# Apple Deployment Guide for FrenchieNest

This guide explains how to run and publish the FrenchieNest app for iPhone and how to prepare a separate Mac desktop app if needed.

## 1) Requirements

For iPhone:
- macOS computer
- Xcode installed from the App Store
- Apple Developer account
- Node.js and npm
- Expo CLI

For Mac desktop:
- Xcode
- SwiftUI knowledge or React Native macOS
- Apple Developer account

## 2) iPhone setup

From the project root:

```bash
npm install
npx expo install react-native-safe-area-context react-native-screens
npx expo prebuild
```

Then open the iOS project in Xcode:

```bash
npx expo run:ios
```

This will generate the native iOS project and launch the app in the simulator or on a connected device.

### Apple signing

1. Open the generated iOS project in Xcode.
2. Select the project in the navigator.
3. Choose the app target.
4. Under Signing & Capabilities, select your Apple Developer team.
5. Set a unique bundle identifier.
6. Make sure the app is signed correctly.

### Run on a device

1. Connect the iPhone via USB.
2. Trust the device in Xcode.
3. Select the iPhone from the device list.
4. Click Run.

### Build for App Store / TestFlight

1. In Xcode, select a generic iOS device target.
2. Go to Product > Archive.
3. Choose the archive and upload to App Store Connect.
4. Submit to TestFlight or the App Store.

## 3) Recommended app identifiers

Use unique app identifiers such as:
- com.tribulepackenterprise.frenchienest
- com.tribulepackenterprise.frenchienest.mac

## 4) Mac app path

A standard Expo iOS app is not automatically a native Mac app. For Mac support, choose one of these paths:

### Option A: Native SwiftUI Mac app
Best for a polished desktop experience.

Create a separate Mac project in Xcode:
- File > New > Project
- Choose App
- Platform: macOS
- Use SwiftUI
- Reuse the same business logic and feature set

This is the best option if you want a professional breeder/admin desktop app.

### Option B: React Native macOS
Use a separate React Native macOS project if you want a shared design language across iPhone and Mac.

This is more flexible if you want to keep users in a single codebase style.

### Option C: Electron desktop app
Use this if you want quick desktop deployment without investing in native macOS UI work.

This is easiest for a desktop prototype, but it does not match native Mac quality as closely as SwiftUI.

## 5) Recommended architecture

For a real product rollout:
- iPhone app: React Native + Expo
- Mac app: SwiftUI native
- Backend: Supabase or Firebase
- Shared features: puppy profiles, clinics, reminders, health logs, breeder reports

## 6) Suggested app launch plan

Phase 1:
- iPhone mobile app
- TestFlight release
- breeder and parent onboarding

Phase 2:
- Mac desktop dashboard for breeders and veterinary admins
- report export and summarization
- notifications and reminders

Phase 3:
- advanced health tracking
- puppy growth analytics
- payment or subscription tier
- enterprise client dashboard

## 7) Important notes

- This project is a starter app and needs a proper Apple Developer account and signing profile to run on physical iPhone devices.
- The repo should remain under the TribulePackEnterprise LLC ownership notice.
- For App Store publishing, Apple will require a valid developer account and app metadata approval.

## 8) Next actions

1. Install Xcode.
2. Run the Expo app on the iPhone simulator.
3. Create a proper app bundle identifier.
4. Sign the app with your Apple Developer account.
5. Archive and upload to TestFlight.
6. If needed, create a separate native Mac app on a second Xcode project.

## 9) Quick command list

```bash
npm install
npx expo prebuild
npx expo run:ios
```

## 10) Support

For App Store or developer account issues, use the Apple Developer portal and Xcode signing tools. If you want to create a native Mac app version, this should be a separate project from the mobile app.
