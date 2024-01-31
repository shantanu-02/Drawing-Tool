const { useRef, useEffect, createContext } = require("react");

const Board = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2D");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
