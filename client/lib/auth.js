import { setCookie } from 'nookies';

class auth {
  registerUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/auth/local/register`;
  loginUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/auth/local`;

  headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  };

  bodyContent;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  login = async (req, res) => {
    try {
      this.bodyContent = JSON.stringify({
        identifier: this.email,
        password: this.password,
      });

      let response = await fetch(this.loginUrl, {
        method: 'POST',
        body: this.bodyContent,
        headers: this.headersList,
      });

      let data = await response.json();

      if (!response.ok) throw data.error;

      setCookie({ res }, 'jwt', data.jwt, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      // setCookie(null, 'fromClient', 'value', {
      //   maxAge: 30 * 24 * 60 * 60,
      //   path: '/',
      // });

      return { data, status: response.status };
    } catch (error) {
      return error;
    }
  };

  register = async () => {
    try {
      //for login functionality
      this.bodyContent = JSON.stringify({
        username: this.name,
        email: this.email,
        password: this.password,
      });

      let response = await fetch(this.registerUrl, {
        method: 'POST',
        body: this.bodyContent,
        headers: this.headersList,
      });

      let data = await response.json();
      if (!response.ok) throw data.error;

      return { data, status: response.status };
    } catch (error) {
      return error;
    }
  };
}

export default auth;
