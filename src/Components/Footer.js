import React from 'react';

export default function Footer() {
  return (
    <section>
    <footer className="footer section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Company</h4>

              <ul className="list-unstyled footer-menu lh-35">
                <li><a href="about.html">Terms & Conditions</a></li>
                <li><a href="about.html">Privacy Policy</a></li>
                <li><a href="contact.html">Support</a></li>
                <li><a href="contact.html">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Quick Links</h4>

              <ul className="list-unstyled footer-menu lh-35">
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Services</a></li>
                <li><a href="blog-grid.html">Blogs</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Subscribe Us</h4>
              <p>Subscribe to get the latest news article and resources </p>

              <form action="#" className="sub-form">
                <input type="text" className="form-control mb-3" placeholder="Subscribe Now ..." />
                <a href="#" className="btn btn-main btn-small">subscribe</a>
              </form>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <div className="logo mb-4">
                <h3>Mega<span>kit.</span></h3>
              </div>
              <h6><a href="mailto:support@gmail.com">Support@megakit.com</a></h6>
              <a href="tel:+23-345-67890"><span className="text-color h4">+23-456-6588</span></a>
            </div>
          </div>
        </div>

        <div className="footer-btm pt-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright">
                Copyright &copy; 2020, Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a>
              </div>
            </div>
            <div className="col-lg-6 text-left text-lg-right">
              <ul className="list-inline footer-socials">
                <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="fab fa-facebook-f mr-2"></i>Facebook</a></li>
                <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="fab fa-twitter mr-2"></i>Twitter</a></li>
                <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="fab fa-pinterest-p mr-2"></i>Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div id="scroll-to-top" class="scroll-to-top">
        <span class="icon fa fa-angle-up"></span>
    </div>
   {/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Get Panel Book</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="email" class="form-control" id="subsEmail"  placeholder='Enter email'/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onclick="downloadPanelBook();" class="btn  btn-sm btn-primary">Go</button>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
