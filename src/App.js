import ReactFlow, { Background } from 'react-flow-renderer';

import defaultNodes from './node.js';
import defaultEdges from './edges.js';

function App() {
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;
