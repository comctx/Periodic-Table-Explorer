import SwiftUI

@main
struct PeriodicTableExplorerApp: App {
    var body: some Scene {
        WindowGroup {
            PeriodicTableWebView()
                .ignoresSafeArea(.container, edges: .bottom)
        }
    }
}
