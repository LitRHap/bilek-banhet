export default function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <div className="group absolute p-3 mr-3 right-0 top-0 justify-end">
        <i className="fa-solid fa-arrow-right mr-3 group-hover:mr-2 ease-in-out duration-300" />
        <a
          className="group-hover:font-semibold ease-in-out duration-300"
          href="/about"
        >
          About
        </a>
      </div>
    </>
  );
}
