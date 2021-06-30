import { Footer } from "../Footer/footer.component";
import { Header } from "../Header/header.component";

export const PageBase = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
