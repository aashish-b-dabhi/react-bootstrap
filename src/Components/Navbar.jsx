import React from 'react'

const Navbar = () => {
    return (
        <>
            <header class="navbar navbar-expand-lg">
                <div class="container">
                    <a href="index.html" class="navbar-brand">
                        <img src="https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d0e9c00ff99a23233a4e23_navbar-main-logo.svg" alt="logo" />
                    </a>
                    <button class="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse"
                        data-bs-target="#menu"></button>
                    <nav class="collapse navbar-collapse mt-4 mt-lg-0 justify-content-end" id="menu">
                        <ul class="navbar-nav pb-3 pb-lg-0 col-12 col-lg-8 text-capitalize">
                            <li class="nav-item py-2 py-lg-0"><a href="javascript:void(0);" class="nav-link pe-5">About us</a></li>
                            <li class="nav-item py-2 py-lg-0"><a href="javascript:void(0);" class="nav-link pe-5">Our projects</a></li>
                            <li class="nav-item py-2 py-lg-0"><a href="javascript:void(0);" class="nav-link pe-5">Services</a></li>
                            <li class="nav-item py-2 py-lg-0"><a href="javascript:void(0);" class="nav-link">News</a></li>
                        </ul>
                        <button class="cstm-btn text-capitalize">contact us</button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar