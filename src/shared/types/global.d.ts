declare module '*.svg' {
  const content: any;
  export default content;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.ico' {
  const value: any;
  export default value;
}
