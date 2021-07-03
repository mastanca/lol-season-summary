import Container from "@material-ui/core/Container";
export default function Layout({ children }) {
  return <Container maxWidth="xl">{children}</Container>;
}
