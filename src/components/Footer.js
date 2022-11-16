// * A single `Footer` component that appears on multiple pages
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter>      
      <div className='text-center text-dark p-3 m-3' style={{ backgroundColor: '#17a2b8' }}>
        Made with ✨ by Kayla       
      </div>      
    </MDBFooter>
  );
}

export default Footer;
