import axios from 'axios';
import { setCookie } from 'nookies';

export default async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APIURL}/api/auth/local/register`,
      {
        username,
        email,
        password,
      }
    );

    setCookie({ res }, 'jwt', response.data.jwt, {
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    console.log(response.data.user);

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.response.data.error);
  }
};
