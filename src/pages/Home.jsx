// Homepage
// TODO: Format page

import Header from "../components/Header";

const Home = () => {
  return ( 
    <>   
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={require('../images/profilepic1.jpg')} style={{ width: '350px', borderRadius: '10%', marginTop: '0px' }}></img>
      </div>
    </>  
  );
};

export default Home;
