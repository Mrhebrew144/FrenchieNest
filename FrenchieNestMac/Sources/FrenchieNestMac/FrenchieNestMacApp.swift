// Copyright © 2026 TribulePackEnterprise LLC. All rights reserved.
import SwiftUI

@main
struct FrenchieNestMacApp: App {
    var body: some Scene {
        WindowGroup {
            FrenchieNestView()
                .frame(minWidth: 1000, minHeight: 680)
        }
        .windowTitle("FrenchieNest")
    }
}

private enum AppPage: String, CaseIterable, Identifiable {
    case dashboard = "Dashboard"
    case puppies = "Puppies"
    case parent = "Parent Frenchie"
    case health = "Health & Growth"
    case reminders = "Reminders"
    case settings = "Settings"

    var id: String { rawValue }

    var icon: String {
        switch self {
        case .dashboard: "rectangle.grid.2x2.fill"
        case .puppies: "pawprint.fill"
        case .parent: "heart.fill"
        case .health: "cross.case.fill"
        case .reminders: "bell.fill"
        case .settings: "gearshape.fill"
        }
    }
}

private struct FrenchieNestView: View {
    @State private var selection: AppPage? = .dashboard

    var body: some View {
        NavigationSplitView {
            List(AppPage.allCases, selection: $selection) { page in
                Label(page.rawValue, systemImage: page.icon)
                    .tag(page as AppPage?)
            }
            .listStyle(.sidebar)
            .navigationTitle("FrenchieNest")
        } detail: {
            Group {
                switch selection ?? .dashboard {
                case .dashboard: DashboardPage()
                case .puppies: PuppiesPage()
                case .parent: ParentPage()
                case .health: HealthPage()
                case .reminders: RemindersPage()
                case .settings: SettingsPage()
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Palette.canvas)
        }
        .tint(Palette.brown)
    }
}

private enum Palette {
    static let canvas = Color(red: 0.975, green: 0.955, blue: 0.935)
    static let card = Color(red: 1.0, green: 0.992, blue: 0.98)
    static let blush = Color(red: 0.91, green: 0.78, blue: 0.74)
    static let mauve = Color(red: 0.85, green: 0.78, blue: 0.87)
    static let sage = Color(red: 0.77, green: 0.85, blue: 0.78)
    static let brown = Color(red: 0.22, green: 0.16, blue: 0.15)
    static let muted = Color(red: 0.43, green: 0.38, blue: 0.36)
}

private struct DashboardPage: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                PageHeading(title: "Good morning", subtitle: "Your Frenchie family at a glance.")
                HStack(spacing: 16) {
                    MetricCard(title: "Puppies", value: "3", symbol: "pawprint.fill", color: Palette.blush)
                    MetricCard(title: "Latest weight", value: "11.4 oz", symbol: "scalemass.fill", color: Palette.mauve)
                    MetricCard(title: "Next check", value: "4:00 PM", symbol: "clock.fill", color: Palette.sage)
                }
                HStack(alignment: .top, spacing: 18) {
                    Panel(title: "Mother Frenchie", subtitle: "Luna · French Bulldog") {
                        InfoLine(label: "Health", value: "Healthy")
                        InfoLine(label: "Nursing", value: "Resting well")
                        InfoLine(label: "Next vet visit", value: "May 14")
                    }
                    Panel(title: "Today's care", subtitle: "Keep the routine on track") {
                        InfoLine(label: "6:00 AM", value: "Puppy feeding")
                        InfoLine(label: "8:30 AM", value: "Mother hydration check")
                        InfoLine(label: "4:00 PM", value: "Puppy weight check")
                    }
                }
                Panel(title: "Recent updates", subtitle: "Sample records — replace with your own") {
                    InfoLine(label: "Mochi", value: "Weight recorded · 11 oz")
                    InfoLine(label: "Luna", value: "Meal and water logged")
                    InfoLine(label: "Litter", value: "Nest warmth checked")
                }
                Text("Care tracking is not veterinary advice. Contact your veterinarian about health concerns.")
                    .font(.footnote)
                    .foregroundStyle(Palette.muted)
            }
            .padding(30)
        }
    }
}

private struct PuppiesPage: View {
    private let puppies = [
        Puppy(name: "Mochi", sex: "Female", color: "Brindle", weight: "11 oz", status: "Strong and alert"),
        Puppy(name: "Biscuit", sex: "Male", color: "Cream", weight: "10.8 oz", status: "Sleeping well"),
        Puppy(name: "Pepper", sex: "Female", color: "Fawn", weight: "11.4 oz", status: "Eating well")
    ]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                PageHeading(title: "Puppies", subtitle: "Newborn litter records · sample data")
                ForEach(puppies) { puppy in
                    HStack(spacing: 16) {
                        Image(systemName: "pawprint.fill")
                            .font(.system(size: 28))
                            .foregroundStyle(Palette.brown)
                            .frame(width: 76, height: 76)
                            .background(Palette.blush.opacity(0.55), in: RoundedRectangle(cornerRadius: 18))
                        VStack(alignment: .leading, spacing: 5) {
                            Text(puppy.name).font(.title3.bold()).foregroundStyle(Palette.brown)
                            Text("\(puppy.sex) · \(puppy.color) · \(puppy.weight)").foregroundStyle(Palette.muted)
                            Text(puppy.status).font(.subheadline.weight(.semibold)).foregroundStyle(.green)
                        }
                        Spacer()
                    }
                    .padding(18)
                    .background(Palette.card, in: RoundedRectangle(cornerRadius: 20))
                }
            }
            .padding(30)
        }
    }
}

private struct ParentPage: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                PageHeading(title: "Parent Frenchie", subtitle: "Mother care overview · sample data")
                Panel(title: "Luna", subtitle: "French Bulldog · 2 years") {
                    InfoLine(label: "Weight", value: "22 lbs")
                    InfoLine(label: "Health status", value: "Healthy")
                    InfoLine(label: "Appetite", value: "Strong appetite")
                    InfoLine(label: "Hydration", value: "Hydrated")
                    InfoLine(label: "Next vet visit", value: "May 14")
                }
                Panel(title: "Care checklist", subtitle: "Record checks with your veterinarian's guidance") {
                    InfoLine(label: "Nesting area", value: "Warm and quiet")
                    InfoLine(label: "Water", value: "Check and refresh regularly")
                    InfoLine(label: "Recovery", value: "Monitor and follow vet instructions")
                }
            }
            .padding(30)
        }
    }
}

private struct HealthPage: View {
    private let weights: [(String, CGFloat)] = [("Day 1", 48), ("Day 2", 58), ("Day 3", 72), ("Day 4", 86), ("Day 5", 104), ("Day 6", 122)]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                PageHeading(title: "Health & Growth", subtitle: "Enter actual measurements and review trends with your vet.")
                Panel(title: "Example growth chart", subtitle: "Illustrative sample values only") {
                    HStack(alignment: .bottom, spacing: 18) {
                        ForEach(weights, id: \.0) { item in
                            VStack(spacing: 8) {
                                RoundedRectangle(cornerRadius: 8)
                                    .fill(Palette.sage)
                                    .frame(width: 34, height: item.1)
                                Text(item.0).font(.caption).foregroundStyle(Palette.muted)
                            }
                        }
                    }
                    .frame(maxWidth: .infinity, minHeight: 160, alignment: .bottom)
                    .padding(.vertical, 8)
                }
                Panel(title: "Health notes", subtitle: "This sample app does not diagnose illness") {
                    InfoLine(label: "Temperature / behavior", value: "Add clinician-guided observations")
                    InfoLine(label: "Weight", value: "Record at consistent intervals")
                    InfoLine(label: "Concern", value: "Contact a veterinarian promptly")
                }
            }
            .padding(30)
        }
    }
}

private struct RemindersPage: View {
    private let reminders = [
        ("6:00 AM", "Feed puppies", "Routine"),
        ("8:30 AM", "Check mother's water", "Care"),
        ("4:00 PM", "Record puppy weights", "Tracking"),
        ("Next Thursday", "Vet appointment reminder", "Vet")
    ]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 14) {
                PageHeading(title: "Reminders", subtitle: "Sample schedule — confirm timing with your veterinarian.")
                ForEach(reminders, id: \.0) { reminder in
                    HStack {
                        Image(systemName: "bell.badge.fill").foregroundStyle(Palette.brown)
                        VStack(alignment: .leading, spacing: 4) {
                            Text(reminder.1).font(.headline).foregroundStyle(Palette.brown)
                            Text(reminder.0).font(.subheadline).foregroundStyle(Palette.muted)
                        }
                        Spacer()
                        Text(reminder.2).font(.caption.weight(.semibold)).padding(.horizontal, 10).padding(.vertical, 6)
                            .background(Palette.blush.opacity(0.45), in: Capsule())
                    }
                    .padding(16)
                    .background(Palette.card, in: RoundedRectangle(cornerRadius: 16))
                }
            }
            .padding(30)
        }
    }
}

private struct SettingsPage: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                PageHeading(title: "Settings", subtitle: "FrenchieNest · TribulePackEnterprise LLC")
                Panel(title: "About this starter", subtitle: "Local sample app; no account or cloud sync is configured") {
                    InfoLine(label: "App", value: "FrenchieNest for Mac")
                    InfoLine(label: "Data", value: "Sample content embedded in the app")
                    InfoLine(label: "Privacy", value: "No user data is transmitted by this starter")
                }
                Text("Replace the sample records with real information and add secure storage before using this app for ongoing care records.")
                    .foregroundStyle(Palette.muted)
            }
            .padding(30)
        }
    }
}

private struct Puppy: Identifiable {
    let id = UUID()
    let name: String
    let sex: String
    let color: String
    let weight: String
    let status: String
}

private struct PageHeading: View {
    let title: String
    let subtitle: String

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(title).font(.system(size: 32, weight: .bold, design: .rounded)).foregroundStyle(Palette.brown)
            Text(subtitle).font(.body).foregroundStyle(Palette.muted)
        }
        .padding(.bottom, 4)
    }
}

private struct MetricCard: View {
    let title: String
    let value: String
    let symbol: String
    let color: Color

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Image(systemName: symbol).font(.title3).foregroundStyle(Palette.brown)
            Text(value).font(.title2.bold()).foregroundStyle(Palette.brown)
            Text(title).font(.subheadline).foregroundStyle(Palette.muted)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(18)
        .background(color.opacity(0.68), in: RoundedRectangle(cornerRadius: 20))
    }
}

private struct Panel<Content: View>: View {
    let title: String
    let subtitle: String
    @ViewBuilder let content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(title).font(.title3.bold()).foregroundStyle(Palette.brown)
            Text(subtitle).font(.subheadline).foregroundStyle(Palette.muted)
            Divider()
            content
        }
        .padding(20)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Palette.card, in: RoundedRectangle(cornerRadius: 20))
    }
}

private struct InfoLine: View {
    let label: String
    let value: String

    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            Text(label).foregroundStyle(Palette.muted)
            Spacer(minLength: 20)
            Text(value).fontWeight(.semibold).foregroundStyle(Palette.brown).multilineTextAlignment(.trailing)
        }
        .font(.subheadline)
    }
}
