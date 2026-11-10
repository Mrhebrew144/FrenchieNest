import SwiftUI

@main
struct FrenchieNestMacApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    @State private var selection: String = "Dashboard"

    var body: some View {
        NavigationSplitView {
            SidebarView(selection: $selection)
        } detail: {
            switch selection {
            case "Dashboard":
                DashboardView()
            case "Puppies":
                PuppiesView()
            case "Parent":
                ParentView()
            case "Health":
                HealthView()
            case "Reports":
                ReportsView()
            case "Settings":
                SettingsView()
            default:
                DashboardView()
            }
        }
        .frame(minWidth: 1200, minHeight: 800)
    }
}

struct SidebarView: View {
    @Binding var selection: String

    let items = [
        "Dashboard",
        "Puppies",
        "Parent",
        "Health",
        "Reports",
        "Settings"
    ]

    var body: some View {
        List(items, id: \ .self, selection: $selection) { item in
            Text(item)
                .font(.system(size: 15, weight: .semibold))
        }
        .frame(minWidth: 220)
        .background(Color(.sRGB, red: 0.97, green: 0.95, blue: 0.93))
    }
}

struct DashboardView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("FrenchieNest Dashboard")
                .font(.largeTitle)
                .fontWeight(.bold)

            HStack(spacing: 18) {
                StatCard(title: "Puppies", value: "3")
                StatCard(title: "Weight gain", value: "+1.2 oz")
                StatCard(title: "Health", value: "Stable")
            }

            HStack(alignment: .top, spacing: 18) {
                VStack(alignment: .leading, spacing: 12) {
                    Text("Mother Frenchie")
                        .font(.title2)
                        .fontWeight(.bold)

                    DetailRow(label: "Name", value: "Luna")
                    DetailRow(label: "Age", value: "2 years")
                    DetailRow(label: "Weight", value: "22 lbs")
                    DetailRow(label: "Status", value: "Healthy")
                }
                .padding()
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(Color(.sRGB, red: 1, green: 0.99, blue: 0.98))
                .cornerRadius(20)

                VStack(alignment: .leading, spacing: 12) {
                    Text("Recent Care Log")
                        .font(.title2)
                        .fontWeight(.bold)

                    LogItem(title: "Mochi gained weight", detail: "+0.4 oz since yesterday")
                    LogItem(title: "Mother feeding", detail: "Finished warm meal and drank water")
                    LogItem(title: "Sleep cycle", detail: "Puppies slept for 2.5 hours")
                }
                .padding()
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(Color(.sRGB, red: 1, green: 0.99, blue: 0.98))
                .cornerRadius(20)
            }

            Spacer()
        }
        .padding(30)
        .background(Color(.sRGB, red: 0.97, green: 0.95, blue: 0.93))
    }
}

struct PuppiesView: View {
    let puppies = [
        PuppyRow(name: "Mochi", age: "3 days", weight: "11 oz", color: "Brindle", status: "Strong and alert"),
        PuppyRow(name: "Biscuit", age: "3 days", weight: "10.8 oz", color: "Cream", status: "Sleeping well"),
        PuppyRow(name: "Pepper", age: "3 days", weight: "11.4 oz", color: "Fawn", status: "Eating well")
    ]

    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("Puppies")
                .font(.largeTitle)
                .fontWeight(.bold)

            ForEach(puppies, id: \ .name) { puppy in
                HStack {
                    RoundedRectangle(cornerRadius: 16)
                        .fill(Color(.sRGB, red: 0.9, green: 0.8, blue: 0.8))
                        .frame(width: 120, height: 120)

                    VStack(alignment: .leading, spacing: 6) {
                        Text(puppy.name)
                            .font(.title2)
                            .fontWeight(.bold)
                        Text("\(puppy.age) • \(puppy.weight) • \(puppy.color)")
                            .foregroundColor(.secondary)
                        Text(puppy.status)
                            .foregroundColor(Color.green)
                            .fontWeight(.semibold)
                    }
                    Spacer()
                }
                .padding()
                .frame(maxWidth: .infinity)
                .background(Color.white)
                .cornerRadius(18)
            }
        }
        .padding(30)
        .background(Color(.sRGB, red: 0.97, green: 0.95, blue: 0.93))
    }
}

struct ParentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            Text("Parent Frenchie")
                .font(.largeTitle)
                .fontWeight(.bold)

            VStack(alignment: .leading, spacing: 10) {
                DetailRow(label: "Name", value: "Luna")
                DetailRow(label: "Breed", value: "French Bulldog")
                DetailRow(label: "Age", value: "2 years")
                DetailRow(label: "Weight", value: "22 lbs")
                DetailRow(label: "Health", value: "Healthy")
                DetailRow(label: "Hydration", value: "Hydrated")
                DetailRow(label: "Appetite", value: "Strong appetite")
            }
            .padding()
            .background(Color.white)
            .cornerRadius(20)
        }
        .padding(30)
        .background(Color(.sRGB, red: 0.97, green: 0.95, blue: 0.93))
    }
}

struct HealthView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            Text("Health")
                .font(.largeTitle)
                .fontWeight(.bold)

            HStack(spacing: 18) {
                StatCard(title: "Weekly gain", value: "+1.2 oz")
                StatCard(title: "Vital signs", value: "Stable")
            }

            VStack(alignment: .leading, spacing: 12) {
                Text("Today’s notes")
                    .font(.title2)
                    .fontWeight(.bold)

                BulletText("Warmth and hydration are normal")
                BulletText("No abnormal crying or lethargy detected")
                BulletText("Weight is trending upward")
            }
            .padding()
            .background(Color.white)
            .cornerRadius(20)
        }
        .padding(30)
        .background(Color(.sRGB, red: 0.97, green: 0.95, blue: 0.93))
    }
}

struct ReportsView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            Text("Reports")
                .font(.largeTitle)
                .fontWeight(.bold)

            Text("Growth trend")
                .font(.title2)
                .fontWeight(.semibold)

            HStack(alignment: .bottom, spacing: 16) {
                BarView(label: "D1", height: 48)
                BarView(label: "D2", height: 60)
                BarView(label: "D3", height: 74)
                BarView(label: "D4", height: 90)
                BarView(label: "D5", height: 110)
                BarView(label: "D6", height: 128)
            }
            .frame(maxWidth: .infinity, minHeight: 200)
            .padding()
            .background(Color.white)
            .cornerRadius(20)
        }
        .padding(30)
        .background(Color(.sRGB, red: 0.97, green: 0.95, blue: 0.93))
    }
}

struct SettingsView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            Text("Settings")
                .font(.largeTitle)
                .fontWeight(.bold)

            VStack(alignment: .leading, spacing: 10) {
                DetailRow(label: "Breeder", value: "Frenchie Haven")
                DetailRow(label: "Location", value: "Austin, TX")
                DetailRow(label: "Email", value: "hello@frenchiehaven.com")
                DetailRow(label: "Phone", value: "(512) 555-0189")
            }
            .padding()
            .background(Color.white)
            .cornerRadius(20)
        }
        .padding(30)
        .background(Color(.sRGB, red: 0.97, green: 0.95, blue: 0.93))
    }
}

struct StatCard: View {
    let title: String
    let value: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(value)
                .font(.title)
                .fontWeight(.bold)
            Text(title)
                .foregroundColor(.secondary)
        }
        .padding()
        .frame(minWidth: 180, minHeight: 110)
        .background(Color(.sRGB, red: 0.91, green: 0.82, blue: 0.8))
        .cornerRadius(18)
    }
}

struct DetailRow: View {
    let label: String
    let value: String

    var body: some View {
        HStack {
            Text(label)
                .foregroundColor(.secondary)
            Spacer()
            Text(value)
                .fontWeight(.semibold)
        }
    }
}

struct LogItem: View {
    let title: String
    let detail: String

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(title)
                .fontWeight(.semibold)
            Text(detail)
                .foregroundColor(.secondary)
        }
    }
}

struct BulletText: View {
    let text: String

    init(_ text: String) {
        self.text = text
    }

    var body: some View {
        HStack(alignment: .top, spacing: 10) {
            Circle()
                .frame(width: 8, height: 8)
                .foregroundColor(Color(.sRGB, red: 0.90, green: 0.77, blue: 0.74))
            Text(text)
        }
    }
}

struct BarView: View {
    let label: String
    let height: CGFloat

    var body: some View {
        VStack {
            Spacer()
            Rectangle()
                .fill(Color.green)
                .frame(width: 30, height: height)
                .cornerRadius(10)
            Text(label)
                .font(.caption)
                .foregroundColor(.secondary)
        }
    }
}

struct PuppyRow {
    let name: String
    let age: String
    let weight: String
    let color: String
    let status: String
}
