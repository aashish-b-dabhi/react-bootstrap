import React from 'react'

const Blog = () => {
    return (
        <>
            <section class="blog">
                <div class="container">
                    <div class="heading">
                        <img src="https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d236b7b5199eed2ffc2558_title-image.svg" alt="title-image" class="d-inline pe-2"/>
                            <p class="d-inline ">OUR BLOG</p>
                            <h1 class="pt-2">Latest Insights</h1>
                    </div>

                    <div class="row">
                        <div class="blog-card d-flex">
                            <div class="col-6 col-md-2">
                                <p class="text-capitalize">aug 17,2023</p>
                            </div>
                            <div class="col-12 col-md-8 d-flex">
                                <div class="col-4">
                                    <div class="blog-img">
                                        <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d5cd9711fac0c5e94b8705_blog-thumb-07-p-500.jpg" alt="blog-img-1"/>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <h4>Maximizing Small Spaces Clever Design Ideas for Compact Homes</h4>
                                </div>
                            </div>
                            <div class="col-2 ">
                                <span class="d-flex justify-content-end text-capitalize">details</span>
                            </div>
                        </div>

                        <div class="blog-line"></div>

                        <div class="blog-card d-flex">
                            <div class="col-6 col-md-2">
                                <p class="text-capitalize">aug 17,2023</p>
                            </div>
                            <div class="col-12 col-md-8 d-flex">
                                <div class="col-4">
                                    <div class="blog-img">
                                        <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d5cdb622bbdb7736ebf172_blog-thumb-06-p-500.jpg" alt="blog-img-2"/>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <h4>Creating an Outdoor Oasis Transforming Your Patio or Deck</h4>
                                </div>
                            </div>
                            <div class="col-2 ">
                                <span class="d-flex justify-content-end text-capitalize">details</span>
                            </div>
                        </div>

                        <div class="blog-line"></div>

                        <div class="blog-card d-flex">
                            <div class="col-6 col-md-2">
                                <p class="text-capitalize">aug 17,2023</p>
                            </div>
                            <div class="col-12 col-md-8 d-flex">
                                <div class="col-4">
                                    <div class="blog-img">
                                        <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d5cddaea74032b9560a559_blog-thumb-05-p-500.jpg" alt="blog-img-3"/>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <h4>Smart Home Technology Enhancing Comfort and Convenience</h4>
                                </div>
                            </div>
                            <div class="col-2 ">
                                <span class="d-flex justify-content-end text-capitalize">details</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog