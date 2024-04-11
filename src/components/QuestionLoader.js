import { useRef, useState } from "react";
import { multileChoices } from "../question-dataset";
import { useEffect } from "react";

const ShowDecision = ({ decision }) => {
  return (
    <div>
      <p>{decision.question}</p>
      {decision.answers.map((ans, idx) => {
        return (
          <div key={idx}>
            <p>{ans.answer}</p>
            <button className="primary-btn">Select</button>
          </div>
        );
      })}
    </div>
  );
};
export const QuestionLoader = ({ id = 0 }) => {
  const [convos, setConvos] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [decision, setDecision] = useState(null);
  const bottomRef = useRef(null);
  useEffect(() => {
    loadNext();
  }, []);

  const scrollBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
    }
  };
  useEffect(scrollBottom, [convos]);

  const loadNext = () => {
    if (currentIdx >= multileChoices[id].conversations.length) return;
    const currentConvo = multileChoices[id].conversations[currentIdx];
    setConvos([...convos, currentConvo]);
    if (currentConvo.decisionIdx !== -1) {
      setDecision(multileChoices[id].decisions[currentConvo.decisionIdx]);
    }
    setCurrentIdx(currentIdx + 1);
    scrollBottom();
  };
  return (
    <div>
      <div id="chat-container" className="flex content-center justify-center">
        <div class="bg-white shadow-md rounded-lg w-2/3">
          <div ref={bottomRef} id="chatbox" class="p-4 h-80 overflow-y-auto">
            {convos.map((conver, idx) => {
              const isFromCuu = conver.from === "Cừu";
              return (
                <div key={idx} className="">
                  <div class={`mb-2 text-${isFromCuu ? "right" : "left"}`}>
                    <p
                      class={`${
                        isFromCuu ? "bg-purple-500" : "bg-blue-500"
                      } text-white rounded-lg py-2 px-4 inline-block`}
                    >
                      {conver.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {decision && <ShowDecision decision={decision} />}
      <button
        onClick={() => {
          loadNext();
        }}
      >
        Continue
      </button>
    </div>
  );
};
