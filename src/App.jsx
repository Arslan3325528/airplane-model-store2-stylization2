import './App.css'; //! Ванільний CSS (Vanilla CSS)

// import Section from './components/SectionWOSyle';  //! без стилізації
// import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі
import Section from './components/SectionVanillaCSS'; //! ванільний CSS 


import planes from './json/planes.json';

// import PlanesList from './components/PlanesListWOSyle';  //! без стилізації
// import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі 
import PlanesList from './components/PlanesListVanillaCSS'; //! ванільний CSS 


export default function App() {
  return (
    <>
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
