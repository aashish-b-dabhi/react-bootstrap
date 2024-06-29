import React from 'react'

const Work = () => {
    return (
        <>
            <section class="work">
                <div class="container">
                    <div class="work-data d-flex justify-content-between align-items-end">
                        <div class="heading">
                            <img src="https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d236b7b5199eed2ffc2558_title-image.svg" alt="title-image" class="d-inline pe-2" />
                            <p class="d-inline ">WORK</p>
                            <h1 class="pt-2">Latest Projects</h1>
                        </div>
                        <div class="work-btn">
                            <a href="javascript:void(0);" class="">view all Projects</a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="work-card">
                                <div class="work-img position-relative">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d4732385738a6ca8052947_project-tumb-07-p-800.jpg" alt="work-img-1" />
                                    <span class="position-absolute text-capitalize">thailand</span>
                                </div>
                                <h3 class="text-capitalize">uptown residences</h3>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="work-card">
                                <div class="work-img position-relative">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d473464c61d3874bf5155d_project-tumb-06-p-800.jpg" alt="work-img-2" />
                                    <span class="position-absolute text-capitalize">austin</span>
                                </div>
                                <h3 class="text-capitalize">seaside serenity</h3>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="work-card">
                                <div class="work-img position-relative">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d473c30b9e1f9fad9d5648_project-tumb-05-p-800.jpg" alt="work-img-3" />
                                    <span class="position-absolute text-capitalize">las vegas</span>
                                </div>
                                <h3 class="text-capitalize">the elements</h3>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="work-card">
                                <div class="work-img position-relative">
                                    <img src="https://assets-global.website-files.com/64d3100227355e5896d5f515/64d48271bcb8f41bb4df83bb_project-tumb-04-p-800.jpg" alt="work-img-4" />
                                    <span class="position-absolute text-capitalize">malasiya</span>
                                </div>
                                <h3 class="text-capitalize">harmony gardens</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Work