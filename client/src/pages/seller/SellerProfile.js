import React from 'react'

const SellerProfile = () => {
  return (
    <section class="form-container">

   <form action="" method="post">
      <h3>update your account!</h3>
      <input type="tel" name="name" maxlength="50" placeholder="First Name" class="box"/>
      <input type="email" name="email" maxlength="50" placeholder="Email" class="box"/>
      <input type="number" name="number" min="0" max="9999999999" maxlength="10" placeholder="Phone Number" class="box"/>
      <input type="password" name="old_pass" maxlength="20" placeholder="Enter Your Old Password" class="box"/>
      <input type="password" name="new_pass" maxlength="20" placeholder="Enter New Password" class="box"/>
      <input type="password" name="c_pass" maxlength="20" placeholder="Confirm Your New Password" class="box"/>
      <input type="submit" value="update now" name="submit" class="btn"/>
   </form>

</section>
  )
}

export default SellerProfile