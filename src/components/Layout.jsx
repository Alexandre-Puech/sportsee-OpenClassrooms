function Layout({ header, sidebar, children }) {
  return (
    <div className="appLayout">
      {header}
      <div className="layout-body">
        {sidebar}
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
export default Layout;
