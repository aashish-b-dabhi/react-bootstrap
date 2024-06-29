import React from 'react'

const Testimonial = () => {
    return (
        <>
            <section class="testimonial">
                <div class="container">
                    <div class="testimonial-data d-flex justify-content-between">
                        <div class="heading">
                            <img src="https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d236b7b5199eed2ffc2558_title-image.svg" alt="title-image" class="d-inline pe-2" />
                            <p class="d-inline ">TESTIMONIALS</p>
                            <h1 class="pt-2">Customers Review</h1>
                        </div>
                        <div class="button align-items-end d-flex">
                            <div class="left d-flex border justify-content-center align-items-center me-2"><i
                                class="fa-solid fa-arrow-left"></i></div>
                            <div class="right d-flex border justify-content-center align-items-center"><i
                                class="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4 mb-3 mb-md-0">
                            <div class="testimonial-card">
                                <div class="testimonial-img">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d48ce2f051c502a50fdf70_review-thumb-09.jpg" alt="TESTIMONIALS-1" />
                                </div>
                                <div class="card-data">
                                    <p>The level of craftsmanship and attention to detail was impressive. We would not hesitate
                                        to recommend Buildscape for any construction project.</p>

                                    <div class="t-name">
                                        <h5>Annette Black</h5>
                                        <span>Columbus, OH</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-3 mb-md-0">
                            <div class="testimonial-card">
                                <div class="testimonial-img">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d48cfc0c40835936d1eee3_review-thumb-08.jpg" alt="TESTIMONIALS-2" />
                                </div>
                                <div class="card-data">
                                    <p>Working with Buildscape was a truly positive experience. Their team demonstrated
                                        expertise, reliability, and a strong commitment to delivering exceptional results.</p>

                                    <div class="t-name">
                                        <h5>Floyd Miles</h5>
                                        <span>Baltimore, MD</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-3 mb-md-0">
                            <div class="testimonial-card">
                                <div class="testimonial-img p-3">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d48d0ee00b6dd594982093_review-thumb-07.jpg" alt="TESTIMONIALS-3" />
                                </div>
                                <div class="card-data">
                                    <p>We had a great experience working with Buildscape. Their team was responsive,
                                        collaborative, and delivered exceptional results.</p>

                                    <div class="t-name">
                                        <h5>Arlene McCoy</h5>
                                        <span>Chicago, IL</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial