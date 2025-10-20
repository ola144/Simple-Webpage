import React, { useEffect, useRef, useState } from "react";
import "./Task5.css";

const Task5 = () => {
  // Sample data
  const initialOutcomes = [
    { id: 1, title: "Understand React components", done: false },
    { id: 2, title: "Manage state with hooks", done: false },
    { id: 3, title: "Create responsive layouts with CSS", done: false },
    { id: 4, title: "Build interactive UI features", done: false },
  ];

  const quizQuestions = [
    {
      id: 1,
      q: "Which hook is used to create state in a functional component?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      id: 2,
      q: "Which class applies padding on all sides in Tailwind? (knowledge check)",
      options: ["p-4", "m-4", "px-4", "py-4"],
      answer: "p-4",
    },
    {
      id: 3,
      q: "What prop do you use to pass data from parent to child?",
      options: ["state", "props", "context", "ref"],
      answer: "props",
    },
  ];

  // State
  const [outcomes, setOutcomes] = useState(() => {
    const saved = localStorage.getItem("outcomes");
    return saved ? JSON.parse(saved) : initialOutcomes;
  });
  const [newOutcome, setNewOutcome] = useState("");
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showPresentation, setShowPresentation] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const presentationRef = useRef();

  useEffect(() => {
    localStorage.setItem("outcomes", JSON.stringify(outcomes));
  }, [outcomes]);

  // derived
  const completedCount = outcomes.filter((o) => o.done).length;
  const progress = Math.round((completedCount / outcomes.length) * 100);

  // handlers
  function toggleDone(id) {
    setOutcomes((prev) =>
      prev.map((o) => (o.id === id ? { ...o, done: !o.done } : o))
    );
  }

  function addOutcome() {
    if (!newOutcome.trim()) return;
    setOutcomes((prev) => [
      ...prev,
      { id: Date.now(), title: newOutcome.trim(), done: false },
    ]);
    setNewOutcome("");
  }

  function removeOutcome(id) {
    setOutcomes((prev) => prev.filter((o) => o.id !== id));
  }

  function answerQuestion(qId, option) {
    setQuizAnswers((a) => ({ ...a, [qId]: option }));
  }

  function finishQuiz() {
    setQuizIndex(0);
    const correct = quizQuestions.filter(
      (q) => quizAnswers[q.id] === q.answer
    ).length;
    alert(`Quiz finished — score: ${correct} / ${quizQuestions.length}`);
  }

  function startPresentation() {
    setSlideIndex(0);
    setShowPresentation(true);
  }

  function nextSlide() {
    setSlideIndex((s) => Math.min(s + 1, slides.length - 1));
  }

  function prevSlide() {
    setSlideIndex((s) => Math.max(s - 1, 0));
  }

  function exportPresentation() {
    const html = presentationRef.current?.innerHTML || "";
    const win = window.open("", "_blank");
    if (!win) return alert("Popup blocked — allow popups to export.");
    win.document.write(`
      <html>
        <head>
          <title>Learning Outcomes Presentation</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>body{font-family:Arial, Helvetica, sans-serif;padding:20px;} h1{font-size:24px;} ul{line-height:1.6;} </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `);
    win.document.close();
  }

  const slides = [
    {
      title: "Learning Outcomes — Overview",
      content:
        `<p>Total outcomes: ${outcomes.length} — Completed: ${completedCount} (${progress}%)</p>` +
        `<ul>${outcomes
          .map((o) => `<li>${o.done ? "✅" : "⬜"} ${o.title}</li>`)
          .join("")}</ul>`,
    },
    {
      title: "Practice Tasks",
      content:
        `<p>Practice the tasks in your list. Mark done as you complete them.</p>` +
        `<ol>${outcomes.map((o) => `<li>${o.title}</li>`).join("")}</ol>`,
    },
    {
      title: "Quiz Summary",
      content:
        `<p>Answered: ${Object.keys(quizAnswers).length} / ${
          quizQuestions.length
        }</p>` +
        `<ul>${quizQuestions
          .map(
            (q) => `<li>${q.q} — Your answer: ${quizAnswers[q.id] || "—"}</li>`
          )
          .join("")}</ul>`,
    },
    {
      title: "Next Steps",
      content: `<p>Reflect on gaps, schedule practice, and do a mini-project applying the outcomes.</p>`,
    },
  ];

  if (showPresentation) {
    return (
      <div className="presentation-wrap">
        <div ref={presentationRef} className="presentation-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
              gap: 10,
            }}
          >
            <div>
              <h1 style={{ margin: 0, fontSize: 15 }}>
                Presentation — Learning Outcomes
              </h1>
              <div className="small">
                Use the controls to navigate slides or export for printing.
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                className="btn "
                onClick={() => setShowPresentation(false)}
              >
                Close
              </button>
              <button className="export-btn" onClick={exportPresentation}>
                Export / Print
              </button>
            </div>
          </div>

          <h2 style={{ marginTop: 0 }}>{slides[slideIndex].title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: slides[slideIndex].content }}
          />

          <div className="slide-controls">
            <div>
              <button
                className="btn"
                onClick={prevSlide}
                disabled={slideIndex === 0}
              >
                Prev
              </button>
              <button
                className="btn"
                onClick={nextSlide}
                style={{ marginLeft: 8 }}
                disabled={slideIndex === slides.length - 1}
              >
                Next
              </button>
            </div>
            <div>
              <button
                className="btn"
                onClick={() => {
                  setShowPresentation(false);
                  window.scrollTo(0, 0);
                }}
                style={{ marginRight: 8 }}
              >
                Back to App
              </button>
              <button className="export-btn" onClick={exportPresentation}>
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container task5">
      <div className="">
        <header className="header">
          <div>
            <div className="title">Study & Practice — Learning Outcomes</div>
            <div className="subtitle">
              Complete React app demo — add, practice, quiz and present your
              learning outcomes.
            </div>
          </div>

          <div className="controls">
            <div style={{ textAlign: "center" }}>
              <div className="small">Progress</div>
              <div style={{ fontWeight: 700 }}>{progress}%</div>
            </div>
            <button className="btn primary" onClick={startPresentation}>
              Start Presentation
            </button>
          </div>
        </header>

        <main className="grid">
          <section className="card">
            <h2 style={{ marginTop: 0 }}>Learning Outcomes</h2>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <input
                value={newOutcome}
                onChange={(e) => setNewOutcome(e.target.value)}
                placeholder="Add new learning outcome"
                className="input"
              />
              <button className="btn primary" onClick={addOutcome}>
                Add
              </button>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "grid",
                gap: 10,
              }}
            >
              {outcomes.map((o) => (
                <li key={o.id} className="list-item">
                  <div className="list-left">
                    <input
                      type="checkbox"
                      checked={o.done}
                      onChange={() => toggleDone(o.id)}
                    />
                    <div className={`list-title ${o.done ? "done" : ""}`}>
                      {o.title}
                    </div>
                  </div>
                  <div className="actions">
                    <button
                      className="btn"
                      onClick={() => removeOutcome(o.id)}
                      style={{
                        color: "var(--danger)",
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <aside className="card aside">
            <h3 style={{ marginTop: 0 }}>Practice Tasks</h3>
            <div className="small" style={{ marginBottom: 12 }}>
              Use this column to run quick practice or revision.
            </div>

            <div style={{ marginBottom: 12 }}>
              <div className="small" style={{ fontWeight: 600 }}>
                Quick actions
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button
                  className="btn"
                  onClick={() =>
                    setOutcomes(outcomes.map((o) => ({ ...o, done: true })))
                  }
                >
                  Mark All Done
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    setOutcomes(outcomes.map((o) => ({ ...o, done: false })))
                  }
                >
                  Clear
                </button>
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <h4 style={{ margin: "6px 0" }}>Mini Quiz</h4>
              <div className="small" style={{ marginBottom: 8 }}>
                Question {quizIndex + 1} of {quizQuestions.length}
              </div>
              <div
                style={{
                  padding: 12,
                  border: "1px solid #eef2f7",
                  borderRadius: 10,
                  marginBottom: 8,
                }}
              >
                {quizQuestions[quizIndex].q}
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                {quizQuestions[quizIndex].options.map((opt) => (
                  <label key={opt} className="quiz-option">
                    <input
                      type="radio"
                      name={`q_${quizQuestions[quizIndex].id}`}
                      checked={quizAnswers[quizQuestions[quizIndex].id] === opt}
                      onChange={() =>
                        answerQuestion(quizQuestions[quizIndex].id, opt)
                      }
                    />{" "}
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button
                  className="btn"
                  onClick={() => setQuizIndex((i) => Math.max(i - 1, 0))}
                  disabled={quizIndex === 0}
                >
                  Prev
                </button>
                {quizIndex < quizQuestions.length - 1 ? (
                  <button
                    className="btn"
                    onClick={() => setQuizIndex((i) => i + 1)}
                  >
                    Next
                  </button>
                ) : (
                  <button className="btn primary" onClick={finishQuiz}>
                    Finish
                  </button>
                )}
              </div>
            </div>

            <div>
              <h4 style={{ margin: "6px 0" }}>Progress</h4>
              <div style={{ marginTop: 8 }}>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="small" style={{ marginTop: 8 }}>
                  {completedCount}/{outcomes.length} outcomes completed
                </div>
              </div>
            </div>
          </aside>
        </main>

        <footer
          style={{ textAlign: "center", marginTop: 18 }}
          className="small"
        >
          Tip: Use the "Start Presentation" button to enter a print/export
          friendly presentation mode.
        </footer>
      </div>
    </div>
  );
};

export default Task5;
