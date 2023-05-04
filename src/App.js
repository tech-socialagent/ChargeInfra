import { useState } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from './Pages/QuizPage';
import { DownloadContext, QuizContext, BookingContext } from '../src/Context'

function App() {
  const [downloadPop, setDownloadPop] = useState(false)
  const [booking, setBooking] = useState(false)


  //Quiz
  const [Q1, setQ1] = useState('')
  const [Q2, setQ2] = useState('')
  const [Q3, setQ3] = useState('')
  const [Q4, setQ4] = useState('')
  const [Q5, setQ5] = useState('')
  const [Q6, setQ6] = useState('')
  const [Q7, setQ7] = useState('')
  const [Q8, setQ8] = useState('')


  const [Q9, setQ9] = useState({
    one: "",
    two: "",
    three: "",
  })


  const [Q10, setQ10] = useState({
    one: "",
    two: "",
    three: "",
  })
  const [Q11, setQ11] = useState({
    one: "",
    two: "",
    three: "",
  })
  const [Q12, setQ12] = useState({
    one: "",
    two: "",
    three: "",
  })
  const [Q13, setQ13] = useState('')



  return (
    <DownloadContext.Provider value={{ downloadPop, setDownloadPop }}>
      <BookingContext.Provider value={{booking, setBooking}}>

        <QuizContext.Provider value={{
          Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13,
          setQ1, setQ2, setQ3, setQ4, setQ5, setQ6, setQ7, setQ8, setQ9, setQ10, setQ11, setQ12, setQ13
        }}>
          <BrowserRouter >
            <Routes>
              <Route path='/' exact element={<HomePage />} />
              <Route path='/Quiz' element={<QuizPage />} />
            </Routes>
          </BrowserRouter>
        </QuizContext.Provider>

      </BookingContext.Provider>
    </DownloadContext.Provider>
  );
}

export default App;
