// projects page header

function Subheader({ title }) {
  return (
    <div
      class="p-4 rounded-lg m-4"
      style={{ backgroundColor: "whitesmoke", textAlign: "center" }}
    >
      <h1 class="display-4">{title}</h1>
      <hr class="my-4" style={{ color: "#F0966A", height: "10px" }} />
    </div>
  );
}

export default Subheader;
