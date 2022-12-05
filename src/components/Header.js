// * A single `Header` component that appears on multiple pages

function Header() {
  return (
    <div class="p-4 rounded-lg m-4" style={{ backgroundColor: 'whitesmoke', textAlign: 'center' }}>
      <h1 class="display-4">Kayla Justice</h1>
      <p class="lead">Fullstack Developer</p>
      <hr class="my-4" style={{ color: '#F0966A', height:'10px', }} />      
    </div>
  );
}

export default Header;
