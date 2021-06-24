import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

const Index = () => (
  <LiveProvider code="<div>Hello World</div>">
    <LivePreview />
    <LiveEditor />
    <LiveError/>
  </LiveProvider>
);

export default Index;