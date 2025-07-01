import { useRef } from "react";

export default function FocusInputExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // access the actual DOM input element
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus me!" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
