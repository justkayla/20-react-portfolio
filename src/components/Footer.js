// * A single `Footer` component that appears on multiple pages
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter>      
      <div className='text-center text-dark p-3 m-3' style={{ backgroundColor: 'whitesmoke' }}>
        Made with ✨ by Kayla       
      </div>      
    </MDBFooter>
  );
}

export default Footer;
