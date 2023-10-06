<template>
  <div id="backend-view">
    <div class="logout"><a href="#">Logout</a></div>
    <h1 class="heading">Dashboard</h1>
    <span>Hi Al Amin</span>
    <div class="links">
      <ul>
        <li><a href="">Create Post</a></li>
        <li><a href="">Create Category</a></li>
        <li><a href="">Category List</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#backend-view {
  text-align: center;
  background-color: aliceblue;
  height: 100vh;
  padding-top: 15vh;
}

.logout {
  position: absolute;
  top: 30px;
  right: 40px;
}

.heading {
  margin-bottom: 5px;
}

.links {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background: white;
  max-width: 500px;
  padding: 15px;
  border-radius: 15px;
}

.links ul {
  list-style: none;
}

.links a {
  all: revert;
  font-size: 26px;
  display: inline-block;
  margin: 10px 0;
}
</style>