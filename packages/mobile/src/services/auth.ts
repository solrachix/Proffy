interface Response {
    token: string;
    user: {
      name: string;
      email: string;
    };
}

export function signIn (): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'foashfajbfsjdfnsdkgsadkgmasdgkasergh4rt',
        user: {
          name: 'Carlos',
          email: 'a@gmail.com'
        }
      })
    }, 2000)
  })
}
