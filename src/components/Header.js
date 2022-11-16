// * A single `Header` component that appears on multiple pages

function Header() {
  return (
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">This is the header!</h1>
      <p class="lead">This is a simple hero unit</p>
      <hr class="my-4"/>
      <p>It uses utility classes</p>
    </div>
  );
}

export default Header;
