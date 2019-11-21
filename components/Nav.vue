<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">bookstore</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- <li className="nav-item">
            <Link href="/home"><a className="nav-link">Home</a></Link>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="search"
            aria-label="Search"
          />
          <button class="btn btn-warning my-2 my-sm-0" type="submit">search</button>
        </form>
        <ul class="navbar-nav ml-4">
          <li class="nav-item">
            <a class="btn btn-default ml-2" href="/auth/join">sign up</a>
            <a class="btn btn-default ml-2" href="/auth/login">sign in</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
