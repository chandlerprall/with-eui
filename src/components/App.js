import React from 'react';
import { EuiButton } from '@elastic/eui';

export default function App() {
  return (
    <div>
      <EuiButton fill={true}>Hello World!</EuiButton>

      <p className="app-paragraph">I should be $euiColorDanger</p>
    </div>
  );
}