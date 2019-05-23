<template>
  <div class="about">
    <h1>This is an about page</h1>

    <br>

    <input type="test" v-validate="'required|email'" name="email" placeholder="Enter your email"/><br>
    <span>{{ errors.first('email') }}</span>
    
    <br>
    <br>

    <input type="text" name="fieldName" v-validate.continues="'required|alpha|min:5'" placeholder="Enter a field name"><br>
    <span>{{ errors.first('fieldName') }}</span>


    <br>
    <br>

    <input type="text" name="field" v-validate="'falsy'">
  </div>
</template>

