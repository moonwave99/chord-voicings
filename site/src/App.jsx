import { useState } from "react";
import { getNotes } from "../../dist/index";

function parseLine(line) {
    const [root, ...tokens] = line.split(" ");
    console.log({ root, notes: getNotes(...tokens) });
    return { root, notes: getNotes(root, ...tokens) };
}

export default function App() {
    const [voicings, setVoicings] = useState([]);
    function onSubmit(event) {
        event.preventDefault();
        setVoicings(
            event.target.voicings.value
                .split("\n")
                .filter((x) => !!x)
                .map((line) => ({
                    voicing: line.split(" "),
                    notes: parseLine(line),
                }))
        );
    }
    return (
        <div className="app">
            <section className="input">
                <h1>Jazz Voicings</h1>
                <form onSubmit={onSubmit}>
                    <textarea
                        name="voicings"
                        placeholder="Enter the voicings over multiple lines (e.g. C b3 5 7 b9)"
                        required
                    />
                    <button>Get Notes</button>
                </form>
            </section>
            <section className="output">
                <h2>Output</h2>
                <ul>
                    {voicings.map(({ voicing, notes }, i) => (
                        <li key={i}>
                            <span className="root">{notes.root}</span>
                            {notes.notes.map((note, j) => (
                                <span key={j}>
                                    <span className="degree">
                                        {voicing[j + 1]}
                                    </span>
                                    <span className="note">{note}</span>
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
