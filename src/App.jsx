import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, RefreshCw, AlertCircle, ShieldAlert, 
  Database, Server, GitPullRequest, Smartphone, 
  UserCheck, CheckCircle2, ArrowRight, Code2, 
  UserX, Settings, Cpu, ChevronLeft, Flame, 
  Lock, Compass, Check, Quote, ArrowDown, ExternalLink
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('ux');
  const [simulationStep, setSimulationStep] = useState(0);
  const [simIsRunning, setSimIsRunning] = useState(false);
  const [simLog, setSimLog] = useState([]);
  
  // High fidelity mobile screen states
  const [currentMobileState, setCurrentMobileState] = useState('welcome'); // welcome, verify, error, loading
  const [simulationLogs, setSimulationLogs] = useState([]);

  // Simulation steps for the mobile retry-loop simulator
  const simSteps = [
    { title: "Tap 'Reattempt KYC'", desc: "User triggers tap event in Amazon App WebView", icon: Smartphone, color: "text-accent-cyan" },
    { title: "App Cache Validation", desc: "Native shell parses cached verification headers", icon: Database, color: "text-accent-blue" },
    { title: "Mismatched Transition Code", desc: "API response returns invalid stale token state", icon: Server, color: "text-accent-purple" },
    { title: "NavGuard Interceptor", desc: "Route protection guard triggers block due to error token", icon: ShieldAlert, color: "text-accent-red" },
    { title: "Onboarding State Reload", desc: "App reloads identical landing route, locking flow", icon: RefreshCw, color: "text-accent-red animate-spin" }
  ];

  const runMobileSimulation = () => {
    if (simIsRunning) return;
    setSimIsRunning(true);
    setSimulationStep(0);
    setCurrentMobileState('welcome');
    setSimulationLogs(["[SYSTEM] App launched in Amazon Mobile Container."]);
    
    // Step 0: Welcome
    setTimeout(() => {
      setSimulationStep(1);
      setCurrentMobileState('verify');
      setSimulationLogs(prev => [...prev, "[CLIENT] Action: Tap 'Reattempt Video KYC'."]);
    }, 1500);

    // Step 1: Loading
    setTimeout(() => {
      setSimulationStep(2);
      setCurrentMobileState('loading');
      setSimulationLogs(prev => [...prev, "[API] POST /api/v2/kyc/retry -> Pending validation..."]);
    }, 3000);

    // Step 2: Session Flag mismatch
    setTimeout(() => {
      setSimulationStep(3);
      setSimulationLogs(prev => [...prev, "⚠️ [API] Response: { status: 'INVALID_TOKEN', active: true }"]);
    }, 4500);

    // Step 3: Nav Guard block
    setTimeout(() => {
      setSimulationStep(4);
      setSimulationLogs(prev => [...prev, "❌ [NAVGUARD] Path '/apl/stream' requires status: 'PENDING_STREAM'. Redirecting..."]);
    }, 6000);

    // Step 4: Back to square one (Error/Refresh)
    setTimeout(() => {
      setCurrentMobileState('welcome');
      setSimIsRunning(false);
      setSimulationLogs(prev => [...prev, "🔄 [NAV] Onboarding screen refreshed. Stale token remains in app storage."]);
    }, 7500);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-slate-800 flex flex-col font-sans selection:bg-accent-cyan selection:text-white overflow-x-hidden">
      
      {/* Sticky Premium Nav */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-slate-200/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-cyan to-accent-blue flex items-center justify-center shadow-lg shadow-accent-cyan/15 border border-slate-200/30">
              <svg className="w-5 h-5 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L8 10v12c0 10.4 6.8 19.3 16 22 9.2-2.7 16-11.6 16-22V10L24 4z" fill="currentColor" />
                <rect x="18" y="14" width="12" height="20" rx="2.5" fill="#f8fafc" />
                <rect x="20" y="17" width="8" height="13" rx="0.5" fill="#2563eb" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900">Amazon Pay Later</span>
              <span className="text-[10px] block text-accent-cyan uppercase tracking-wider font-semibold font-display">Mobile UX Case Study</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#scenario" className="hover:text-slate-900 transition-colors">Real Scenario</a>
            <a href="#flow" className="hover:text-slate-900 transition-colors">Observed Flow</a>
            <a href="#causes" className="hover:text-slate-900 transition-colors">Technical Causes</a>
            <a href="#analysis" className="hover:text-slate-900 transition-colors">Frontend Analysis</a>
            <a href="#proposed" className="hover:text-slate-900 transition-colors">Proposed Flow</a>
          </div>

          <div>
            <a 
              href="#simulator" 
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200/60 text-slate-800 font-semibold text-xs transition-all duration-300 hover:border-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/5 font-display tracking-wide"
            >
              Start Simulator
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-24 px-6 bg-gradient-to-b from-accent-cyan/5 via-transparent to-transparent">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 w-fit text-accent-cyan text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" /> Amazon Pay Later Mobile Onboarding Report
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight text-slate-900">
              A small retry-state issue can <span className="text-gradient-cyan">completely block</span> mobile fintech onboarding.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl leading-relaxed">
              Analyzing an infinite retry-loop and session-state issue observed during Amazon Pay Later Video KYC inside the Amazon mobile application. An engineering evaluation of mobile navigation guards and stale cache invalidation.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a 
                href="#analysis" 
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-accent-cyan/15 border border-white/10 transition-all duration-300 font-display"
              >
                Engineering Breakdown
              </a>
              <a 
                href="#scenario" 
                className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200/60 text-slate-800 font-semibold text-sm transition-all duration-300 hover:border-slate-300 font-display"
              >
                View Flow Analysis
              </a>
            </div>
          </div>

          {/* Floating UI dashboard visuals & Mockup */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[450px]">
              {/* Decorative Glow */}
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-tr from-accent-cyan/20 via-accent-purple/10 to-accent-blue/20 blur-xl opacity-30"></div>
              
              {/* Simulated Phone Frame */}
              <div className="w-[320px] h-[640px] border-[12px] border-slate-800 rounded-[48px] bg-white relative overflow-hidden shadow-2xl mx-auto border-double border-spacing-2">
                {/* Speaker Grill / Dynamic Island Mock */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-40 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2"></span>
                  <span className="w-10 h-1 bg-gray-700 rounded-full"></span>
                </div>

                {/* App Content */}
                <div className="w-full h-full pt-10 pb-8 px-5 flex flex-col justify-between relative z-10 bg-slate-50">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200 mb-4">
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-400 uppercase">Amazon Mobile Container</span>
                    <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></span>
                  </div>

                  {/* Onboarding View */}
                  <div className="flex-grow flex flex-col justify-center items-center text-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-accent-red/10 flex items-center justify-center text-accent-red border border-accent-red/20 shadow-lg shadow-accent-red/10">
                      <AlertCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-slate-850 font-display font-semibold text-lg">Verification Failed</h4>
                      <p className="text-xs text-slate-500 px-4">
                        Video KYC verification became invalid due to unexpected secondary face detection.
                      </p>
                    </div>

                    <div className="w-full p-4 rounded-2xl bg-white border border-slate-200 flex flex-col gap-2 shadow-inner">
                      <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-display">
                        <span>ROUTE</span>
                        <code className="text-accent-cyan">apl_verify_route</code>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-display">
                        <span>ERROR_CODE</span>
                        <code className="text-accent-red font-mono">STALE_SESSION</code>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-3">
                    <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold text-xs shadow-lg shadow-accent-cyan/15 hover:opacity-95 font-display flex items-center justify-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Complete Video KYC
                    </button>
                    <p className="text-[9px] text-center text-slate-400 font-medium leading-relaxed">
                      Assisted mode disabled. Ensure you are alone in a well-lit room.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating tech specs card */}
              <div className="absolute -bottom-8 -left-8 glass-panel rounded-2xl p-4 border border-slate-200 shadow-xl hidden md:flex items-center gap-4 z-20 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Session Cache</span>
                  <span className="font-semibold text-sm text-slate-800 font-mono">TOKEN: EXPIRED_0X49</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — REAL USER SCENARIO */}
      <section id="scenario" className="py-24 px-6 relative border-t border-slate-200/60 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-widest block font-display">UX Friction Report</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient text-slate-900">The Real Scenario</h2>
            <p className="text-slate-500 font-light text-lg">
              Tracing how an automated security flag completely locked onboarding progression inside the Amazon mobile app.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/60 flex gap-5 hover:border-slate-300 transition-colors duration-300 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan flex-shrink-0">
                  <UserX className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 font-display">Vulnerable User Guidance</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    A non-technical elderly user required support from a family member to hold the phone during automated Video KYC.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/60 flex gap-5 hover:border-slate-300 transition-colors duration-300 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-accent-red/10 flex items-center justify-center text-accent-red flex-shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 font-display">Invalid Flag Detected</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    The background conversation or guide voice triggered rejection rules, making the active KYC session immediately invalid.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/60 flex gap-5 hover:border-slate-300 transition-colors duration-300 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple flex-shrink-0">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 font-display">The Page-Refresh Loop</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Tapping "Complete Video KYC" or "Reattempt KYC" did not launch a fresh session, but instead reloaded the same static error screen endlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual mobile timeline representation */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[340px]">
                <div className="absolute inset-0 rounded-[40px] bg-accent-cyan/5 blur-xl opacity-20"></div>

                <div className="w-full border border-slate-200/60 bg-white/80 backdrop-blur-md rounded-[40px] p-6 shadow-xl flex flex-col gap-6 relative z-10">
                  <div className="text-xs uppercase font-semibold font-display tracking-widest text-accent-cyan pb-3 border-b border-slate-200 flex justify-between items-center">
                    <span>APL Mobile Flow</span>
                    <span className="text-[10px] text-slate-400">Device View</span>
                  </div>

                  <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                    {/* Event 1 */}
                    <div className="relative">
                      <span className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-accent-cyan border-2 border-white"></span>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">Step 1: Amazon App</h4>
                      <p className="text-sm font-semibold text-slate-800 mt-1">Tap "Reattempt Video KYC"</p>
                    </div>

                    {/* Event 2 */}
                    <div className="relative">
                      <span className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-accent-blue border-2 border-white"></span>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">Step 2: Session Reload</h4>
                      <p className="text-sm font-semibold text-slate-800 mt-1">Loading spinner activates briefly</p>
                    </div>

                    {/* Event 3 */}
                    <div className="relative">
                      <span className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-accent-red border-2 border-white"></span>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-accent-red font-display">Step 3: Stale State</h4>
                      <p className="text-sm font-semibold text-slate-800 mt-1">Redirected back to same landing screen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OBSERVED APP FLOW ISSUE */}
      <section id="flow" className="py-24 px-6 relative border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-widest block font-display">Flow Analysis</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient text-slate-900">Observed Mobile Retry-State Loop</h2>
            <p className="text-slate-500 font-light text-lg">
              A comprehensive system analysis mapping the interactive loop of stale mobile verification sessions.
            </p>
          </div>

          <div id="simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive flow list */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {simSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = simulationStep === index;
                const isCompleted = simulationStep > index;

                return (
                  <div 
                    key={index}
                    className={`p-5 rounded-2xl border transition-all duration-500 flex gap-4 items-center ${
                      isActive 
                        ? "bg-white border-accent-cyan shadow-lg shadow-accent-cyan/5 scale-[1.01]" 
                        : isCompleted 
                        ? "bg-white border-slate-200 opacity-70"
                        : "bg-white/50 border-slate-100 opacity-40"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 border border-slate-200 ${step.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-slate-800 text-sm">{step.title}</h4>
                      <p className="text-xs text-slate-400">{step.desc}</p>
                    </div>
                    {isCompleted && (
                      <div className="w-6 h-6 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Onboarding Simulator */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-[340px] mb-8">
                {/* Simulated Phone Frame */}
                <div className="w-full h-[580px] border-[10px] border-slate-800 rounded-[44px] bg-white relative overflow-hidden shadow-2xl flex flex-col justify-between p-5 border-double border-spacing-2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-800 rounded-b-xl z-40"></div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-200 mt-2">
                    <span className="text-[9px] font-mono tracking-wider font-semibold text-slate-400">AMAZON APP MOCKUP</span>
                    <span className={`w-2 h-2 rounded-full ${simIsRunning ? "bg-accent-cyan animate-pulse" : "bg-accent-red"}`}></span>
                  </div>

                  {/* Inner Simulator Screen Container */}
                  <div className="flex-grow flex flex-col justify-center items-center text-center gap-5 bg-slate-50 rounded-2xl p-4 my-2">
                    {currentMobileState === 'welcome' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-accent-cyan">
                          <Smartphone className="w-6 h-6" />
                        </div>
                        <h4 className="text-slate-800 font-semibold text-base font-display">Amazon Pay Later KYC</h4>
                        <p className="text-xs text-slate-500 px-4">
                          Reattempt your Video Verification to activate your Pay Later limits.
                        </p>
                      </motion.div>
                    )}

                    {currentMobileState === 'verify' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                          <UserCheck className="w-6 h-6" />
                        </div>
                        <h4 className="text-slate-800 font-semibold text-base font-display">State Transferred</h4>
                        <p className="text-xs text-slate-500 px-4">
                          Evaluating token transitions inside routing guards...
                        </p>
                      </motion.div>
                    )}

                    {currentMobileState === 'loading' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 flex flex-col items-center">
                        <RefreshCw className="w-10 h-10 text-accent-cyan animate-spin" />
                        <h4 className="text-slate-800 font-semibold text-base font-display">Verifying Token</h4>
                        <p className="text-xs text-slate-500 px-4">
                          Connecting to Amazon API gateway endpoints...
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Simulator Control Action Button */}
                  <div className="space-y-2">
                    <button 
                      onClick={runMobileSimulation}
                      disabled={simIsRunning}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold text-xs transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent-cyan/15 font-display"
                    >
                      {simIsRunning ? "Simulating System Run..." : "Run Simulator"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Console simulator logs */}
              <div className="w-full max-w-[480px] bg-slate-900 p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-gray-400 space-y-1.5 shadow-inner min-h-[120px] text-left">
                <span className="text-[10px] font-mono text-gray-500 font-semibold block border-b border-slate-800 pb-1 mb-2 uppercase">Execution Console Logs</span>
                {simulationLogs.length === 0 ? (
                  <div className="text-gray-600 italic">Click "Run Simulator" above to inspect step execution logs...</div>
                ) : (
                  simulationLogs.map((log, i) => {
                    const isError = log.includes("❌") || log.includes("⚠️") || log.includes("NavGuard");
                    return (
                      <div key={i} className={isError ? "text-accent-red" : log.includes("API") ? "text-accent-purple" : "text-accent-cyan"}>
                        &gt; {log}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — POSSIBLE ENGINEERING CAUSES */}
      <section id="causes" className="py-24 px-6 relative border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-widest block font-display">Onboarding Breakdown</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient text-slate-900">Possible Technical Causes</h2>
            <p className="text-slate-500 font-light text-lg">
              Breaking down the root software infrastructure variables causing the mobile route-guard locks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 flex flex-col gap-6 hover:border-slate-350 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-sm group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-cyan"></div>
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <Database className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Stale Verification Session</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The active verification state is cached in persistent storage, causing routing hooks to read outdated failure flags rather than query new sessions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 flex flex-col gap-6 hover:border-slate-350 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-sm group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-blue"></div>
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <Server className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Failed Retry-State Transition</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The server persisted a permanent failure flag, completely blocking the frontend request flow from resetting the active onboarding target.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 flex flex-col gap-6 hover:border-slate-350 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-sm group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-purple"></div>
              <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Mobile Navigation Guard Loop</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The route protection guard detected an unauthorized session state, immediately pushing the router stack backward and locking the landing page.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 flex flex-col gap-6 hover:border-slate-350 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-sm group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-red"></div>
              <div className="w-12 h-12 rounded-2xl bg-accent-red/10 flex items-center justify-center text-accent-red">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Cached Verification Token</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reattempt requests continued loading an expired flow token stored in app context, triggering automatic gateway validation rejections.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 flex flex-col gap-6 hover:border-slate-350 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-sm group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-cyan"></div>
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <GitPullRequest className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Incomplete Recovery Architecture</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  No fallback recovery logic was integrated inside route catch statements, denying the client-side router an escape path to clear active loop configurations.
                </p>
              </div>
            </div>

            {/* Summary cause info */}
            <div className="p-8 rounded-3xl bg-gradient-to-tr from-accent-cyan/5 to-accent-blue/5 border border-accent-cyan/20 flex flex-col gap-6 relative overflow-hidden justify-center text-left shadow-md">
              <div className="space-y-2">
                <Flame className="text-accent-cyan w-8 h-8 mb-2" />
                <h3 className="text-xl font-semibold text-slate-900 font-display">Architectural Takeaway</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Mobile onboarding security requires clear, automated cache invalidation to keep defensive route guards from trapping valid users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — MOBILE FRONTEND ENGINEERING ANALYSIS */}
      <section id="analysis" className="py-24 px-6 relative border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-widest block font-display">Code Audit & Analysis</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient text-slate-900">Mobile Frontend Perspective</h2>
            <p className="text-slate-500 font-light text-lg">
              An engineering deep-dive on mobile state synchronization, navigation intercepts, and token lifecycles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Engineering text details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-display text-slate-900">Defensive Mobile Routing</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  To protect high-security fintech flows, mobile navigation layers employ route checks. When a verification session gets blocked, defensive route configurations continuously push the navigation controller back to landing screens.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-accent-cyan flex items-center gap-2 text-sm uppercase tracking-wider font-display">
                  <Code2 className="w-5 h-5" /> Stale Logic
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  If app storage contains a stale error status, state guards evaluate the route permission as false, automatically forcing redirect paths.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-accent-blue flex items-center gap-2 text-sm uppercase tracking-wider font-display">
                  <CheckCircle2 className="w-5 h-5" /> Recovery Logic
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Always invalidate previous verification states and request fresh flow tokens before triggering stream navigation updates.
                </p>
              </div>
            </div>

            {/* Visual Code blocks */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Bad Snippet */}
              <div className="glass-panel rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-red font-display flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> Stale Mobile Route Guard
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">AplNavGuard.js</span>
                </div>
                <div className="p-6 font-mono text-xs overflow-x-auto text-left leading-relaxed text-gray-300 bg-slate-900">
                  <pre>
{`// 🚨 MOBILE DEFENSIVE GUARD CAUSES INFINITE LOOP
function handleKycProgress(navigation) {
  const { kycState } = useKycSession();

  // If local token storage contains previous verification rejections
  if (!kycState.canProceedToStream) {
    // ❌ Redirect back to onboarding base.
    // Stale token forces this routing handler to loop continuously on tap.
    navigation.navigate("APL_KYC_SCREEN"); 
    return;
  }

  navigation.navigate("APL_VIDEO_STREAM");
}`}
                  </pre>
                </div>
              </div>

              {/* Good Snippet */}
              <div className="glass-panel rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-green font-display flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Clean Recovery Routine
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">AplSessionRecovery.js</span>
                </div>
                <div className="p-6 font-mono text-xs overflow-x-auto text-left leading-relaxed text-gray-300 bg-slate-900">
                  <pre>
{`// ✅ SECURE AND RECOVERABLE SESSION TRANSITION
async function handleKycReattempt(navigation) {
  try {
    // 1. Invalidate stale tokens and clear storage
    await clearKycSession();
    
    // 2. Fetch fresh token bypass codes from gateway
    const freshSession = await createFreshRetryFlow();
    
    // 3. Sync clean session variables into app context
    updateAppSession({
      activeToken: freshSession.token,
      canProceedToStream: true
    });
    
    // 4. Clean navigation to active stream
    navigation.navigate("APL_VIDEO_STREAM", { session: freshSession.id });
  } catch (error) {
    // Fallback escalation path
    navigation.navigate("APL_SUPPORT_FALLBACK");
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — UX & ACCESSIBILITY ANALYSIS */}
      <section className="py-24 px-6 relative border-t border-slate-200/60 bg-gradient-to-b from-transparent to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-widest block font-display">Accessibility & Usability</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient text-slate-900">UX and Accessibility Concerns</h2>
            <p className="text-slate-500 font-light text-lg">
              Even secure, technically functional software stacks fail in real-world usability when they neglect human variables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 hover:border-slate-300 transition-all duration-300 flex gap-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan flex-shrink-0">
                <UserX className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Elderly Support Context</h3>
                <p className="text-slate-505 text-sm leading-relaxed">
                  Disabled, elderly, or tech-illiterate users routinely need help holding devices or setting up verification streams. Fraud controls must adapt to allow guidance options.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 hover:border-slate-300 transition-all duration-300 flex gap-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-red/10 flex items-center justify-center text-accent-red flex-shrink-0">
                <RefreshCw className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Infinite Refresh Stress</h3>
                <p className="text-slate-505 text-sm leading-relaxed">
                  Endless reloading sequences without progress bars or text logs create massive user stress, causing users to assume their connection or device is broken.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 hover:border-slate-300 transition-all duration-300 flex gap-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple flex-shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Cryptic Recovery Feedback</h3>
                <p className="text-slate-505 text-sm leading-relaxed">
                  Without active notifications detailing the exact failure point (such as background voice interference), correct session re-attempts become impossible.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/60 hover:border-slate-300 transition-all duration-300 flex gap-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                <Settings className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 font-display">Damaged Customer Trust</h3>
                <p className="text-slate-550 text-sm leading-relaxed">
                  Repetitive screen reloads lead users to assume the core product features are broken, causing high drop-off and permanent account abandonment.
                </p>
              </div>
            </div>
          </div>

          {/* Glowing Quote Banner */}
          <div className="relative glass-panel rounded-[32px] p-10 md:p-14 border border-slate-200 text-center overflow-hidden shadow-md">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>
            <Quote className="w-16 h-16 text-accent-cyan/15 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-display font-medium leading-relaxed max-w-4xl mx-auto text-slate-900">
              “Technically functional systems can still fail in real-world usability scenarios.”
            </h3>
            <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase mt-6 font-display">
              Usability & Accessibility Focus
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROPOSED IMPROVEMENTS */}
      <section id="proposed" className="py-24 px-6 relative border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-widest block font-display">System Upgrades</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient text-slate-900">How I Would Improve The Flow</h2>
            <p className="text-slate-500 font-light text-lg">
              Comparing structural layouts and recovery loops before and after system modernization.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl bg-slate-100 p-1 border border-slate-200">
              <button 
                onClick={() => setActiveTab('ux')}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${activeTab === 'ux' ? "bg-accent-cyan text-white shadow" : "text-slate-500 hover:text-slate-950"}`}
              >
                UX Improvements
              </button>
              <button 
                onClick={() => setActiveTab('tech')}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${activeTab === 'tech' ? "bg-accent-cyan text-white shadow" : "text-slate-500 hover:text-slate-950"}`}
              >
                Technical Improvements
              </button>
            </div>
          </div>

          {/* Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current System */}
            <div className="glass-panel rounded-[32px] p-8 border border-slate-200/60 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[460px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-red/5 rounded-full blur-xl"></div>
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200/60 mb-6">
                  <span className="font-semibold text-lg text-slate-900 font-display">Current Mobile Flow</span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-red/10 border border-accent-red/20 text-accent-red">Blocked</span>
                </div>

                {activeTab === 'ux' ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200 flex gap-4">
                      <AlertCircle className="w-5 h-5 text-accent-red flex-shrink-0 mt-1" />
                      <p className="text-slate-500 text-sm">Minimal explanations regarding automated KYC stream rejection.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200 flex gap-4">
                      <AlertCircle className="w-5 h-5 text-accent-red flex-shrink-0 mt-1" />
                      <p className="text-slate-500 text-sm">Retry request initiated with identical session state.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200 flex gap-4">
                      <AlertCircle className="w-5 h-5 text-accent-red flex-shrink-0 mt-1" />
                      <p className="text-slate-500 text-sm">EndOfSession loops back to landing page continuously.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200 flex gap-4">
                      <AlertCircle className="w-5 h-5 text-accent-red flex-shrink-0 mt-1" />
                      <p className="text-slate-500 text-sm">Stale session values cached in global context.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200 flex gap-4">
                      <AlertCircle className="w-5 h-5 text-accent-red flex-shrink-0 mt-1" />
                      <p className="text-slate-500 text-sm">No catch handlers inside route guards for recovery state transitions.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200 flex gap-4">
                      <AlertCircle className="w-5 h-5 text-accent-red flex-shrink-0 mt-1" />
                      <p className="text-slate-500 text-sm">Expired tokens persist in app sessionStorage.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-2xl bg-accent-red/5 p-4 border border-accent-red/10 text-xs text-accent-red font-mono mt-6">
                Status: Infinite redirection to APL_KYC_SCREEN.
              </div>
            </div>

            {/* Improved System */}
            <div className="glass-panel rounded-[32px] p-8 border border-slate-200/60 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[460px] glass-panel-glow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/5 rounded-full blur-xl"></div>
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200/60 mb-6">
                  <span className="font-semibold text-lg text-slate-900 font-display">Proposed Mobile Flow</span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-green/10 border border-accent-green/20 text-accent-green">Recoverable</span>
                </div>

                {activeTab === 'ux' ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-accent-green/5 border border-accent-green/10 flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                      <p className="text-slate-800 text-sm">Explicit retry notifications detailing exact rejection factors.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-accent-green/5 border border-accent-green/10 flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                      <p className="text-slate-800 text-sm">Guided visual assist overlays displaying ideal camera framings.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-accent-green/5 border border-accent-green/10 flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                      <p className="text-slate-800 text-sm">Direct one-tap trigger fallback option to reach support agents.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-accent-green/5 border border-accent-green/10 flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                      <p className="text-slate-800 text-sm">Explicit app cache reset triggers upon tapping retry buttons.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-accent-green/5 border border-accent-green/10 flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                      <p className="text-slate-800 text-sm">Dynamic allocation of clean fresh session bypass tokens.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-accent-green/5 border border-accent-green/10 flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                      <p className="text-slate-800 text-sm">Navigation catch-guards that bypass stale landing screens.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-2xl bg-accent-green/5 p-4 border border-accent-green/10 text-xs text-accent-green font-mono mt-6">
                Status: Clean session bypass configured on re-attempt.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — ENGINEERING TAKEAWAY */}
      <section className="py-24 px-6 relative border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="w-16 h-16 rounded-3xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan mx-auto shadow-lg shadow-accent-cyan/15">
            <Cpu className="w-8 h-8" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 font-display">Engineering Takeaway</h2>

          <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed italic max-w-3xl mx-auto">
            “Small onboarding friction in fintech mobile apps can significantly impact trust, accessibility, and completion rates.”
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <span className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold tracking-wider font-display">#frontend</span>
            <span className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold tracking-wider font-display">#mobileapps</span>
            <span className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold tracking-wider font-display">#systemdesign</span>
            <span className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold tracking-wider font-display">#fintech</span>
            <span className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold tracking-wider font-display">#productengineering</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 text-center text-xs text-slate-550 relative z-10 bg-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <p>© 2026 Amazon Pay Later Mobile Video KYC Case Study. Suitable for engineering portfolio showcase.</p>
          <div className="flex gap-6 text-slate-500">
            <a href="#scenario" className="hover:text-accent-cyan transition-colors">Scenario</a>
            <a href="#causes" className="hover:text-accent-cyan transition-colors">Technical Causes</a>
            <a href="#proposed" className="hover:text-accent-cyan transition-colors">Proposed Flow</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
