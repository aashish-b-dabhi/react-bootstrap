import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="footer-data col-12 col-md-8 pe-0 pe-md-5">
                            <div class="footer-img mb-5 w-100 ">
                                <img src="https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d1d80ca1c16dc450b1061b_footer-main-logo.svg" alt="footer-logo" />
                            </div>
                            <div class=" d-flex justify-content-between">
                                <div class="footer-row">
                                    <ul class="list-group">
                                        <li><a href="javascript:void(0);">About us</a></li>
                                        <li><a href="javascript:void(0);">Our Projects</a></li>
                                        <li><a href="javascript:void(0);">Services</a></li>
                                        <li><a href="javascript:void(0);">news</a></li>
                                    </ul>
                                </div>
                                <div class="footer-row">
                                    <ul class="list-group">
                                        <li><a href="javascript:void(0);">Inquiry</a></li>
                                        <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0);">Terms & Condition</a></li>
                                        <li><a href="javascript:void(0);">Cookie Policy</a></li>
                                    </ul>
                                </div>
                                <div class="footer-row">
                                    <ul class="list-group pe-5">
                                        <li><a href="javascript:void(0);">Instagram</a></li>
                                        <li><a href="javascript:void(0);">facebook</a></li>
                                        <li><a href="javascript:void(0);">linkedin</a></li>
                                        <li><a href="javascript:void(0);">Twitter</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="f-line"></div>
                            <div class="line-data d-flex justify-content-between">
                                <p>Designed by <a href="javascript:void(0);">Nixar.</a> Powered by <a
                                    href="javascript:void(0);">Webflow.</a> </p>
                                <p>Copyright © 2023 BuildScape. All rights reserved.</p>
                            </div>
                        </div>
                        <div class="col-4 d-md-block d-none p-0">
                            <div class="footer-img">
                                <img src="https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d1da67d808358100110464_footer-image-p-500.jpg" alt="footer-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer