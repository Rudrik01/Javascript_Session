export default function Question1(){
    return (<div style={{ fontFamily: "monospace", padding: "24px", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
      <h2>🧠 ASSIGNMENT 1 — StrictMode + Side Effects Trap</h2>

      <h3>🎯 Goal</h3>
      <p>Build a counter with auto-increment using <code>setInterval</code>.</p>

      <h3>📋 Requirements</h3>
      <ol>
        <li>Counter should increase every 1 second.</li>
        <li>There should be a <strong>Start</strong> button and a <strong>Stop</strong> button.</li>
        <li>Must work correctly in React StrictMode.</li>
        <li>No memory leaks.</li>
        <li>No duplicate intervals.</li>
        <li>UI should not lag.</li>
      </ol>

      <h3>🔥 Hidden Catch</h3>
      <p>If you write:</p>
      <pre style={{ background: "#f4f4f4", padding: "12px", borderRadius: "8px", overflowX: "auto" }}>
{`useEffect(() => {
  const interval = setInterval(() => {
    setCount(count + 1);
  }, 1000);
}, []);`}
      </pre>
      <p>You will face:</p>
      <ul>
        <li>❌ <strong>Stale state problem</strong> — <code>count + 1</code> captures a stale value.</li>
        <li>❌ <strong>StrictMode duplicate interval</strong> — mounts twice in dev, two intervals run.</li>
      </ul>
      <p>You must fix <strong>both</strong>.</p>

      <h3>🧠 What I'm Testing</h3>
      <ul>
        <li>Cleanup understanding</li>
        <li>Functional updates</li>
        <li>StrictMode awareness</li>
        <li>Side effects handling</li>
      </ul>
    </div>)
}