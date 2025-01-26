import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-12 mb-8">
      <Container className="flex justify-between gap-4">
        <p className="text-sm">
          Inovicy &copy; {new Date().getFullYear()} - All Rights Reserved
        </p>
        <p className="text-sm">
          Made by{" "}
          <a href="https://vaibhavkesarwani.vercel.app/">
            Vaibhav Kesarwani
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
