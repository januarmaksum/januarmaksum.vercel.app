export default function Layout({ children }) {
  return (
    <>
      <div className="hero fixed inset-0 transition pointer-events-none duration-300"></div>
      {children}
    </>
  );
}
