import { ReactNode } from 'react';

const nodes = new Map<string, ReactNode>();

export const Node: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  nodes.set(title, children);
  return <>{children}</>;
};
