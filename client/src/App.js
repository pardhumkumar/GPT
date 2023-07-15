
// import './App.css';
// import { Routes,Route} from 'react-router-dom'
// import { useMemo } from 'react';
// import { CssBaseline,ThemeProvider } from '@mui/material';
// import {createTheme} from '@mui/material/styles'
// import Navbar from './components/Navbar';
// import { Toaster } from 'react-hot-toast';
// import Homepage from './pages/Homepage';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import { themeSettings } from './theme';
// import Summary from './pages/Summary';
// import Paragraph from './pages/Paragraph';
// import ChatBot from './pages/ChatBot';
// import JsConverter from './pages/JsCoverter';
// import Image from './pages/ScifiImage';

// function App() {
//   const theme=useMemo(()=>createTheme(themeSettings(),[]));
//   return (
//    <>
//    <ThemeProvider theme={theme}>
//     <CssBaseline/>
//    <Navbar/>
//    <Toaster/>
//    <Routes>
//     <Route path ="/" element={<Homepage/>} />
//     <Route path ="/register" element={<Register/>} />
//     <Route path ="/login" element={<Login/>} />
//     <Route path ="/summary" element={<Summary />} />
//     <Route path ="/paragraph" element={<Paragraph/>} />
//     <Route path ="/chatbot" element={<ChatBot/>} />
//     <Route path ="/js-converter" element={<JsConverter/>} />
//     <Route path ="/image" element={<Image/>} />
//    </Routes>
//    </ThemeProvider>

//    </>
//   );
// }

// export default App;
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { CssBaseline , ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import { themeSettings } from './theme'
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import  {Toaster} from 'react-hot-toast';
import Summary from './pages/Summary';
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";

function App() {
  const theme = useMemo(() => createTheme(themeSettings,[]));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/summary' element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
