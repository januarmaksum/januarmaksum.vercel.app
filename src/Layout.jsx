export default function Layout({ children }) {
  return (
    <>
      <div className="hero absolute inset-0"></div>
      {children}
    </>
  );
}
