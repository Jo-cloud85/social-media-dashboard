import Header from "./components/Header";
import Followers from "./components/Followers";
import Overview from "./components/Overview";

function App() {

  
  return (
    <>
      <div className="bg-slate-100 dark:bg-slate-800 h-72 w-full absolute top-0 left-0 rounded-b-3xl" style={{zIndex: -1,}}>
      </div>
      <section className="p-8 min-h-screen grid content-center max-w-screen-lg mx-auto">
        <Header />
        <Followers />
        <Overview />
      </section>
    </>
  );
}

export default App;
