import axios from 'axios';
import { setCookie } from 'nookies';

export default async (req, res) => {
  const { password, identifier } = req.body;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APIURL}/api/auth/local`,
      {
        identifier,
        password,
      }
    );

    setCookie({ res }, 'jwt', response.data.jwt, {
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    res.status(200).send(response.data.user);
  } catch (e) {
    res.status(400).send(e.response.data.error);
  }
};
