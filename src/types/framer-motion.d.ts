import 'framer-motion';

declare module 'framer-motion' {
  import * as React from 'react';
  // Augment AnimatePresence type to be a React component
  export const AnimatePresence: React.ComponentType<any>;
}
