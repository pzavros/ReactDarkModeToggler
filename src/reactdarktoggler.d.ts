// reactdarktoggler.d.ts
declare module 'reactdarktoggler' {
    export interface DarkLightToggleProps {
      isDarkMode: boolean;
      onToggle: () => void;
    }
  
    export class DarkLightToggle extends React.Component<DarkLightToggleProps> {}
  }
  