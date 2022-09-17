<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663444553/images/app/Group_yhxee9.png" alt="Logo" width="64" >
  </a>

  <h3 align="center">Food Paradise 2.0</h3>

  <p align="center">
    <a href="https://next-food-paradise.vercel.app/" target="_blank">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

<details>
  <summary>Show / Hide</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#app-preview">App Preview</a></li>
    <li><a href="#backend-api">Backend API</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Food Paradise** is an app where people can find recipes online or even create their own recipes so that other user can see it.

### Built With

This app was built with some technologies below:

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.javascript.com/)
- [Next JS](https://nextjs.org/)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Persist](https://www.npmjs.com/package/redux-persist)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Formik](https://formik.org)
- [Axios](https://axios-http.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

- [NodeJs](https://nodejs.org/en/download/)

### Installation

If you want to run this project locally, I recommend you to configure the <a href="#backend-api">backend</a> first before configuring this repo front-end.

- Clone the repo

```
git clone https://github.com/aldoBangun/next-food-paradise food-paradise
```

- Go To Folder Repo

```
cd food-paradise
```

- Install Module

```
npm install
```

- <a href="#setup-env-example">Setup .env</a>
- Type ` npm run dev` To Start Website
- Type ` npm run start` To Start Production

### Setup .env example

Create .env file in your root project folder.

```
NEXT_NODE_ENV=development
NEXT_PUBLIC_API_URL=backend_api_url_here
NEXT_PUBLIC_CRYPTO_SECRET_KEY=your_crypto_secret_key_here
```

## App Preview

<p align="center" display="flex">
   
<table>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446982/images/app/login-page_czzm7r.png" alt="login-page" />
      <p>Login Page</p>
    </td>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446983/images/app/register-page_mnj9sh.png" alt="register-page" />
      <p>Register Page</p>
    </td>
  <tr>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446983/images/app/home-page_xsbxqa.png" alt="home-page" />
      <p>Home Page</p>
    </td>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446984/images/app/add-recipe-page_nxix4h.png" alt="add-recipe-page" />
      <p>Add Recipe Page</p>
    </td>
  <tr>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446983/images/app/search-page_zhtvbh.png" alt="search-result-page" />
      <p>Search Result Page</p>
    </td>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446984/images/app/detail-recipe-page_tygfcg.png" alt="detail-recipe-page" />
      <p>Detail Recipe Page</p>
    </td>
  <tr>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446983/images/app/profile-page_bafhpm.png" alt="profile-page" />
      <p>Profile Page</p>
    </td>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446984/images/app/edit-profile-page_yq4r9r.png" alt="edit-profile-page" />
      <p>Edit Profile Page</p>
    </td>
  <tr>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446983/images/app/protected-page_gk6rkm.png" alt="protected-page" />
      <p>Protected Page (Need Auth)</p>
    </td>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446983/images/app/page-not-found_iwxy9m.png" alt="not-found-page" />
      <p>Not Found Page</p>
    </td>
  <tr>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663446982/images/app/page-under-maintenance_kimdwh.png" alt="under-maintenance-page" />
      <p>Under Maintenance Page</p>
    </td>
  <tr>
</table>
      
</p


## Backend API
[Food Paradise RESTful API](https://github.com/aldobangun/food-paradise)

## License

Distributed under the [MIT](/LICENSE) License.
