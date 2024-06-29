import React from 'react'

const Services = () => {
    return (
        <>
            <section class="Services">
                <div class="container">
                    <div class="row">
                        <div class="service-data d-flex justify-content-between">
                            <div class="heading">
                                <img src="https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d236b7b5199eed2ffc2558_title-image.svg" alt="title-image" class="d-inline pe-2" />
                                <p class="d-inline ">WHAT WE DO</p>
                                <h1 class="pt-2">Our Services</h1>
                            </div>
                            <div class="service-btn d-flex align-items-end">
                                <a href="javascript:void(0);" class="cstm-btn-2">view all Services</a>
                            </div>
                        </div>

                        <div class=" col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div class="service-card">
                                <div class="card-body">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d31ee8d29f6c64abe68c8c_service-thumb-icon-09.svg" alt="service-icon" />
                                    <h2 class="text-capitalize">energy effciency upgrades</h2>
                                    <p>We implement eco-friendly solutions, such as insulation and efficient lighting.</p>
                                </div>
                            </div>
                        </div>

                        <div class=" col-12 col-sm-6 col-md-4 mb-4 mb-sm-0">
                            <div class="service-card">
                                <div class="card-body">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d31edc3454c59f60156b70_service-thumb-icon-08.svg" alt="service-icon" />
                                    <h2 class="text-capitalize">Roofing and Waterproofing</h2>
                                    <p>Protect your property with our roofing and waterproofing services.</p>
                                </div>
                            </div>
                        </div>

                        <div class=" col-12 col-sm-6 col-md-4">
                            <div class="service-card">
                                <div class="card-body">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d31ed2a22895cbb04cda66_service-thumb-icon-07.svg" alt="service-icon" />
                                    <h2 class="text-capitalize">Project Management</h2>
                                    <p>We ensure your project is delivered on time and within budget.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services