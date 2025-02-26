import { Button } from "antd";
import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <Button 
        style={{width:'100%'}}
        size="large"
        icon={
          <img
            width={24}
            height={24}
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
        }
      >
        Google
      </Button>
    </div>
  );
};

export default SocialLogin;
