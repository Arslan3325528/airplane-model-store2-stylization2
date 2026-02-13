// import './App.css'; //! ❌ Ванільний CSS (Vanilla CSS)
// import '../../App.css'; //! ✅ Ванільний CSS (Vanilla CSS)
// import '@/App.css'; //! ✅✅✅ Ванільний CSS (Vanilla CSS) --> Аліаси імпортів з абсолютними шляхами з jsconfig.json

// import Section from './components/SectionWOSyle';  //! без стилізації
// import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі
// import Section from './components/SectionVanillaCSS'; //! ванільний CSS

// import { Section } from '../Section/Section.jsx'; //! CSS-модулі
import { Section } from '@/components/Section/Section.jsx'; //! CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

// import planes from '../../json/planes.json';
import planes from '@/json/planes.json'; //! --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

// import PlanesList from './components/PlanesListWOSyle';  //! без стилізації
// import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі
// import PlanesList from './components/PlanesListVanillaCSS'; //! ванільний CSS

// import { PlanesList } from '../PlanesList/PlanesList.jsx'; //! CSS-модулі
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx'; //! CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json


export function App() {
  return (
    <>
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
