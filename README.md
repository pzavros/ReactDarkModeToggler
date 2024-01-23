# ReactDarkToggler

ReactDarkToggler is a React component library for effortlessly implementing a dark/light mode toggle in your React applications. It supports theme customization and automatic theme management using React's Context API.

## Installation

Install ReactDarkToggler via npm:

```bash
npm install reactdarktoggler
```
## Usage
Wrap your application with ThemeProvider and use the DarkLightToggle component:
```bash
import React from 'react';
import { ThemeProvider, DarkLightToggle } from 'reactdarktoggler';

function App() {
    return (
        <ThemeProvider>
            <div>
                <DarkLightToggle />
            </div>
        </ThemeProvider>
    );
}

export default App;
```

## API
# DarkLightToggle
The main component to render the toggle button.

# Props:

customButtonStyles: Object (optional) - Custom styles for the toggle button.

## ThemeProvider
A context provider that manages the dark and light themes for your application.

#Props:

lightTheme: Object (optional) - Defines the light theme styles.
darkTheme: Object (optional) - Defines the dark theme styles.

## Customization
You can customize the themes by passing a lightTheme and darkTheme object to ThemeProvider. Each theme object can contain CSS properties:
```bash
const lightTheme = {
    backgroundColor: '#f0f0f0',
    color: '#333'
};

const darkTheme = {
    backgroundColor: '#333',
    color: '#f0f0f0'
};

<ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
    {/* Your app */}
</ThemeProvider>
```
Customize the toggle button using customButtonStyles prop:
```bash
<DarkLightToggle customButtonStyles={{ fontSize: '20px', fontWeight: 'bold' }} />
```

