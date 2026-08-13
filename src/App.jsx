import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Glossary from './pages/Glossary'
import Scripts from './pages/Scripts'
import ScriptDetail from './pages/ScriptDetail'
import Helplines from './pages/Helplines'
import Medications from './pages/Medications'
import DiagnosisProcess from './pages/DiagnosisProcess'
import ProviderBias from './pages/ProviderBias'
import PatientRights from './pages/PatientRights'
import CareOptions from './pages/CareOptions'
import YouthSchool from './pages/YouthSchool'
import ForFamily from './pages/ForFamily'
import PostpartumPsychosis from './pages/PostpartumPsychosis'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="scripts" element={<Scripts />} />
        <Route path="scripts/:id" element={<ScriptDetail />} />
        <Route path="helplines" element={<Helplines />} />
        <Route path="medications" element={<Medications />} />
        <Route path="diagnosis-process" element={<DiagnosisProcess />} />
        <Route path="provider-bias" element={<ProviderBias />} />
        <Route path="patient-rights" element={<PatientRights />} />
        <Route path="care-options" element={<CareOptions />} />
        <Route path="youth-school" element={<YouthSchool />} />
        <Route path="for-family" element={<ForFamily />} />
        <Route path="postpartum-psychosis" element={<PostpartumPsychosis />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
