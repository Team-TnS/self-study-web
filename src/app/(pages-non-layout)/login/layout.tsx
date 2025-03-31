export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  )
}
