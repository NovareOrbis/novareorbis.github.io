import { Route, Routes } from 'react-router-dom'
import './App.css'
import { SEO } from "./components/SEO";
import { pages } from './data/pageDefinitions';

function App() {
  return (
    <Routes>
      {Object.values(pages).map((page) => {
        const Component = page.component;
        const title = page.path != "/" ? page.title + " | " + pages.home.title : page.title;

        return (
          <Route
            key={page.path}
            path={page.path}
            element={
              <>
                <SEO title={title} description={page.description} />
                <Component />
              </>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App
