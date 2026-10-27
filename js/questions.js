/**
 * React Native & Mobile Interview Questions Dataset
 * Curated and Created by Yash Adroja
 * Total Questions: 131
 */

window.QUESTIONS_DATA = [
  {
    "c": "React Native Architecture",
    "d": "Easy",
    "q": "What is React Native?",
    "a": "React Native is a framework from Meta for building Android and iOS apps using React and JavaScript or TypeScript. It renders native platform UI components, so it is not simply a website inside a WebView.",
    "e": "In healthcare apps, I can share most screen and business logic between iOS and Android while handling platform-specific behavior when needed.",
    "f": "How is React Native different from a native app and a web app?"
  },
  {
    "c": "React Native Architecture",
    "d": "Hard",
    "q": "What is the difference between the Old and New Architecture?",
    "a": "The Old Architecture relies on an asynchronous Bridge that serializes messages between JavaScript and native code. The New Architecture uses JSI, Fabric, TurboModules, and Codegen to improve interoperability and rendering capabilities. Actual performance still depends on the app and its implementation.",
    "e": "When upgrading a project, I check library compatibility, native build configuration, and key flows on both platforms rather than assuming the upgrade alone will make the app faster.",
    "f": "What migration risks would you check before enabling the New Architecture?"
  },
  {
    "c": "React Native Architecture",
    "d": "Medium",
    "q": "Explain the main threads in React Native.",
    "a": "The JavaScript thread runs JavaScript and React logic. The UI or main thread handles native UI operations and user interactions. Native modules may perform work on other queues or threads, depending on their implementation. The New Architecture has more flexible rendering and scheduling, so there is not one fixed thread model for every task.",
    "e": "If typing or scrolling freezes, I investigate expensive JavaScript work, large renders, and native work instead of assuming every operation runs on one thread.",
    "f": "What happens if the JavaScript thread is blocked?"
  },
  {
    "c": "React Native Architecture",
    "d": "Hard",
    "q": "What is JSI?",
    "a": "JSI means JavaScript Interface. It provides an interface for JavaScript engines to interact with C++ objects and functionality without sending every interaction through the old serialized Bridge. It is a foundation for parts of the New Architecture.",
    "e": "JSI-based libraries can support efficient native integrations, but I still evaluate their compatibility and real performance impact.",
    "f": "How does JSI differ from the old Bridge?"
  },
  {
    "c": "React Native Architecture",
    "d": "Hard",
    "q": "What are TurboModules?",
    "a": "TurboModules are the New Architecture system for native modules. They support lazy loading and use Codegen-generated interfaces for typed communication. Synchronous access is possible in suitable cases, but should be used carefully.",
    "e": "For a native capability not covered by an existing package, I would define the interface, implement the native side, and test behavior on Android and iOS.",
    "f": "What is lazy loading, and why can it help startup?"
  },
  {
    "c": "React Native Architecture",
    "d": "Hard",
    "q": "What is Fabric?",
    "a": "Fabric is React Native's New Architecture rendering system. It improves how React coordinates with native UI and supports modern React rendering capabilities. Fabric is a renderer, not a replacement name for the whole architecture.",
    "e": "During a migration, I verify custom native views and third-party UI libraries because they may need New Architecture support.",
    "f": "How is Fabric different from TurboModules?"
  },
  {
    "c": "React Native Architecture",
    "d": "Hard",
    "q": "What is React Fiber?",
    "a": "Fiber is React's internal reconciliation architecture. It organizes rendering work into units and helps React prioritize and schedule updates. Fiber is part of React; Fabric is React Native's renderer.",
    "e": "When investigating render performance, I look at component updates and expensive work rather than trying to modify Fiber itself.",
    "f": "What is reconciliation?"
  },
  {
    "c": "React Native Architecture",
    "d": "Medium",
    "q": "What is Yoga?",
    "a": "Yoga is a cross-platform layout engine used by React Native. It calculates layouts using Flexbox-like rules such as direction, alignment, size, and spacing.",
    "e": "I use Flexbox properties to keep shared layouts consistent, then verify differences on actual iOS and Android devices.",
    "f": "How would you debug a layout that differs between platforms?"
  },
  {
    "c": "React Native Architecture",
    "d": "Hard",
    "q": "What is Codegen?",
    "a": "Codegen generates native code and interfaces from typed specifications for TurboModules and Fabric Native Components. It helps keep JavaScript and native contracts aligned.",
    "e": "If a generated native interface fails to build, I check the specification, package setup, generated output, and platform build configuration.",
    "f": "Why are typed native specifications useful?"
  },
  {
    "c": "React Native Architecture",
    "d": "Medium",
    "q": "How does the old React Native Bridge work?",
    "a": "The Bridge passes asynchronous messages between JavaScript and native code. Values are serialized before crossing the Bridge, which can add overhead for frequent or large transfers.",
    "e": "For a feature with many events, I reduce unnecessary messages and payload sizes and profile the flow before choosing a different integration.",
    "f": "Why can large Bridge payloads affect performance?"
  },
  {
    "c": "React Native Architecture",
    "d": "Easy",
    "q": "Does React Native use the browser DOM?",
    "a": "No. React Native does not render its UI using the browser Document Object Model. It uses native views through its renderer. Some DOM-like APIs are available in modern React Native, but that does not mean it uses a browser DOM.",
    "e": "I use View, Text, and Pressable rather than HTML div or button elements in a native screen.",
    "f": "What is the difference between View and a DOM element?"
  },
  {
    "c": "React Native Architecture",
    "d": "Easy",
    "q": "What is the difference between Fast Refresh and a full reload?",
    "a": "Fast Refresh updates changed code during development and tries to preserve component state. A full reload restarts the JavaScript application and generally resets in-memory state. Fast Refresh is the modern development workflow; older Hot Reload terminology is often used loosely.",
    "e": "If a change affects module initialization or state becomes inconsistent, I perform a full reload to verify behavior.",
    "f": "Does Fast Refresh work in production?"
  },
  {
    "c": "React Native Architecture",
    "d": "Medium",
    "q": "What is Hermes?",
    "a": "Hermes is a JavaScript engine optimized for React Native. It can improve startup time and memory behavior for many apps. Results depend on the app, build, and workload, so I measure rather than assume.",
    "e": "I compare release-build startup and runtime behavior on target devices instead of judging performance only in debug mode.",
    "f": "Why should you test performance in release builds?"
  },
  {
    "c": "React Fundamentals",
    "d": "Easy",
    "q": "What is state in React?",
    "a": "State is data managed by a component. When state changes, React schedules a render so the UI can reflect the new value. State should be updated through its setter, not mutated directly.",
    "e": "I use state for a loading indicator, selected tab, or local form input when the value is only needed by that component.",
    "f": "Why should state not be mutated directly?"
  },
  {
    "c": "React Fundamentals",
    "d": "Easy",
    "q": "What are props?",
    "a": "Props are values passed from a parent component to a child. The receiving component should treat them as read-only. Props help create reusable and configurable components.",
    "e": "A shared Button can receive title, disabled, and onPress props so many screens use the same component.",
    "f": "What is prop drilling?"
  },
  {
    "c": "React Fundamentals",
    "d": "Easy",
    "q": "Why do list items need a key?",
    "a": "A key helps React identify each item between renders. Stable, unique keys help React update the correct item when a list changes. Prefer a server ID or another stable identifier over an array index for dynamic lists.",
    "e": "For a patient list, I use patient.id rather than the current list position, because records can be inserted, removed, or reordered.",
    "f": "When might using an array index cause a bug?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is React.memo?",
    "a": "React.memo can skip rendering a component when its props are unchanged by shallow comparison. It does not stop renders caused by the component's own state or context. I use it when it helps and verify with profiling.",
    "e": "A memoized patient row can avoid extra work when unrelated screen state changes, provided its props remain stable.",
    "f": "Why might React.memo fail to prevent a render?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is useMemo?",
    "a": "useMemo caches the result of a calculation between renders until its dependencies change. It is useful for expensive calculations, but it is not a guarantee of permanent storage and should not be added everywhere.",
    "e": "I might memoize a costly filter over a large list if profiling shows that recalculating it slows the screen.",
    "f": "What is the difference between useMemo and useCallback?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is useCallback?",
    "a": "useCallback caches a function reference between renders until dependencies change. It can help when passing callbacks to memoized children or when a stable reference is required. It does not automatically make every component faster.",
    "e": "For a FlatList row, I may stabilize an event handler if changing its reference causes avoidable child renders.",
    "f": "What problem can an incorrect dependency array cause?"
  },
  {
    "c": "React Fundamentals",
    "d": "Easy",
    "q": "What is useContext?",
    "a": "useContext lets a component read a value from a React context without passing it through every level of props. It is useful for shared values such as theme or locale. Frequent context updates can still rerender consumers.",
    "e": "I may use context for theme settings, while using Redux Toolkit or Zustand for more involved application state.",
    "f": "When might a global state library be a better fit?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is useEffect?",
    "a": "useEffect synchronizes a component with an external system, such as an event subscription, timer, or network connection. Its dependencies determine when it reruns, and cleanup should undo subscriptions or work where appropriate.",
    "e": "When registering a network listener, I return cleanup from the effect so the listener does not remain after the screen's component unmounts.",
    "f": "What does the dependency array control?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is the difference between useMemo and useCallback?",
    "a": "useMemo caches a calculated value; useCallback caches a function reference. Both depend on dependency arrays and should be used when they solve a real performance or reference-stability problem.",
    "e": "I might use useMemo for filtered data and useCallback for a row press handler, then profile to see whether they help.",
    "f": "Can useCallback be implemented conceptually using useMemo?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "How do you avoid unnecessary re-renders?",
    "a": "Keep state close to where it is needed, split large components, use stable list keys, and avoid changing props unnecessarily. Use memoization only where useful, and profile before and after changes.",
    "e": "For a large clinical dashboard, I would separate independently updating sections so a small filter change does not cause expensive work throughout the screen.",
    "f": "How would you find which components rerender too often?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is a custom hook?",
    "a": "A custom hook is a JavaScript function whose name starts with use and that can call other hooks. It lets us reuse stateful logic between components without duplicating it.",
    "e": "I might create a useNetworkStatus hook to expose connectivity state to screens that need it.",
    "f": "Can a custom hook share one state instance automatically between all callers?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is a stale closure?",
    "a": "A closure keeps the values from the render in which it was created. If an async callback or effect uses that function later, it may read an old value. Correct dependencies, functional state updates, or refs can help depending on the situation.",
    "e": "For search requests, I also guard against older responses replacing the latest result by using cancellation or request IDs.",
    "f": "How would you fix a counter interval that always sees the initial count?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is batching in React?",
    "a": "Batching combines multiple state updates so React can avoid extra renders. Modern React supports broader automatic batching in supported environments. The exact behavior depends on the React Native and React versions.",
    "e": "I group related state updates where appropriate and avoid adding effects that repeatedly set derived state.",
    "f": "Why can state read immediately after a setter still be old?"
  },
  {
    "c": "React Fundamentals",
    "d": "Medium",
    "q": "What is an Error Boundary?",
    "a": "An Error Boundary is a React component that catches certain errors during rendering and lifecycle work in its descendant tree and can show fallback UI. It does not catch every error, such as all event-handler or asynchronous errors.",
    "e": "A screen-level fallback can keep an isolated part of the app usable if a child component throws during rendering.",
    "f": "How do you handle errors from API calls inside event handlers?"
  },
  {
    "c": "State & Storage",
    "d": "Medium",
    "q": "What is Redux?",
    "a": "Redux is a predictable state-management library with a central store and updates driven by actions and reducers. Redux Toolkit is the recommended way to write Redux because it reduces boilerplate and provides useful defaults.",
    "e": "For shared state across multiple healthcare screens, I can keep normalized entities and request status in Redux Toolkit.",
    "f": "What are actions, reducers, and the store?"
  },
  {
    "c": "State & Storage",
    "d": "Medium",
    "q": "What is Zustand?",
    "a": "Zustand is a lightweight state-management library with a simple store API and selector-based subscriptions. It is often quicker to set up than Redux for smaller or less complex state needs.",
    "e": "For a focused feature with a few shared values, Zustand can keep the state setup concise.",
    "f": "How do selectors help limit unnecessary renders?"
  },
  {
    "c": "State & Storage",
    "d": "Medium",
    "q": "Redux Toolkit vs Zustand: which do you choose?",
    "a": "I choose based on team conventions, app complexity, middleware and debugging needs, and maintainability. Redux Toolkit suits teams wanting a structured ecosystem; Zustand is lightweight and flexible. Neither is always the right answer.",
    "e": "I explain the trade-offs to the team and choose one approach consistently rather than introducing both without a clear reason.",
    "f": "What factors would change your choice in a large app?"
  },
  {
    "c": "State & Storage",
    "d": "Easy",
    "q": "What is AsyncStorage?",
    "a": "AsyncStorage is an asynchronous persistent key-value storage library for React Native. It is useful for non-sensitive preferences and small values, but it is not encrypted secure storage by default.",
    "e": "I might store a non-sensitive onboarding flag or display preference, but not a password or secret token in plain text.",
    "f": "When would you use a database instead?"
  },
  {
    "c": "State & Storage",
    "d": "Medium",
    "q": "What is MMKV?",
    "a": "MMKV is a fast key-value storage solution with synchronous APIs and optional encryption capabilities depending on setup and library version. Synchronous access can be convenient but should not be used for large or frequent work on the UI thread without care.",
    "e": "I would use it for appropriate small values or preferences, while checking security needs and compatibility with the project's architecture.",
    "f": "What is the trade-off of synchronous storage?"
  },
  {
    "c": "State & Storage",
    "d": "Medium",
    "q": "AsyncStorage vs MMKV: what is the difference?",
    "a": "AsyncStorage exposes asynchronous operations and is suitable for basic persistent key-value data. MMKV is designed for fast key-value access and commonly offers synchronous APIs. Selection depends on performance needs, security requirements, compatibility, and the data model.",
    "e": "For structured offline patient records, neither key-value store replaces a database such as Realm or SQLite.",
    "f": "Which would you use for a large structured dataset, and why?"
  },
  {
    "c": "State & Storage",
    "d": "Hard",
    "q": "How do you choose between Realm and key-value storage?",
    "a": "Use a database such as Realm when data is structured, related, queried, and updated as records. Use key-value storage for small preferences or simple cached values. Evaluate current library maintenance, architecture compatibility, migration needs, and security.",
    "e": "For offline patient records, a local database can support querying and updates more naturally than storing one large JSON object in key-value storage.",
    "f": "How would you migrate a local database schema safely?"
  },
  {
    "c": "APIs & Offline",
    "d": "Easy",
    "q": "How do you handle API calls when the internet is offline?",
    "a": "I monitor connectivity, show cached data when available, and display a clear offline or retry state. For supported write actions, I can save a pending operation locally and synchronize it when connectivity returns. Network status does not guarantee that the server is reachable.",
    "e": "In a healthcare workflow, I would clearly distinguish saved locally from successfully synced so users do not assume the server received the change.",
    "f": "How do you handle a request that times out after the server saved it?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "Ten APIs run on screen load and one returns HTTP 400. How do you handle the others?",
    "a": "First, decide whether the requests are independent or dependent. For independent requests, Promise.allSettled lets each result be handled separately. For dependent requests, only start follow-up calls after prerequisites succeed. A 400 is generally a client request error, so inspect the payload instead of blindly retrying.",
    "e": "I separate critical screen data from optional widgets so one noncritical API failure does not blank the whole screen.",
    "f": "When would Promise.all be appropriate instead?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "Promise.all vs Promise.allSettled?",
    "a": "Promise.all resolves when every promise resolves and rejects as soon as one rejects. Promise.allSettled waits until every promise settles and returns each outcome. Use the one that matches whether partial success is acceptable.",
    "e": "For independent profile, notification, and dashboard calls, I may use allSettled to render successful sections and show an error only for failed ones.",
    "f": "Does Promise.all cancel the remaining requests when one rejects?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "How do you solve stale values in async callbacks?",
    "a": "I check whether the callback captured old state or whether responses arrived out of order. I use correct effect dependencies, functional state updates, refs where suitable, and request cancellation or IDs for race conditions.",
    "e": "If a user types two search terms quickly, I ensure the earlier request cannot overwrite the result for the latest term.",
    "f": "Why is a ref not always a replacement for state?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "How do you reduce screen loading time?",
    "a": "Measure first, then reduce unnecessary requests, parallelize independent calls, cache suitable data, defer noncritical work, and optimize expensive rendering. Use pagination or virtualization for large data and test on real devices and release builds.",
    "e": "I would profile the slow screen, identify whether the delay is network, JavaScript, rendering, or native work, and optimize the actual bottleneck.",
    "f": "How would you separate network delay from render delay?"
  },
  {
    "c": "APIs & Offline",
    "d": "Hard",
    "q": "How do you manage memory usage?",
    "a": "Clean up subscriptions, timers, and listeners; avoid retaining large objects; optimize images and lists; and release native resources correctly. Use platform profilers to find the source instead of guessing.",
    "e": "I reopen and close the same screen repeatedly while monitoring memory to check whether usage keeps growing.",
    "f": "Which tools can help inspect memory on Android and iOS?"
  },
  {
    "c": "APIs & Offline",
    "d": "Hard",
    "q": "How do you identify a memory leak?",
    "a": "Reproduce the flow, watch memory over time, and repeat navigation or actions that may retain objects. Inspect subscriptions, timers, event listeners, closures, native resources, and retained references. Confirm that memory behavior improves after the fix.",
    "e": "For example, I verify that a network listener is removed when its owning component unmounts.",
    "f": "Why does high memory use not always mean a leak?"
  },
  {
    "c": "APIs & Offline",
    "d": "Easy",
    "q": "What is temporary offline support?",
    "a": "Temporary offline support usually lets users view recently cached information while the network is unavailable. Some actions may still require a connection. The UI should communicate whether the displayed data may be stale.",
    "e": "A previously opened patient summary may remain viewable, while an action that needs server validation can be disabled or queued if safe.",
    "f": "How do you show when cached data was last updated?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "What is semi-offline support?",
    "a": "Semi-offline support allows selected features to work offline while other features still need the network. Supported changes may be stored locally and synced later. The boundaries should be clear to users.",
    "e": "A user might view saved records and draft a note offline, while a server-dependent approval remains unavailable.",
    "f": "How would you decide which actions can be queued?"
  },
  {
    "c": "APIs & Offline",
    "d": "Hard",
    "q": "What is full offline support?",
    "a": "Full offline support means the core promised workflows can run without a network. It needs local persistence, pending operations, retry and sync logic, conflict handling, and clear user feedback. Not every feature can safely be made offline.",
    "e": "For a clinical app, I define exactly which records and actions are supported offline and how the system resolves conflicting updates.",
    "f": "Why is offline support more than caching API responses?"
  },
  {
    "c": "APIs & Offline",
    "d": "Hard",
    "q": "How do you implement offline-first architecture?",
    "a": "For supported data, the local database is the immediate source for the UI. Server data updates the local database through synchronization, while local writes create pending operations. I design retries, idempotency, conflict resolution, and sync status from the start.",
    "e": "A local record can remain visible while a pending update waits for a connection, with the UI showing whether it has synced.",
    "f": "How would you handle a conflict between two devices?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "How do you handle API failures?",
    "a": "I centralize request configuration and handle validation, authentication, timeout, network, and server errors separately. I retry only suitable transient failures with limits and backoff. I show useful messages and log enough context to debug without exposing sensitive data.",
    "e": "A 401 may require a token refresh, a 400 usually needs request correction, and a 5xx may be temporary.",
    "f": "Which HTTP failures are safe to retry automatically?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "What is debouncing?",
    "a": "Debouncing waits until a trigger has stopped for a set interval before running a function. It is useful for search inputs because it reduces requests while the user types. It should be paired with stale-response handling where needed.",
    "e": "I might wait about 300 milliseconds after typing stops before calling the patient search endpoint.",
    "f": "How is throttling different from debouncing?"
  },
  {
    "c": "APIs & Offline",
    "d": "Medium",
    "q": "What is throttling?",
    "a": "Throttling limits how frequently a function can run within a period. Unlike debouncing, it can allow execution during continuous activity at a controlled rate.",
    "e": "I might throttle scroll-driven analytics or repeated location updates to avoid sending too many events.",
    "f": "Which is more suitable for type-ahead search?"
  },
  {
    "c": "APIs & Offline",
    "d": "Hard",
    "q": "How do you prevent API race conditions?",
    "a": "Cancel requests when possible, track request IDs, or use a query library that handles request lifecycle. Before updating state, ensure the result still matches the current screen inputs. Also avoid duplicate writes where possible.",
    "e": "If a user switches patient records quickly, the older patient's response must not overwrite the current patient's data.",
    "f": "What is the role of AbortController?"
  },
  {
    "c": "APIs & Offline",
    "d": "Hard",
    "q": "How do you implement token refresh?",
    "a": "When an access token expires, use the refresh token through a secure, controlled flow. Coordinate concurrent requests so they do not all refresh independently, update stored credentials safely, and retry eligible requests once. If refresh fails, clear the session and ask the user to sign in again.",
    "e": "A shared refresh promise can prevent multiple simultaneous API failures from triggering multiple refresh requests.",
    "f": "How do you prevent an infinite retry loop?"
  },
  {
    "c": "APIs & Offline",
    "d": "Hard",
    "q": "What is an optimistic update?",
    "a": "An optimistic update changes the UI before the server confirms success, making an action feel faster. If the request fails, the app must roll back or reconcile the state and inform the user.",
    "e": "A favorite toggle can update immediately and revert if the server rejects it. For high-risk clinical actions, I would use more cautious confirmation.",
    "f": "When should you avoid optimistic updates?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Medium",
    "q": "What is FlatList?",
    "a": "FlatList is a virtualized list component for rendering large collections efficiently. It renders a window of items instead of mounting every item at once. Stable keys and lightweight row components are important.",
    "e": "For a long patient list, I use FlatList instead of putting every row inside a ScrollView.",
    "f": "When might ScrollView be appropriate?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Hard",
    "q": "How do you optimize FlatList?",
    "a": "Use stable keys, memoize costly row components where helpful, keep renderItem work light, tune windowing options, and use getItemLayout when item dimensions are known. Profile scrolling before changing settings because trade-offs depend on the screen.",
    "e": "For fixed-height list rows, getItemLayout can avoid measuring every item. For variable-height records, I test before applying it.",
    "f": "What are the trade-offs of increasing windowSize?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Medium",
    "q": "How do you debug a React Native app?",
    "a": "Reproduce the issue and collect logs. Use React Native DevTools for JavaScript and React behavior, Android Studio for Android native issues, and Xcode for iOS issues. Identify the root cause, fix it, and test the affected flows on both platforms.",
    "e": "I separate a UI rendering issue from a network or native build issue before choosing a debugging tool.",
    "f": "Which problems require native debugging tools?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Hard",
    "q": "How do you improve app performance?",
    "a": "Start with measurement. Check startup time, expensive JavaScript work, unnecessary renders, image size, list virtualization, network latency, and native operations. Make targeted changes and compare release builds on representative devices.",
    "e": "For a slow healthcare dashboard, I would profile API timing and component renders independently before deciding what to optimize.",
    "f": "Why can debug builds give misleading performance results?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Medium",
    "q": "How do you organize a large React Native project?",
    "a": "I prefer a feature-based structure. A feature can own its screens, components, hooks, services, and state, while shared UI and utilities live in common folders. I also keep API access and types consistent.",
    "e": "Prescription, patient, and appointment flows can be separated into feature modules while sharing common form and icon components.",
    "f": "How do you avoid a shared folder becoming a dumping ground?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Medium",
    "q": "How do you manage reusable components?",
    "a": "I build shared components for UI and behavior used in multiple places, with clear props and predictable styling. I avoid making a component overly generic before there is a real reuse need. Shared components should be documented and tested.",
    "e": "A common Icon wrapper around react-native-vector-icons lets the team update icon configuration centrally instead of changing every screen.",
    "f": "How do you balance reuse and feature-specific UI?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Medium",
    "q": "How do you handle Android and iOS differences?",
    "a": "Keep shared business logic common and isolate platform-specific behavior using Platform.OS, platform-specific files, or native modules. Test permissions, keyboard behavior, layout, navigation, and native APIs on both platforms.",
    "e": "I verify audio recording and file handling separately on Android and iOS because native behavior can differ.",
    "f": "When would you create .ios and .android files?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Hard",
    "q": "How do you handle app security?",
    "a": "Use HTTPS, secure storage for sensitive credentials, appropriate session handling, and server-side authorization. Do not embed server secrets in the app or log sensitive patient data. Validate security-sensitive actions on the backend.",
    "e": "In healthcare apps, I minimize sensitive data in logs and ensure local storage and access controls match the application's security requirements.",
    "f": "Why is client-side validation not enough?"
  },
  {
    "c": "Performance & Debugging",
    "d": "Medium",
    "q": "How do you handle production crashes?",
    "a": "Use a crash-reporting tool such as Crashlytics or Sentry, inspect stack traces and affected versions, and reproduce the issue where possible. Fix the root cause, test the fix, release it safely, and monitor the result.",
    "e": "I prioritize crashes by severity and user impact, then check whether a specific OS or app version is affected.",
    "f": "What information should a useful crash report contain?"
  },
  {
    "c": "Navigation & Platform",
    "d": "Medium",
    "q": "What is deep linking?",
    "a": "Deep linking opens a specific screen from a URL or app link. I configure route mapping, URL schemes, Android App Links or iOS Universal Links, and handle cases where the user is logged out or the target data is unavailable.",
    "e": "A secure appointment link can open the correct appointment screen after validating authentication and the link parameters.",
    "f": "What is the difference between a URL scheme and a Universal Link?"
  },
  {
    "c": "Navigation & Platform",
    "d": "Medium",
    "q": "How do you handle push notifications?",
    "a": "I handle permissions, device-token registration, foreground and background delivery, and notification-tap navigation. I use a push service such as Firebase Cloud Messaging where appropriate and test behavior across app states and platforms.",
    "e": "Tapping an appointment notification should navigate to the right screen without creating duplicate navigation stacks.",
    "f": "What is the difference between a notification and a data message?"
  },
  {
    "c": "Navigation & Platform",
    "d": "Easy",
    "q": "What is React Navigation?",
    "a": "React Navigation is a common library for managing navigation in React Native. It supports patterns such as stacks, tabs, and drawers, and can integrate deep links.",
    "e": "I use stack navigation for screen flows and tabs for top-level application sections.",
    "f": "How do you pass parameters safely between screens?"
  },
  {
    "c": "Navigation & Platform",
    "d": "Easy",
    "q": "What is the difference between Stack and Tab navigation?",
    "a": "Stack navigation pushes and pops screens, often representing a flow or history. Tab navigation switches between main sections. Apps often combine them to organize the experience.",
    "e": "An app can use tabs for Dashboard, Patients, and Settings, with a stack inside Patients for patient details and editing.",
    "f": "How would you handle a notification that opens a nested route?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Medium",
    "q": "How do you test a React Native app?",
    "a": "I combine unit tests for business logic, component tests for UI behavior, and end-to-end tests for critical user flows. I use tools such as Jest and React Native Testing Library, and E2E tools such as Detox or Appium when appropriate.",
    "e": "For a prescription flow, I test validation and state logic with unit tests and verify the end-to-end flow on devices or simulators.",
    "f": "What should be tested at unit, integration, and E2E levels?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Medium",
    "q": "What is Jest?",
    "a": "Jest is a JavaScript testing framework with assertions, mocks, and test runners. It is commonly used to test utilities, reducers, hooks, and application logic.",
    "e": "I can test a reducer's loading, success, and failure states without making real network requests.",
    "f": "Why should network calls often be mocked in unit tests?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Medium",
    "q": "What are Detox and Appium?",
    "a": "Detox is an end-to-end testing framework designed for React Native and mobile apps. Appium is a cross-platform automation framework that drives apps through automation interfaces. The choice depends on the app, test setup, and team needs.",
    "e": "I would automate a critical login-to-dashboard flow and include stable selectors so tests are less brittle.",
    "f": "What makes an E2E test flaky?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Medium",
    "q": "What is CI/CD?",
    "a": "Continuous Integration automatically checks changes through tasks such as linting, tests, and builds. Continuous Delivery or Deployment automates preparing or releasing software. Mobile pipelines also need signing, secrets management, and store-specific steps.",
    "e": "I would use a pipeline to run checks and produce repeatable Android and iOS builds for QA and release.",
    "f": "What would you include in a mobile CI pipeline?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Medium",
    "q": "How do you manage app releases?",
    "a": "I verify versioning, environment configuration, signing, release notes, and regression tests. I create platform builds, distribute them for QA, and publish through the relevant app-store process. After release, I monitor crashes and user feedback.",
    "e": "I separate development, staging, and production configuration and never commit signing credentials or secrets.",
    "f": "What is the difference between a development and release build?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Hard",
    "q": "How do you debug native build errors?",
    "a": "Read the first meaningful compiler or linker error, identify whether it comes from JavaScript dependencies, Gradle, CocoaPods, Xcode, NDK, or a native library, and verify compatible versions. Clean builds can help after correcting the root cause, but repeatedly cleaning is not a substitute for diagnosis.",
    "e": "When a native audio dependency fails to link, I inspect the exact missing symbol and library configuration rather than randomly changing unrelated versions.",
    "f": "How do compile errors differ from linker errors?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Medium",
    "q": "How do you manage Git and code reviews?",
    "a": "I use focused branches and commits, review changes for correctness, readability, testing, and regressions, and explain feedback respectfully. I prefer small pull requests because they are easier to understand and verify.",
    "e": "For shared components, I check whether the API remains consistent and whether existing screens still behave correctly.",
    "f": "How would you handle a review comment you disagree with?"
  },
  {
    "c": "Testing & Delivery",
    "d": "Hard",
    "q": "How do you manage environment configuration and secrets?",
    "a": "Keep environment-specific values separated and inject them through the build or release process. Do not treat values bundled in a mobile app as secret, because app binaries can be inspected. Keep private credentials on trusted servers and protect CI secrets.",
    "e": "API base URLs may vary by environment, but private server credentials must not be embedded in the mobile client.",
    "f": "Why is an API key inside a mobile bundle not truly secret?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "What was the biggest problem you solved recently?",
    "a": "Choose a real project example and explain the situation, your responsibility, the investigation, the fix, and the outcome. Be specific about what you personally did, and do not claim a metric unless you measured it.",
    "e": "A relevant example from my experience could be a complex speech-to-text workflow involving audio recording, chunk uploads, session lifecycle events, and WebSocket transcription updates. I would explain the actual failure or design challenge I faced, how I investigated it, and the verified result.",
    "f": "What trade-offs did you consider, and how did you verify the fix?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "How do you handle your development team?",
    "a": "I make requirements and ownership clear, break work into manageable tasks, and support the team through technical discussions and code reviews. I encourage people to raise risks early and share knowledge instead of creating dependencies on one person.",
    "e": "When coordinating with PM, QA, and backend developers, I clarify API contracts and acceptance criteria before a feature reaches final testing.",
    "f": "How do you help a team member who is blocked?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you manage project deadlines?",
    "a": "I clarify scope, split work into smaller tasks, estimate effort and dependencies, and prioritize the most important outcomes. I communicate risks early and negotiate scope or sequencing when needed rather than hiding delays.",
    "e": "For a feature involving mobile UI, backend changes, and QA, I track each dependency and identify what can be developed or tested in parallel.",
    "f": "What do you do when the estimate is no longer realistic?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you convince a team member about your technical approach?",
    "a": "First, I listen to their reasoning. Then I explain my approach with evidence, trade-offs, and project requirements. If needed, we build a small proof of concept or compare options, then agree on the best solution for the team.",
    "e": "I focus on performance, maintainability, reliability, and delivery risk rather than presenting my preference as the only correct answer.",
    "f": "What if the team chooses the other approach?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "What if your idea and your teammate's idea are opposite?",
    "a": "I listen without making it personal and compare both ideas against requirements, cost, maintainability, and risk. We can test assumptions with a prototype or review. Once the team makes a decision, I support it and help deliver the result.",
    "e": "A short technical decision note can capture why an approach was selected and prevent the same debate from repeating.",
    "f": "How do you make sure quieter teammates are heard?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you handle technical disagreements?",
    "a": "I focus on facts and trade-offs, not seniority or personal preference. I ask what requirement each solution serves and use evidence or a small experiment where possible. The decision should be documented when it affects the wider team.",
    "e": "For a state-management choice, I would compare complexity, team familiarity, debugging tools, and expected maintenance.",
    "f": "How do you resolve a disagreement when there is no time for a prototype?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "How do you handle production issues?",
    "a": "Assess severity and user impact, gather logs, reproduce the problem, and identify the root cause. Coordinate a safe mitigation or fix, test the affected flow, and monitor after release. Follow up with prevention actions when appropriate.",
    "e": "For a patient-facing issue, I prioritize data correctness and safety, communicate status clearly, and involve backend or QA teams as needed.",
    "f": "What would make you roll back a release?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you maintain code quality?",
    "a": "Use consistent conventions, clear architecture, code reviews, and tests for important logic. Keep components focused and avoid unnecessary duplication. Address technical debt deliberately rather than adding complexity without a plan.",
    "e": "A shared component library and clear API layer can help multiple feature teams implement similar patterns consistently.",
    "f": "How do you decide which technical debt to fix first?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you support a junior developer who repeats mistakes?",
    "a": "I try to understand the cause, explain the reasoning behind the correct approach, and give examples. I use focused reviews and small follow-up tasks to reinforce learning while keeping project expectations clear.",
    "e": "I would explain a pattern once, document it where useful, and then check whether the developer can apply it independently.",
    "f": "How do you balance mentoring with your own delivery responsibilities?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "What if the product team needs a feature quickly but it creates technical debt?",
    "a": "I explain the risk and future cost, then suggest the smallest safe solution that meets the immediate need. If we accept a temporary compromise, I document the debt, owner, and follow-up plan. I do not compromise on essential security or data integrity.",
    "e": "For offline healthcare workflows, I would not pretend a local write is synced; I would show the true sync state even under deadline pressure.",
    "f": "How do you decide whether a shortcut is acceptable?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you estimate development tasks?",
    "a": "I clarify acceptance criteria, break the feature into smaller tasks, and account for dependencies, testing, integration, and uncertainty. I communicate assumptions and revise the estimate when new information appears.",
    "e": "I estimate UI work separately from API integration, native changes, and QA when those have different risks.",
    "f": "How do you estimate work when requirements are unclear?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "Why should we hire you as a senior React Native developer?",
    "a": "I have over eight years of mobile development experience, including more than six years with React Native. I have worked on complex app features, API integration, state management, offline behavior, debugging, and cross-platform delivery. I can take ownership of features and collaborate with the wider team.",
    "e": "I would support this answer with a specific example, such as a speech-to-text workflow, offline data handling, or a complex healthcare feature I personally delivered.",
    "f": "What makes you effective as a senior developer beyond writing code?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "How do you explain a technical decision to a non-technical stakeholder?",
    "a": "Start with the user or business impact, then explain the options and trade-offs in plain language. Give a recommendation, explain the risks, and make clear what decision or support is needed.",
    "e": "Instead of saying 'the API layer has a race condition,' I would explain that results can arrive in the wrong order and show how that could display the wrong patient record.",
    "f": "How do you communicate when a decision may delay delivery?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "How do you prioritize bugs and feature work?",
    "a": "I compare severity, user impact, data or security risk, frequency, and delivery commitments. Critical correctness or security issues take priority; lower-impact issues can be scheduled based on value and effort. I make the reasoning visible to stakeholders.",
    "e": "A bug that can show the wrong patient's information deserves a different priority from a minor spacing issue.",
    "f": "Who should be involved in setting priority?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you coordinate with PM, QA, and backend teams?",
    "a": "Agree on requirements, API contracts, acceptance criteria, and dependencies early. Share progress and risks, provide testable builds, and resolve unclear behavior together. Keep decisions documented so each team works from the same expectations.",
    "e": "For a dynamic form or prescription flow, I confirm required fields, error responses, and success behavior with backend and QA before final integration.",
    "f": "What do you do when the API contract changes late?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "How do you handle a feature that has unclear requirements?",
    "a": "Identify the unknowns and ask focused questions about users, edge cases, data, and acceptance criteria. Propose a small flow or prototype to confirm assumptions before building the full feature. Document decisions and revisit them if evidence changes.",
    "e": "For a clinical form, I clarify validation rules, offline expectations, and what happens if the server rejects a submission.",
    "f": "How do you keep progress moving while waiting for an answer?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you give and receive code-review feedback?",
    "a": "Make feedback specific, respectful, and connected to correctness, maintainability, security, or team conventions. Ask questions when intent is unclear and explain the reason behind important changes. Treat feedback as improving the code, not judging the person.",
    "e": "I distinguish a required correctness fix from a style preference and suggest an example where it helps.",
    "f": "How do you respond when feedback feels unfair?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "Tell me about a challenging technical feature you delivered.",
    "a": "Use a clear structure: context, challenge, your responsibility, actions, and outcome. Explain one or two key decisions and how you tested them. Keep the answer focused on your contribution and verified results.",
    "e": "A possible example from my background is speech-to-text: audio recording, chunk uploads, session start/complete/cancel, and WebSocket transcription events. Choose the real challenge you faced and describe your own solution accurately.",
    "f": "What would you do differently if you built it again?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you handle pressure during a release?",
    "a": "Stay focused on the highest-risk items, use the agreed release checklist, and communicate status clearly. Avoid unreviewed changes that create more risk. If a critical issue appears, follow the team's rollback or mitigation plan.",
    "e": "I verify build configuration, core flows, and known platform-specific risks before approving a release candidate.",
    "f": "How do you decide whether to delay a release?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "How do you measure whether a performance fix worked?",
    "a": "Define a measurable baseline, reproduce under consistent conditions, make one targeted change, and compare the same metrics afterward. Use release builds and representative devices, and check that the change did not create regressions.",
    "e": "For a slow list, I compare scroll behavior and render work before and after, rather than saying it is faster based only on how it feels.",
    "f": "Which metrics would you track for startup and scrolling?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Medium",
    "q": "How do you share knowledge with the team?",
    "a": "I explain patterns during reviews, document decisions and setup steps, and share small examples that solve recurring problems. I encourage teammates to present what they learn so knowledge is not held by one person.",
    "e": "A concise guide for a shared icon component or API error handling can prevent inconsistent implementations across screens.",
    "f": "How do you keep documentation from becoming outdated?"
  },
  {
    "c": "Experience & Leadership",
    "d": "Hard",
    "q": "What would you improve in a project you inherited?",
    "a": "First, understand the architecture, production issues, delivery constraints, and team's pain points. Then prioritize improvements by impact and risk rather than rewriting everything. I would start with high-value fixes and establish a baseline.",
    "e": "I might improve error handling, offline behavior, test coverage, or list performance after measuring which area creates the most trouble.",
    "f": "How do you avoid a risky rewrite?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "What is pagination?",
    "a": "Pagination loads a large dataset in smaller batches. It reduces initial payload and rendering work. I handle loading states, end-of-list behavior, duplicate requests, refresh, and error recovery.",
    "e": "For a patient list, I request the next page as the user approaches the end and avoid firing the same page request multiple times.",
    "f": "How do you handle items changing while pages are loaded?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "What is an Axios interceptor?",
    "a": "An Axios interceptor can inspect or modify requests before they are sent and responses before they reach the calling code. It is useful for shared headers, logging, and centralized error handling, but should not hide important error context.",
    "e": "I can attach an access token centrally and handle common authentication responses in one place.",
    "f": "What risks arise if every 401 triggers its own token refresh?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "What is the difference between a unit, integration, and E2E test?",
    "a": "A unit test checks a small unit in isolation. An integration test checks components working together. An end-to-end test drives a user flow through the app and its connected layers. Each level catches different kinds of failures.",
    "e": "I might unit-test form validation, integration-test a screen with a mocked API, and E2E-test the critical appointment flow.",
    "f": "Why should not every test be an E2E test?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "What is a native module or native bridge?",
    "a": "A native module exposes platform capabilities or native code to React Native. Older modules commonly communicated through the Bridge; New Architecture modules can use TurboModules and JSI-based integration. The exact implementation depends on the React Native version.",
    "e": "For a feature like specialized audio processing, I first check whether a maintained library exists before deciding to build native code.",
    "f": "When would you write a native module instead of using JavaScript?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Hard",
    "q": "How would you design a scalable offline synchronization system?",
    "a": "Store supported records locally, track pending mutations, and sync them with explicit states. Use retries with backoff, idempotency keys where appropriate, versioning or conflict rules, and observability. Define which side wins for each data type and never silently lose user changes.",
    "e": "A clinical note might need explicit conflict review rather than silently overwriting a newer server version.",
    "f": "How do you handle duplicate sync requests?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Hard",
    "q": "How do you design a reliable audio upload workflow?",
    "a": "Model the recording session as explicit states, persist enough metadata to recover, upload chunks with ordering and retry rules, and handle completion or cancellation consistently. Reconnect logic should avoid duplicate chunks and stale events. Test interruption and backgrounding behavior on both platforms.",
    "e": "This maps to speech-to-text flows involving recording, chunk uploads, session start/complete/cancel, and WebSocket transcription events.",
    "f": "What happens if the upload succeeds but the client never receives the acknowledgement?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "How do you handle app state when it moves to background and foreground?",
    "a": "Use AppState to detect lifecycle changes when needed. Pause or stop work that should not continue, refresh stale data on return, and clean up listeners. Background execution has platform limits, so long-running work needs appropriate native or platform mechanisms.",
    "e": "For audio recording, I explicitly define what happens when the app is backgrounded, interrupted, or reopened.",
    "f": "Can an ordinary JavaScript timer run reliably while the app is backgrounded?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "What is the difference between authentication and authorization?",
    "a": "Authentication verifies who the user is. Authorization determines what that user is allowed to do. The server must enforce authorization; hiding a button in the mobile UI is not sufficient.",
    "e": "A user may be signed in but still not have permission to view a particular patient's record.",
    "f": "Why must the backend check access on every protected operation?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Hard",
    "q": "How would you approach a React Native upgrade?",
    "a": "Review release notes and breaking changes, audit native and third-party dependency compatibility, and upgrade in a controlled branch. Follow the template diff, resolve native build issues, and run regression tests on both platforms. Measure critical flows after the upgrade.",
    "e": "For a project moving from an older RN version to a newer one, I verify Gradle, CocoaPods, native modules, permissions, and production build behavior.",
    "f": "How would you isolate a regression introduced by the upgrade?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "What is a feature flag?",
    "a": "A feature flag controls whether a feature or implementation is enabled, often without requiring a separate code branch for each variant. It can support gradual rollout and rollback, but needs clear ownership and cleanup.",
    "e": "A flag can allow an old and new continuity flow to coexist during a controlled migration, with testing for both paths.",
    "f": "What risks come from leaving old flags indefinitely?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Hard",
    "q": "How do you approach system design for a mobile feature?",
    "a": "Clarify requirements and constraints, define data flows and failure cases, choose state and storage boundaries, and describe API contracts. Consider offline behavior, security, performance, testing, and observability. Explain trade-offs rather than presenting one design as universally best.",
    "e": "For prescription drafting, I would discuss local drafts, validation, submission state, server errors, and how the UI represents unsynced changes.",
    "f": "What failure modes would you include in the design review?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "What is an accessibility consideration in React Native?",
    "a": "Provide meaningful accessibility labels and roles, support screen readers, maintain readable contrast and text scaling, and ensure controls can be operated predictably. Test with assistive technologies instead of relying only on visual inspection.",
    "e": "A prescription action icon should have a clear accessible label rather than exposing only an icon with no meaning.",
    "f": "How would you test accessibility on iOS and Android?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "How do you handle forms with dynamic fields?",
    "a": "Represent field definitions and values separately, validate based on field type and rules, and keep updates predictable. Support loading, error, and submission states, and avoid rebuilding the entire form unnecessarily for every keystroke.",
    "e": "For dynamic clinical forms, I use schema-driven rendering where appropriate and test required fields, conditional fields, and server validation.",
    "f": "How would you persist a partially completed form offline?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "How do you approach PDF or document viewing in React Native?",
    "a": "Choose a maintained library compatible with the project, manage file permissions and downloads, and handle loading, error, and large-file performance. Treat documents as potentially sensitive and clean up temporary files according to requirements.",
    "e": "For medical documents, I verify access permissions, offline availability, file caching, and behavior on both platforms.",
    "f": "How would you avoid keeping sensitive files in an unsafe cache?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "How do you manage app navigation after login or logout?",
    "a": "Keep authentication state as the source of truth and configure navigation so protected screens are unavailable after logout. Handle deep links that arrive before authentication and redirect safely after sign-in. Clear sensitive in-memory state when the session ends.",
    "e": "A notification link to an appointment should not bypass authentication or display protected information on a logged-out device.",
    "f": "How would you handle a deep link received during app startup?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Hard",
    "q": "How do you decide whether to build or adopt a library?",
    "a": "Compare maintenance, compatibility, security, platform support, licensing, performance, and the cost of owning the code. Prefer a suitable maintained library when it meets requirements; build custom native code only when there is a clear gap.",
    "e": "For a specialized native audio feature, I would prototype and validate library compatibility before committing to a custom NDK solution.",
    "f": "How do you evaluate whether a library is actively maintained?"
  },
  {
    "c": "Additional Senior Topics",
    "d": "Medium",
    "q": "How do you manage app analytics without exposing sensitive data?",
    "a": "Track events that answer product questions, minimize collected data, and avoid sending patient details, tokens, or other sensitive values. Follow consent, privacy, retention, and access requirements. Verify event payloads in testing.",
    "e": "For a healthcare app, an event such as 'form submission failed' should not include the actual clinical text or patient identifier unless explicitly permitted and protected.",
    "f": "How do you debug a user issue without logging sensitive content?"
  },
  {
    "c": "JavaScript",
    "d": "Easy",
    "q": "What is the difference between let, const, and var?",
    "a": "let and const are block-scoped. const prevents reassignment of the binding, although an object or array it references can still be changed. var is function-scoped and has older hoisting behavior, so let and const are usually preferred.",
    "e": "In React Native TypeScript code, I use const by default and let when a variable must be reassigned. This makes intent easier to understand during reviews.",
    "f": "Can you change a property inside an object declared with const?"
  },
  {
    "c": "JavaScript",
    "d": "Medium",
    "q": "What is a closure in JavaScript?",
    "a": "A closure is a function together with access to variables from the scope where it was created. The function can use those variables even after the outer function has finished.",
    "e": "Closures appear in event handlers and hooks. When an async callback uses an old state value, I check whether it captured values from an earlier render.",
    "f": "How can a closure cause a stale-state bug in React?"
  },
  {
    "c": "JavaScript",
    "d": "Medium",
    "q": "Explain promises and async/await.",
    "a": "A Promise represents the eventual success or failure of an asynchronous operation. async/await lets us write promise-based code in a sequential style. Use try/catch for errors and handle loading and failure states explicitly.",
    "e": "For API requests, I use async/await with error handling and make sure a failed request updates the screen instead of leaving its loading indicator active.",
    "f": "What happens if you do not await a promise?"
  },
  {
    "c": "JavaScript",
    "d": "Medium",
    "q": "What is the event loop?",
    "a": "JavaScript runs a call stack and coordinates asynchronous work through queues. Once the current stack is clear, queued callbacks can run; promise callbacks use the microtask queue. Long synchronous work can block the JavaScript thread.",
    "e": "If a screen freezes while processing a large response, I reduce synchronous work, paginate or chunk processing, and profile the screen.",
    "f": "Why can a long loop make a React Native screen unresponsive?"
  },
  {
    "c": "JavaScript",
    "d": "Medium",
    "q": "What is the difference between debounce and throttle?",
    "a": "Debounce waits until events stop for a set time before running. Throttle limits how often a function can run during continuous events. Debounce is common for search input; throttle can suit repeated scroll or gesture events.",
    "e": "For a patient search field, I debounce requests so each keystroke does not start a new API call.",
    "f": "How do you prevent an older search response from replacing a newer one?"
  },
  {
    "c": "JavaScript",
    "d": "Hard",
    "q": "How do you avoid race conditions in asynchronous JavaScript?",
    "a": "Define which result is allowed to update state. Cancel obsolete requests when supported, use an incrementing request ID, or compare the current query before applying a response. Also handle errors and component unmounting safely.",
    "e": "If a user quickly changes a search term, I ensure only the latest request can update the displayed results.",
    "f": "When would you use AbortController?"
  },
  {
    "c": "JavaScript",
    "d": "Medium",
    "q": "What is the difference between == and ===?",
    "a": "== allows type coercion before comparison. === compares without converting types. I generally use === because the behavior is more predictable and easier to review.",
    "e": "When comparing API response values or IDs, I normalize types if needed and use strict equality to avoid accidental matches.",
    "f": "What does 0 == false return, and why?"
  },
  {
    "c": "JavaScript",
    "d": "Hard",
    "q": "What is the difference between shallow copy and deep copy?",
    "a": "A shallow copy duplicates only the top-level structure, so nested objects may still be shared. A deep copy also duplicates nested values. The right approach depends on the data; JSON serialization has limitations and does not support every JavaScript value.",
    "e": "When updating nested state, I create new objects along the changed path so React can detect the update without mutating existing state.",
    "f": "Why can mutating a nested object cause UI bugs?"
  },
  {
    "c": "AI-Based",
    "d": "Easy",
    "q": "What is generative AI?",
    "a": "Generative AI models learn patterns from data and generate new content such as text, code, images, or audio. Their output can be useful but may be incorrect, so it needs appropriate validation.",
    "e": "As a mobile developer, I can use AI to explore implementation options or draft tests, then verify the result against the app's requirements and platform behavior.",
    "f": "Why should AI-generated code be reviewed?"
  },
  {
    "c": "AI-Based",
    "d": "Medium",
    "q": "What is an LLM?",
    "a": "A large language model is trained on large amounts of text and other data to predict and generate sequences. It can summarize, explain, and transform information, but it can also produce plausible-sounding errors.",
    "e": "If an app uses an LLM feature, I would design clear error handling, loading states, privacy safeguards, and a way for users to recover from poor responses.",
    "f": "What are hallucinations in an LLM?"
  },
  {
    "c": "AI-Based",
    "d": "Medium",
    "q": "What is RAG?",
    "a": "Retrieval-Augmented Generation retrieves relevant information from an external knowledge source and provides it to a language model as context. This can make answers more grounded in current or private information, but retrieval quality and source permissions still matter.",
    "e": "For a healthcare knowledge assistant, a RAG design would need approved source documents, access controls, citations, and strict privacy protections rather than exposing patient data indiscriminately.",
    "f": "How would you evaluate whether retrieval is finding the right documents?"
  },
  {
    "c": "AI-Based",
    "d": "Medium",
    "q": "What is an AI agent?",
    "a": "An AI agent combines a model with a goal, context, and tools or actions it can use in a loop. It may plan steps and observe tool results. Actions should be permissioned, bounded, and checked, especially when they affect real users or data.",
    "e": "In a developer workflow, an agent might inspect a bug report, search approved project documentation, and suggest a fix. A developer should review code and control any production changes.",
    "f": "How would you limit an agent's permissions and tool access?"
  },
  {
    "c": "AI-Based",
    "d": "Hard",
    "q": "How would you integrate an AI feature into a React Native app safely?",
    "a": "Define the user problem first, call the AI service through a secure backend, avoid embedding secret API keys in the app, handle latency and failures, validate output, and protect personal data. Add monitoring and test normal, edge, and abuse cases.",
    "e": "For a healthcare application, I would involve product, backend, security, and clinical stakeholders early and ensure sensitive patient information is not sent to an unapproved service.",
    "f": "Why should a mobile app not contain a private API key?"
  },
  {
    "c": "AI-Based",
    "d": "Medium",
    "q": "What is prompt engineering?",
    "a": "Prompt engineering means structuring instructions and context to help a model produce a useful output. Good prompts define the task, constraints, expected format, and examples when needed. Prompts alone are not a security boundary.",
    "e": "For a feature that summarizes non-sensitive support content, I would specify the required format and validate the output before showing it to the user.",
    "f": "Why must you validate model output even with a detailed prompt?"
  },
  {
    "c": "Common Interview Questions",
    "d": "Easy",
    "q": "Tell me about yourself.",
    "a": "I am a mobile application developer with over eight years of experience, including more than six years with React Native. I have worked on healthcare applications and features such as digital prescriptions, offline workflows, dashboards, and real-time communication. I focus on maintainable code, reliable delivery, and solving practical user problems.",
    "e": "Choose one project example that matches the role, then explain your personal contribution and the result clearly.",
    "f": "Which project or feature best represents your strengths?"
  },
  {
    "c": "Common Interview Questions",
    "d": "Medium",
    "q": "What was a challenging problem you solved?",
    "a": "Choose a real problem, explain the user or business impact, describe how you investigated it, share the solution you implemented, and state how you verified the result. Be clear about your own contribution and avoid claiming results you cannot support.",
    "e": "A relevant example could be improving an offline healthcare workflow or debugging a complex speech-to-text flow with audio chunks and WebSocket transcription events. Explain the actual issue and outcome you experienced.",
    "f": "What alternatives did you consider, and how did you verify the fix?"
  },
  {
    "c": "Common Interview Questions",
    "d": "Medium",
    "q": "How do you manage a tight deadline?",
    "a": "I clarify the required outcome, split work into priorities, identify risks early, and agree on what can realistically be delivered. I communicate progress and trade-offs rather than hiding delays. I protect essential quality checks for critical flows.",
    "e": "For a release, I would coordinate dependencies with product, QA, and backend teammates, then prioritize high-impact issues and keep stakeholders updated.",
    "f": "What would you do if the deadline is no longer realistic?"
  },
  {
    "c": "Common Interview Questions",
    "d": "Medium",
    "q": "How do you handle disagreement with a teammate?",
    "a": "I first understand their reasoning and share my own evidence. We compare options against requirements, maintainability, risk, and delivery time. If we cannot agree, I suggest a small test or ask the appropriate lead to help decide. Once a decision is made, I support the team.",
    "e": "If we disagree on a React Native library or state-management approach, I would compare compatibility, complexity, team familiarity, and long-term maintenance before recommending one.",
    "f": "What if the team chooses an approach you disagree with?"
  },
  {
    "c": "Common Interview Questions",
    "d": "Medium",
    "q": "How do you handle a production issue?",
    "a": "I assess impact and severity, reproduce the issue if possible, review logs and recent changes, and coordinate a safe mitigation. Then I verify the fix, communicate status, and document the root cause and prevention steps.",
    "e": "For a mobile issue, I would check device and OS details, app version, network conditions, crash reports, and whether it affects iOS, Android, or both, while avoiding sensitive patient data in logs.",
    "f": "How do you prevent the same issue from happening again?"
  },
  {
    "c": "Common Interview Questions",
    "d": "Hard",
    "q": "How do you mentor or support other developers?",
    "a": "I explain the reasoning behind feedback, agree on coding standards, review changes constructively, and help teammates investigate problems independently. I also encourage sharing knowledge and asking questions early.",
    "e": "As a reviewer or technical lead, I would focus feedback on maintainability, correctness, performance, and team conventions, with concrete examples instead of personal criticism.",
    "f": "How do you respond when a teammate repeatedly misses expectations?"
  }
];
