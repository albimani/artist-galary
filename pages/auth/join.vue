<template>
  <div class="container-fluid" style="height: 100vh">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <form>
          <div class="form-group">
            <input
              name="username"
              class="form-control form-control-lg"
              placeholder="Username"
              type="text"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              name="email"
              class="form-control form-control-lg"
              placeholder="Email"
              type="email"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              name="password"
              class="form-control form-control-lg"
              placeholder="Password"
              type="password"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-info btn-lg btn-block">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    <script src="/js/forms/join-form.js"></script>
  </div>
</template>


<script>
export default {};
</script>