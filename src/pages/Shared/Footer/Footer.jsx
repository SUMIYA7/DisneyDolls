
const Footer = () => {
    return (
      <footer className="footer p-10 sticky bottom-0 text-white bg-black mt-10">
        <div>
          <h1 className="text-xl">DisneyDolls</h1>
          <p>
            Disney Dolls Store
            <br />
            Providing reliable tech since 2000
            <br />
            copyright © The Disney Dolls Company
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover"> Press kits</a>
          <a className="link link-hover">Social Media</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;