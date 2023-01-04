import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const CurrentPath = `${window.location.pathname}`;
    const Path = CurrentPath.substring(1)
    let Link_checker = []
    const css = "ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center"

    if (Path == "admin") {
        Link_checker[1] = css + " link__active"
    }
    else {
        Link_checker[1] = css
    }
 

    if (Path == "settings") {
        Link_checker[7] = css + " link__active"
    }
    else {
        Link_checker[7] = css
    }

    return (
        <>
            <head>
                <script src="js/dashboard_js/main.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
                <link rel="stylesheet" href="assets/css/SideBarStyle.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossorigin="anonymous" />
                <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </head>
            <div>
                <header>
                    <div class="side__bar p-0 d-flex flex-column justify-content-start">
                        <div class="logo d-flex flex-column justify-content-center align-items-center">
                            <a class="logo-1 my-4" href="">
                                <img src="assets/images/Logo.png" alt="LOGO" />
                                <link rel="stylesheet" href="assets/css/main.css"></link>
                            </a>
                        </div>
                        <div>
                            <nav class="mt-0 mt-1">
                                <ul class="p-0">
                                    <li class={Link_checker[1]}>
                                        <Link title="Dashboard" to="/admin"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img class="img34" src="assets/images/home.png" alt="Dashboard" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                  
                               
                                    <li class={Link_checker[7]}>
                                        <Link title="Settings" to="/settings"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img class="img25" src="assets/images/settings.png" alt="Settings" />
                                            <span>Settings</span>
                                        </Link>
                                    </li>
                                    <li class="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <Link title="LogOut" to="#"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img class="img25" src="assets/images/logout.png" alt="logout" />
                                            <span>LogOut</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <nav class="nav__bar d-flex justify-content-between px-4 align-items-center">

                <div class="d-flex">
                    <div class="toogle pointer d-flex">
                        <img class="tog_button" src="assets/images/tog.png" alt="toogle" />
                    </div>
                    <input class="input_search " type="text" placeholder="Search" />
                    <a href="">
                        <img class="input_button" src="assets/images/search.png" alt="img" />
                    </a>
                </div>

                <div class="item-admin d-flex justify-content-between gap-3 align-items-center">
                    <Link class="d-flex adminName nav-link text-black pointer m-0" to="/settings">
                        <img class="mx-3" src="assets/images/user.png" width="35px" height="35px" alt="user" />
                        <span class="mx-1 my-1">User Name</span>
                    </Link>
                    <Link to="/settings">
                        <img className='settings_button' src="assets/images/settings.png" alt="param" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default SideBar